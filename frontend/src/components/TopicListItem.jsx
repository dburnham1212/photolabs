import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  // Destructuring props
  const { 
    label, 
    id, 
    updatePhotosByTopic 
  } = props;
  // Setting up the component
  return(
    <div key={id} onClick={() => updatePhotosByTopic(id)}className="topic-list__item">
      <span>{label}</span>
    </div>
  );
}

export default TopicListItem