import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Task12.css";

function Task12() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 5;

const AllItems = [
  {
    id: 1,
    name: "Haritha",
    email: "haritha@gmail.com",
    city: "Bangalore",
    role: "Developer",
  },
  {
    id: 2,
    name: "Sreekanth",
    email: "sreekanth@gmail.com",
    city: "Hyderabad",
    role: "Designer",
  },
  {
    id: 3,
    name: "Chitti",
    email: "chitti@gmail.com",
    city: "Chennai",
    role: "Tester",
  },
  {
    id: 4,
    name: "Sanju",
    email: "sanju@gmail.com",
    city: "Mumbai",
    role: "Analyst",
  },
  {
    id: 5,
    name: "Priya",
    email: "priya@gmail.com",
    city: "Delhi",
    role: "Manager",
  },
  {
    id: 6,
    name: "Arjun",
    email: "arjun@gmail.com",
    city: "Pune",
    role: "Developer",
  },
  {
    id: 7,
    name: "Sneha",
    email: "sneha@gmail.com",
    city: "Bangalore",
    role: "Designer",
  },
  {
    id: 8,
    name: "Kiran",
    email: "kiran@gmail.com",
    city: "Hyderabad",
    role: "Tester",
  },
  {
    id: 9,
    name: "Divya",
    email: "divya@gmail.com",
    city: "Chennai",
    role: "Analyst",
  },
  {
    id: 10,
    name: "Vijay",
    email: "vijay@gmail.com",
    city: "Mumbai",
    role: "Manager",
  },
  {
    id: 11,
    name: "Pooja",
    email: "pooja@gmail.com",
    city: "Delhi",
    role: "Developer",
  },
  {
    id: 12,
    name: "Rohit",
    email: "rohit@gmail.com",
    city: "Pune",
    role: "Designer",
  },
  {
    id: 13,
    name: "Swathi",
    email: "swathi@gmail.com",
    city: "Bangalore",
    role: "Tester",
  },
  {
    id: 14,
    name: "Naveen",
    email: "naveen@gmail.com",
    city: "Hyderabad",
    role: "Analyst",
  },
  {
    id: 15,
    name: "Keerthi",
    email: "keerthi@gmail.com",
    city: "Chennai",
    role: "Manager",
  },
  {
    id: 16,
    name: "Akash",
    email: "akash@gmail.com",
    city: "Mumbai",
    role: "Developer",
  },
  {
    id: 17,
    name: "Deepika",
    email: "deepika@gmail.com",
    city: "Delhi",
    role: "Designer",
  },
  {
    id: 18,
    name: "Manoj",
    email: "manoj@gmail.com",
    city: "Pune",
    role: "Tester",
  },
  {
    id: 19,
    name: "Sanjana",
    email: "sanjana@gmail.com",
    city: "Bangalore",
    role: "Analyst",
  },
  {
    id: 20,
    name: "Varun",
    email: "varun@gmail.com",
    city: "Hyderabad",
    role: "Manager",
  },
];
  const totalPage = Math.ceil(AllItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = AllItems.slice(startIndex, endIndex);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPage) {
      setSearchParams({ page: pageNum });
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPage) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="task12-container">
      <h1> Our Team Members </h1>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from(
          { length: totalPage },
          (_, index) => index + 1
        ).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => goToPage(pageNum)}
            className={currentPage === pageNum ? "active" : ""}
          >
            {pageNum}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>

      <p className="page-info">
        Page {currentPage} of {totalPage}
      </p>
    </div>
  );
}

export default Task12;