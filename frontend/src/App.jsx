import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <PhotoList key={0}/> 
  </div>
)

export default App