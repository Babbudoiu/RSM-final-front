import React, { useState } from "react";
import { fetchUsers } from "../../utils";
import { createUsers } from "../../utils";

export const UserLogin = ({setUser, setAdmin}) => {
    const [userUsername, setUserUsername] = useState();
    const [userPassword, setUserPassword] = useState();
    const [role, setRole] = useState()
    const [setting, setSetting] = useState(1);
  return (
    <div className="container">

        <button 
          className="logBtn"
          type="button"
          onClick={() => setSetting(1)}
        >
          Log in
        </button>
        
        <button
          className="logBtn"
          type="button"
          onClick={() => setSetting(2)}
        >
          Create User
        </button>
        <button
          className="logBtn"
          type="button"
          onClick={() => setAdmin()}
        >
          Admin Log Out
        </button>
        
{setting ===1?
      <div className="form-container">
        <form className="logForm"
          onSubmit={(e) => fetchUsers(e, userUsername, userPassword,  setUser)}
        >                     
          <input className="logInput"
            onChange={(e) => setUserUsername(e.target.value)}
            placeholder="name"
          />
         
          <input className="logInput" type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Password"></input>
          <button className="logBtn" type="submit">User Login</button>
          </form>
          </div>: <></>}
          {setting ===2?
      <div className="form-container">
      <form className="logForm"
        onSubmit={(e) => createUsers(e, userUsername, userPassword,role, setUser)}
      >                     
        <input className="logInput"
          onChange={(e) => setUserUsername(e.target.value)}
          placeholder="User Username"
        /> 
        <input className="logInput"
            onChange={(e) => setRole(e.target.value)}
            placeholder="User Role"
          />
        <input className="logInput" type="password"
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="User Password"></input>
        <button className="logBtn" type="submit">User Login</button>
        
    </form>
    </div> : <></>}

    </div>
  );
};