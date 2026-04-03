import Card from "./Card";

export default function Services() {
    return (
        <div className="container">
            <div className="row">
                <h2>Services</h2>
                <div className="col-4">
                    <Card title="Web Development" description="Web Development service provided by InfoStack" />
                </div>

                <div className="col-4">
                    <Card title="Mobile App Development" description="Mobile App Development service provided by InfoStack" />
                </div>

                <div className="col-4">
                    <Card title="AI and ML" description="AI and ML service provided by InfoStack" />
                </div>
            </div>
        </div>
    );
}