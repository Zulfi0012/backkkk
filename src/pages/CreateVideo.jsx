import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateVideo = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [video, setVideo] = useState({
    title: "",
    description: "",
    category: "",
    thumbnail: "",
    videoUrl: ""
  });

  if (!user) {
    return <p className="text-danger">Login required to post a video.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/videos`, video, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      alert("Video uploaded!");
      navigate("/videos");
    } catch (err) {
      alert("Error uploading video.");
    }
  };

  return (
    <div className="container">
      <h2>Post a Video</h2>
      <form onSubmit={handleSubmit} className="w-75 mx-auto">
        <input type="text" placeholder="Title" className="form-control mb-2" required
          value={video.title} onChange={(e) => setVideo({ ...video, title: e.target.value })} />
        <input type="text" placeholder="Description" className="form-control mb-2"
          value={video.description} onChange={(e) => setVideo({ ...video, description: e.target.value })} />
        <input type="text" placeholder="Category" className="form-control mb-2"
          value={video.category} onChange={(e) => setVideo({ ...video, category: e.target.value })} />
        <input type="text" placeholder="Thumbnail URL" className="form-control mb-2"
          value={video.thumbnail} onChange={(e) => setVideo({ ...video, thumbnail: e.target.value })} />
        <input type="text" placeholder="Video URL (YouTube/Drive link etc.)" className="form-control mb-2"
          value={video.videoUrl} onChange={(e) => setVideo({ ...video, videoUrl: e.target.value })} />
        <button type="submit" className="btn btn-success w-100">Upload Video</button>
      </form>
    </div>
  );
};

export default CreateVideo;
