import { useState } from 'react';
import '../index.scss'

//*    components    //
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import Section from 'components/Section';


// //*      Root      //
export default function App() {
  const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

  // //*  handle fn for buttons   //
  const handleLeaveFeedback = (evt) => {
    const options = evt.currentTarget.innerText.toLowerCase();
    //  console.log(options)
    switch (options) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;    
      default:
        return;
    }
  }

  // //*  total Fn   //
  const  countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // //*  percentage Fn   //
  const  countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  };

    return (
      <div className = "container" >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedback={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
