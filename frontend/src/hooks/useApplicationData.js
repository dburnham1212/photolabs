import { useState, useReducer } from 'react';


const useApplicationData = () => {
  //Setting up favourite photos array
  function favPhotoReducer(state, action){
    if(action.type === "toggle"){
      if (!state.includes(action.id)) {
        return [...state, action.id];
      }
      return state.filter(i => i !== action.id);
    }
  }

  const [favPhotos, toggleFavourite] = useReducer(favPhotoReducer, []);

  //const [favPhotos, setFavPhotos] = useState([]);

  

  // const toggleFavourite = (id) => {
  //   if (!favPhotos.includes(id)) {
  //     return setFavPhotos([...favPhotos, id]);
  //   }
  //   setFavPhotos(favPhotos.filter(i => i !== id));
  // }

  // Setting up the photo that we have clicked on
  function clickedPhotoReducer(state, action) {
    switch(action.type){
      case "ADD":
        state = action.info
        return state;
      case "REMOVE":
        state = null;
        return state;
    } 
  }

  const [clickedPhoto, clickPhoto] = useReducer(clickedPhotoReducer, null);
  // const [clickedPhoto, setClickedPhoto] = useState(null);

  // const clickPhoto = (photo) => {
  //   setClickedPhoto(photo);
  // }

  return {
    state: {favPhotos: favPhotos, clickedPhoto: clickedPhoto},
    toggleFavourite,
    clickPhoto
  }
}

export default useApplicationData;


