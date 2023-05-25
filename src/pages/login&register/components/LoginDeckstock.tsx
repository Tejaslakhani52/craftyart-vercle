import React, { useState, useEffect } from "react";
import LoginGoogle from "./commonComponents/LoginGoogle";
import LoginEmail from "./commonComponents/LoginEmail";
import CreateDeckstockAcount from "./commonComponents/createAcount/CreateDeckstockAcount";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import PhoneLogin from "./commonComponents/LoginWithMobile";

const firebaseConfig = {
  apiKey: "AIzaSyCQP7F26DBVJvXWNgwS3lerBUCGcbH2z4U",
  authDomain: "craftylogin.firebaseapp.com",
  projectId: "craftylogin",
  storageBucket: "craftylogin.appspot.com",
  messagingSenderId: "291310090237",
  appId: "1:291310090237:web:dafb389be0203fc4d04b94",
};

firebase.initializeApp(firebaseConfig);

const auth: any = getAuth();

export default function LoginDeckstock() {
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [otp, setOtp] = useState(true);

  const handleSendCode = async () => {
    const phoneNumberWithCountryCode = `+91${phoneNumber}`;

    const appVerifier = new RecaptchaVerifier(
      "phone-login-button",
      {
        size: "invisible",
      },
      auth
    );
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumberWithCountryCode,
        appVerifier
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_modal login_register_modal">
      {/* ====== LOGIN MODAL ========= */}
      <div
        className="modal fade"
        id="loginModal"
        aria-hidden="true"
        aria-labelledby="myModalLabel"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 pb-2 justify-content-center">
              <h5 className="modal-title fs-4" id="exampleModalLabel">
                Log in or sign up in seconds
              </h5>
            </div>
            <p className="mb-0 fs-6 px-3 text-muted text-center w-75 mx-auto">
              Use your email or another service to continue with Crafty (it’s
              free)
            </p>
            <div className="modal-body pt-2">
              <div className="login_option">
                <div className="login_option_single">
                  <div className="row align-items-center">
                    <div className="col-2 text-center">
                      <a
                        href="javascript:;"
                        className="text-decoration-none text-black"
                      >
                        <img
                          src="assets/images/Icons/googleicon.png"
                          className="img-fluid"
                          alt="gooleicon"
                        />
                      </a>
                    </div>
                    <LoginGoogle />
                  </div>
                </div>

                {/* ============ LOGIN WITH EMAIL ============ */}
                <div
                  className="login_option_single"
                  data-bs-toggle="modal"
                  data-bs-target="#loginEmail_modal"
                >
                  <div className="row">
                    <div className="col-2 text-center">
                      <a
                        href="javascript:;"
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
                        href="javascript:;"
                        className="text-decoration-none text-black"
                      >
                        Continue with email
                      </a>
                    </div>
                  </div>
                </div>
                {/* ======= LOGIN WITH MOBILE ====== */}
                <div
                  className="login_option_single"
                  data-bs-toggle="modal"
                  data-bs-target="#loginmobile_modal"
                >
                  <div className="row">
                    <div className="col-2 text-center">
                      <a
                        href="javascript:;"
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
                        href="javascript:;"
                        className="text-decoration-none text-black"
                      >
                        Login with mobile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted small mb-0">
                By continuing, you agree to Crafty Art Terms of Use. Read our
                Privacy Policy.
              </p>
            </div>
            <div className="modal-bottom p-3 pt-0">
              <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
                <p className="mb-0">Don't have an account?</p>
                <button
                  className="btn color_green1"
                  data-bs-target="#register_modal"
                  data-bs-toggle="modal"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============= LOGIN WITH MOBILE MODAL FOR DESKTOP ============ */}
      <div
        className="modal fade loginMobile_modal"
        id="loginmobile_modal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="register_header text-center">
                <img
                  src="assets/images/Icons/carftlogo.svg"
                  className="modal_logo"
                />
                <h5 className="mb-0 text-black-50">Carfty Art</h5>
                {/* <h5 className="color_green1 fw-normal">Welcome Back!</h5> */}
              </div>
              <section className="mobileNumber_input">
                <div className="form-area">
                  <div className="form-inner">
                    <div>
                      <PhoneLogin />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== SEND OTP MODAL FOR DESKTOP ===================== */}
      {otp && (
        <div
          className="modal fade send_otp"
          id="send_otp_modal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5
                  className="modal-title fs-5 color_green1 text-center w-100 fw-normal"
                  id="exampleModalLabel"
                >
                  Enter your OTP
                </h5>
                <button
                  type="button"
                  className="close_button"
                  data-bs-dismiss="modal"
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
                  <input className="otp-value" type="hidden" name="opt-value" />
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
      )}
      {/* =============== LOGIN WITH EMAIL MODAL FOR DESKTOP  ================ */}
      <div
        className="modal fade loginEmail_modal"
        id="loginEmail_modal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="register_header text-center">
                <img
                  src="assets/images/Icons/carftlogo.svg"
                  className="modal_logo"
                  alt="carftylogo"
                />
                <h5 className="mb-0 text-black-50">Carfty Art</h5>
                {/* <h5 className="color_green1 fw-normal">Welcome Back!</h5> */}
              </div>
              <section className="mobileEmail_input">
                <LoginEmail />
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* ========== REGISTER MODAL ======== */}
      <div
        className="modal fade register_modal"
        id="register_modal"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body py-2">
              <div className="register_header text-center">
                <img
                  src="assets/images/Icons/carftlogo.svg"
                  className="modal_logo"
                  alt="carftyicon"
                />
                <h4 className="color_green1">Let's get Started</h4>
              </div>
              <CreateDeckstockAcount />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
