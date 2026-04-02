export default function Card({title,description}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5>{title}</h5>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}