"use client";
import React, { useState } from "react";

import { Wheel } from "react-custom-roulette";

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
            {() => {
                if (typeof window !== "undefined") {
                    <div className="wheel">
                        <Wheel
                            mustStartSpinning={mustSpin}
                            prizeNumber={prizeNumber}
                            data={data}
                            innerRadius={17}
                            innerBorderColor={"#000000"}
                            innerBorderWidth={5}
                            outerBorderWidth={7}
                            outerBorderColor={"#000000"}
                            //brown
                            radiusLineColor={"#8B4513"}
                            onStopSpinning={() => {
                                setMustSpin(false);
                            }}
                        />
                    </div>;
                }
            }}
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
