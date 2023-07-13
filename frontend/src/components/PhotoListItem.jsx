
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';



const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div key={props.id} className="photo-list__item">
      <div className="photo-list__user-details">
        <img src={props.profile} className="photo-list__user-profile"/>
        <p className ="photo-list__user-info">{props.username}</p>
      </div>
      <p className="photo-list__user-location">{props.location.city}, {props.location.country}</p>
      <PhotoFavButton />
      <img src={props.imageSource} className="photo-list__image"/>
      
    </div>
  )
}

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem