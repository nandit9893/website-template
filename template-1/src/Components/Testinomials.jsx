import React, { useEffect, useState } from "react";
import "../index.css";
import testinomials from "../assets/helper/tstinomials";

const Testinomials = () => {
    const [firstVariable, setFirstVariable] = useState(0);
    const [secondVariable, setSecondVariable] = useState(1);
    const [animate, setAnimate] = useState(false);

    const getAllImagesURL = testinomials.filter(item => item.companyLogo).map(item => item.companyLogo);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                setFirstVariable((prev) => prev < 5 ? prev + 1 : 0);
                setSecondVariable((prev) => prev < 6 ? prev + 1 : 1);
                setAnimate(false);
            }, 1000); 
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center gap-5 justify-center bg-gradient-to-t from-gray-900 to-gray-800 p-5">
            <p className="sm:text-6xl text-4xl text-white text-center">Trusted by Businesses Worldwide</p>
            <p className="text-xl text-gray-400 text-center sm:w-[810px] w-96 sm:p-0 px-4">Our clients range from startups to Fortune 500 companies, spanning industries like technology, healthcare, finance, and e-commerce. They trust us for innovative IT solutions, including AI, cloud computing, cybersecurity, and full-stack development. With a focus on excellence, we help businesses scale, optimize operations, and stay ahead in the digital era.</p>
            <div className="flex flex-col gap-5 w-[1200px] my-10 mt-20">
                <div className="sm:flex hidden justify-between relative">
                    <div className="parent-container flex justify-between">
                        <div className="flex justify-between w-52 h-56 border-2 rounded-full border-white rotation-circle shadow-[20px_0_50px_rgba(255,255,255,0.5),inset_20px_0_30px_rgba(255,255,255,0.3)]">
                            <div className="flex flex-col gap-5 items-center justify-center">
                                <img src={getAllImagesURL[0]} alt="" className="w-20 absolute top-8 left-12" />
                                <img src={getAllImagesURL[1]} alt="" className="w-20 absolute top-[90px] left-12" />
                                <img src={getAllImagesURL[2]} alt="" className="w-20 absolute bottom-8 left-12" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {
                            testinomials.slice(firstVariable, secondVariable).map((item) => (
                                <div key={item._id} className={`h-[250px] bg-gradient-to-br from-slate-950 to-slate-600 p-5 rounded-2xl flex flex-col gap-2 shadow-[20px_0_50px_rgba(255,255,255,0.5)] ${ animate ? "slide-to-left" : "slide-from-right"}`}>
                                    <div className="flex justify-between gap-20 w-full items-center">
                                        <p className="text-white text-3xl text-center">{item.company}</p>
                                        <img src={item.companyLogo} alt="" className="w-20 h-16 rounded-3xl object-center" />
                                    </div>
                                    <p className="text-2xl text-white">{item.name} <span className="text-xl text-gray-400">({item.designation})</span></p>
                                    <p className="text-gray-300 text-lg w-96">{item.feedback}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="parent-container flex justify-between">
                        <div className="flex justify-between w-52 h-56 border-2 rounded-full border-white rotation-circle shadow-[-20px_0_50px_rgba(255,255,255,0.5)]">
                            <div className="flex flex-col gap-5 items-center justify-center">
                                <img src={getAllImagesURL[3]} alt="" className="w-20 absolute top-8 left-12" />
                                <img src={getAllImagesURL[4]} alt="" className="w-20 absolute top-[90px] left-12" />
                                <img src={getAllImagesURL[5]} alt="" className="w-20 absolute bottom-8 left-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden flex flex-col items-center overflow-hidden">
                {
                    testinomials.slice(firstVariable, secondVariable).map((item) => (
                        <div key={item._id} className={`h-[280px] w-[380px] bg-gradient-to-br from-slate-950 to-slate-600 p-5 rounded-2xl flex flex-col gap-2 shadow-[20px_0_50px_rgba(255,255,255,0.5)] ${ animate ? "slide-to-left" : "slide-from-right"}`}>
                            <div className="flex justify-between gap-20 w-full items-center">
                                <p className="text-white text-3xl text-center">{item.company}</p>
                                <img src={item.companyLogo} alt="" className="w-20 h-16 rounded-3xl object-center" />
                            </div>
                            <p className="text-2xl text-white">{item.name} <span className="text-xl text-gray-400">({item.designation})</span></p>
                            <p className="text-gray-300 text-lg w-96">{item.feedback}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Testinomials;