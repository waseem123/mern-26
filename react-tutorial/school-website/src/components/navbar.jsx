import { Link } from "react-router-dom";

export default function Navbar() {
    return (<nav class="navbar navbar-expand-lg text-bg-dark sticky-top" data-bs-theme="dark"
    >
        <div class="container-fluid">
            <Link to="/" class="navbar-brand">Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" class="nav-link active">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link" >About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/services" class="nav-link">Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/courses" class="nav-link">Courses</Link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>);
}

