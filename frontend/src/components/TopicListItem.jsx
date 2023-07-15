import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  return(
    <div key={props.id} onClick={() => props.setTopicID(props.id)}className="topic-list__item">
      <span>{props.label}</span>
    </div>
  );
}

export default TopicListItem