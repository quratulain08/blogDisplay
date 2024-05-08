
import React from 'react';
import BlogPost from './BlogPost';
import Records from './records.json';

const BlogList = () => {
  return (
    <div className="blog-list">
      {Records.map(record => (
        <BlogPost
          key={record.id}
          title={record.title}
          author={record.author}
          content={record.content}
        />
      ))}
    </div>
  );
};

export default BlogList;
