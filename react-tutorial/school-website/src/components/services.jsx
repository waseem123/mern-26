import Card from "./Card";

export default function Services(){
    return (
        <div className="row">
            <h2>Services</h2>
            <div className="col-4">
                <Card title="Web Development"/>
            </div>

            <div className="col-4">
                <Card title="Mobile App Development"/>
            </div>

            <div className="col-4">
                <Card title="AI and ML" />
            </div>
        </div>
    );
}