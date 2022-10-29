import "./Projects.css"
import ant from "./images/ant.jpg"
import monochrome from "./images/monochrome.jpg"
import network from "./images/network.jpg"
import neurons from "./images/neurons.jpg"
import nodeNetwork from "./images/node-network.jpg"
import order from "./images/order.jpg"

const Projects = () => {
    return (
        <div class="about-content">
            <h1 id="header-title">My Projects</h1>
            <p id="header-description">
                Through school and my personal career I've done several coding projects. I've implemented algorithms, created web pages, designed apps,
                developed proxy servers and much more. Explore the cards below to discover more.
            </p>
            <hr />
            <div class="card-container">
                <div class="card">
                    <div>
                        <h5>Bitmap Processing</h5>
                        <p>
                            In this project I used C to apply filters to bitmap images by accessing the raw byte stream and transforming each of the pixels.
                            <a href="https://github.com/maclaurin36/Bitmap-Processing">See Repository Here</a>
                        </p>
                    </div>
                    <img alt="bitmap" src={monochrome} />
                </div>
                <div class="card">
                    <div>
                        <h5>Traveling Salesman</h5>
                        <p>
                            In this project I coded a branch and bound algorithm to attempt to solve the traveling salesman program in Python.
                            <a href="https://github.com/maclaurin36/Traveling-Salesman">See Repository Here</a>
                        </p>
                    </div>
                    <img alt="Node Network" src={nodeNetwork} />
                </div>
                <div class="card">
                    <div>
                        <h5>Ant Colony</h5>
                        <p>
                            In this project I developed a genetic learning algorithm to discover cheapest paths along routes to solve Traveling Salesman.
                            <a href="https://github.com/maclaurin36/Ant-Colony-Optimization">See Repository Here</a>
                        </p>
                    </div>
                    <img alt="Ant" src={ant} />
                </div>
                <div class="card">
                    <div>
                        <h5>Tree Data Structures</h5>
                        <p>
                            In this project I developed an auto-balancing binary tree based on the Adelon Velsky Landis model for faster searching.
                            <a href="https://github.com/maclaurin36/AVL-DataStructure">See Repository Here</a>
                        </p>
                    </div>
                    <img alt="Network" src={network} />
                </div>
                <div class="card">
                    <div>
                        <h5>Perceptron ML</h5>
                        <p>
                            In this project I developed a machine learning model based on a neuron that can learn linearly separable datasets.
                            <a href="https://colab.research.google.com/drive/1XzW94RSTQtOvsgtmsrvi1iNPqKUdGaCv#scrollTo=Romyl4G8Trki">See Repository Here</a>
                        </p>
                    </div>
                    <img alt="Neuron" src={neurons} />
                </div>
                <div class="card">
                    <div>
                        <h5>Quicksort</h5>
                        <p>
                            In this project I wrote an algorithm to perform Quicksort on a dataset so that it is sorted in the least time on average.
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">See Repository Here</a>
                        </p>
                    </div>
                    <img alt="Order" src={order} />
                </div>

            </div>
        </div>
    )
};

export default Projects;