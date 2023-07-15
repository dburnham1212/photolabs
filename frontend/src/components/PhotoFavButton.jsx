import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const onClick = function() {
    props.toggleFavourite({ type: "TOGGLE", id: props.id});
  }

  return (
    <div onClick={onClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
          <FavIcon height={30} width={20} fill={props.favourite ? "#C80000" : "#EEEEEE"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;