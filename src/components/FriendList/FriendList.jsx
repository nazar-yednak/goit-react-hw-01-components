import React from 'react';
import PropTypes from "prop-types";
import {FriendListUl, FriendListItem, Chip, Avatar,FriendName} from './FriendList.styled'

export function FriendList({friends }) {
    return( <FriendListUl >
      {friends.map(friend => (
        <FriendListItem  key={friend.id}>
          <Chip isOnline={friend.isOnline}></Chip>
        
          <Avatar
      
            src={friend.avatar}
            alt="User avatar"
            width="52"
          />
          <FriendName >{friend.name}</FriendName>
        </FriendListItem>
      ))}
    </FriendListUl>
  
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