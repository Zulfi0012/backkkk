import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="card h-100">
      <img
        src={video.thumbnail || "https://via.placeholder.com/600x400"}
        className="card-img-top"
        alt={video.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{video.title}</h5>
        <p className="card-text">
          {video.description?.substring(0, 100)}...
        </p>
        <span className="badge bg-success mb-2">{video.category || "General"}</span>
        <br />
        <Link to={`/videos/${video._id}`} className="btn btn-success btn-sm">
          Watch / Download
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
