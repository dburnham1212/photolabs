import React from 'react';

import { useState } from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  // Destructuring props
  const{
    CONSTANTS,
    topics,
    photos,
    displayedPhotos,
    favourites,
    toggleFavourite,
    clickPhoto,
    updatePhotosByTopic
  } = props;

  return(
    <div className="home-route">
      {/* Setting up top navigation panel */}
      <TopNavigation 
        topics={topics}
        numFavourites={photos.filter(photo => favourites.includes(photo.id)).length} 
        updatePhotosByTopic={updatePhotosByTopic}
      />
      {/* Setting up photo list */}
      <PhotoList 
        CONSTANTS={CONSTANTS}
        // Filter through the current photos to display in order to maintain initial photo list
        photos={photos.filter((photo => displayedPhotos.map(displayedPhoto => displayedPhoto.id).includes(photo.id)))}
        favourites={favourites}
        toggleFavourite = {toggleFavourite}
        clickPhoto = {clickPhoto}
      /> 
    </div>
  )
  
}

export default HomeRoute;