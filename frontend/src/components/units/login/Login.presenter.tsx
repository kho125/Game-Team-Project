import * as S from "./Login.styles";

export default function LoginUI() {
  return (
    <S.Wrapper>
      <S.LoginSignupWrapper>
        <S.LoginBtn>로그인</S.LoginBtn>
        <S.SignupBtn>회원가입</S.SignupBtn>
      </S.LoginSignupWrapper>
    </S.Wrapper>
  );
}
