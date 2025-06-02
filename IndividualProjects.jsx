import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assuming you are using React Router
import "./IndividualProjects.css";
import { projects } from "./Projects";

function IndividualProject() {
  const { projectId } = useParams(); // Get project ID from URL parameters
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch project data from an API here
    // For demonstration, we'll use the sampleProjects array
    const foundProject = projects.find((p) => p.id === projectId);

    if (foundProject) {
      setProject(foundProject);
      setLoading(false);
    } else {
      setError("Project not found.");
      setLoading(false);
    }
  }, [projectId]); // Re-run effect if projectId changes

  if (loading) {
    return <div>Loading project details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!project) {
    return <div>Project not found.</div>; // Should be caught by the error state, but good fallback
  }

  return (
    <div className="individual-project-container">
      <header className="project-header">
        <h1>{project.title}</h1>
        {project.subtitle && <h2>{project.subtitle}</h2>}
      </header>

      <section className="project-overview">
        <h3>Overview</h3>
        <p>{project.description}</p>
      </section>

      {project.technicalDetails && (
        <section className="project-technical-details">
          <h3>Technical Details</h3>
          <p>{project.technicalDetails}</p>
        </section>
      )}

      {project.callToAction && (
        <section className="project-call-to-action">
          <h3>Next Steps</h3>
          <p>{project.callToAction}</p>
        </section>
      )}

      {/* Placeholder for related projects */}
      {project.technologies && project.technologies.length > 0 && (
        <section className="project-technologies">
          <h3>Technologies Used</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default IndividualProject;
