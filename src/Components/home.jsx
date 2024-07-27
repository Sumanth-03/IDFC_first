import React from "react"

import Nav from './nav';
import Poster from './Poster';
import Offer from './Offer';
import Footer from './Footer'

function Home (){
    return(
        <div className="overflow-scroll h-screen">
            <Nav></Nav>
            <Poster></Poster>
            <Offer></Offer>
            <Footer></Footer>
        </div>
    )
}
export default Home