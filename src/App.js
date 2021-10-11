import React from "react";
import PropTypes from "prop-types";
import { Children } from "react";
import s from "./App.module.css";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (evt) => {
    const value = evt.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ["good", "neutral", "bad"];
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    const { onLeaveFeedback } = this;

    return (
      <div className={s.App}>
        <Section title="Please leave a feedback" children={Children}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
