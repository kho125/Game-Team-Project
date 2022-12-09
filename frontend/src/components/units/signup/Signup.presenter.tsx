import * as S from "./Signup.styles";

export default function SignupUI() {
  return (
    <S.Wrapper>
      <S.SignupWrapper>
        <S.SignupHeader>회원가입</S.SignupHeader>
        <S.Infor>
          <S.Title>이메일</S.Title>
          <S.EmailInput
            placeholder="이메일을 입력해주세요."
            type="text"
            name="email"
          />
          <S.Title>이름</S.Title>
          <S.NameInput
            placeholder="이름을 입력해주세요."
            type="text"
            name="name"
          />
          <S.Title>비밀번호</S.Title>
          <S.PasswordInput
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="password"
          />
          <S.Title>비밀번호 확인</S.Title>
          <S.Password2Input
            placeholder="비밀번호를 입력해주세요."
            type="password"
            name="repassword"
          />
        </S.Infor>
      </S.SignupWrapper>
    </S.Wrapper>
  );
}
