import arrow from "./assets/icon-arrow.svg";

function Search(props) {
    return (
        <div className="bg-[url('./assets/pattern-bg-mobile.png')] md:bg-[url('./assets/pattern-bg-desktop.png')] bg-cover w-screen h-72 text-center flex flex-col align-center justify-center gap-10">
            <h1 className="text-white text-4xl">IP Address Tracker</h1>
            <form
                className="flex flex-row align-center justify-center"
                onSubmit={props.submit}
            >
                <input
                    type="text"
                    placeholder="Search for any IP address or domain"
                    className="w-[25rem] px-5 h-10 rounded-s-md"
                    onChange={props.change}
                />
                <button
                    type="submit"
                    className=" h-10 w-10 rounded-e-md flex justify-center items-center hover:bg-[hsl(0, 0%, 17%)] bg-black"
                >
                    <img src={arrow} alt="arrow" className="w-2" />
                </button>
            </form>
        </div>
    );
}

export default Search;
