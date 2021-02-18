import React from 'react'

import '../styles/Story.css'

const Story = ({key}) => {
    return (
        <div className="story_info">
              <div className="story_info_top">
                <div
                  key={key}
                  className="story_img"
                  style={{
                    backgroundImage: `url("https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-19/s150x150/45272559_1988360334585183_7363615059831947264_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_ohc=L85Jz2IApt8AX-45JLO&tp=1&oh=037376beb01001f4e7d0629d2d0eb449&oe=60572FD9")`,
                  }}
                ></div>
              </div>
              <h5 className="story_info_bottom">sfsimsek</h5>
            </div>
    )
}

export default Story
