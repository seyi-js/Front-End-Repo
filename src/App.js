import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Post from './Component/Post';
import Pagination from './Component/Pagination';

 const App = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoading(true);
      const res = await Axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  //get Current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const  currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  // console.log(currentPage)

  //Change Page
  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber);
    // setPostsPerPage(2)
  } 
  // console.log(posts)
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3 text-center">Front-End Pagination With React</h1>
      <Post posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App;