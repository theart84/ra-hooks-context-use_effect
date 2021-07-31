import React from 'react';
import PropTypes from 'prop-types';

const DescriptionDetail = ({desc, text}) => {
  return (
    <li className="list-group-item">
      <span className="text-capitalize">{desc}</span>:
      <span className="text-capitalize">{` ${text}`}</span>
    </li>
  );
};

DescriptionDetail.propTypes = {
  desc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default DescriptionDetail;
