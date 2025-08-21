import React from "react";
import "../ComponentStyle/Header.css"

function header() {
    return (
        <div className="headerCon textalign-center">
            <div className="con px-5 mx-auto my-5 flex justify-between">
                <div className="left">
                    <h3 className="title font-bold">Sunsunarto <span className="text-red-500">| 中国</span></h3>
                </div>
                <div className="right">
                    <ul className="flex gap-5">
                        <li><a href="#">Home</a></li>
                        <li><a href="/component">Trip</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default header
