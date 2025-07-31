import { useState } from "react";

const CommentSection = ({ postId, type }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter out comments containing links
    if (input.includes("http") || input.includes("www")) {
      alert("Links are not allowed in comments.");
      return;
    }

    const newComment = {
      name: user?.name || name || "Anonymous",
      content: input,
    };

    // Just add to UI for now — backend comment API can be integrated here
    setComments([newComment, ...comments]);
    setInput("");
    if (!user) setName("");
  };

  return (
    <div className="mt-4">
      <h5>Comments</h5>
      <form onSubmit={handleSubmit}>
        {!user && (
          <input
            type="text"
            placeholder="Your Name"
            className="form-control mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <textarea
          className="form-control mb-2"
          rows="3"
          placeholder="Write your comment..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary btn-sm">Post Comment</button>
      </form>

      <div className="mt-3">
        {comments.map((c, idx) => (
          <div key={idx} className="border p-2 mb-2">
            <strong>{c.name}</strong>
            <p className="mb-0">{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
