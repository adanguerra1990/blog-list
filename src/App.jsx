import { useEffect } from "react";
import { useState } from "react";
import blogServices from "./services/blogs";
import Blog from "./components/Blog";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    blogServices.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  const addBlog = (event) => {
    event.preventDefault();

    const newBlog = {
      title: title,
      author: author,
      url: url,
      likes: likes,
    };

    blogServices.create(newBlog).then((returnedBlog) => {
      console.log("returnedBlog", returnedBlog);
      setBlogs(blogs.concat(returnedBlog));
      setTitle("");
      setAuthor("");
      setUrl("");
    });
  };

  const handleDelete = (id) => {
    blogServices.deleteEntry(id)
      .then(() => {
        const updatedBlog = blogs.filter((blog) => blog.id !== id)
        console.log('delete', updatedBlog)
        setBlogs(updatedBlog)
      })
  }

  return (
    <>
      <h1>Blogs</h1>
      <h2>Create New</h2>
      <form onSubmit={addBlog}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            name="Author"
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          <label>Url</label>
          <input
            type="text"
            name="Url"
            value={url}
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
      <div>
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} onDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default App;
