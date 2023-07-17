import React from 'react';

import { useState } from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  // Destructuring props
  const{
    topics,
    photos,
    favourites,
    toggleFavourite,
    clickPhoto,
    updatePhotosByTopic
  } = props;

  return(
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        numFavourites={photos.filter(photo => favourites.includes(photo.id)).length} 
        updatePhotosByTopic={updatePhotosByTopic}
      />
      <PhotoList 
        photos={photos}
        favourites={favourites}
        toggleFavourite = {toggleFavourite}
        clickPhoto = {clickPhoto}
      /> 
    </div>
  )
  
}

export default HomeRoute;