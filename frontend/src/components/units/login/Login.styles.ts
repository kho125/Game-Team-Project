import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #fff;
`;

export const LoginSignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginBtn = styled.button`
  margin-right: 100px;
  min-width: 500px;
  height: 120px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 50px;
  transition: .5s;
  cursor: pointer;
  :hover {
    min-width: 600px;
    height: 180px;
    transition: .5s;
  }
`

export const SignupBtn = styled.button`
  min-width: 500px;
  height: 120px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 50px;
  transition: .5s;
  cursor: pointer;
  :hover {
    min-width: 600px;
    height: 180px;
    transition: .5s;
  }
`