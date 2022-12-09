import * as S from "./SignInUp.styles";

export default function SignInUpUI(props: any) {
  return (
    <S.Wrapper>
      <S.LoginSignupWrapper>
        <S.LoginBtn onClick={props.onClickMoveToLogin}>로그인</S.LoginBtn>
        <S.SignupBtn onClick={props.onClickMoveToSignup}>회원가입</S.SignupBtn>
      </S.LoginSignupWrapper>
    </S.Wrapper>
  );
}
