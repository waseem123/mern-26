import CourseCard from "./CourseCard";

export default function Course() {
    let course1 = {
        title: "Web Development",
        description: "Web Development service provided by InfoStack",
        imgsource: "https://miro.medium.com/v2/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
        price: 500,
        isActive: true
    }
    let course2 = {
        title: "Mobile App Development",
        description: "Mobile App Development service provided by InfoStack",
        imgsource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthvUNJFIGvwUme1yu6BDlihkewt6ZDARt0A&s",
        price: 1000,
        isActive: true
    }
    let course3 = {
        title: "AI and ML",
        description: "AI and ML service provided by InfoStack",
        imgsource: "https://www.jellyfishtechnologies.com/wp-content/uploads/2021/10/Artificial-Intelligence-versus-Machine-Learning.png",
        price: 2000,
        isActive: false
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Our Valuable Courses</h2>
                <div className="col-4">
                    <CourseCard courseObj={course1} />
                </div>

                <div className="col-4">
                    <CourseCard courseObj={course2} />
                </div>

                <div className="col-4">
                    <CourseCard courseObj={course3} />
                </div>
            </div>
        </div>
    );
}