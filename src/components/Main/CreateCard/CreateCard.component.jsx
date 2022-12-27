import React from "react";
import "./CreateCard.styles.scss";
const CreateCard = () => {
  return (
    <div className="create__card__container">
      <form className="create__card__form">
        <label>Subject</label>
        <input type="text" placeholder="Subject" />

        <label>Status</label>
        <select>
          <option>Planning</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
        <label>Priority</label>
        <select>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label>Attachments</label>
        <input type="button" value="Attach file"></input>
      </form>
    </div>
  );
};

export default CreateCard;
