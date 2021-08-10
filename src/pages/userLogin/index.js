import React, { useState } from "react";
import { FormContainer, LandingContainer, LogButton, LogForm, LogInput } from "../../styledComponents";

import { fetchUsers } from "../../utils";
import { createUsers } from "../../utils";


export const UserLogin = ({setUser}) => {
    const [userUsername, setUserUsername] = useState();
    const [userPassword, setUserPassword] = useState();
    const [newUser, setNewUser] = useState(false);
  return (
     
    <LandingContainer>
        <LogButton
          type="button"
          onClick={() => setNewUser(!newUser)}
        >
          {newUser ? "Switch To Log In" : "Switch To Create User"}
        </LogButton>
      {newUser?
      <FormContainer>
        <LogForm
          onSubmit={(e) => fetchUsers(e, userUsername, userPassword, setUser)}
        >                     
          <LogInput
            onChange={(e) => setUserUsername(e.target.value)}
            placeholder="Admin Username"
          />
          <LogInput type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Admin Password"></LogInput>
          <LogButton type="submit">Admin Login</LogButton>
          
          
        
        </LogForm>

      </FormContainer>
      : <FormContainer>
      <LogForm
        onSubmit={(e) => createUsers(e, userUsername, userPassword, setUser)}
      >                     
        <LogInput
          onChange={(e) => setUserUsername(e.target.value)}
          placeholder="Admin Username"
        />
        <LogInput type="password"
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Admin Password"></LogInput>
        <LogButton type="submit">Admin Login</LogButton>
        
        
      
      </LogForm>

    </FormContainer>}
    </LandingContainer>
  );
};