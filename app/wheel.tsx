"use client";

import { Props } from "next/script";
import React from "react";
import { Wheel } from "react-custom-roulette";

const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "white" } },
    { option: "32", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "15", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "19", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "4", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "21", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "2", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "25", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "17", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "34", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "6", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "27", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "13", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "36", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "11", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "30", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "8", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "23", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "10", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "5", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "24", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "16", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "33", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "1", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "20", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "14", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "31", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "9", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "22", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "18", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "29", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "7", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "28", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "12", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "35", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "3", style: { backgroundColor: "#b81122", textColor: "white" } },
    { option: "26", style: { backgroundColor: "#090913", textColor: "white" } },
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
                innerRadius={50}
                innerBorderColor={"#000000"}
                innerBorderWidth={14}
                outerBorderWidth={5}
                outerBorderColor={"#000000"}
                fontSize={13}
                textDistance={78}
                perpendicularText={true}
                //brown
                radiusLineColor={"#f6a96d"}
                radiusLineWidth={2}
                onStopSpinning={setMS}
            />
        </div>
    );
};

export default clientOnly;
