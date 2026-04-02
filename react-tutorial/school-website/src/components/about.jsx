import Card from "./Card";

export default function About() {
    return (
        <div className="row">
            <h2>About Us</h2>
            <div className="col-6">
                <Card title="Who we are?" description="This tells us about our team"/>
            </div>

            <div className="col-6">
                <Card title="What we do?" description="This tells us about our work." />
            </div>
        </div>
    );
}