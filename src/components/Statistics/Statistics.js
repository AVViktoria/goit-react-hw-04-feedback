import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <ul className="statListBox">
      <li className="statList">Good: {good}</li>
      <li className="statList">Neutral: {neutral}</li>
      <li className="statList">Bad: {bad}</li>
      <li className="statList">Total: {total}</li>
      <li className="statList">Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
