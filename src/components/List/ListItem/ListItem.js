import React, {useRef} from 'react';
import PropTypes from 'prop-types';


const ListItem = ({id, name, getId}) => {
  const ref = useRef()
  const onClickHandler = () => {
    const {id} = ref.current.dataset;
    getId(id)
  }

  return (
    <li
      style={{cursor: 'pointer'}}
      ref={ref}
      className="list-group-item"
      data-id={id}
      onClick={onClickHandler}
    >
      {name}
    </li>)
}

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  getId: PropTypes.func.isRequired
}

export default ListItem;
