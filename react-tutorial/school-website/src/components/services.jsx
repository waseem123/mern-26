import { useContext } from "react";
import Card from "./Card";
import { ThemeContext } from "../context/ThemeContext";

export default function Services() {
    let theme = useContext(ThemeContext)
    return (
        <div className="container" data-bs-theme={theme}>
            <div className="row">
                <h2>Services</h2>
                <div className="col-4">
                    <Card no="1" title="Web Development" description="Web Development service provided by InfoStack" />
                </div>

                <div className="col-4">
                    <Card no="2" title="Mobile App Development" description="Mobile App Development service provided by InfoStack" />
                </div>

                <div className="col-4">
                    <Card no="3" title="AI and ML" description="AI and ML service provided by InfoStack" />
                </div>
            </div>
        </div>
    );
}