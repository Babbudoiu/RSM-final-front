import React, { useState } from "react";
import { FormContainer, LandingContainer, LogButton, LogForm, LogInput } from "../../styledComponents";
import { fetchUsers } from "../../utils";
import { createUsers } from "../../utils";


export const UserLogin = ({setUser, setAdmin}) => {
    const [userUsername, setUserUsername] = useState();
    const [userPassword, setUserPassword] = useState();
    const [role, setRole] = useState()
    const [setting, setSetting] = useState(1);
  return (
    <div className="container">
    <LandingContainer>
        <LogButton
          type="button"
          onClick={() => setSetting(1)}
        >
          Log in
        </LogButton>
        
        <LogButton
          type="button"
          onClick={() => setSetting(2)}
        >
          Create User
        </LogButton>
        <LogButton
          type="button"
          onClick={() => setAdmin()}
        >
          Admin Log Out
        </LogButton>
        
{setting ===1?
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
          </FormContainer>: <></>}
          {setting ===2?
      <FormContainer>
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
    </FormContainer> : <></>}
    </LandingContainer>
    </div>
  );
};