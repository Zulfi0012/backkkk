import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [post, setPost] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    image: "",
    tags: ""
  });

  if (!user) {
    return <p className="text-danger">Login required to create a post.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = post.tags.split(",").map(tag => tag.trim());

    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/posts`, {
        ...post,
        tags: tagsArray
      }, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      alert("Post created successfully!");
      navigate("/posts");
    } catch (err) {
      alert("Error creating post.");
    }
  };

  return (
    <div className="container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        <input type="text" placeholder="Title" className="form-control mb-2" required
          value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
        <input type="text" placeholder="Short Description" className="form-control mb-2" required
          value={post.description} onChange={(e) => setPost({ ...post, description: e.target.value })} />
        <textarea rows="5" placeholder="HTML or text content" className="form-control mb-2" required
          value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })}></textarea>
        <input type="text" placeholder="Image URL" className="form-control mb-2"
          value={post.image} onChange={(e) => setPost({ ...post, image: e.target.value })} />
        <input type="text" placeholder="Category" className="form-control mb-2"
          value={post.category} onChange={(e) => setPost({ ...post, category: e.target.value })} />
        <input type="text" placeholder="Tags (comma separated)" className="form-control mb-2"
          value={post.tags} onChange={(e) => setPost({ ...post, tags: e.target.value })} />
        <button type="submit" className="btn btn-primary w-100">Publish Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
