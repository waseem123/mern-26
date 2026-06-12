import { useCatData } from "../hooks/CatData";
import ImageComponent from "./ImageComponent";

export default function FetchComponent() {
    const { data: catdata, loading, error } = useCatData("https://api.thecatapi.com/v1/images/search")
    console.log(catdata)
    // if (!catdata || catdata.length === 0) return <div className="my-3">No cats found.</div>;
    if (loading) return <p>
        Loading Cats...
        <img width={50} src="https://cdn.pixabay.com/animation/2025/11/11/02/19/02-19-36-889_512.gif" alt="" />
    </p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <div className="row my-3">
                <ImageComponent url={catdata[0].url} />
            </div>
        </>
    );
}