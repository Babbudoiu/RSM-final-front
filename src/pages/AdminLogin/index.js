import React, { useState } from "react";
import { FormContainer, LandingContainer, LogButton, LogForm, LogInput } from "../../styledComponents";
import { fetchAdmin } from "../../utils";

export const AdminLogin = ({setAdmin}) => {
    const [adminUsername, setAdminUsername] = useState();
    const [adminPassword, setAdminPassword] = useState();
  return (
    <div className="container">
    <LandingContainer>
       <h1>Restaurant Manager System</h1><p>v 0.1</p><p>build 0.001</p>
      <FormContainer>
        <LogForm
          onSubmit={(e) => fetchAdmin(e, adminUsername, adminPassword, setAdmin)}
        >
          
          <LogInput
            onChange={(e) => setAdminUsername(e.target.value)}
            placeholder="Admin Username"
          />
          <LogInput type="password"
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Admin Password"></LogInput>
          <LogButton type="submit">Admin Login</LogButton>
          
         </LogForm>
      </FormContainer>
    </LandingContainer>
    </div>
  );
};