export default function ImageComponent({ url }) {
    return (
        <div className="col-4">
            <div className="card mb-5">
                <div className="card-body">
                    <img className="card-img" src={url} alt="" />

                </div>
            </div>
        </div>
    )
}