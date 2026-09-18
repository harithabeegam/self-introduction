import { useParams, Link } from "react-router-dom";
import "./UserDetails.css";

function UserDetails() {
  const { id } = useParams();

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

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return (
      <div className="not-found">
        <h2>User Not Found</h2>
        <p>The user you are looking for does not exist.</p>

        <Link to="/">Back to Users</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-card">

        <h1>User Details</h1>

        <h2>{user.name}</h2>

        <p>
          <strong>ID:</strong> {user.id}
        </p>

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

        <Link to="/" className="back-button">
          ← Back to Users
        </Link>

      </div>
    </div>
  );
}

export default UserDetails;