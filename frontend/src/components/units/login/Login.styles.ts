import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #fff;
  color: #000;
`;

export const LoginWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  height: 100%;
  /* background-color: #f1f1f1; */

`

export const LoginHeader = styled.div`
  margin: 100px 0 40px 0;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
`
export const Infor = styled.div``

export const Title = styled.div`
  font-size: 22px;
  color: #757C9A;
`

export const EmailInput = styled.input`
  margin-bottom: 34px;
  width: 300px;
  height: 36px;
  border: none;
  border-bottom: 2px solid #000;
  font-size: 16px;
  outline: none;
  :focus {
    border-bottom: 2px solid #06f;
  }
`

export const PasswordInput = styled.input`
  margin-bottom: 20px;
  width: 300px;
  height: 36px;
  border: none;
  border-bottom: 2px solid #000;
  font-size: 16px;
  outline: none;
  :focus {
    border-bottom: 2px solid #06f;
  }
`

export const LoginBtn = styled.button`
  width: 300px;
  height: 42px;
  border: none;
  font-size: 20px;
  background-color: #ff4d4d;
  cursor: pointer;
  color: #fff;
  transition: .4s;
  :hover {
    background-color: #ff3838;
    font-size: 22px;
    transition: .4s;
  }
`