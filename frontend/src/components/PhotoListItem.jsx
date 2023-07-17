
import React from 'react';

import { CONSTANTS } from '../hooks/reducers';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';



const PhotoListItem = (props) => {
  // Destructuring props
  const {
    id,
    user,
    imageSource,
    fullImage,
    location,
    similarPhotos,
    favourites,
    toggleFavourite,
    clickPhoto
  } = props;

  // check if photo list item is a favourite
  const favourite = favourites.includes(id);
  
  // Function to set the current photo to display
  const clickOnPhoto = () => {
    clickPhoto({type: CONSTANTS.SET, info: { id, user, fullImage, location, similarPhotos }});
  };

  return (
    <li key={props.id} className="photo-list__item">
      {/* Setting up the button to toggle a favourite */}
      <PhotoFavButton
        favourite={favourite}
        toggleFavourite={toggleFavourite}
        id={id}
      />
      {/* Displaying the image */}
      <img src={imageSource} onClick={clickOnPhoto} className="photo-list__image" />
      {/* Displaying user details */}
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-card">
          <p className="photo-list__user-info">{user.username}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </li>
  );
};


export default PhotoListItem