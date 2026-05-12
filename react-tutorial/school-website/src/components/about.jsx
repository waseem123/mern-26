import { useContext } from "react";
import Card from "./Card";
import { ThemeContext } from "../context/ThemeContext";

export default function About() {
    let theme = useContext(ThemeContext)
    return (
        <div className="container" data-bs-theme={theme}>
            <div className="row">
                <h2>About Us</h2>
                <div className="col-6">
                    <Card title="Who we are?" description="This tells us about our team" />
                </div>

                <div className="col-6">
                    <Card title="What we do?" description="This tells us about our work." />
                </div>
            </div>
        </div>
    );
}