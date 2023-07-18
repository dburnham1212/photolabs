import React from 'react';

import TopicListItem from './TopicListItem';

import '../styles/TopicList.scss';


const TopicList = (props) => {
  // Destructuring props
  const {
    topics,
    updatePhotosByTopic,
    setFavMode
  } = props;

  //Set up our list of TopicListItems
  const topicItems = topics.map((topic) =>
    <TopicListItem
      key={topic.id}
      id={topic.id}
      label={topic.title}
      updatePhotosByTopic={updatePhotosByTopic}
      setFavMode={setFavMode}
    />);

  return (
    <div className="top-nav-bar__topic-list">
      {topicItems}
    </div>
  );
};

export default TopicList