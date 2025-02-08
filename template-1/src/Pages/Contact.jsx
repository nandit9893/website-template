import React from "react";
import gmail_logo from "../assets/gmail.jpg";
import phone_logo from "../assets/phone.jpg";
import address_logo from "../assets/address.jpg";
import linkedin_logo from "../assets/linkedin.jpg";
import facebook_logo from "../assets/facebook.jpg";
import instagram_logo from "../assets/instagram.jpg";
import youtube_logo from "../assets/youtube.jpg";
import twitter_logo from "../assets/twitter.jpg";

const Contact = () => {
  return (
    <div id="contact" className="bg-gradient-to-t from-gray-800 to-gray-900 p-5 w-full">
      <p className="text-5xl text-center text-white font-semibold my-16">Contact Us</p>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-0 gap-5 w-full my-10 max-w-5xl items-center mx-auto mb-32">
        <form className="flex flex-col gap-4 p-5 sm:w-[450px] w-[350px] bg-slate-800 rounded-2xl shadow-2xl">
          <div className="flex flex-col gap-1 w-full">
            <p className="text-white text-2xl p-2">Name</p>
            <input type="text" placeholder="e.g., Nandit Sharma" className="placeholder:text-gray-600 text-white rounded-lg outline-none bg-slate-900 p-2 py-3 shadow-xl font-medium placeholder:text-lg"/>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <p className="text-white text-2xl p-2">Email</p>
            <input type="email" placeholder="e.g., nanditsharma063@gmail.com" className="placeholder:text-gray-600 text-white rounded-lg outline-none bg-slate-900 p-2 py-3 shadow-xl font-medium placeholder:text-lg"/>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <p className="text-white text-2xl p-2">Phone</p>
            <input type="tel" placeholder="e.g., +91 - 8171923047" className="placeholder:text-gray-600 text-white rounded-lg outline-none bg-slate-900 p-2 py-3 shadow-xl font-medium placeholder:text-lg"/>
          </div>
          <div className="flex justify-between w-full">
            <button className="text-2xl text-white font-semibold bg-gradient-to-b from-gray-900 to-gray-800 p-3 rounded-2xl shadow-2xl cursor-pointer">Submit</button>
          </div>
        </form>
        <div className="flex flex-col gap-4 p-5 sm:w-[450px] w-[350px] bg-slate-800 rounded-2xl shadow-2xl">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-5 items-center">
              <img src={phone_logo} alt="" className="sm:w-10 w-8 shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)] rounded-full"/>
              <p className="text-lg text-gray-400 font-semibold">nanditsharma063@gmail.com</p>
            </div>
            <div className="flex gap-5 items-center">
              <img src={gmail_logo} alt="" className="sm:w-10 w-8 shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)] rounded-full"/>
              <p className="text-lg text-gray-400 font-semibold">+91 - 8171923047, 9627359607</p>
            </div>
            <div className="flex gap-5 items-center">
              <img src={address_logo} alt="" className="sm:w-10 w-8 border[2px] border-white shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)] rounded-full"/>
              <p className="text-lg text-gray-400 font-semibold">Apna Niwas, Near Tea Point, Sector - 22, Noida, India, 201301</p>
            </div>
          </div>
          <div className="flex justify-evenly my-5">
            <a target="_blank" href="https://www.linkedin.com/in/nandit-sharma-9a0174203/"><img className="w-12 h-12 rounded-3xl object-cover shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)]" src={linkedin_logo} alt="" /></a>
            <a target="_blank" href="https://www.facebook.com/nandit.sharma.399"><img className="w-12 h-12 rounded-3xl object-cover shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)]" src={facebook_logo} alt="" /></a>
            <a target="_blank" href="https://www.instagram.com/nanditsharma063/?igsh=OHZjenBvbTZ4aTN4#"><img className="w-12 h-12 rounded-3xl object-cover shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)]" src={instagram_logo} alt="" /></a>
            <a target="_blank" href="https://www.youtube.com/"><img className="w-12 rounded-3xl object-cover shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)]" src={youtube_logo} alt="" /></a>
            <a target="_blank" href="https://x.com/classy9893"><img className="w-12 rounded-3xl object-cover shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)]" src={twitter_logo} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
