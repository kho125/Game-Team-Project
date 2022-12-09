import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerLogo onClick={props.onClickLogo}>Game!!</S.InnerLogo>
        <S.SigninUp>
          <S.InnerBtn onClick={props.onClickMoveToLogin}>로그인</S.InnerBtn>
          <S.InnerBtn onClick={props.onClickMoveToSignup}>회원가입</S.InnerBtn>
        </S.SigninUp>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
