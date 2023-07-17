import { useState, useEffect, useReducer } from 'react';

import { clickedPhotoReducer, favPhotoReducer } from './reducers';

import axios from 'axios'


const useApplicationData = () => {

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
  }, []);

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
  }, []);

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

  // Setting up an array to store the ids of favourited photos
  const [favPhotos, toggleFavourite] = useReducer(favPhotoReducer, []);
  // Setting up a value which will be an object to check if a photo in photoList has been clicked
  const [clickedPhoto, clickPhoto] = useReducer(clickedPhotoReducer, null);

  // Setting up state and returning necessary values
  return {
    state: { favPhotos, clickedPhoto, topics, photos, displayedPhotos },
    toggleFavourite,
    clickPhoto,
    updatePhotosByTopic
  }
}

export default useApplicationData;


