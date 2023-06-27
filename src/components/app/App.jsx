import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../Controls/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notifiration';

const buttons = ['good', 'neutral', 'bad'];
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleFeedback(option) {
    console.log(option);
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        break;
    }
  }

  const total = good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    ((good * 100) / total).toFixed();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={handleFeedback} />
      </Section>
      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}
