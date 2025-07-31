import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentSection from "../components/CommentSection";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error("Post fetch error:", err));
  }, [id]);

  if (!post) return <p>Loading post...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      {post.image && <img src={post.image} className="img-fluid my-3" alt={post.title} />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      {post.tags && post.tags.length > 0 && (
        <div className="mt-3">
          <strong>Tags:</strong>{" "}
          {post.tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary me-2">{tag}</span>
          ))}
        </div>
      )}
      <CommentSection postId={id} type="post" />
    </div>
  );
};

export default PostDetail;
