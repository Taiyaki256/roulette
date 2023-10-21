"use client";
import React, { useState } from "react";

import dynamic from "next/dynamic";

const Wheel = dynamic(() => import("./wheel"), { ssr: false });
const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "white" } },
    { option: "1", style: { backgroundColor: "red", textColor: "white" } },
    { option: "2", style: { backgroundColor: "black", textColor: "white" } },
    { option: "3", style: { backgroundColor: "red", textColor: "white" } },
    { option: "4", style: { backgroundColor: "black", textColor: "white" } },
    { option: "5", style: { backgroundColor: "red", textColor: "white" } },
    { option: "6", style: { backgroundColor: "black", textColor: "white" } },
    { option: "7", style: { backgroundColor: "red", textColor: "white" } },
    { option: "8", style: { backgroundColor: "black", textColor: "white" } },
    { option: "9", style: { backgroundColor: "red", textColor: "white" } },
    { option: "10", style: { backgroundColor: "black", textColor: "white" } },
    { option: "11", style: { backgroundColor: "red", textColor: "white" } },
    { option: "12", style: { backgroundColor: "black", textColor: "white" } },
    { option: "13", style: { backgroundColor: "red", textColor: "white" } },
    { option: "14", style: { backgroundColor: "black", textColor: "white" } },
    { option: "15", style: { backgroundColor: "red", textColor: "white" } },
    { option: "16", style: { backgroundColor: "black", textColor: "white" } },
    { option: "17", style: { backgroundColor: "red", textColor: "white" } },
    { option: "18", style: { backgroundColor: "black", textColor: "white" } },
    { option: "19", style: { backgroundColor: "red", textColor: "white" } },
    { option: "20", style: { backgroundColor: "black", textColor: "white" } },
    { option: "21", style: { backgroundColor: "red", textColor: "white" } },
    { option: "22", style: { backgroundColor: "black", textColor: "white" } },
    { option: "23", style: { backgroundColor: "red", textColor: "white" } },
    { option: "24", style: { backgroundColor: "black", textColor: "white" } },
    { option: "25", style: { backgroundColor: "red", textColor: "white" } },
    { option: "26", style: { backgroundColor: "black", textColor: "white" } },
    { option: "27", style: { backgroundColor: "red", textColor: "white" } },
    { option: "28", style: { backgroundColor: "black", textColor: "white" } },
    { option: "29", style: { backgroundColor: "red", textColor: "white" } },
    { option: "30", style: { backgroundColor: "black", textColor: "white" } },
    { option: "31", style: { backgroundColor: "red", textColor: "white" } },
    { option: "32", style: { backgroundColor: "black", textColor: "white" } },
    { option: "33", style: { backgroundColor: "red", textColor: "white" } },
    { option: "34", style: { backgroundColor: "black", textColor: "white" } },
    { option: "35", style: { backgroundColor: "red", textColor: "white" } },
    { option: "36", style: { backgroundColor: "black", textColor: "white" } },
];

export default function Home() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };

    return (
        <>
            <Wheel
                mustSpin={mustSpin}
                prizeNumber={prizeNumber}
                setMS={() => setMustSpin(false)}
            />
            <div className="spinbutton">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSpinClick}
                >
                    SPIN
                </button>
            </div>
        </>
    );
}
