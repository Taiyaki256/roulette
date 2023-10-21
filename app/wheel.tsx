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
                innerRadius={55}
                innerBorderColor={"#000000"}
                innerBorderWidth={7}
                outerBorderWidth={5}
                outerBorderColor={"#000000"}
                fontSize={13}
                textDistance={75}
                perpendicularText={true}
                //brown
                radiusLineColor={"#8B4513"}
                radiusLineWidth={3}
                onStopSpinning={setMS}
            />
        </div>
    );
};

export default clientOnly;
