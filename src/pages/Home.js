import "./Home.css"
import portrait from "./images/JessePortrait.jpg"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div class="home-content">
            <div class="home-about">
                <div class="home-explanation">
                    <h1>I'm Jesse Clark</h1>
                    <p>Software Developer, Aspiring Machine Learning Engineer, Web Enthusiast</p>
                    <Link id="learn-more" class="navbar-brand" to="/about">Learn More</Link>
                </div>
                <img alt="Jesse Portrait" src={portrait} />
            </div>
        </div>
    )
};

export default Home;