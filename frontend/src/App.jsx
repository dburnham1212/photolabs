import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import topics from './mocks/topics';
import photos from './mocks/photos';

import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  //Setting up favourite photos array
  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFavourite = (id) => {
    if (!favPhotos.includes(id)) {
      return setFavPhotos([...favPhotos, id]);
    }
    setFavPhotos(favPhotos.filter(i => i !== id));
  }

  // Setting up the photo that we have clicked on
  const [clickedPhoto, setClickedPhoto] = useState(null);

  const clickPhoto = (photo) => {
    setClickedPhoto(photo);
  }

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favPhotos}
        toggleFavourite={toggleFavourite}
        clickPhoto={clickPhoto}
      />
      {clickedPhoto && <PhotoDetailsModal 
        photos={photos}
        favourites={favPhotos}
        toggleFavourite = {toggleFavourite}
        clickedPhoto={clickedPhoto} 
        clickPhoto={clickPhoto}/>}
    </div>
  );
}

export default App