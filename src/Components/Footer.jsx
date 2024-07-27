import React from "react";
import { NavLink } from "react-router-dom";

function Footer (){
    return(
        <footer className="bg-black text-white">
            <nav className="flex flex-row space-x-3 bg-transparent justify-center p-4">
            <NavLink>About Us</NavLink>
            <NavLink>Contact Us</NavLink>
            <NavLink>Register Complaint</NavLink>
            <NavLink>Turms & Conditions</NavLink>
            <NavLink>Privacy Policy</NavLink>
            <NavLink>FAQ</NavLink>
            </nav>
            <p className="mx-2 md:mx-40 mt-2 md:mt-10 p-4">
                <h3>Disclaimer</h3>
                MRewards is a platform hosted Cheggout Services exclusively for MResult Services Private Limited only for display 
                of offers extended by Networks and Merchants. MRewards is not selling/ rendering any of these Products/ Services 
                offered by Merchants. MRewards is neither guaranteeing nor making any representation with respect to the offers 
                made by Network or the Merchants. MRewards is not responsible for sale/ quality/ features of the Products/ Services
                under the offer. The Products/ Services offered by Merchants may also be available at other stores/online platforms.
                The Customer's discretion is advised in this regard and proceeding hereunder indicates consent and approval to 
                these terms.
            </p>
            <div className="w-full bg-footer p-4 text-center">Copyright  &copy; 2023 - Powered by Cheggout</div>
        </footer>
    )
}
export default Footer