import React from 'react';
import PropTypes from 'prop-types';
import DescriptionDetail from "./DescriptionDetail/DescriptionDetail";

const Details = ({userInfo}) => {
  if (!userInfo) {
    return null;
  }
  const descriptionLists = Object.entries(userInfo.details)
    .map(([key, value]) => (
      <DescriptionDetail
        key={value}
        desc={key}
        text={value}/>
    ))
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={userInfo.avatar} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{userInfo.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {descriptionLists}
      </ul>

    </div>
  );
};

Details.propTypes = {
  userInfo: PropTypes.object.isRequired
}

export default Details;
