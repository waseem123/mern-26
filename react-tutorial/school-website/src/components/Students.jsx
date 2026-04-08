import allstudents from './students-data.json'


export default function Students() {
    let studentDataRows = allstudents.map(studentData => <tr>
        <td>{studentData.rollNo}</td>
        <td>{studentData.name}</td>
        <td>{studentData.marks}</td>
        <td>{studentData.city}</td>
    </tr>)
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12">
                    <h1 className='display-1'>Students Information</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Roll No</th>
                                <th>Name</th>
                                <th>Marks</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentDataRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}