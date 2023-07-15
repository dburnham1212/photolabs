import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';



const PhotoList = (props) => {

  const photos = props.photos.map(photo => <PhotoListItem
    key={photo.id}
    id={photo.id}
    profile={photo.user.profile}
    location={photo.location}
    user={photo.user}
    imageSource={photo.urls.regular}
    toggleFavourite={props.toggleFavourite}
    favourites={props.favourites}
    fullImage={photo.urls.full}
    similarPhotos={photo.similar_photos}
    clickPhoto={props.clickPhoto}
    
  />);

  return (
    <ul key="photoList" className="photo-list">
      {photos}
    </ul>
  );
}

export default PhotoList