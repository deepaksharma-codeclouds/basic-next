"use client";
import { useEffect, useState } from "react";

const UsersPage = () => {

    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch('/api/users')
        .then(res => res.json())
        .then(data =>{setUser(data);
      console.log(user);
    }); },[]);
    
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map(user => (<li key={user.id}>
            {user.name}
          </li>))}
        </ul>
    </div>
  );
}

export default UsersPage;
