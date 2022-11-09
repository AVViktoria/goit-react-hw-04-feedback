import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className="statList">{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
