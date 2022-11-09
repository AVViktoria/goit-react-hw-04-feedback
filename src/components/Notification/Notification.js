import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className="statList">{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
