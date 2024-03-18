import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl }) => {
  const linkStyle = { color: 'white', textDecoration: 'none' };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <span>{description}</span>
          <div className="buttons">
            <button><a href={githubUrl} style={linkStyle}>Github</a></button>
            <button><a href={demoUrl} style={linkStyle}>Demo</a></button>
          </div>
        </div>
      </div>
    </Col>
  );
};
