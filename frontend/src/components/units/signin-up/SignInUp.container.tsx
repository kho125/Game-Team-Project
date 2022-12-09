import { useRouter } from "next/router";
import SignInUpUI from "./SignInUp.presenter";

export default function SignInUp() {
  const router = useRouter();

  function onClickMoveToLogin() {
    router.push("/login");
  }

  function onClickMoveToSignup() {
    router.push("/signup");
  }

  return (
    <SignInUpUI
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignup={onClickMoveToSignup}
    />
  );
}
