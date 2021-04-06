import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import './styles.css';

class App extends Component {
	state = {
      good: 0,
      neutral: 0,
      bad: 0
	};


  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return ( good + neutral + bad );
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedbackPercentage = (good * 100) / this.countTotalFeedback();
      //  console.log('%: ', positiveFeedbackPercentage, Math.round(positiveFeedbackPercentage));
    return Math.round(positiveFeedbackPercentage);
  };


  onLeaveFeedback = (event) => {
      const name = event.target.name;
      this.setState((prevState) => ({
        [name]: prevState[name] + 1
      }));
    };

  
  render() {
    const objectKey = Object.keys(this.state);

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
        console.log('C%: ', positiveFeedbackPercentage, Math.round(positiveFeedbackPercentage));
      return (
        <>           
          <Section title="Please leave feedback" />
          <FeedbackOptions todos={objectKey} onLeaveFeedback={this.onLeaveFeedback} />
          <Section title="Statistics" />
          
          {total === 0
            ? (<Notification message="No feedback given" />)
            : (<Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positiveFeedbackPercentage={positiveFeedbackPercentage}
                />
          )}
        </>
    );
  };
}

export default App;

