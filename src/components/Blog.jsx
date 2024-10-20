const Blog = ({ blog, onLike, onDelete }) => {
  return (
    <div>
      <p>Title: {blog.title}</p>
      <p>Author: {blog.author}</p>
      <p>Url: {blog.url}</p>
      <p>Likes: {blog.likes}</p>
      <button onClick={() => onLike(blog.id)}>Likes</button>
      <button onClick={() => onDelete(blog.id)}>Delete</button>
    </div>
  );
};

export default Blog;
