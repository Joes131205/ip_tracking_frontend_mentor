import { useState, useEffect } from "react";
import arrow from "./assets/icon-arrow.svg";
import Map from "./Map.jsx";
import Info from "./Info.jsx";

function Hero() {
    const [data, setData] = useState("");
    const [info, setInfo] = useState({
        ip: "",
        location: "",
        timezone: "",
        isp: "",
        postalCode: "",
        lat: 0,
        lng: 0,
    });
    function handleChange(e) {
        const ip = e.target.value;
        setData(ip, () => {
            console.log(data);
        });
    }
    useEffect(() => {
        if (data) console.log(data);
    }, [data]);

    function fetchData() {
        fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=at_MCcTTxo7f8St9Qr0thMfEZvdV7fWV&ipAddress=${data}`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setInfo({
                    ip: data.ip,
                    location: `${data.location.region}, ${data.location.country} ${data.location.postalCode}`,
                    timezone: data.location.timezone,
                    isp: data.isp,
                    postalCode: data.location.postalCode,
                    lat: data.location.lat,
                    lng: data.location.lng,
                });
            })
            .catch((error) => {
                console.error(
                    "There was a problem with the fetch operation:",
                    error
                );
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetchData();
    }

    return (
        <>
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
                        value={data}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-black h-10 w-10 rounded-e-md flex justify-center items-center "
                    >
                        <img src={arrow} alt="arrow" className="w-2" />
                    </button>
                </form>
            </div>
            <div>
                <Info
                    ip={info.ip}
                    location={info.location}
                    timezone={info.timezone}
                    isp={info.isp}
                    postalCode={info.postalCode}
                />
            </div>
            <div>
                <Map lat={info.lat} lng={info.lng} />
            </div>
        </>
    );
}

export default Hero;
