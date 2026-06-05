import { useEffect, useState } from "react";

export default function FetchDemo() {
    const [ui_data, setUIData] = useState();
    useEffect(() => {
        let fetchData = async () => {
            try {
                const response = await fetch("https://api.thecatapi.com/v1/images/search")
                if (!response.ok) {

                    alert('Error in loading data')
                } else {
                    const result = await response.json()
                    console.log(result)
                    setUIData(result)
                }
            } catch (err) {
                alert(err.message);
            }
        }
        fetchData();
    }, [])

    // FIX: Wait for data to arrive before trying to read it
    if (!ui_data) {
        return <p>Loading image...</p>;
    }

    return (
        <>
            <img src={ui_data[0].url} alt="" />
        </>
    );
}