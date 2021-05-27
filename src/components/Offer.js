import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { FaTimes, FaStop, FaPlay } from "react-icons/fa";

const Offer = ({ offer, onDelete, onConcluded, onToggle }) => {
  return (
    <div
      className={`offer ${offer.reminder ? "reminder" : ""} `}
      onDoubleClick={() => onToggle(offer.id)}
    >
      <h3>
        {offer.job}
        <FaTimes
          style={{ backgroundColor: "red", cursor: "pointer" }}
          onClick={() => onDelete(offer.id)}
        />
      </h3>
      <h3>
        {offer.business}
        {!offer.concluded ? (
          <FaStop
            style={{ backgroundColor: "blue", cursor: "pointer" }}
            onClick={() => onConcluded(offer.id)}
          />
        ) : (
          <FaPlay
            style={{ backgroundColor: "blue", cursor: "pointer" }}
            onClick={() => onConcluded(offer.id)}
          />
        )}
      </h3>
      <h4>{offer.salary}</h4>
      <p>{offer.description}</p>
      <p>{offer.hours}</p>
      <div className="dates">
        <p>Date orignal: {offer.original_date}</p>
        <p>Date added: {offer.added_date}</p>
        <p>Date applied: {offer.apply_date}</p>
      </div>

      <Link to={offer.link} target="_blank">
        Go to the site
      </Link>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onConcluded: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Offer;
