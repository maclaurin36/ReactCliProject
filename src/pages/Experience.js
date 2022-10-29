import "./Experience.css"
import byu from "./images/byu.png"
import aco from "./images/aco.svg"
import church from "./images/churchlogo.jpg"
import cinema from "./images/StadiumLogoPayson.png"

const Experience = () => {
    return (
        <div class="about-content">
            <h1 id="header-title">Work Experience</h1>
            <p id="work-description">Over the past several years, I've developed my skills as a software engineer working at a several companies. </p>
            <div class="large-card-container">
                <div class="large-card">
                    <img alt="Awardco" src={aco} />
                    <div class="text-content">
                        <h4>Awardco - Back-end Software Engineer</h4>
                        <p>May, 2022 -- Present</p>
                        <ul>
                            <li>Developed custom Slack App integration using C#</li>
                            <li>Built integration settings pages using Vue.js and Razor</li>
                            <li>Built custom Outlook add-in using vanilla js</li>
                        </ul>
                    </div>
                </div>
                <div class="large-card">
                    <img alt="Brigham Young University" src={byu} />
                    <div class="text-content">
                        <h4>Brigham Young University - Mendix Developer</h4>
                        <p>April, 2020 -- April, 2022</p>
                        <ul>
                            <li>Designed and built utility tracking and billing database using Postgres</li>
                            <li>Managed utility telemetry and created custom reports in SQL Server</li>
                            <li>Automated bill download and processing using Python</li>
                        </ul>
                    </div>
                </div>
                <div class="large-card">
                    <img alt="Church of Jesus Christ of Latter-day Saints" src={church} />
                    <div class="text-content">
                        <h4>The Church of Jesus Christ of Latter-day Saints - System Automator</h4>
                        <p>July, 2018 -- March, 2020</p>
                        <ul>
                            <li>Designed custom missionary transfer system in Visual Basic</li>
                            <li>Automated utility and rent payments for 200+ missionaries</li>
                            <li>Redesigned financial reporting processes</li>
                        </ul>
                    </div>
                </div>
                <div class="large-card">
                    <img alt="Stadium Cinemas" src={cinema} />
                    <div class="text-content">
                        <h4>Stadium Cinemas - Projection Automation Engineer</h4>
                        <p>December, 2015 -- January, 2018</p>
                        <ul>
                            <li>Assembled local and national advertisements into movie features</li>
                            <li>Automated theater screen, lighting, and sound adjustments</li>
                            <li>Developed new system for transferring films from projector hard-drives</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;