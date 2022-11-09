import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button
          className="button"
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.node,
  onLeaveFeedback: PropTypes.func.isRequired,
};
