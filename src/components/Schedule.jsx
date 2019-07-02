import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  return (
    <div>
      <style jsx>{`

      `}</style>
      <div>
        <h2>{props.day}</h2>
        <h3>{props.location} - {props.hours}</h3>
        <p><em>{props.booth}</em></p>
        <br/>
      </div>
      <hr/>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
};

export default Schedule;