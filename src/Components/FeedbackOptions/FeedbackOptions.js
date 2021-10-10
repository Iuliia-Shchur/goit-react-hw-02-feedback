import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.Wrapper}>
      {options.map((option) => (
        <button
          className={s.button}
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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  option: PropTypes.array,
};

export default FeedbackOptions;
