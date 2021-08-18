import React, { useState } from "react";
// import { FormContainer, LandingContainer, LogButton, LogForm, LogInput } from "../../styledComponents";
import { fetchAdmin } from "../../utils";
import Footer from "../../components/Footer";

export const AdminLogin = ({ setAdmin }) => {
  const [adminUsername, setAdminUsername] = useState();
  const [adminPassword, setAdminPassword] = useState();
  return (
    <div className="container">
      <div className="children-container">
        <h1>Restaurant Manager System</h1>
        <p>v 0.1</p>
        <p>build 0.001</p>
        <form
          className="logForm"
          onSubmit={(e) =>
            fetchAdmin(e, adminUsername, adminPassword, setAdmin)
          }
        >
          <input
            className="logInput"
            onChange={(e) => setAdminUsername(e.target.value)}
            placeholder="Admin Username"
          />
          <input
            className="logInput"
            type="password"
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Admin Password"
          ></input>
          <button className="logBtn" type="submit">
            Admin Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
