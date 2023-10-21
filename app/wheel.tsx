"use client";

import { Props } from "next/script";
import React from "react";
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
type HeadingProps = {
    mustSpin: boolean;
    prizeNumber: number;
    setMS: () => any;
};
const clientOnly = ({ mustSpin, prizeNumber, setMS }: HeadingProps) => {
    return (
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
                onStopSpinning={setMS}
            />
        </div>
    );
};

export default clientOnly;
