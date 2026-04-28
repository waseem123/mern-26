export default function Task({ taskTitle }) {
    return (
        <div className="col-3 my-3">
            <div className="card">
                <div className="card-body">
                    <h5>{taskTitle}</h5>
                </div>
            </div>
        </div>
    )
}