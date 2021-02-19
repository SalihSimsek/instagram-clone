import React from 'react'

import '../styles/Comment.css'

import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const Comment = ({username,comment,heart}) => {
    return (
        <div className="comment">
            <div className="comment_left">
                <h5>{username}</h5>
                <h6>{comment}</h6>
            </div>
            <div className="comment_right">
                {heart && <FavoriteBorderOutlinedIcon/>}
            </div>
        </div>
    )
}

export default Comment
