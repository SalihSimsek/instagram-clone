import React from "react";

import "../styles/Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card_top">
        <div
          className="avatar"
          style={{
            backgroundImage: `url("https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45272559_1988360334585183_7363615059831947264_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_ohc=L85Jz2IApt8AX-45JLO&tp=1&oh=037376beb01001f4e7d0629d2d0eb449&oe=60572FD9")`,
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
                  backgroundImage: `url("https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45272559_1988360334585183_7363615059831947264_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_ohc=L85Jz2IApt8AX-45JLO&tp=1&oh=037376beb01001f4e7d0629d2d0eb449&oe=60572FD9")`,
                }}>
            </div>
            <div className="suggestion_card_center">
                <h4>username</h4>
                <h5>commen_friend + 24 others</h5>
            </div>
            <div className="suggestion_card_right">
                <h5>Follow</h5>
            </div>
          </div>
          <div className="suggestion_card">
            <div className="suggestion_card_left"
                style={{
                  backgroundImage: `url("https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45272559_1988360334585183_7363615059831947264_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_ohc=L85Jz2IApt8AX-45JLO&tp=1&oh=037376beb01001f4e7d0629d2d0eb449&oe=60572FD9")`,
                }}>
            </div>
            <div className="suggestion_card_center">
                <h4>username</h4>
                <h5>commen_friend + 24 others</h5>
            </div>
            <div className="suggestion_card_right">
                <h5>Follow</h5>
            </div>
          </div>
          <div className="suggestion_card">
            <div className="suggestion_card_left"
                style={{
                  backgroundImage: `url("https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45272559_1988360334585183_7363615059831947264_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_ohc=L85Jz2IApt8AX-45JLO&tp=1&oh=037376beb01001f4e7d0629d2d0eb449&oe=60572FD9")`,
                }}>
            </div>
            <div className="suggestion_card_center">
                <h4>username</h4>
                <h5>commen_friend + 24 others</h5>
            </div>
            <div className="suggestion_card_right">
                <h5>Follow</h5>
            </div>
          </div>
          <div className="suggestion_card">
            <div className="suggestion_card_left"
                style={{
                  backgroundImage: `url("https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45272559_1988360334585183_7363615059831947264_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_ohc=L85Jz2IApt8AX-45JLO&tp=1&oh=037376beb01001f4e7d0629d2d0eb449&oe=60572FD9")`,
                }}>
            </div>
            <div className="suggestion_card_center">
                <h4>username</h4>
                <h5>commen_friend + 24 others</h5>
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
