
import React, { useState } from 'react';

const BlogPost = ({ title, author, date, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
    console.log('Expanded:', expanded); 
  };

  return (
    <div className={`box ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
      <h2>{title}</h2>
      {expanded && (
        <>
          <p><strong>Author:</strong> {author}</p>
          <div className="content">{content}</div>
        </>
      )}
    </div>
  );
};

export default BlogPost;
