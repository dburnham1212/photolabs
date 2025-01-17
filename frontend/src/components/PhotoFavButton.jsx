import React from 'react';

import { FavIcon } from './FavIcon';

import { CONSTANTS } from '../hooks/reducers';

import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // Destructuring props
  const {
    id,
    favourite,
    toggleFavourite
  } = props;

  // Used to toggle the favourite icon for an image
  const onClick = () => {
    toggleFavourite({ type: CONSTANTS.TOGGLE, id});
  };

  // Setting up our favourite icon
  return (
    <div onClick={onClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
          <FavIcon height={30} width={20} fill={favourite ? "#C80000" : "#EEEEEE"}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;