import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="card h-100">
      <img
        src={post.thumbnail || "https://via.placeholder.com/600x400"}
        className="card-img-top"
        alt={post.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.description?.substring(0, 100)}...
        </p>
        <span className="badge bg-secondary mb-2">{post.category || "General"}</span>
        <br />
        <Link to={`/posts/${post._id}`} className="btn btn-primary btn-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
