import { useState } from "react";
import ImageComponent from "./ImageComponent";

export default function FetchDemo() {
    const [ui_data, setUIData] = useState();
    const [ui_visibile, setVisibility] = useState(false)

    let fetchData = async (url) => {
        setVisibility(true)
        try {
            const response = await fetch(url)
            if (!response.ok) {
                alert('Error in loading data')
            } else {
                const result = await response.json()
                console.log(result)
                setUIData(result)
            }
        } catch (err) {
            alert(err.message);
        } finally {
            // Turn off the loader whether the fetch succeeded or failed
            setVisibility(false);
        }
    }


    let ui = ""
    // FIX: Wait for data to arrive before trying to read it
    if (ui_visibile) {
        ui = <p>

            Loading image...
            <img width={50} src="https://cdn.pixabay.com/animation/2025/11/11/02/19/02-19-36-889_512.gif" alt="" />
        </p>;
    } else if (ui_data) {
        ui = ui_data.map((catdata) => <ImageComponent url={catdata.url} />)
    }
    return (
        <>
            <button onClick={() => fetchData("https://api.thecatapi.com/v1/images/search")} className="btn btn-primary me-2">Load Single Image</button>
            <button onClick={() => fetchData("https://api.thecatapi.com/v1/images/search?limit=10")} className="btn btn-primary me-2">Load Ten Images</button>
            <div className="row my-3">
                {ui}
            </div>
        </>
    );
}