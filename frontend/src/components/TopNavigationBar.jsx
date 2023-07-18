import React from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'


const TopNavigation = (props) => {
  // Destructuring props
  const {
    topics,
    numFavourites,
    updatePhotosByTopic,
    viewLikedPhotos,
    setFavMode
  } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Section to display navbar links and favourites badge if something on page is favourited */}
      <div className="top-nav-bar__links">
        <TopicList topics={topics} updatePhotosByTopic={updatePhotosByTopic} setFavMode={setFavMode}/>
        <FavBadge isFavPhotoExist={numFavourites} viewLikedPhotos={viewLikedPhotos}/>
      </div>
    </div>
  );
};

export default TopNavigation;