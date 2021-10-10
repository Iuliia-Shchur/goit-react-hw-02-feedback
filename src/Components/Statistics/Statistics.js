import s from "./Statistics.module.css";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";

function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  message,
}) {
  return (
    <>
      {total ? (
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>Positive feedback: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Statistics.propTypes = {
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
