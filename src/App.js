import React from "react";
import PropTypes from "prop-types";
import { Children } from "react";
import "./App.css";
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

  onCountTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  onCountPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback
      ? Math.round((this.state.good / totalFeedback) * 100)
      : "";
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ["good", "neutral", "bad"];

    return (
      <div className="s.App">
        <Section title="Please leave a feedback" children={Children}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.onCountTotalFeedback}
            positivePercentage={this.onCountPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;