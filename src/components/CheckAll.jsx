import React from 'react';
import PropTypes from 'prop-types';

CheckAll.prototype = {
  checkAll: PropTypes.func.isRequired,
};

function CheckAll(props) {
  return (
    <div>
      <div className="button" onClick={props.checkAll}>
        Check All
      </div>
    </div>
  );
}

export default CheckAll;
