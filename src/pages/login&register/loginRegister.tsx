import LoginMobile from "./components/LoginMobile";
import LoginDeckstock from "./components/LoginDeckstock";

export default function LoginRegister() {
  return (
    <>
      {/* ============== LOGIN AND REGISTER SCREEN OFFCANVAS FOR MOBILE VIEW ========== */}
      <LoginMobile />
      {/*======= LOGIN AND REGISTER MODAL SCREEN FOR DESKTOP ========= */}
      <LoginDeckstock />
    </>
  );
}
