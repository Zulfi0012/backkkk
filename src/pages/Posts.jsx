import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/posts`)
      .then(res => setPosts(res.data))
      .catch(err => console.error("Posts Error:", err));
  }, []);

  return (
    <div>
      <h2 className="mb-4">All Posts</h2>
      <div className="row">
        {posts.map(post => (
          <div key={post._id} className="col-md-4 mb-4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
