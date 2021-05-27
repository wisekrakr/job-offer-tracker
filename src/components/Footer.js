import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; Wisekrakr 2021</p>
      <a
        href="https://github.com/wisekrakr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          <FaGithub style={{ backgroundColor: "white", cursor: "pointer" }} />
        </h2>
      </a>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
