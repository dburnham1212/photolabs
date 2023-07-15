import React, { useState } from 'react';

import useApplicationData from './hooks/useApplicationData';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import topics from './mocks/topics';
import photos from './mocks/photos';

import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    clickPhoto,
    toggleFavourite
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={state.favPhotos}
        toggleFavourite={toggleFavourite}
        clickPhoto={clickPhoto}
      />
      {state.clickedPhoto && <PhotoDetailsModal
        photos={photos}
        favourites={state.favPhotos}
        toggleFavourite={toggleFavourite}
        clickedPhoto={state.clickedPhoto}
        clickPhoto={clickPhoto} />}
    </div>
  );
}

export default App