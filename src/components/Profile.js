import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";

import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_topLeft">
          <div
            className="avatar"
            style={{
              backgroundImage: `url("https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45272559_1988360334585183_7363615059831947264_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_ohc=up-ybZzcorAAX-KmVAY&tp=1&oh=499b084eac951b45234e86f096b00ad1&oe=605B2459")`,
            }}
          ></div>
        </div>
        <div className="profile_topRight">
          <div className="topRight_top">
            <h2>salihfsimsek</h2>
            <button>Edit Profile</button>
            <SettingsIcon />
          </div>
          <div className="topRight_center">
            <p>
              <strong>10 </strong>posts
            </p>
            <p>
              <strong>181 </strong>followers
            </p>
            <p>
              <strong>179 </strong>following
            </p>
          </div>
          <div className="topRight_bottom">
            <h4>Salih Şimşek</h4>
          </div>
        </div>
      </div>
      <div className="profile_bottom">
        <div className="profile_bottomTop">
          <div className="title active">POSTS</div>
          <div className="title">IGTV</div>
          <div className="title">SAVED</div>
          <div className="title">TAGGED</div>
        </div>
        <div className="profile_bottomBottom">
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=6')`,
            }}
          ></div>
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=16')`,
            }}
          ></div>
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=26')`,
            }}
          ></div>
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=36')`,
            }}
          ></div>
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=46')`,
            }}
          ></div>
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=56')`,
            }}
          ></div>
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=66')`,
            }}
          ></div>
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=76')`,
            }}
          ></div>
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=86')`,
            }}
          ></div>
          <div
            className="photo"
            style={{
              backgroundImage: `url('https://picsum.photos/610?random=96')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
