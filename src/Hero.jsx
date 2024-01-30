import { useState, useEffect } from "react";

import Map from "./Map.jsx";
import Info from "./Info.jsx";
import Search from "./Search.jsx";

function Hero() {
    const [data, setData] = useState("");
    const [info, setInfo] = useState({
        ip: "",
        location: "",
        timezone: "",
        isp: "",
        lat: 69,
        lng: 69,
    });

    function handleChange(e) {
        const ip = e.target.value;
        setData(ip);
    }

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);

    function fetchData(ip = "") {
        console.log(ip);
        fetch(
            `https://geo.ipify.org/api/v1?apiKey=at_MCcTTxo7f8St9Qr0thMfEZvdV7fWV&ipAddress=${ip}`
        )
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setInfo((prevInfo) => ({
                    ...prevInfo,
                    ip: data.ip,
                    location: `${data.location.region} - ${data.location.country} ${data.location.postalCode}`,
                    timezone: data.location.timezone || "",
                    isp: data.isp || "",
                    lat: data.location.lat,
                    lng: data.location.lng,
                }));
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
        fetchData(data);
    }

    return (
        <div>
            <Search submit={handleSubmit} change={handleChange} />
            <Info
                ip={info.ip}
                location={info.location}
                timezone={info.timezone}
                isp={info.isp}
            />
            <Map lat={info.lat} lng={info.lng} />
        </div>
    );
}

export default Hero;
