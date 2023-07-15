import React from 'react';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

import '../styles/PhotoDetailsModal.scss'

export const PhotoDetailsModal = (props) => {
  const favourite = props.favourites.includes(props.clickedPhoto.id);

  const clickPhoto = function () {
    props.clickPhoto(null);
  }

  return (
    <div className='photo-details-modal'>
      <button onClick={clickPhoto} className='photo-details-modal__close-button'>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='photo-detals-modal__image_container'>
        <PhotoFavButton
          favourite={favourite}
          onClick={props.toggleFavourite}
          id={props.clickedPhoto.id}
        />
        {/* Large version of the photo */}
        <img src={props.clickedPhoto.fullImage} className='photo-details-modal__image'/>
      </div>
      <div className="photo-details-modal__photographer-details">
        <img src={props.clickedPhoto.user.profile} className="photo-details-modal__photographer-profile" />
        <div className="photo-details-modal__photographer-card">
          <p className="photo-details-modal__photographer-info">{props.clickedPhoto.user.username}</p>
          <p className="photo-details-modal__photographer-location">{props.clickedPhoto.location.city}, {props.clickedPhoto.location.country}</p>
        </div>
      </div>
      
      <hr width="95%"/>
      <PhotoList
        photos={props.photos.filter((photo) => Object.values(props.clickedPhoto.similarPhotos).map(similarPhoto => similarPhoto.id).includes(photo.id))}
        favourites={props.favourites}
        toggleFavourite={props.toggleFavourite}
        clickPhoto={props.clickPhoto}
      />
    </div>
  )
}
export default PhotoDetailsModal;