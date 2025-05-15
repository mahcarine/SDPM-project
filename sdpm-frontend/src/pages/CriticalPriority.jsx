import React, { useState } from "react";

const CriticalPriority = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
           <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-xl text-center">
            <p className="text-2xl mb-4">🎉 Amazing! 'Bone Graft Locator' is a Critical Priority!</p>
            <p className="text-sm">You've nailed it! This feature is a game-changer and needs immediate action.</p>
           </div>
            <div className="my-8">
            <div className=" border-4 border-blue-300 rounded-full p-8 mb-2 text-center">
                <p className="text-3xl text-blue-700">92</p>
                <p className="text-xs text-gray-500">out of 100</p>
            </div>
            <div className="rounded-full bg-red-500 p-1 text-white text-center shadow-lg">
                Critical Priority
            </div>
            {/* <p className="text-gray-700">Time to fast-track this and take it the next level!</p> */}
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                    <p className="text-xl font-bold">Business Value</p>
                    <p className="text-sm text-gray-500">High impact on business goals.</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                    <p className="text-xl font-bold">Engineering Effort</p>
                    <p className="text-sm text-gray-500">Requires significant resources.</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 text-center">
                    <p className="text-xl font-bold">Financial Impact</p>
                    <p className="text-sm text-gray-500">Potential for high revenue increase.</p>
                </div>
            </div>
            <div className=" bg-white shadow-lg rounded-lg p-4 text-center mb-4">
                <p>Financial Outlook</p>
                <p>Financial Outlook</p>
                <p>Financial Outlook</p>
            </div>
            <div className=" bg-white shadow-lg rounded-lg p-4 text-center mb-4">
                <p>Financial Outlook</p>
                <p>Financial Outlook</p>
                <p>Financial Outlook</p>
            </div>
           <div className="gap-4 flex justify-center">
           <button className="bg-white text-black rounded-lg px-4 py-2 shadow-lg hover:bg-gray-200 transition duration-300">
                Go Back
            </button>
            <button className="bg-white text-black rounded-lg px-4 py-2 shadow-lg hover:bg-gray-200 transition duration-300">
                Go Back
            </button>
            <button className="bg-white text-black rounded-lg px-4 py-2 shadow-lg hover:bg-gray-200 transition duration-300">
                Go Back
            </button>
           </div>
        </div>
    );
};

export default CriticalPriority;