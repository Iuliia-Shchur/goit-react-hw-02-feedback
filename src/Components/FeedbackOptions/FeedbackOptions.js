import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button
          type="button"
          key={option}
          onClick={onLeaveFeedback}
          value={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
