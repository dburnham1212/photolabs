import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';

import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFavourite = (id) => {
    if(!favPhotos.includes(id)) {
      return setFavPhotos([...favPhotos, id]);
    }
    setFavPhotos(favPhotos.filter(i => i !== id));
  } 

  return(
    <div className="App">
      <HomeRoute
      photos={photos}
      topics={topics} 
      favourites={favPhotos} 
      toggleFavourite={toggleFavourite} 
      />
    </div>
  );
}

export default App