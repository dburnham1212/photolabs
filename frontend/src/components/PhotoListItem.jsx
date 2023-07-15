
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';



const PhotoListItem = (props) => {
  /* Insert React */
  const favourite = props.favourites.includes(props.id);
  
  const clickPhoto = function(){
    props.clickPhoto({type: "ADD", info: { id: props.id, user: props.user, fullImage: props.fullImage, location: props.location, similarPhotos: props.similarPhotos }});
  }

  return (
    <li key={props.id} className="photo-list__item">
      <PhotoFavButton
        favourite={favourite}
        toggleFavourite={props.toggleFavourite}
        id={props.id}
      />
      <img src={props.imageSource} onClick={clickPhoto} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-card">
          <p className="photo-list__user-info">{props.user.username}</p>
          <p className="photo-list__user-location">{props.location.city}, {props.location.country}</p>
        </div>
        
      </div>
      
    </li>
  )
}


export default PhotoListItem