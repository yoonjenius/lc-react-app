import React from 'react';
import PropTypes from 'prop-types';

ClearCompleted.prototype = {
  ClearCompleted: PropTypes.number.isRequired,
};

function ClearCompleted(props) {
  return (
    <div>
      <button className="button" onClick={props.clear}>
        Clear Completed
      </button>
    </div>
  );
}

export default ClearCompleted;
