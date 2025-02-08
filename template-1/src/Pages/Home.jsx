import React, { useState } from "react";
import ai_chat from "../assets/aichat.jpg";
import ai_gif from "../assets/ai.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";
import close_menu from "../assets/close.jpg";
import right_arrow from "../assets/right_arrow_icon.png";

const Home = () => {
  const [activeChat, setActiveChat] = useState(false);


  return (
    <div id="home" className="flex flex-col items-center justify-center sm:p-0 p-5 mx-auto sm:h-[600px] h-[700px] bg-gradient-to-b from-gray-950 to-gray-800 gap-8 relative">
      <p className="text-white sm:text-7xl text-3xl font-semibold">Welcome to <span className="text-orange-600" style={{ fontFamily: "Merriweather, serif", fontWeight: 600, fontStyle: "medium" }}>I'm Future</span></p>
      <p className="sm:text-2xl text-lg text-white text-center sm:w-[1000px] w-96 sm:p-0 px-4">At <span className="text-orange-600" style={{ fontFamily: "Merriweather, serif", fontWeight: 600, fontStyle: "medium" }}>I'm Future</span>, we specialize in cutting-edge IT solutions,
        including web and app development, cloud computing, AI-driven solutions,
        and cybersecurity. Our expert team is dedicated to transforming
        businesses with scalable, secure, and innovative digital solutions.
      </p>
      <p className="sm:text-4xl text-2xl text-white">Our Aim : <span className="sm:text-4xl text-2xl text-orange-600">Empowering Businesses with Cutting-Edge Technology</span></p>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-16">
        <p className="sm:text-2xl text-lg text-black p-2 sm:px-10 px-5 rounded-4xl bg-orange-600 font-semibold cursor-pointer hover:bg-orange-500 transition-colors duration-300">Get a Free Consultation</p>
        <AnchorLink className="anchor-link" href="#contact"><p className="sm:text-2xl text-lg text-black p-2 sm:px-10 px-5 rounded-4xl bg-orange-600 font-semibold cursor-pointer hover:bg-orange-500 transition-colors duration-300">Contact Us</p></AnchorLink>
      </div>
      <div className="fixed right-1 bottom-5 z-50">
      {
        activeChat ?
        (
          <div className="fles flex-col gap-5 bg-gradient-to-b from-teal-900 to-slate-600 shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)] p-3 rounded-xl absolute -bottom-4 right-2 w-[350px] h-[450px]">
            <img src={ai_gif} alt="" className="absolute -top-32 left-24 cursor-pointer w-40 rounded-3xl shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)]" />
            <div className="flex flex-col gap-2">
              <img onClick={()=>setActiveChat(false)} src={close_menu} alt="" className="fixed right-5 w-10 rounded-4xl cursor-pointer" />
              <div className="mt-10 overflow-y-auto">
                <div className="flex gap-3 items-center w-1/2 bg-slate-950 p-2 rounded-3xl">
                  <img src={ai_chat} className="w-10 h-8 rounded-4xl" alt="" />
                  <p className="text-[15px] text-white w-36">Hi, How can I help you?</p>
                </div>
                <div className="flex gap-3 items-center w-1/2 absolute left-40 top-32 bg-slate-950 p-2 rounded-3xl">
                  <p className="text-[15px] text-white w-28">Hi, How can I help you?</p>
                  <img src={ai_chat} className="w-10 h-8 rounded-4xl" alt="" />
                </div>
              </div>
              <div className="flex justify-between gap-2 absolute bottom-4 right-4">
                <input type="text" name="question" placeholder="Enter your message" className="text-lg border-2 border-white rounded-2xl p-2 text-white placeholder:text-white outline-none w-64"/>
                <img src={right_arrow} className="w-12 rounded-3xl" alt="" />
              </div>
            </div>
          </div>
        )
        :
        (
          <>
            <img src={ai_chat}  alt="" className="relative sm:w-20 sm:h-20 w-12 h-12 rounded-3xl transition-transform hover:scale-105 duration-300 cursor-pointer" onClick={()=>setActiveChat(true)} />
            <p className="absolute -sm:left-24 -top-14 -left-10 -sm:top-8 text-white font-semibold">Hi I'm your AI assitant</p>
          </>
        )
      }
      </div>
    </div>
  );
};

export default Home;
