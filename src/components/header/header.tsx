import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginGoogle from "../../pages/login&register/components/commonComponents/LoginGoogle";
import LoginRegister from "../../pages/login&register/loginRegister";
import api from "../../services/api";
import BigLogo from "../../style/images/Icons/craftyart_logo.png";
import SmallLogo from "../../style/images/Icons/craftysmall.png";
import MainSerchbar from "../commonComponents/MainSerchbar";
import UserProfile from "./components/UserProfile";
import { consoleShow } from "../../commonFunction/console";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("userProfile");
  const [userProfile, setUserProfile] = useState<any>(null);
  const [uId, setuId] = useState<any>("");
  const [profileLoading, setProfileLoading] = useState<boolean>(false);
  const [imageBaseUrl, setImageBaseUrl] = useState<any>(null);
  const getData = localStorage.getItem("userProfile");
  console.log("getData: ", getData);
  useEffect(() => {
    const getData = localStorage.getItem("userProfile");
    setuId(getData);
    setProfileLoading(true);
  }, []);

  // localStorage.clear();
  useEffect(() => {
    if (uId == "") {
      setUserProfile(null);
    } else fetchData();
  }, [uId, getData]);

  const fetchData = async () => {
    const getUserData: any = await api.getUser({
      key: "qwfsegxdhbxfjhncf",
      device_id: "",
      email: uId,
    });
    consoleShow("getUserData", getUserData);
    setImageBaseUrl(getUserData?.url);
    setUserProfile(getUserData?.user);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-light position-relative h-100">
          <div className="container-fluid ">
            {/* ========LOGO FOR DESKTOP====== */}
            <div className="d-none d-sm-block">
              <a
                className="navbar-brand navbar_logo_desktop"
                onClick={() => navigate(`/`, { replace: true })}
              >
                <img src={BigLogo} alt="logo" className="img-fluid" />
              </a>
            </div>
            {/* ========LOGO FOR MOBILE VIEW====== */}
            <div className="d-block d-sm-none">
              <Link to="/" className="navbar-brand navbar_logo_mobile">
                <img src={SmallLogo} alt="logo" className="img-fluid" />
              </Link>
            </div>
            <div className="header_search_box d-none">
              <MainSerchbar />
            </div>
            <div
              className="offcanvas offcanvas-start flex-lg-row align-items-lg-center justify-content-lg-end"
              id="offcanvasNavbar"
            >
              <div className="offcanvas-header justify-content-end">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              {/* =========== DESKTOP VIEW ========*/}
              <div className="d-none">
                <ul className="navbar-nav mx-lg-auto align-items-start mb-2 mb-lg-0 px-3 px-lg-0">
                  <li className="nav-item dropdown me-lg-3 me-0 w-100">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:;"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Invitations
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          Invitations - 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          Invitations - 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          Invitations - 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown me-lg-3 me-0 w-100">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:;"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Template
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          marker - 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          marker - 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          marker - 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown me-lg-3 me-0 w-100">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:;"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Card
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          marker - 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          marker - 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          marker - 3
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* =========== SMALL SCREEN VIEW ========*/}
              <div className="d-block d-lg-none">
                <ul className="navbar-nav mx-lg-auto align-items-start mb-2 mb-lg-0 px-3 px-lg-0">
                  <li className="nav-item dropdown me-lg-3 me-0 w-100">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:;"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Invitations
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          Invitations - 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          Invitations - 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          Invitations - 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item me-lg-3 me-0 w-100">
                    <a className="nav-link" href="alltemplate.html">
                      Template
                    </a>
                  </li>
                  <li className="nav-item dropdown me-lg-3 me-0 w-100">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:;"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Card
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          marker - 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          marker - 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:;">
                          marker - 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item me-lg-3 me-0 w-100">
                    <a
                      className="nav-link"
                      href="javascript:;"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#profile_bottom"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="nav-item me-lg-3 me-0 w-100">
                    <a
                      className="nav-link"
                      href="javascript:;"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#creation_bottom"
                    >
                      My Creation
                    </a>
                  </li>
                  <li className="nav-item me-lg-3 me-0 w-100">
                    <a className="nav-link" href="price&plan.html">
                      Price &amp; Plan
                    </a>
                  </li>
                  <li className="nav-item me-lg-3 me-0 w-100">
                    <a className="nav-link" href="term&condition.html">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item me-lg-3 me-0 w-100">
                    <a className="nav-link" href="term&condition.html">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="nav-item me-lg-3 me-0 w-100">
                    <a className="nav-link" href="javascript:;">
                      Copyright Information
                    </a>
                  </li>
                  <li className="nav-item me-lg-3 me-0 w-100">
                    <a className="nav-link" href="about.html">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item me-lg-3 me-0 w-100">
                    <a className="nav-link" href="contactus.html">
                      Help &amp; Supports
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-lg-block d-none">
                <div className="header_right d-flex align-items-center">
                  <div className="pricing">
                    <Link
                      to="/pricePlans"
                      className="text-decoration-none me-3"
                    >
                      <i className="fa-solid fa-crown text-warning me-2" />
                      <span className="text-black">Pricing</span>
                    </Link>
                  </div>
                  {token ? (
                    <>
                      {userProfile ? (
                        <UserProfile
                          userProfile={userProfile}
                          imageBaseUrl={imageBaseUrl}
                        />
                      ) : (
                        <div
                          style={{
                            backgroundColor: "#497dec26",
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px",
                          }}
                          className={`skeleton-loader`}
                        ></div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="login_btn d-flex justify-content-between align-items-center">
                        <a
                          className="text-decoration-none"
                          data-bs-toggle="modal"
                          href="#loginModal"
                          role="button"
                        >
                          <i className="fa-regular fa-circle-user user_icon me-2" />
                          <span className="login_text">Login / Register</span>
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* ======== SMALL SCREEN BUTTON==== */}
              <div className="d-lg-none d-block small_screen_btn px-3">
                <div>
                  <a
                    className="w-100 register_btn text-decoration-none login_modal_open"
                    data-bs-toggle="offcanvas"
                    href="#register_modal_mobile"
                    role="button"
                  >
                    Register
                  </a>
                </div>
                <div className="mt-3">
                  <a
                    className="w-100 small_login_btn text-decoration-none login_modal_open"
                    data-bs-toggle="offcanvas"
                    href="#loginOffcanvas_mobile"
                    role="button"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
            {/* ============== LOGIN SCREEN OFFCANVAS FOR MOBILE VIEW ========== */}
            <div className="login_modal d-block d-lg-none">
              <div
                className="offcanvas offcanvas-bottom"
                tabIndex={-1}
                id="loginOffcanvas_mobile"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-header pb-2">
                  <h5 className="modal-title fs-4" id="exampleModalLabel">
                    Log in or sign up in seconds
                  </h5>
                </div>
                <p className="mb-0 fs-6 px-3 text-muted">
                  Use your email or another service to continue with Crafty
                  (it’s free)
                </p>
                <div className="offcanvas-body">
                  <div className="login_option">
                    <div className="login_option_single">
                      <div className="row align-items-center">
                        <div className="col-2 text-center">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            <img
                              src="assets/images/Icons/googleicon.png"
                              alt="googleicon"
                              className="img-fluid"
                            />
                          </a>
                        </div>

                        <LoginGoogle />
                      </div>
                    </div>
                    <div className="login_option_single">
                      <div className="row">
                        <div className="col-2 text-center">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            <img
                              src="assets/images/Icons/fbicon.png"
                              alt="fbicon"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="col-9">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            Continue with Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ============== LOGIN WITH EMAIL =========== */}
                    <div
                      className="login_option_single close_offcanvas"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#login_with_email"
                    >
                      <div className="row">
                        <div className="col-2 text-center">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            <img
                              src="assets/images/Icons/mailicon.png"
                              className="img-fluid"
                              alt="mailicon"
                            />
                          </a>
                        </div>
                        <div className="col-9">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            Continue with email
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ========= LOGIN WITH MOBILE NUMBER ========= */}
                    <div
                      className="login_option_single close_offcanvas"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#login_with_mobile"
                    >
                      <div className="row">
                        <div className="col-2 text-center">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            <img
                              src="assets/images/Icons/mobileicon.png"
                              className="img-fluid"
                              alt="mobileicon"
                            />
                          </a>
                        </div>
                        <div className="col-9">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            Login with mobile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted small mb-0">
                    By continuing, you agree to Crafty Art Terms of Use. Read
                    our Privacy Policy.
                  </p>
                  <div className="other_login_option mt-2">
                    <div className="row">
                      <div className="col-2 text-center">
                        <a
                          href="javscript:;"
                          className="text-decoration-none text-black"
                        >
                          <img
                            src="assets/images/Icons/workeamilicon.png"
                            className="img-fluid"
                            alt="workemail"
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a
                          href="javscript:;"
                          className="text-decoration-none text-black"
                        >
                          Sign up with your work email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================ LOGIN WITH EMAIL OFFCANVAS FOR MOBILE SCREEN============== */}
              <div
                className="offcanvas offcanvas-bottom loginEmail_modal"
                tabIndex={-1}
                id="login_with_email"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-body">
                  <div className="register_header text-center">
                    <img
                      src="assets/images/Icons/carftlogo.svg"
                      className="modal_logo"
                      alt="carftylogo"
                    />
                    <h5 className="mb-0 text-black-50">Carfty Art</h5>
                    <h5 className="color_green1 fw-normal">Welcome Back!</h5>
                  </div>
                  <section className="pt-4 pb-0 mobileEmail_input">
                    <div className="form-area">
                      <div className="form-inner">
                        <form>
                          <div className="form-group">
                            <label htmlFor="s_email" className="text-muted">
                              Email Address
                            </label>
                            <input
                              type="s_email"
                              id="email"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label htmlFor="e_password" className="text-muted">
                              Password
                            </label>
                            <input
                              type="password"
                              id="e_password"
                              className="form-control"
                            />
                          </div>
                          <div className="mt-3">
                            <a
                              className="w-100 register_btn text-decoration-none"
                              href="javascript:;"
                              role="button"
                            >
                              Sign in
                            </a>
                          </div>
                          <div className="mt-2 text-end">
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-muted"
                            >
                              Forgot Password
                            </a>
                          </div>
                          <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
                            <p className="mb-0">Don't have an account?</p>
                            <a
                              className="text-decoration-none login_modal_open color_green1 btn"
                              data-bs-toggle="offcanvas"
                              href="#register_modal_mobile"
                              role="button"
                            >
                              Sign Up
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {/* =============== SEND OTP OFFCABNVAS FOR MOBILE VIEW =============== */}
              <div
                className="offcanvas offcanvas-bottom send_otp"
                tabIndex={-1}
                id="send_otp_offcanvas"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-body">
                  <div className="offcanvas-header text-center pt-0">
                    <h5
                      className="modal-title fs-5 color_green1 text-center w-100 fw-normal"
                      id="exampleModalLabel"
                    >
                      Enter your OTP
                    </h5>
                    <button
                      type="button"
                      className="close_button"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form action="" className="otp-form text-center">
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      {/* Store OTP Value */}
                      <input
                        className="otp-value"
                        type="hidden"
                        name="opt-value"
                      />
                    </form>
                    <div className="mt-4 text-center">
                      <p className="text-muted">
                        Resend Code in : <span>00:52</span>
                      </p>
                    </div>
                    <div className="verify_btn">
                      <a
                        className="w-100 register_btn text-decoration-none login_modal_open"
                        role="button"
                      >
                        Verify
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon " />
            </button>
          </div>
        </nav>
      </header>
      <LoginRegister />
    </>
  );
}
