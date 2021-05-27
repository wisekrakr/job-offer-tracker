import PropTypes from "prop-types";

import Offer from "./Offer";

const Offers = ({ offers, onDelete, onConcluded, onToggle }) => {
  return (
    <>
      {offers.map((offer, index) => (
        <Offer
          key={index}
          offer={offer}
          onDelete={onDelete}
          onConcluded={onConcluded}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

Offers.propTypes = {
  offers: PropTypes.array,
  onDelete: PropTypes.func,
  onConcluded: PropTypes.func,
};

export default Offers;
