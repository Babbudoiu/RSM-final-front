import styled from "styled-components";
import "../App.css";

export const LogButton = styled.button`
width: 300px;
height: 5vh;
margin: 5px;
background: var(--secondary);
font-weight: 700;
font-size: 16px;
color: var(--primary);
border: none;
border-radius: 5px;
cursor: pointer;
`;

export const LogForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const LogInput = styled.input`
  width: 300px;
  padding: 10px;
  margin: 5px;
`;

export const FormContainer = styled.div`
  background-color: var(--white);
  border-radius: 5px;
  padding: 10px;
  text-align: center;
`;

export const LandingContainer = styled.div`
  font-family: sans-serif;
  background-color: var(--primary);
  color: var(--white);
  text-align: center;
  height: 100%;
`;