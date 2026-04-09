import allstudents from './students-data.json';
import { useParams } from 'react-router-dom';

export default function StudentDetails() {
    let { rollno } = useParams();
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <div className="row">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg" className="col-4 card-img-left"></img>
                                <div className="col-8">
                                    <h5>{}</h5>
                                    <div>City</div>
                                    <div>Marks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}