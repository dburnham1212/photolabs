import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favourite, setFavourite] = useState(false);
  
  const handleClick = () => setFavourite(!favourite);

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
          {favourite ? <FavBadge /> : <FavIcon />}
      </div>
    </div>
  );
}

export default PhotoFavButton;