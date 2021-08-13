import { useState } from "react";

const Update = ({ blog }) => {
  const { id } = blog.id;

  const [title, setTitle] = useState(blog.title);
  const [body, setBody] = useState(blog.body);
  const [author, setAuthor] = useState(blog.author);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const _blog = { id, title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_blog)
    }).then(() => {
      console.log('blog updated');
      setIsPending(false);
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      { blog &&

        // setTitle(blog.title),

        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="borge">borge</option>
            <option value="pot">pot</option>
            <option value="yoshi">yoshi</option>
          </select>
          {!isPending && <button>Update Blog</button>}
          {isPending && <button disabled>Updating blog...</button>}
        </form>
      }
    </div>
  );
}

export default Update;