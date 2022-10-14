import styled from "styled-components";

export const containerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  background-color: #39393a;
  border-radius: 35px;
`;

export const buttonLogin = styled.button`
  display: flex;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  align-items: center;  
  width: 50%;
  height: auto;
  background-color: #63b0cd;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #cfd2b2;
    color: black;
  }
`;

export const logoFacebook = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;
