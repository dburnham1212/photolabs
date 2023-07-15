import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'


const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__links">
        <TopicList topics={props.topics} setTopicID={props.setTopicID} />
        <FavBadge isFavPhotoExist={props.numFavourites} />
      </div>
      
    </div>
  )
}

export default TopNavigation;