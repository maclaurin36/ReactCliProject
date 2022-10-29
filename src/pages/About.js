import "./About.css"
import kayaking from "./images/kayaking.jpg"
import nebula from "./images/nebula.jpg"
import binary from "./images/binary.jpg"
import food from "./images/food.jpg"
const About = () => {
    return <div class="about-content">
        <h1 id="header-title">About Me</h1>
        <hr />
        <div class="dual-section">
            <div class="description">
                <h3>The world is my playground</h3>
                <p>
                    There are few things that I enjoy more than exploring the natural beauty of the landscape that surrounds me.
                    When I'm not working on a project you'll likely find me rock climbing, kayaking, skiing, or hiking.
                </p>
            </div>
            <img alt="kayaking" src={kayaking} />
        </div>
        <hr />
        <div class="dual-section">
            <img alt="nebula" src={nebula} />
            <div class="description">
                <h3>Learning is my passion</h3>
                <p>
                    One of the things that excites me the most in life is how much there is to discover! The universe holds so
                    many secrets, and its my goal to discover them and use them to help others.
                </p>
            </div>
        </div>
        <hr />
        <div class="dual-section">
            <div class="description">
                <h3>Tech is my skill</h3>
                <p>
                    I've always been surrounded by the world of technology. I love useing it to create new things, automate the boring,
                    and express creativity. Technology is ever evolving, so it never gets old.
                </p>
            </div>
            <img alt="binary" src={binary} />
        </div>
        <hr />
        <div class="dual-section">
            <img alt="food" src={food} />
            <div class="description">
                <h3>Food is my hobby</h3>
                <p>
                    Prior to a year ago, I couldn't cook anything more complicated than eggs, so I was usually stuck eating mac-n-cheese
                    out of the box each day. To fix this issue, I've begun cooking, and what do you know? It's actually pretty fun.
                </p>
            </div>
        </div>
        <hr />

    </div>;
};

export default About;