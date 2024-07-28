import React, { useEffect, useState } from "react"

import Nav from './nav';
import Poster from './Poster';
import Offer from './Offer';
import Footer from './Footer'
import { Spinner } from "@material-tailwind/react";
import "./style.css"
import { makeApiCallGet, makeApiCall, makeApiCallWithAuth, makeApiGetCallWithAuth } from '../Services/Api' 
import { useNavigate } from "react-router-dom";

function Home (){

    const [isloading, setIsloading] = useState(false);
    const [modal, setModal] = useState('')
    const [errmessage, setErrmessage] = useState('')

    const navigate = useNavigate()

    const queryParams = new URLSearchParams(window.location.search);
    const hdnRefNumber = queryParams.get('hdnRefNumber');
    const transactionId = queryParams.get('transactionId');
    const amount = queryParams.get('amount');

    const token = queryParams.get('token');
    const sessionId = queryParams.get('sessionid');
    const virtualId = queryParams.get('virtualid');
    const bankName = queryParams.get('bankName');

    //   if (token) {
    //     sessionStorage.setItem('token', token)
    //   }

      if(hdnRefNumber && !modal && !isloading){
        setIsloading(true);
        let data ={
          order_id: hdnRefNumber,
          razorpay_payment_id: transactionId,
          razorpay_amount: amount,
          offer_id: "179",
        }
        makeApiCallWithAuth('checkPaymentStatus', data)
        .then((response) => {
          console.log("getpayres",response.data)
          if(response?.data?.status === 200){
            sessionStorage.setItem('coupon',JSON.stringify(response.data.data))
            navigate('/redeem')
          //navigate('/redeem')
          //setModal('success')
          }
          else{
            if(!modal){
            setModal('failed')
            setErrmessage(response.data?.message)
            setIsloading(false);
            }
          }
    
        })
        .catch((e) => {console.log("err", e); setIsloading(false);})
    
        
       }

    useEffect(() => {
        if(!hdnRefNumber){
        makeApiCallGet()
        .then((response) => {
          console.log("tok",response.data)
          if (response.data?.result) {
            sessionStorage.setItem('token', response.data?.result)
          }

        })
        .catch((e) => {console.log("err", e); })
       }

    },[]);

    const handlePay = () => {
       console.log("yre")
       setIsloading(true);
    makeApiCallWithAuth('validationCheck',{mop: 1, offer_id: "179"})
    .then((response) => {
      console.log(response?.data?.data?.url)
      if(response?.data?.data?.url){
        let paymenturl = response.data.data.url;
        setIsloading(false);
        window.location.href = paymenturl;
        }
      else if(response?.data?.data?.errorstring === "Failed"){
        setIsloading(false);
        if(!modal){
          setModal('failed')
          setErrmessage('Something Went Wrong')
          //setIsloading(false);
          }
      
      }
      else if(response?.data?.status === 200){
        sessionStorage.setItem('coupon',JSON.stringify(response.data.data))
        setIsloading(false);
        navigate('/redeem')
      }
      else{
        setIsloading(false);
        if(!modal){
          setModal('failed')
          setErrmessage(response.data?.message)
          //setIsloading(false);
          }
      }
       
    })
    .catch((e) => {console.log("err", e);setIsloading(false);})
   
    };


    return(
        <div className="overflow-scroll h-screen">
            {isloading && <div className="spinner-overlay z-30">
          <div className="spinner-container">
          <Spinner  size="lg" classNames={{circle1: "border-b-[#27374D]"  }}/>
          </div>
         </div>}
            <Nav></Nav>
            <Poster handlePay={handlePay}></Poster>
            <Offer></Offer>
            <Footer></Footer>
        </div>
    )
}
export default Home