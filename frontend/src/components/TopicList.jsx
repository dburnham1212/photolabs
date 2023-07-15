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

export default TopicList