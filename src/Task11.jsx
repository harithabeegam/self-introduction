import { useRef, useState } from "react";
import "./Task11.css";

function Task11() {
  const fileInputRef = useRef(null);

  const [image, setImage] = useState("");
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  const handleComment = () => {
    if (comment.trim() === "") {
      return;
    }

    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div className="task11">
      <div className="post-card">

        <h1>Image Post</h1>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          hidden
        />

        {image ? (
          <div className="image-section">
            <img src={image} alt="Uploaded" />

            <button
              className="upload-button"
              onClick={handleUploadClick}
            >
              Change Image
            </button>
          </div>
        ) : (
          <div className="upload-section">
            <p>Upload an image to get started</p>

            <button
              className="upload-button"
              onClick={handleUploadClick}
            >
              Upload Image
            </button>
          </div>
        )}

        <div className="like-section">
          <button
            className={liked ? "like-button liked" : "like-button"}
            onClick={handleLike}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill={liked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>

            <span>{liked ? "Liked" : "Like"}</span>
          </button>

          <span className="like-count">
            {likeCount} {likeCount === 1 ? "Like" : "Likes"}
          </span>
        </div>

        <div className="comment-section">
          <h2>Comments</h2>

          <div className="comment-input">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button onClick={handleComment}>
              Add Comment
            </button>
          </div>

          {comments.length === 0 ? (
            <p className="no-comments">
              No comments yet.
            </p>
          ) : (
            <div className="comments-list">
              {comments.map((item, index) => (
                <div className="comment" key={index}>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Task11;


