"use client";
import React, { useState } from "react";

import dynamic from "next/dynamic";

const Wheel = dynamic(() => import("./wheel"), { ssr: false });
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
    { option: "26", style: { backgroundColor: "#090913", textColor: "white" } },
    { option: "00", style: { backgroundColor: "green", textColor: "white" } },
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
];

export default function Home() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [resultHistory, setResultHistory] = useState([0]);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };
    const nowSpinning = () => {
        if (mustSpin == true) {
            return "抽選中";
        } else {
            return "抽選済";
        }
    };
    function color(a: string) {
        //ルーレットの色を返す
        if (a == "green") {
            return "緑";
        }
        if (a == "#b81122") {
            return "赤";
        } else {
            return "黒";
        }
    }
    function oddEven(a: string) {
        const num = Number(a);
        if (num % 2 == 0) {
            return "偶数";
        } else {
            return "奇数";
        }
    }
    function half(a: string) {
        const num = Number(a);
        if (num <= 18) {
            return "1-18";
        } else {
            return "19-36";
        }
    }
    function twelve(a: string) {
        const num = Number(a);
        if (num <= 12) {
            return "1-12";
        }
        if (num <= 24) {
            return "13-24";
        }
        if (num <= 36) {
            return "25-36";
        }
        return "null";
    }
    function twoToOne(a: string) {
        const num = Number(a);
        if (num % 3 == 1) {
            return "3列目";
        }
        if (num % 3 == 2) {
            return "2列目";
        }
        if (num % 3 == 0) {
            return "1列目";
        }
        return "null";
    }

    function spinEnd() {
        setResultHistory([...resultHistory, prizeNumber]);
    }
    function sliceHistory() {
        const rend = resultHistory.slice(-10);
        const renda = rend.reverse();
        return renda;
    }
    const showResult = () => {
        const a = data[prizeNumber];
        var b = a.style.backgroundColor;
        if (mustSpin == false) {
            if (b == "green")
                return (
                    <>
                        <div className="bg-green-500 rounded-lg result">
                            <div className="text-gray-800 font-bold info-text">
                                抽選結果
                            </div>
                            <div className="text-gray-800 font-bold info-text">
                                {a.option} {color(b)}
                            </div>
                        </div>
                    </>
                );
            if (b == "#b81122")
                return (
                    <>
                        <div className="bg-red-500 rounded-lg result">
                            <div className="text-gray-800 font-bold info-text">
                                抽選結果
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {a.option} {color(b)}
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {oddEven(a.option)}
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {half(a.option)}
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {twelve(a.option)}
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {twoToOne(a.option)}
                            </div>
                        </div>
                    </>
                );
            if (b == "#090913")
                return (
                    <>
                        <div className="bg-gray-500 rounded-lg result">
                            <div className="text-gray-800 font-bold info-text">
                                抽選結果
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {a.option} {color(b)}
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {oddEven(a.option)}
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {half(a.option)}
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {twelve(a.option)}
                            </div>
                            <div className="text-gray-800 font-bold info-text-2">
                                {twoToOne(a.option)}
                            </div>
                        </div>
                    </>
                );
        }
        return <div></div>;
    };

    return (
        <>
            <div className="game flex">
                <div className="left-panel">
                    <Wheel
                        mustSpin={mustSpin}
                        prizeNumber={prizeNumber}
                        setMS={() => {
                            setMustSpin(false);
                            spinEnd();
                        }}
                    />
                    <div className="spinbutton">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleSpinClick}
                        >
                            SPIN
                        </button>
                    </div>
                </div>
                <div className="right-panel">
                    <div className="inner_right-panel text-center">
                        <div className="spin-info">
                            <div className="text-gray-700 info-text font-bold">
                                現在: {nowSpinning()}
                            </div>
                            {showResult()}
                        </div>
                        {/* <div className="text-gray-700 info-text font-bold">
                            抽選履歴
                        </div>
                        <div className="flex mb-4 justify-start flex-wrap">
                            {sliceHistory().map((item) => {
                                var a = data[item];
                                var b = a.style.backgroundColor;
                                if (b == "green")
                                    return (
                                        <React.Fragment key={item}>
                                            <div className="w-1/6 bg-green-500 rounded-lg history">
                                                <div className="text-gray-800 font-bold info-text">
                                                    {a.option}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    );
                                if (b == "#b81122")
                                    return (
                                        <React.Fragment key={item}>
                                            <div className="w-1/6 bg-red-500 rounded-lg history">
                                                <div className="text-gray-800 font-bold info-text">
                                                    {a.option}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    );
                                if (b == "#090913")
                                    return (
                                        <React.Fragment key={item}>
                                            <div className="w-1/6 bg-gray-500 rounded-lg history">
                                                <div className="text-gray-800 font-bold info-text">
                                                    {a.option}
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    );
                            })}
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
