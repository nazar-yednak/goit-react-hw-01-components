import React from 'react';
import PropTypes from "prop-types";
import {
  ProfileWrapper, Description, Avatar, TextName,
  TextTag, TextLocation, Stats, StatsItem, StatsLabel, StatsQuantity
  
} from './Profile.styled'


export function Profile({ avatar, location, tag, username, stats }) {
    return (
            <ProfileWrapper >
  <Description >
    <Avatar
      src={avatar}
      alt="User avatar"
     
    />
    <TextName >{ username}</TextName>
    <TextTag >{tag}</TextTag>
    <TextLocation >{location}</TextLocation>
  </Description>

  <Stats >
    <StatsItem>
      <StatsLabel >Followers</StatsLabel>
      <StatsQuantity>{stats.followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel >Views</StatsLabel>
      <StatsQuantity >{stats.views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel >Likes</StatsLabel>
      <StatsQuantity >{stats.likes}</StatsQuantity>
    </StatsItem>
  </Stats>
</ProfileWrapper>
        )
    }
Profile.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
}
