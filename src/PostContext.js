import React, { useState, createContext } from 'react'

export const PostContext = createContext();

export const PostProvider = (props) => {
    const [posts,setPosts] = useState([
        {
            id: 1,
            photo: 'https://picsum.photos/600?random=20',
            description: 'Nice pic',
            user: 'salihfsimsek',
            comments:[
                {
                    id: 1,
                    name: 'salihsimsek1',
                    text: 'nice',
                    heart: true
                },
                {
                    id: 2,
                    name: 'salihsimsek2',
                    text: 'nice',
                    heart: true
                },
                {
                    id:3,
                    name: 'salihsimsek3',
                    text: 'nice',
                    heart: true
                }
            ]
        },
        {
            id: 2,
            photo: 'https://picsum.photos/600?random=40',
            description: 'Nice pic2',
            user: 'salihfsimsek',
            comments:[]
        },
        {
            id: 3,
            photo: 'https://picsum.photos/600?random=60',
            description: 'Nice pic3',
            user: 'salihfsimsek',
            comments:[]
        }
    ])
    return(
        <PostContext.Provider value={[posts,setPosts]}>
            {props.children}
        </PostContext.Provider>
    )
}