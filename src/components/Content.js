import React from "react";

import "../styles/Content.css";

import Story from './Story'
import Post from './Post'
import Card from './Card'
const Content = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="content">
      <div className="content_left">
        <div className="content_left_stories">
          {stories.map((story) => (
            <Story key={story}/>
          ))}
        </div>
        <div className="content_left_posts">
        <Post postImage="https://picsum.photos/600?random=20"/>
        <Post postImage="https://picsum.photos/600?random=40"/>
        <Post postImage="https://picsum.photos/600?random=60"/>
        <Post postImage="https://picsum.photos/600?random=80"/>
        </div>
      </div>
      <div className="content_right">
      <Card />
      </div>
    </div>
  );
};

export default Content;
