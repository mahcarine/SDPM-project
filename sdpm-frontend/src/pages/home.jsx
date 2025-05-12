import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChartLine,
  faCode,
  faCommentDots,
  faDollar,
  faFlagCheckered,
  faShieldAlt,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="circle-bg w-[170px] h-[170px] bottom-[65%] left-[5%] opacity-70"></div>
        <div className="circle-bg w-[150px] h-[150px] bottom-[35%] left-[45%] opacity-80"></div>
        <div className="circle-bg w-[250px] h-[250px] bottom-[10%] left-[75%] opacity-60"></div>

        <div className=" ">
          <div>
            {/* header */}
            <header className="py-6 justify-center flex items-center">
              <h1 className="text-2xl text-white">
                
                🎉Welcome to SDPM - Prioritize with Purpose!
              </h1>
            </header>

            {/* Hero section */}
            <section className="py-8 flex justify-center items-center">
              <div>
                <h1 className="text-white text-center">
                  Fast. Fun. FREE. Let's get your priorities straight!
                </h1>
                <div>
                  <h1 className="font-medium text-white text-5xl mt-22 text-center">
                    🚀Spaunder Deliverable <br /> Prioritization Metrix
                  </h1>
                </div>

                <p className="text-white content-center my-6 text-center">
                  Let's prioritize the fun way! Rank your deliverables and{" "}
                  <br />
                  find your business game changer!
                </p>
                <div className="flex justify-center">
                  <button onClick={() => navigate("/step_layout")} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-3xl px-5 py-2 shadow-xl">
                    🎯 Let's Start the Assessment!{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-white"
                    />
                  </button>
                </div>
                <p className="pt-10 text-center">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="text-white"
                  />{" "}
                  What Will You Answer?
                </p>
              </div>
            </section>

            <div className="flex justify-center">
              <div className="grid grid-cols-6 p-4">
                <div className="grid grid-rows-2 justify-center flex items-center">
                  <div className="w-4 h-4 bg-blue-700 rounded-full Shadow-xl outline outline-white flex justify-center items-center p-3">
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-white text-xs"
                    ></FontAwesomeIcon>
                  </div>
                  <p className="text-white text-sm">Business Value</p>
                  <div className="bg-gradient-to-r from-white to-transparent h-6 w-50 rounded-sm text-[10px] px-1 pt-1">How much impact will it have?</div>
                </div>

                <div className="grid grid-rows-2">
                  <div className="w-4 h-4 bg-purple-700 rounded-full Shadow-xl outline outline-white flex justify-center items-center p-3">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="text-white text-xs"
                    ></FontAwesomeIcon>
                  </div>
                  <p className="text-white text-sm">Engineering Effort</p>
                  <div className="bg-gradient-to-r from-white to-transparent h-6 w-50 rounded-sm text-[10px] px-1 pt-1">How much time and resources will it need?</div>
                </div>
                <div className="grid grid-rows-2">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full Shadow-xl outline outline-white flex justify-center items-center p-3">
                    <FontAwesomeIcon
                      icon={faDollar}
                      className="text-white text-xs"
                    ></FontAwesomeIcon>
                  </div>
                  <p className="text-white text-sm">Financial Impact</p>
                  <div className="bg-gradient-to-r from-white to-transparent h-6 w-50 rounded-sm text-[10px] px-1 pt-1">Will it boost revenue or save cost?</div>
                </div>
                <div className="grid grid-rows-2">
                  <div className="w-4 h-4 bg-green-600 rounded-full Shadow-xl outline outline-white flex justify-center items-center p-3">
                    <FontAwesomeIcon
                      icon={faShieldAlt}
                      className="text-white text-xs"
                    ></FontAwesomeIcon>
                  </div>
                  <p className="text-white text-sm">Security and Compliance</p>
                  <div className="bg-gradient-to-r from-white to-transparent h-6 w-50 rounded-sm text-[10px] px-1 pt-1">How critical is it for compliance?</div>
                </div>

                <div className="grid grid-rows-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full Shadow-xl outline outline-white flex justify-center items-center p-3">
                    <FontAwesomeIcon
                      icon={faTrophy}
                      className="text-white text-xs"
                    ></FontAwesomeIcon>
                  </div>
                  <p className="text-white text-sm">Competitive Advantage</p>
                  <div className="bg-gradient-to-r from-white to-transparent h-6 w-50 rounded-sm text-[10px] px-1 pt-1">Will it give us an edge in the market?</div>
                </div>
                <div className="grid grid-rows-2">
                  <div className="w-4 h-4 bg-pink-500 rounded-full Shadow-xl outline outline-white flex justify-center items-center p-3">
                    <FontAwesomeIcon
                      icon={faFlagCheckered}
                      className="text-white text-xs"
                    ></FontAwesomeIcon>
                  </div>
                  <p className="text-white text-sm">Summary</p>
                  <div className="bg-gradient-to-r from-white to-transparent h-6 w-50 rounded-sm text-[10px] px-1 pt-1">Assessment summary</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
