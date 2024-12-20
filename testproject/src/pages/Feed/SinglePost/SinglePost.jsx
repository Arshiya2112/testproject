import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // to get postId from the URL
import Image from '../../../components/Image/Image';
import './SinglePost.css';

const SinglePost = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    date: '',
    image: '',
    content: ''
  });

  const { postId } = useParams(); // Extract postId from the URL

  useEffect(() => {
    fetch(`URL/${postId}`) // Use the postId to fetch the specific post data
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch status');
        }
        return res.json();
      })
      .then(resData => {
        setPost({
          title: resData.post.title,
          author: resData.post.creator.name,
          date: new Date(resData.post.createdAt).toLocaleDateString('en-US'),
          image: resData.post.imageUrl, // assuming the image URL is in the response
          content: resData.post.content
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, [postId]); // Re-run the effect if postId changes

  return (
    <section className="single-post">
      <h1>{post.title}</h1>
      <h2>
        Created by {post.author} on {post.date}
      </h2>
      <div className="single-post__image">
        <Image contain imageUrl={post.image} />
      </div>
      <p>{post.content}</p>
    </section>
  );
};

export default SinglePost;
