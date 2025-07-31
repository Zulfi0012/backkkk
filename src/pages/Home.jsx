import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/posts`)
      .then(res => setPosts(res.data))
      .catch(err => console.error("Posts Error:", err));

    axios.get(`${import.meta.env.VITE_API_BASE_URL}/videos`)
      .then(res => setVideos(res.data))
      .catch(err => console.error("Videos Error:", err));
  }, []);

  return (
    <div>
      <h2 className="mb-4">Latest Posts</h2>
      <div className="row">
        {posts.map(post => (
          <div key={post._id} className="col-md-4 mb-4">
            <PostCard post={post} />
          </div>
        ))}
      </div>

      <h2 className="mt-5 mb-4">Latest Videos</h2>
      <div className="row">
        {videos.map(video => (
          <div key={video._id} className="col-md-4 mb-4">
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
