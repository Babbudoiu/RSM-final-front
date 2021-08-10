import React, { useState } from "react";
import { FormContainer, LandingContainer, LogButton, LogForm, LogInput } from "../../styledComponents";

import { fetchUsers } from "../../utils";
import { createUsers } from "../../utils";


export const UserLogin = ({setUser}) => {
    const [userUsername, setUserUsername] = useState();
    const [userPassword, setUserPassword] = useState();
    const [role, setRole] = useState()
    const [newUser, setNewUser] = useState(false);
  return (
     
    <LandingContainer>
        <LogButton
          type="button"
          onClick={() => setNewUser(!newUser)}
        >
          {newUser ? "Switch To Create" : "Switch To Log In"}
        </LogButton>
      {newUser?
      <FormContainer>
        <LogForm
          onSubmit={(e) => fetchUsers(e, userUsername, userPassword,  setUser)}
        >                     
          <LogInput
            onChange={(e) => setUserUsername(e.target.value)}
            placeholder="name"
          />
         
          <LogInput type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Password"></LogInput>
          <LogButton type="submit">User Login</LogButton>
          
          
        
        </LogForm>

      </FormContainer>
      : <FormContainer>
      <LogForm
        onSubmit={(e) => createUsers(e, userUsername, userPassword,role, setUser)}
      >                     
        <LogInput
          onChange={(e) => setUserUsername(e.target.value)}
          placeholder="User Username"
        /> 
        <LogInput
            onChange={(e) => setRole(e.target.value)}
            placeholder="User Role"
          />
        <LogInput type="password"
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="User Password"></LogInput>
        <LogButton type="submit">User Login</LogButton>
        
        
      
      </LogForm>

    </FormContainer>}
    </LandingContainer>
  );
};