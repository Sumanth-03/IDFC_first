import React from "react"
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, Typography,Button } from "@material-tailwind/react";
import Snapdeal from '../Assets/SnapDeal.svg'
import SonyLiv  from '../Assets/SonyLiv.svg'
import Myglamm from '../Assets/Myglamm.svg'
import Myntra from '../Assets/Myntra.svg'
import Swiggy from '../Assets/Swiggy.svg'
import Zomato from '../Assets/Zomato.svg'
import Amazon from '../Assets/Amazon.svg'
import Flipkart from '../Assets/Flipcart.svg'
import Cleartrip from '../Assets/ClearTrip.svg'
import Puma from '../Assets/Puma.svg'
import Lock from '../Assets/Lock.svg'


const offers = {
    Snapdeal:{name:'Snapdeal',offer:'Promax OFF'},
    'Sony liv':{name:'SonyLiv',offer:'20% OFF'},
    Myglamm:{name:'Myglamm',offer:'200 OFF'},
    Myntra:{name:'Myntra',offer:'49% OFF'},
    Swiggy:{name:'Swiggy',offer:'49% OFF'},
    Zomato:{name:'Zomato',offer:'400 OFF'},
    Amazon:{name:'Amazon',offer:'42% OFF'},
    Flipkart:{name:'Flipkart',offer:'20% OFF'},
    Cleartrip:{name:'Cleartrip',offer:'30% OFF'},
    Puma:{name:'Puma',offer:'32% OFF'},
}
const images = {
    Snapdeal: Snapdeal,
    SonyLiv: SonyLiv,
    Myglamm: Myglamm,
    Myntra: Myntra,
    Swiggy: Swiggy,
    Zomato: Zomato,
    Amazon: Amazon,
    Flipkart: Flipkart,
    Cleartrip: Cleartrip,
    Puma: Puma,
};




function Offer (){
    const navigate = useNavigate();
    function handleClick (data) {
        navigate('/product', {state:data})
    }

    const OfferCard = ({ offer }) => (
        <Card className="w-full m-4 text-center">
            <CardBody>
                <img src={images[offer.name]} alt={offer.name} className="w-[60%] h-30 object-cover m-auto"/>
                <Typography variant="h6" color="black" className="mt-4 font-semibold">
                    {offer.name}
                </Typography>
                <Typography variant="small" className="mt-2">
                    {offer.offer}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={()=>handleClick(offer)} color="blue" size="sm" className="flex flex-row bg-primary space-x-2 m-auto">
                    <img src={Lock} className="w-5"></img>
                    <sapn>Unlock Offer</sapn>
                    
                </Button>
            </CardFooter>
        </Card>
    );

    
    return(
        <main>
            <div className="mx-auto p-4">
        <Typography variant="h4" color="black" className=" mb-6">
            Unlock Activation Benefits
        </Typography>
        <div className="grid grid-cols-5 gap-4 overflow-y-auto h-[40rem] w-auto">
            {Object.keys(offers).map(key => (
                <OfferCard key={key} offer={offers[key]} />
            ))}
        </div>
    </div>

        </main>
    )
}
export default Offer