import React, { useState } from "react";

const CriticalPriority = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
           <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg mb-4 flex items-center">
            <p className="text-2xl mb-4">🎉 Amazing! 'Bone Graft Locator' is a Critical Priority!</p>
            <p className="text-sm">You've nailed it! This feature is a game-changer and needs immediate action.</p>
           </div>
            <p className="text-white mb-4">This is the Critical Priority page.</p>
            <button className="bg-white text-black rounded-lg px-4 py-2 shadow-lg hover:bg-gray-200 transition duration-300">
                Go Back
            </button>
        </div>
    );
};

export default CriticalPriority;