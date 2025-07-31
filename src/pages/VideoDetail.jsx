import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentSection from "../components/CommentSection";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/videos/${id}`)
      .then(res => setVideo(res.data))
      .catch(err => console.error("Video fetch error:", err));
  }, [id]);

  if (!video) return <p>Loading video...</p>;

  return (
    <div>
      <h2>{video.title}</h2>
      <div className="ratio ratio-16x9 mb-3">
        <iframe
          src={video.videoUrl}
          title={video.title}
          allowFullScreen
        />
      </div>
      <p>{video.description}</p>
      <CommentSection postId={id} type="video" />
    </div>
  );
};

export default VideoDetail;
