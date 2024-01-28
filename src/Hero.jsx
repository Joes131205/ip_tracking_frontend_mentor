import { useState, useEffect } from "react";
import arrow from "./assets/icon-arrow.svg";

function Hero() {
    const [data, setData] = useState("");
    function handleChange(e) {
        const ip = e.target;
        setData(ip.value);
        console.log(data);
    }
    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className="bg-[url('./assets/pattern-bg-mobile.png')] md:bg-[url('./assets/pattern-bg-desktop.png')] bg-cover w-screen h-72 text-center flex flex-col align-center justify-center gap-10">
            <h1 className="text-white text-4xl">IP Address Tracker</h1>
            <form
                className="flex flex-row align-center justify-center"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Search for any IP address or domain"
                    className="w-[25rem] px-5 h-10 rounded-s-md"
                    name="ip"
                    onChange={handleChange}
                    value={data}
                />
                <button
                    type="submit"
                    className="bg-black h-10 w-10 rounded-e-md flex justify-center items-center "
                >
                    <img src={arrow} className="w-2" />
                </button>
            </form>
        </div>
    );
}

export default Hero;
