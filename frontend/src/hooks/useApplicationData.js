import { useState, useEffect, useReducer } from 'react';

import axios from 'axios'

const useApplicationData = () => {
  // Defining constant values
  const CONSTANTS = {
    // Actions to be used by reducers
    TOGGLE: "TOGGLE",
    SET: "SET",
    UNSET: "UNSET"
  }

  // Setting up state for topics
  const [topics, setTopics] = useState([]);

  // Fetch list of topics from api
  useEffect(() => {
    axios.get('/api/topics')
    .then(res => {
      setTopics([...res.data]);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [])

  // Setting up state for photos
  const [photos, setPhotos] = useState([]);
  // Set up the list of photos that we currently want to display
  const [displayedPhotos, setDisplayedPhotos] = useState([]);

  //Fetch list of photos from api
  useEffect(() => {
    axios.get('/api/photos')
    .then(res => {
      setPhotos([...res.data]);
      setDisplayedPhotos([...res.data]);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [])

  // function to update photos based off of a specific topic id
  const updatePhotosByTopic = (topicID) => {
    axios.get(`/api/topics/photos/${topicID}`)
    .then(res => {
      setDisplayedPhotos([...res.data]);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  } 

  //Setting up favourite photos array
  function favPhotoReducer(state, action) {
    switch (action.type) {
      case CONSTANTS.TOGGLE:
        if (!state.includes(action.id)) {
          return [...state, action.id];
        }
        return state.filter(i => i !== action.id);
      default:
        return state;
    }
  }

  // Setting up an array to store the ids of favourited photos
  const [favPhotos, toggleFavourite] = useReducer(favPhotoReducer, []);

  // Setting up the photo that we have clicked on
  function clickedPhotoReducer(state, action) {
    switch (action.type) {
      case CONSTANTS.SET:
        state = action.info
        return state;
      case CONSTANTS.UNSET:
        state = null;
        return state;
      default:
        return state;
    }
  }

  // Setting up a value which will be an object to check if a photo in photoList has been clicked
  const [clickedPhoto, clickPhoto] = useReducer(clickedPhotoReducer, null);

  // Setting up state and returning necessary values
  return {
    CONSTANTS,
    state: { favPhotos, clickedPhoto, topics, photos, displayedPhotos },
    toggleFavourite,
    clickPhoto,
    updatePhotosByTopic
  }
}

export default useApplicationData;


