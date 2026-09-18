import { useEffect, useRef, useState } from "react";
import "./Task6.css";

function Task6() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  // Fetch users from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load user data. Please try again.");
        setLoading(false);
      });
  }, []);

  // Open hidden file input
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="task6">

      <header className="page-header">
        <p className="tag">React Practice</p>
        <h1>API & Image Upload</h1>
        <p>
          Fetch user details using useEffect and upload an image using useRef.
        </p>
      </header>
      {/* Image Upload Section */}
      <section className="upload-section">
        <div className="section-heading">
          <h2>Profile Image</h2>
          <p>Select an image from your device and preview it here.</p>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden-input"
        />

        <div className="image-preview">
          {image ? (
            <img src={image} alt="Selected profile" />
          ) : (
            <div className="empty-preview">
              <span>🖼️</span>
              <p>No image selected</p>
            </div>
          )}
        </div>

        <button
          className="upload-button"
          onClick={handleUploadClick}
        >
          {image ? "Change Image" : "Upload Image"}
        </button>

      </section>

      {/* API Section */}
      <section className="users-section">

        <div className="section-heading">
          <h2>Users</h2>

          <p>
            User details fetched from JSONPlaceholder API.
          </p>
        </div>

        {loading && (
          <div className="message">
            Loading user data...
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="user-grid">

            {users.map((user) => (
              <div className="user-card" key={user.id}>

                <div className="user-top">

                  <div className="user-avatar">
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{user.name}</h3>
                    <span>@{user.username}</span>
                  </div>

                </div>

                <div className="user-details">

                  <p>
                    <strong>Email</strong>
                    {user.email}
                  </p>

                  <p>
                    <strong>Phone</strong>
                    {user.phone}
                  </p>

                  <p>
                    <strong>Website</strong>
                    {user.website}
                  </p>

                  <p>
                    <strong>Company</strong>
                    {user.company.name}
                  </p>

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

    </div>
  );
}

export default Task6;