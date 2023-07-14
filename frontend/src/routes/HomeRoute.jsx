import React from 'react';

import { useState } from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return(
    <div className="home-route">
      <TopNavigation topics={props.topics} numFavourites={props.favourites.length}/>
      <PhotoList 
        photos={props.photos}
        favourites={props.favourites}
        toggleFavourite = {props.toggleFavourite}
        clickPhoto = {props.clickPhoto}
      /> 
    </div>
  )
  
}

export default HomeRoute;