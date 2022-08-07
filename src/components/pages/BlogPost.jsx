import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return <div className="container">BlogPost {id}</div>;
}

export default BlogPost;
