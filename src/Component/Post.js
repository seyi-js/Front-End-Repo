import React from 'react'
import PropTypes from 'prop-types'

const Post = ({posts, loading}) => {
    if(loading){
        return <button className="btn btn-info text-center">Loading...</button>
    }
    return (
    <React.Fragment>
    <ul className="list-group mb-5">
      {posts.map(post => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
    </React.Fragment>

    )};

// Post.propTypes = {

// }

export default Post
