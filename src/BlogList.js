import React from "react";

const BlogList = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-preview">
            {items.map((item) => {
              return (
                <>
                  <a href={`details/${item.id}`}>
                    <h2 className="post-title">{item.title}</h2>
                    <h4 className="post-subtitle">{item.subtitle}</h4>
                    <p className="post-meta">Posted by Author</p>
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
