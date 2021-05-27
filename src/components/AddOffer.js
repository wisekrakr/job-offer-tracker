import { useState } from "react";

const AddOffer = ({ onAdd }) => {
  const [offer, setOffer] = useState({
    job: "",
    business: "",
    description: "",
    hours: "",
    salary: "",
    original_date: "",
    added_date: "",
    apply_date: "",
    link: "",
    reminder: false,
  });

  const onChange = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!offer.job) {
      alert("Please add Job Offer");
      return;
    }

    onAdd(offer);
    setOffer({
      ...offer,
      [e.target.name]: {
        job: "",
        business: "",
        description: "",
        hours: "",
        salary: "",
        original_date: "",
        added_date: "",
        apply_date: "",
        link: "",
        reminder: false,
      },
    });
  };

  return (
    <div>
      <h4>Add a new one!</h4>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Job Offer</label>
          <input
            type="text"
            placeholder="Add Offer"
            id="job"
            name="job"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Business</label>
          <input
            type="text"
            placeholder="Add Business"
            id="business"
            name="business"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            placeholder="Add Anything"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Hours</label>
          <input
            type="text"
            placeholder="Add Hours Amount"
            id="hours"
            name="hours"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Salary</label>
          <input
            type="text"
            placeholder="Add Salary Amount"
            id="salary"
            name="salary"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Date Placed</label>
          <input
            type="text"
            placeholder="Add Date"
            id="original_date"
            name="original_date"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Date Added</label>
          <input
            type="text"
            placeholder="Add Date and Time"
            id="added_date"
            name="added_date"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Date Applied</label>
          <input
            type="text"
            placeholder="Add Date and Time"
            id="apply_date"
            name="apply_date"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>Link to Offer</label>
          <input
            type="text"
            placeholder="Add Job Offer Link"
            id="link"
            name="link"
            onChange={onChange}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={offer.reminder}
            id="reminder"
            name="reminder"
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Roll the Dice Baby!"
          className="btn btn-block"
          style={{ backgroundColor: "steelblue" }}
        />
      </form>
    </div>
  );
};

export default AddOffer;
