import React, { useState, useEffect } from 'react';

import useApplicationData from './hooks/useApplicationData';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => { setPhotos([...data])
   })
   }, [photos])

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => { setTopics([...data])
   })
   }, [topics])

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