import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  // Destructuring props
  const { 
    label, 
    id, 
    updatePhotosByTopic,
    setFavMode
  } = props;

  const updatePhotosAndFavMode = () => {
    setFavMode(false)
    updatePhotosByTopic(id);
  }

  return(
    <div key={id} onClick={updatePhotosAndFavMode}className="topic-list__item">
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem