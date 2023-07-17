import React from 'react';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

import '../styles/PhotoDetailsModal.scss'

export const PhotoDetailsModal = (props) => {
  // Destructuring props
  const {
    CONSTANTS,
    photos,
    clickedPhoto,
    clickPhoto,
    favourites,
    toggleFavourite
  } = props;

  // Checking if the clicked photo is a favourite to update PhotoFavButton
  const favourite = favourites.includes(clickedPhoto.id);

  // Creating a function to use when the user clicks on the X button to clear out the state
  const clickOnPhoto = () => {
    clickPhoto({ type: CONSTANTS.UNSET });
  };

  return (
    <div className='photo-details-modal'>
      {/* Setting up the X button to close the modal*/}
      <button onClick={clickOnPhoto} className='photo-details-modal__close-button'>
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
      {/*Setting up an image container to display the large version of the image */}
      <div className='photo-detals-modal__image_container'>
        <PhotoFavButton
          CONSTANTS={CONSTANTS}
          favourite={favourite}
          toggleFavourite={toggleFavourite}
          id={clickedPhoto.id}
        />
        {/* Displaying the large version of the photo */}
        <img src={clickedPhoto.fullImage} className='photo-details-modal__image' />
      </div>
      {/* Displaying the user details */}
      <div className="photo-details-modal__photographer-details">
        <img src={clickedPhoto.user.profile} className="photo-details-modal__photographer-profile" />
        <div className="photo-details-modal__photographer-card">
          <p className="photo-details-modal__photographer-info">{clickedPhoto.user.username}</p>
          <p className="photo-details-modal__photographer-location">{clickedPhoto.location.city}, {clickedPhoto.location.country}</p>
        </div>
      </div>
      <hr width="95%" />
      {/* Setting up a photolist within the modal */}
      <PhotoList
        CONSTANTS={CONSTANTS}
        // filter the similar photos based on the actual photo list so that you are able to click on like photos within the modal
        photos={photos.filter((photo) => Object.values(clickedPhoto.similarPhotos).map(similarPhoto => similarPhoto.id).includes(photo.id))}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        clickPhoto={clickPhoto}
      />
    </div>
  );
};
export default PhotoDetailsModal;