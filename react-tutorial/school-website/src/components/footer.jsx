import { Link } from "react-router-dom";

function Footer() {
    return (
        <nav class="navbar navbar-expand-lg fixed-bottom text-bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">InfoStack</Link>
                <div>Made by InfoStack</div>
            </div>
        </nav>
    );
}
export default Footer;