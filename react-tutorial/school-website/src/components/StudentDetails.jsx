import allstudents from './students-data.json';
import { useParams } from 'react-router-dom';
import './styles.css';

export default function StudentDetails() {
    let { rollno } = useParams();
    let backgroundClass = (rollno % 2 == 0) ? 'text-bg-success' : 'text-bg-danger'
    let s = allstudents.filter(obj => obj.rollNo == rollno);
    if (s.length == 0) {
        return (
            <h1 className='display-1 text-danger text-center'>No Data Found for Roll No - {rollno}</h1>
        )
    } else {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className={`card shadow-lg ${backgroundClass}`}>
                            <div className="card-body">
                                <div className="row">
                                    {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg" className="col-4 card-img-left"></img> */}
                                    <div className='col-4 mx-2 my-2 f-letter'>
                                        {s[0].name[0]}
                                    </div>
                                    <div className="col-8 mx-2 my-3  ">
                                        <h5>{s[0].name}</h5>
                                        <div>{s[0].city}</div>
                                        <div>{s[0].marks}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}