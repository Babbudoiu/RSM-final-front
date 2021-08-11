import React, { useState } from "react";
import { FormContainer, LandingContainer, LogButton, LogForm, LogInput } from "../../styledComponents";
import { fetchAdmin } from "../../utils";
import Footer from "../../components/Footer";

export const AdminLogin = ({setAdmin}) => {
    const [adminUsername, setAdminUsername] = useState();
    const [adminPassword, setAdminPassword] = useState();
  return (
    <LandingContainer>
      
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
      <Footer />
    </LandingContainer>
  );
};