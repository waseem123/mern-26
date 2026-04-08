import CourseCard from "./CourseCard";

export default function Course() {
    let allCourses = [{
        title: "Web Development",
        description: "Web Development service provided by InfoStack",
        imgsource: "https://miro.medium.com/v2/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
        price: 500,
        isActive: true
    }, {
        title: "Mobile App Development",
        description: "Mobile App Development service provided by InfoStack",
        imgsource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthvUNJFIGvwUme1yu6BDlihkewt6ZDARt0A&s",
        price: 1000,
        isActive: true
    }, {
        title: "AI and ML",
        description: "AI and ML service provided by InfoStack",
        imgsource: "https://www.jellyfishtechnologies.com/wp-content/uploads/2021/10/Artificial-Intelligence-versus-Machine-Learning.png",
        price: 2000,
        isActive: false
    },

    {
        title: "AI and ML",
        description: "AI and ML service provided by InfoStack",
        imgsource: "https://www.jellyfishtechnologies.com/wp-content/uploads/2021/10/Artificial-Intelligence-versus-Machine-Learning.png",
        price: 2000,
        isActive: false
    },
{
        title: "AI and ML",
        description: "AI and ML service provided by InfoStack",
        imgsource: "https://www.jellyfishtechnologies.com/wp-content/uploads/2021/10/Artificial-Intelligence-versus-Machine-Learning.png",
        price: 2000,
        isActive: false
    },{
        title: "AI and ML",
        description: "AI and ML service provided by InfoStack",
        imgsource: "https://www.jellyfishtechnologies.com/wp-content/uploads/2021/10/Artificial-Intelligence-versus-Machine-Learning.png",
        price: 2000,
        isActive: false
    }]

    let courseUI = allCourses.map(ui => <div className="col-4">
        <CourseCard courseObj={ui} />
    </div>)
    return (
        <div className="container">
            <div className="row">
                <h2>Our Valuable Courses</h2>

                {courseUI}

            </div>
        </div>
    );
}