import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  // Destructuring props
  const { 
    label, 
    id, 
    updatePhotosByTopic 
  } = props;

  return(
    <div key={id} onClick={() => updatePhotosByTopic(id)}className="topic-list__item">
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem