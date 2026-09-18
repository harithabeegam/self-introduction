import { Link } from "react-router-dom";
import "./UserList.css";

function UserList() {
  const users = [
    {
      id: 1,
      name: "Haritha Beegam",
      email: "haritha@gmail.com",
      phone: "9876543210",
      city: "Bangalore",
      role: "React Developer",
    },
    {
      id: 2,
      name: "Sanju",
      email: "sanju@gmail.com",
      phone: "9876543211",
      city: "Hyderabad",
      role: "Java Developer",
    },
    {
      id: 3,
      name: "Chitti",
      email: "chitti@gmail.com",
      phone: "9876543212",
      city: "Chennai",
      role: "UI Developer",
    },
    {
      id: 4,
      name: "Sreekanth",
      email: "sreekanth@gmail.com",
      phone: "9876543213",
      city: "Pune",
      role: "Full Stack Developer",
    },
    {
      id: 5,
      name: "Gowthami",
      email: "gowthami@gmail.com",
      phone: "9876543214",
      city: "Mumbai",
      role: "UI/UX Designer",
    },
    {
      id: 6,
      name: "Rahul",
      email: "rahul@gmail.com",
      phone: "9876543215",
      city: "Delhi",
      role: "Backend Developer",
    },
    {
      id: 7,
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876543216",
      city: "Kolkata",
      role: "Frontend Developer",
    },
    {
      id: 8,
      name: "Kiran",
      email: "kiran@gmail.com",
      phone: "9876543217",
      city: "Mumbai",
      role: "Python Developer",
    },
    {
      id: 9,
      name: "Anjali",
      email: "anjali@gmail.com",
      phone: "9876543218",
      city: "Vijayawada",
      role: "Software Engineer",
    },
    {
      id: 10,
      name: "Vamsi",
      email: "vamsi@gmail.com",
      phone: "9876543219",
      city: "Vizag",
      role: "Web Developer",
    },
  ];

  return (
    <div className="user-list-page">
      <h1>Our Users List</h1>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>

            <p>
              <strong>City:</strong> {user.city}
            </p>

            <p>
              <strong>Role:</strong> {user.role}
            </p>

            <Link
              to={`/users/${user.id}`}
              className="details-button"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;