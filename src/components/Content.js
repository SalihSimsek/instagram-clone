import React,{useState,useContext} from "react";
import {PostContext} from '../PostContext'
import "../styles/Content.css";

import Story from './Story'
import Post from './Post'
import Card from './Card'
const Content = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [posts,setPosts] = useContext(PostContext)

  const [photo,setPhoto] = useState('')
  const [description,setDescription] = useState('')

  const updatePhoto = (e) =>{
    setPhoto(e.target.value)
  }

  const updateDescription = (e) => {
    setDescription(e.target.value)
  }

  const sharePhoto = (e) =>{
    e.preventDefault()
    const newId = posts.lenght+1
    setPosts([{description: description, user: 'salihfsimsek',photo: photo,id:newId,comments:[]},...posts])
    setPhoto('')
    setDescription('')
  }

  return (
    <div className="content">
      <div className="content_left">
        <div className="content_left_stories">
          {stories.map(story => (
            <Story key={story}/>
          ))}
        </div>
        <div className="content_left_inputs">
          <div className="inputs">
            <input type="text" placeholder="Description" onChange={updateDescription} value={description}/>
            <input type="text" placeholder="Photo url" onChange={updatePhoto} value={photo}/>
          </div>
          <div className="share" onClick={sharePhoto}>
            <button>Share</button>
          </div>
        </div>
        <div className="content_left_posts">
          {
            posts.map(post=>(
              <Post key={post.id} post={post}></Post>
            ))
          }
        </div>
      </div>
      <div className="content_right">
      <Card />
      </div>
    </div>
  );
};

export default Content;
