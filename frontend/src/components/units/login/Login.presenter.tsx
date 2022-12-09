import * as S from "./Login.styles";

export default function LoginUI() {
  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.LoginHeader>로그인</S.LoginHeader>
        <S.Infor>
          <S.Title>이메일</S.Title>
          <S.EmailInput
            placeholder="이메일을 입력해주세요."
            type="text"
            name="email"
          />
          <S.Title>비밀번호</S.Title>
          <S.PasswordInput
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="password"
          />
          <S.LoginBtn>로그인하기</S.LoginBtn>
        </S.Infor>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
