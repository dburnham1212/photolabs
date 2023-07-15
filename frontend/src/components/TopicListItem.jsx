import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  return(
    <div key={props.id} onClick={() => props.setTopicID(props.id)}className="topic-list__item">
      <span>{props.label}</span>
    </div>
  );
}

// -------------- TO DELETE --------------
// TopicListItem.defaultProps =   {
//   "id": "1",
//   "slug": "topic-1",
//   "label": "Nature"
// }

export default TopicListItem