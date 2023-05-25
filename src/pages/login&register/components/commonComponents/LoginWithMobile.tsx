import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signInWithCredential,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../../../services/api";

const provider = new GoogleAuthProvider();

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

const PhoneLogin = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [open, setOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendCode = async () => {
    setIsLoading(true);
    if (!phoneNumber) {
      toast.error("Please fill out all required fields.");
      setIsLoading(false);
      return;
    }
    const phoneNumberWithCountryCode = "+" + phoneNumber;

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
      setOpen(true);
      toast.success("OTP sended successfully!");
      setIsLoading(false);
      setVerificationId(confirmationResult?.verificationId);
    } catch (error: any) {
      setOpen(false);
      toast.error(error.code.split("auth/")[1]);
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    setIsLoading(true);
    try {
      var credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );

      setOpen(false);
      const userCredential = await signInWithCredential(auth, credential);
      setUserData(userCredential?.user);
      localStorage.setItem("userProfile", userCredential?.user?.uid);

      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      toast.success("login success");
    } catch (error: any) {
      setOpen(true);

      setIsLoading(false);
      toast.error(error.code.split("auth/")[1]);
    }
  };
  useEffect(() => {
    fetchData();
  }, [userData]);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data?.user);
        toast.success("Success Login");
        localStorage.setItem("userProfile", data?.user?.uid);
        navigate("/");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        toast.error(error?.code.split("auth/")[1]);
      });
  };

  const fetchData = async () => {
    const newImages: any = await api.createUser({
      key: "qwfsegxdhbxfjhncf",
      user_id: userData?.uid,
      name: "craftyart",
      email: userData?.phoneNumber,
      login_type: "Number",
      device_id: "",
      utm_medium: "craftyart",
      utm_source: "craftyart",
    });
  };

  return (
    <div>
      {!open && (
        <>
          <div className="form-group">
            <label className="mb-2">Mobile Number</label>

            <PhoneInput
              country={"in"}
              value={phoneNumber}
              onChange={setPhoneNumber}
              inputStyle={{
                paddingLeft: "50px",
                width: "100%",
                // border: phoneNumber ? "none" : "1px solid red",
              }}
            />
            {!phoneNumber && (
              <p style={{ color: "red" }}>please enter your number</p>
            )}
          </div>
          <div className="mt-3">
            <button
              type="submit"
              id="phone-login-button"
              className="w-100 register_btn text-decoration-none login_modal_open  "
              style={{ border: "none" }}
              role="button"
              onClick={handleSendCode}
            >
              Send OTP
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-muted">or use your email to sign in</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div
              className="login_email_option me-3 close_offcanvas"
              data-bs-toggle="modal"
              data-bs-target="#loginEmail_modal"
            >
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
            <div className="login_email_option">
              <a
                href="javascript:;"
                className="text-decoration-none text-black"
                onClick={handleGoogleLogin}
              >
                <img
                  src="assets/images/Icons/googleicon.png"
                  className="img-fluid"
                  alt="googleicon"
                />
              </a>
            </div>
          </div>
          <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
            <p className="mb-0">Don't have an account?</p>
            <a
              className="btn color_green1"
              data-bs-toggle="modal"
              href="#register_modal"
              role="button"
            >
              Sign Up
            </a>
          </div>
        </>
      )}
      {open && (
        <>
          <div className="form-group">
            <label className="mb-2"> Enter your OTP</label>

            <OtpInput
              value={verificationCode}
              onChange={setVerificationCode}
              numInputs={6}
              inputStyle={{ minWidth: "40px", height: "40px" }}
              containerStyle={{ gap: "5px" }}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              shouldAutoFocus={true}
            />
          </div>
          <div className="mt-3">
            <button
              type="submit"
              id="phone-login-button"
              className="w-100 register_btn text-decoration-none login_modal_open  "
              style={{ border: "none" }}
              role="button"
              onClick={handleVerifyCode}
            >
              Verify OTP
            </button>
          </div>

          <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
            <p className="mb-0">Resend OTP</p>
            <a
              className="btn color_green1"
              role="button"
              style={{ padding: "5px", textDecoration: "underline" }}
              onClick={handleSendCode}
            >
              click
            </a>
          </div>
        </>
      )}

      {isLoading && (
        <main className="main">
          <span className="loader"></span>
        </main>
      )}
    </div>
  );
};

export default PhoneLogin;
