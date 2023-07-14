
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';



const PhotoListItem = (props) => {
  /* Insert React */
  const favourite = props.favourites.includes(props.id);
  
  const clickPhoto = function(){
    props.clickPhoto({ fullImage: props.fullImage, similarPhotos: props.similarPhotos })
  }

  return (
    <li key={props.id} className="photo-list__item">
      <PhotoFavButton
        favourite={favourite}
        onClick={props.toggleFavourite}
        id={props.id}
      />
      <img src={props.imageSource} onClick={clickPhoto} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.profile} className="photo-list__user-profile" />
        <p className="photo-list__user-info">{props.username}</p>
      </div>
      <p className="photo-list__user-location">{props.location.city}, {props.location.country}</p>
    </li>
  )
}


//----------------- DELETE LATER ----------------
// PhotoListItem.defaultProps = {
//   "id": "1",
//   "location": {
//     "city": "Montreal",
//     "country": "Canada"
//   },
//   "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   "username": "Joe Example",
//   "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
// }

export default PhotoListItem