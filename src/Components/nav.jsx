import React from "react"
import { NavLink } from "react-router-dom";

import {Button, Avatar} from "@material-tailwind/react";

import logo from '../Assets/Logo.svg'
import avatar from "../Assets/Avtar.svg";
import droupDown from '../Assets/DroupDown.svg'

function Nav (){
    return(
        <nav className="fixed top-0 p-3 bg-primary flex justify-around w-screen z-30">
        <img src={logo} className="mr-auto h-10" ></img>


        <div className="flex space-x-4 ml-auto px-4">
        <NavLink className='text-white p-2' to="/">Home</NavLink>
        <span className="p-2 px-4 bg-buttonBG rounded-full"><NavLink className='text-white' to="/benefits">Activation Benefits</NavLink></span>
         </div>

        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={avatar}
          />
          <div className="flex text-white space-x-2">
            <span>John Doe</span>
            <img src={droupDown}></img>
          </div>
          </Button>
        </nav>
    )
}
export default Nav