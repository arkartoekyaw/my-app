import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
    return (
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            
              <h2>{ blog.title }</h2><br/>
              <p>{ blog.shortnote }</p>
              <button><Link to={`/blogs/${blog.id}`}>Learn more about {blog.title} </Link></button>
            
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;