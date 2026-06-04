import { useContext } from "react";
import Card from "./Card";
import { ThemeContext } from "../context/ThemeContext";
import useAlert from "./UseAlert";

export default function About() {
    let theme = useContext(ThemeContext)
    let alertMessage = useAlert("")

    function showAlert() {
        alertMessage("Clicked on Button")
    }

    return (
        <div className="container" data-bs-theme={theme}>
            <div className="row">
                <h2>About Us</h2>
                <div className="col-6">
                    <Card no="1" title="Who we are?" description="This tells us about our team" />
                </div>

                <div className="col-6">
                    <Card no="2" title="What we do?" description="This tells us about our work." />
                </div>
                <button onClick={showAlert} className="btn btn-primary">Show Alert</button>
            </div>
        </div>
    );
}