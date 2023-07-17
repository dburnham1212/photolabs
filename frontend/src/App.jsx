import React from 'react';

import useApplicationData from './hooks/useApplicationData';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // Recieving state and functions used to manipulate the data
  const {
    state,
    clickPhoto,
    toggleFavourite,
    updatePhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      {/* Setting up the home route to display the webpage */}
      <HomeRoute
        photos={state.photos}
        displayedPhotos={state.displayedPhotos}
        topics={state.topics}
        favourites={state.favPhotos}
        toggleFavourite={toggleFavourite}
        clickPhoto={clickPhoto}
        updatePhotosByTopic={updatePhotosByTopic}
      />
      {/* Setting up the photo details modal to display when a photo is clicked */}
      {state.clickedPhoto && <PhotoDetailsModal
        photos={state.photos}
        favourites={state.favPhotos}
        toggleFavourite={toggleFavourite}
        clickedPhoto={state.clickedPhoto}
        clickPhoto={clickPhoto} />}
    </div>
  );
};

export default App