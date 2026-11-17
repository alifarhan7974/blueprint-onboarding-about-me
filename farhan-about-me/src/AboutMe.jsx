
import "./AboutMe.css";

function AboutMe() {
  const projects = [
    {
      title: "Sleeper Fantasy Football Guillotine League",
      description: "A short description of what this project does, what technologies I used, and what I learned.",
      link: "https://github.com/alifarhan7974/guilliotine-dashboard",
    },
    {
      title: "Project 2",
      description: "A brief explanation of the problem this project solves and how I built it.",
      link: "https://github.com/alifarhan7974",
    },
    {
      title: "Project 3",
      description: "A description of another project I've worked on.",
      link: "https://github.com/alifarhan7974",
    },
  ];

  return (
    <div className="container">
      <h1>Hi, I'm Farhan!</h1>

      <h2>About Me</h2>
      <p>
        I'm a third-year Computer Science student interested
        in software development and building projects.
      </p>

      <h2>Connect With Me</h2>
      <div className="social-links">
        <a
          href="https://github.com/alifarhan7974"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/farhan-ali-b42740332/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMe;
