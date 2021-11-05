import styled from "styled-components";

export const StateBar =  styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LoginBtn = styled.button`
  margin: 5px;
  padding: 5px;
  width: 100px;

  color: white;
  font-size: 15px;
  text-transform: uppercase;
  background-color: #30B8AE;

  border: solid 2px grey;
  border-radius: 3px;

  cursor: pointer;

  &:hover {
    color: black;
  }
`

export const LogoutBtn = styled.button`
  margin: 5px;
  padding: 5px;
  width: 100px;

  color: white;
  font-size: 15px;
  text-transform: uppercase;
  background-color: crimson;

  border: solid 2px grey;
  border-radius: 3px;

  cursor: pointer;

  &:hover {
    color: black;
  }
`

export const LoginState = styled.button`
  margin: 5px;
  padding: 5px;
  width: 250px;

  color: white;
  font-size: 25px;
  text-transform: uppercase;
  /* background-color: #30B8AE; */

  border: solid 2px grey;
  border-radius: 31px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.5);
  -moz-box-shadow:    2px 2px 5px 0px rgba(50, 50, 50, 0.5);
  box-shadow:         2px 2px 5px 0px rgba(50, 50, 50, 0.5);
`

export const Button = styled.button`
  margin: 5px;
  width: 40px;
  height: 40px;

  font-size: 25px;

  border: solid 2px black;
  border-radius: 50%;

  cursor: pointer;
`

export const ResetBtn = styled.button`
  margin-top: 15px;
  width: 150px;
  height: 40px;

  font-size: 18px;

  border: solid 2px black;
  border-radius: 10px;

  cursor: pointer;
`