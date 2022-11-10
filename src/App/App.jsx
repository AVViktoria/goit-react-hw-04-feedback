// import React, { Component } from 'react';

import '../index.scss'

//*    components    //
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import { useState } from 'react';

// //*      Root      //
export default function App() {
  const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

  // //*  handle fn for buttons   //
  const handleLeaveFeedback = (evt) => {
    // const options = evt.target.innerText.toLowerCase();
    const options = evt.currentTarget;
     console.log(options)
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
  //   const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // //*  percentage Fn   //
  const  countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
    return countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const options = Object.keys(this.state);



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
// }





// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   //*  handle fn for buttons   //
//   handleLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   //*  total Fn   //
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   //*  percentage Fn   //
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return this.countTotalFeedback()
//       ? Math.round((good / this.countTotalFeedback()) * 100)
//       : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     return (
//       <div className = "container" >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {!this.countTotalFeedback() ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positiveFeedback={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
