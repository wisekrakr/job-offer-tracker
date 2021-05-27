import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <h4>Version 1.0.0 </h4>
      <h5>Made in May 2021</h5>
      <Link to="/">Back</Link>
    </div>
  );
};

export default About;
