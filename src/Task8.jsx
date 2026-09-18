import { createContext, useContext, useState } from "react";
import "./Task8.css";

const AppContext = createContext();

function Task8() {
  const [theme, setTheme] = useState("light");

  const user = {
    name: "Haritha",
    email: "haritha@example.com",
    city: "Bangalore",
    role: "React Developer",
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`task8 ${theme}`}>
      <h1>Implement useContext Hook</h1>
        <Parent />
      </div>
    </AppContext.Provider>
  );
}

function Parent() {
  return (
   <div className="component-box parent-box">
      <h2>Parent Component</h2>

      <Child />
    </div>
  );
}

function Child() {
  return (
   <div className="component-box child-box">
      <h2>Child Component</h2>

      <GrandChild />
    </div>
  );
}

function GrandChild() {
  const { user, theme, setTheme } = useContext(AppContext);

  return (
  <div className="component-box grand-child">
      <h2>GrandChild Component</h2>

      <p className="theme-text">
        Current Theme: <strong>{theme}</strong>
      </p>

      <button
        className="theme-button"
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <div className="user-card">
        <h3>User Information</h3>

        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>City:</strong> {user.city}
        </p>

        <p>
          <strong>Role:</strong> {user.role}
        </p>
      </div>
    </div>
  );
}

export default Task8;