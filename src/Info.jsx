function Info(props) {
    return (
        <div className="absolute top-[25%] left-[24%] bg-white px-10 py-10 rounded-lg z-10">
            <div className="grid grid-cols-4 divide-x w-[60rem] bg-[hsl(0, 0%, 59%)] gap-2 ">
                <div className="px-10 ">
                    <p className="text-sm">IP ADDRESS</p>
                    <p className="font-bold text-2xl">{props.ip}</p>
                </div>
                <div className="px-10">
                    <p className="text-sm">LOCATION</p>
                    <p className="font-bold text-2xl">{props.location}</p>
                </div>
                <div className="px-10">
                    <p className="text-sm">TIMEZONE</p>
                    <p className="font-bold text-2xl">{props.timezone}</p>
                </div>

                <div className="px-10">
                    <p className="text-sm">ISP</p>
                    <p className="font-bold text-2xl">{props.isp}</p>
                </div>
            </div>
        </div>
    );
}

export default Info;
