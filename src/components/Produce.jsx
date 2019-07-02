import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
  return (
    <div>
      <style jsx>{`

      `}</style>
      <div>
        <h2>{props.month}</h2>
        <p><em>{props.selection}</em></p>
        <br/>
      </div>
      <hr/>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
};

export default Produce;