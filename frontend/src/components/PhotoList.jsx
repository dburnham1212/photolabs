import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';



const PhotoList = (props) => {
  // Destructuring props
  const {
    CONSTANTS,
    photos,
    favourites,
    toggleFavourite,
    clickPhoto
  } = props;

  // Setting up an array of photo list items to display within photoList
  const displayedPhotos = photos.map(photo => <PhotoListItem
    CONSTANTS = {CONSTANTS}
    key={photo.id}
    id={photo.id}
    profile={photo.user.profile}
    location={photo.location}
    user={photo.user}
    imageSource={photo.urls.regular}
    fullImage={photo.urls.full}
    similarPhotos={photo.similar_photos}
    toggleFavourite={toggleFavourite}
    favourites={favourites}
    clickPhoto={clickPhoto}
    
  />);

  return (
    <ul key="photoList" className="photo-list">
      {displayedPhotos}
    </ul>
  );
}

export default PhotoList