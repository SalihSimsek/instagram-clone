import React from "react";

import "../styles/Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card_top">
        <div
          className="avatar"
          style={{
            backgroundImage: `url("https://avatars.githubusercontent.com/u/49563074?s=400&u=808487d6deb62cf89830a976743e6c6e601180c8&v=4")`,
          }}
        ></div>
        <div className="username_fullname">
          <h4 className="username">salihfsimsek</h4>
          <h4 className="fullname">Salih F. Şimşek</h4>
        </div>
      </div>
      <div className="card_bottom">
        <div className="card_bottomTop">
          <h5>Suggestions For You</h5>
          <h6>See All</h6>
        </div>
        <div className="card_bottomCenter">
          <div className="suggestion_card">
            <div className="suggestion_card_left"
                style={{
                  backgroundImage: `url("https://avatars.githubusercontent.com/u/49563074?s=400&u=808487d6deb62cf89830a976743e6c6e601180c8&v=4")`,
                }}>
            </div>
            <div className="suggestion_card_center">
                <h4>username</h4>
                <h5>name + 24 others</h5>
            </div>
            <div className="suggestion_card_right">
                <h5>Follow</h5>
            </div>
          </div>
          <div className="suggestion_card">
            <div className="suggestion_card_left"
                style={{
                  backgroundImage: `url("https://avatars.githubusercontent.com/u/49563074?s=400&u=808487d6deb62cf89830a976743e6c6e601180c8&v=4")`,
                }}>
            </div>
            <div className="suggestion_card_center">
                <h4>username</h4>
                <h5>name + 24 others</h5>
            </div>
            <div className="suggestion_card_right">
                <h5>Follow</h5>
            </div>
          </div>
          <div className="suggestion_card">
            <div className="suggestion_card_left"
                style={{
                  backgroundImage: `url("https://avatars.githubusercontent.com/u/49563074?s=400&u=808487d6deb62cf89830a976743e6c6e601180c8&v=4")`,
                }}>
            </div>
            <div className="suggestion_card_center">
                <h4>username</h4>
                <h5>name + 24 others</h5>
            </div>
            <div className="suggestion_card_right">
                <h5>Follow</h5>
            </div>
          </div>
          <div className="suggestion_card">
            <div className="suggestion_card_left"
                style={{
                  backgroundImage: `url("https://avatars.githubusercontent.com/u/49563074?s=400&u=808487d6deb62cf89830a976743e6c6e601180c8&v=4")`,
                }}>
            </div>
            <div className="suggestion_card_center">
                <h4>username</h4>
                <h5>name + 24 others</h5>
            </div>
            <div className="suggestion_card_right">
                <h5>Follow</h5>
            </div>
          </div>
        </div>
        <div className="card_bottomBottom">
            <h5>Hakkında . Yardım . Basın . API. Gizlilik<br/>
                Koşullar . Konumlar . Başlıca Hesaplar . Dil
            </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
