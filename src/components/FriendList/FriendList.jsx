import React from 'react';
import PropTypes from "prop-types";


export function FriendList({friends }) {
    return( <ul >
      {friends.map(friend => (
        <li  key={friend.id}>
          <span ></span>
          <img
      
            src={friend.avatar}
            alt="User avatar"
            width="52"
          />
          <p >{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    
    })
  ),
}