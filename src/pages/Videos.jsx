import { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../components/VideoCard";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/videos`)
      .then(res => setVideos(res.data))
      .catch(err => console.error("Videos Error:", err));
  }, []);

  return (
    <div>
      <h2 className="mb-4">All Videos</h2>
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

export default Videos;
