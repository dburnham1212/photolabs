import { useState, useEffect, useReducer } from 'react';


const useApplicationData = () => {
  // Setting up state for topics
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {
        setTopics([...data])
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  // Setting up state for photos
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
      fetch(`/api/photos/`)
        .then(res => res.json())
        .then(data => {
          setPhotos([...data])
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }, [])

  // function to update photos based off of a specific topic id
  const updatePhotosByTopic = (topicID) => {
    fetch(`/api/topics/photos/${topicID}`)
        .then(res => res.json())
        .then(data => {
          setPhotos([...data])
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  } 

  //Setting up favourite photos array
  function favPhotoReducer(state, action) {
    switch (action.type) {
      case "TOGGLE":
        if (!state.includes(action.id)) {
          return [...state, action.id];
        }
        return state.filter(i => i !== action.id);
      default:
        return state;
    }
  }

  const [favPhotos, toggleFavourite] = useReducer(favPhotoReducer, []);

  // Setting up the photo that we have clicked on
  function clickedPhotoReducer(state, action) {
    switch (action.type) {
      case "ADD":
        state = action.info
        return state;
      case "REMOVE":
        state = null;
        return state;
      default:
        return state;
    }
  }

  const [clickedPhoto, clickPhoto] = useReducer(clickedPhotoReducer, null);

  // Setting up state and returning necessary values
  return {
    state: { favPhotos, clickedPhoto, topics, photos },
    toggleFavourite,
    clickPhoto,
    updatePhotosByTopic
  }
}

export default useApplicationData;


