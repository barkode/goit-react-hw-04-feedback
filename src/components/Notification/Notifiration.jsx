import propTypes from 'prop-types';

function Notification({ message }) {
  return <div>{message}</div>;
}

export default Notification;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
