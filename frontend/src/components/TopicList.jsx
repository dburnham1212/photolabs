import React from 'react';

import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';


const TopicList = (props) => {
  const topicItems = props.topics.map((topic) => <TopicListItem key={topic.id} id={topic.id} label={topic.title} setTopicID={props.setTopicID}/> )

  return(
    <div className="top-nav-bar__topic-list">
      {topicItems}
    </div>
  );
}

//------------------TO DELETE--------------
// TopicList.defaultProps = {
//   topics: [
//     {
//       "id": "1",
//       "slug": "topic-1",
//       "title": "Nature"
//     },  
//     {
//       "id": "2",
//       "slug": "topic-2",
//       "title": "Travel"
//     },
//     {
//       "id": "3",
//       "slug": "topic-3",
//       "title": "People"
//     },
//   ]
// }
export default TopicList