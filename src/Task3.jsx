import {useState} from 'react';
import "./Task3.css";
function Task3(){
    const [isLogginedIn,SetLogginedIn] = useState(true);
    const users=[
        {id:1,name:"Haritha Beegam",age:24,city:"Banglore",email:"haritha.beegam@example.com",role:"Python Developer",},
        {id:2,name:"Sanju",age:22,city:"Hyderabad",email:"sanju@example.com",role:"JavaScript Developer",},
        {id:3,name:"Chitti",age:25,city:"Chennai",email:"chitti@example.com",role:"React Developer",},
        {id:4,name:"Sreekanth",age:26,city:"Pune",email:"sreekanth@example.com",role:"Full Stack Developer",},
        {id:5,name:"Gowthami",age:23,city:"Mumbai",email:"gowthami@example.com",role:"UI/UX Designer",},
    ];
    return (
        <div className="task3">
          <h1>Team Members Details</h1>
          {isLogginedIn ?(
            <div>
                <h2>Welcome to the Team Members Details Page</h2>
                <button onClick={()=>SetLogginedIn(false)}>Logout</button>
                <h2>Team Members</h2>
                <div className="user-list">
                    { users.map((user) => (
                            <div className="user-card" key={user.id}>
                                <h3>{user.name}</h3>
                                <p><strong>Age:</strong> {user.age}</p>
                                <p><strong>City:</strong> {user.city}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Role:</strong> {user.role}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
          ) : (
            <div>
                <h2>Please log in to view team members.</h2>
                <button onClick={()=>SetLogginedIn(true)}>
                    Login
                </button>
            </div>
          )}
        </div>
    );
}
export default Task3;