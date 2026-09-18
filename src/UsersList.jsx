function UserList() {
  const users = [
    {
      id: 1,
      name: "Haritha Beegam",
      role: "Python  Developer",
      city: "Bangalore",
    },
    {
      id: 2,
      name: "Sanju",
      role: "Java Developer",
      city: "Hyderabad",
    },
    {
      id: 3,
      name: "Chitti",
      role: "React Developer",
      city: "Chennai",
    },
    {
      id: 4,
      name: "Sreekanth",
      role: "Full Stack Developer",
      city: "Pune",
    },
    {
      id: 5,
      name: "Gowthami",
      role: "UI/UX Designer",
      city: "Mumbai",
    },
  ];

  return (
    <div className="user-list">
      <h2>User List</h2>

      <p>Here are our registered users.</p>

      <div className="user-cards">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>

            <p>
              <strong>Role:</strong> {user.role}
            </p>

            <p>
              <strong>City:</strong> {user.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;