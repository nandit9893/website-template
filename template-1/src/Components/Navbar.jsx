import React, { useState } from "react";
import logo_icon from "../assets/logo_icon.png";
import menu_open from "../assets/menu_open.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [oepnMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-between p-2 px-3 sm:p-5 sm:px-40 mx-auto bg-slate-900 shadow-2xl sticky top-0 z-50">
      <img src={logo_icon} alt="" className="sm:w-40 w-20 sm:h-16 h-12 rounded-xl shadow-amber-400" />
      <img src={menu_open} alt="" className="w-8 sm:hidden block" onClick={()=>setOpenMenu(true)} />
      <div className="hidden sm:flex justify-between gap-8 items-center">
        <AnchorLink classID="anchor-link" href="#home"><p onClick={()=>setMenu("home")} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "home" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>Home</p></AnchorLink>
        <AnchorLink classID="anchor-link" offset={100} href="#about"><p onClick={()=>setMenu("about")} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "about" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>About</p></AnchorLink>
        <AnchorLink classID="anchor-link" offset={100} href="#contact"><p onClick={()=>setMenu("contact")} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "contact" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>Contact</p></AnchorLink>
        <AnchorLink classID="anchor-link" offset={100} href="#services"><p onClick={()=>setMenu("services")} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "services" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>Services</p></AnchorLink>
        <AnchorLink classID="anchor-link" offset={100} href="#portfolio"><p onClick={()=>setMenu("portfolio")} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "portfolio" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>Portfolio</p></AnchorLink>
      </div>
      {
        oepnMenu ?
        (
          <div className="flex flex-col gap-2 items-center absolute right-0 top-16 bg-gradient-to-bl from-gray-800 p-5 rounded-2xl to-slate-900">
            <AnchorLink classID="anchor-link" href="#home"><p onClick={()=>{setMenu("home"), setOpenMenu(false)}} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "home" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>Home</p></AnchorLink>
            <AnchorLink classID="anchor-link" offset={100} href="#about"><p onClick={()=>{setMenu("about"), setOpenMenu(false)}} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "about" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>About</p></AnchorLink>
            <AnchorLink classID="anchor-link" offset={100} href="#contact"><p onClick={()=>(setMenu("contact"), setOpenMenu(false))} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "contact" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>Contact</p></AnchorLink>
            <AnchorLink classID="anchor-link" offset={100} href="#services"><p onClick={()=>{setMenu("services"), setOpenMenu(false)}} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "services" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>Services</p></AnchorLink>
            <AnchorLink classID="anchor-link" offset={100} href="#portfolio"><p onClick={()=>{setMenu("portfolio"), setOpenMenu(false)}} className={`text-xl text-gray-400 hover:text-gray-600 ${menu === "portfolio" ? "text-white" : null} transition-colors duration-300 cursor-pointer font-semibold`}>Portfolio</p></AnchorLink>
          </div>
        )
        :
        null 
      }
    </div>
  );
};

export default Navbar;
