import React from "react";
import { Link } from "react-router-dom";
import "./HomeProjects.css";
import { projects } from "../Projects/Projects.jsx";

function HomeProjects() {
    // Sample project data
    const projects = [
        {
            id: 1,
            title: "Sample Project 1",
            description:
                "This is a brief description of sample project 1. It highlights the key aspects and achievements.",
            imageUrl: "/public/ej-yao-D46mXLsQRJw-unsplash.jpg", // Replace with actual image path
        },
        {
            id: 2,
            title: "Sample Project 2",
            description:
                "This is a brief description of sample project 2. It showcases the scope and impact of the work.",
            imageUrl: "/public/danist-soh-8Gg2Ne_uTcM-unsplash.jpg", // Replace with actual image path
        },
        // Add more project objects here as needed
    ];

    return (
        <>
            <section className="home-projects">
                <h2>Our Projects</h2>
                <div className="featured-projects-section">
                    <div className="project-list">
                        {/* Placeholder for Featured Project 1 */}
                        {projects.map((project) => (
                            <div key={project.id} className="project-item">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="project-details-link"
                                >
                                    Learn More
                                </Link>
                            </div>
                        ))}

                        {/* Add more project placeholders as needed */}
                    </div>
                </div>
                <div className="see-all-projects">
                    <Link to="/projects" className="see-all-projects-button">
                        See All Projects
                    </Link>
                </div>
            </section>
        </>
    );
}

export default HomeProjects;
