import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/blog/1" className="active">
            Blog one
          </Link>
        </li>
        <li>
          <Link to="/blog/2" className="active">
            Blog two
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
