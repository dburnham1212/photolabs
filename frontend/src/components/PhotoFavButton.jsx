import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // Destructuring props
  const {
    id,
    favourite,
    toggleFavourite
  } = props;

  const onClick = () => {
    toggleFavourite({ type: "TOGGLE", id: id});
  }

  return (
    <div onClick={onClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
          <FavIcon height={30} width={20} fill={favourite ? "#C80000" : "#EEEEEE"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;