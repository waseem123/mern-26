export default function CourseCard({ courseObj }) {
    let status = "";
    let classname = ""
    if (courseObj.isActive) {
        status = <small className="text-success float-end">Course Is Active</small>
        classname="text-bg-light"
    } else {
        status = <small className="text-danger float-end">Course Is In-Active</small>
        classname="text-bg-dark"
    }
    return (
        <div className={`card shadow-lg ${classname}`}>
            <img src={courseObj.imgsource} className="card-img-top" alt="" />
            <div className="card-body">
                <h5>{courseObj.title}</h5>
                <p>
                    {courseObj.description}
                </p>
                <small className="text-secondary">${courseObj.price}</small>
                {status}

            </div>
        </div>
    );
}