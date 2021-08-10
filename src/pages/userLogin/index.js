import React, { useState } from "react";
import { LandingContainer, FormContainer, LogButton, LogForm, LogInput } from "../../styledComponents";



export const Landing = ({  }) => {
  
  
  return (
    <LandingContainer>
      
      <FormContainer>
        <LogForm
          onSubmit={(e) => fetchadmin(e, email, userName, pass, setUser)}
        >
          
          <LogInput
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Admin Username"
          />
          <LogInput type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Admin Password"></LogInput>
          <LogButton type="submit">Admin Login</LogButton>
          
          
        
        </LogForm>
      </FormContainer>
    </LandingContainer>
  );
};