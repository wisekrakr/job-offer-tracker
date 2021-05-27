import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAddOffer }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color="steelblue"
          text={showAddOffer ? "Add a new one!" : "Never mind"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Job Offers Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

export default Header;
