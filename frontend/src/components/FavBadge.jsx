import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = ({ isFavPhotoExist, viewLikedPhotos, setFavMode }) => {

  const onClick = () => {
    setFavMode(true);
    viewLikedPhotos();
  }

  return (
    <div onClick={onClick} className='fav-badge'>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={!!isFavPhotoExist}/>
    </div>
  );
};

export default FavBadge;