import { Outlet, Link, useLocation } from "react-router-dom";
import "./Layout.css"
import logo from "./images/JClarkLogo.png"
const Layout = () => {
    let location = useLocation();
    let homeActive = location.pathname == '/' ? ' active' : '';
    let aboutActive = location.pathname == '/about' ? ' active' : '';
    let projectsActive = location.pathname == '/projects' ? ' active' : '';
    let experienceActive = location.pathname == '/experience' ? ' active' : '';
    console.log(location.pathname)
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">
                    <img id='logo' alt="Jesse Clark Logo" src={logo} />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class={"nav-link" + homeActive} to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={"nav-link" + aboutActive} to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={"nav-link" + projectsActive} to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={"nav-link" + experienceActive} to="/experience">Experience</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />

            <div class="footer-container">
                <p>
                    <a target="_blank" href="https://www.google.com">View on Github</a>
                </p>
            </div>
        </>
    )
};

export default Layout;