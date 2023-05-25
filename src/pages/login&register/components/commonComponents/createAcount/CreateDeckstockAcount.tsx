import { Box, Typography } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { consoleShow } from "../../../../../commonFunction/console";
import { auth } from "../../../../../firebase";
import api from "../../../../../services/api";

export default function CreateDeckstockAcount() {
  const navigate = useNavigate();
  const [createAcount, setcreateAcount] = useState<any>({
    name: "tejas",
    email: "tejaslakhani42@gmail.com",
    password: "tejas42@123",
    confirmPassword: "tejas42@123",
  });
  const [isLoading, setIsLoading] = useState<any>(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [verifiedDone, setverifiedDone] = useState<boolean>(false);
  const [emailDialogShow, setEmailDialogShow] = useState<boolean>(false);
  const [finalUser, setFinalUser] = useState<any>(null);
  console.log("currentUser: ", finalUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    if (!currentUser?.emailVerified) {
      const interval = setInterval(() => {
        currentUser
          ?.reload()
          .then(() => {
            if (currentUser?.emailVerified) {
              setverifiedDone(true);
              clearInterval(interval);
            }
          })
          .catch((err: any) => {
            // alert(err.message);
          });
      }, 1000);
    }
  }, [currentUser]);

  const handleSubmission = () => {
    setIsLoading(true);
    if (
      !createAcount.name ||
      !createAcount.email ||
      !createAcount.password ||
      !createAcount.confirmPassword
    ) {
      toast.error("Please fill out all required fields.");
      setIsLoading(false);
      return;
    }
    if (createAcount?.password !== createAcount?.confirmPassword) {
      setcreateAcount({ ...createAcount, confirmPassword: "" });
      toast.error("Confirm password not match password");
      setIsLoading(false);
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      createAcount.email,
      createAcount.password
    )
      .then(async (res: any) => {
        const user = res?.user;
        console.log("user: ", user);
        updateProfile(user, {
          displayName: createAcount.name,
        });
        setFinalUser(user);
      })
      .then(() =>
        sendEmailVerification(auth.currentUser).then(async (res: any) => {
          toast.success(
            `A Verification email has been sent to ${createAcount.email}`
          );

          setIsLoading(false);
          setEmailDialogShow(true);
          // const user = res?.user;
        })
      )
      .catch((error) => {
        toast.error(error?.code.split("auth/")[1]);
        setIsLoading(false);
      });
  };

  // localStorage.clear();

  useEffect(() => {
    if (verifiedDone) {
      fetchData();
    }
  }, [verifiedDone, currentUser]);

  const fetchData = async () => {
    const newUser: any = await api.createUser({
      key: "qwfsegxdhbxfjhncf",
      user_id: finalUser?.uid,
      name: finalUser?.displayName,
      email: finalUser?.email,
      login_type: "email",
      device_id: "",
      utm_medium: "craftyart",
      utm_source: "craftyart",
    });
    console.log("newUser: ", newUser);
    if (newUser?.user?.uid) {
      localStorage.setItem("userProfile", newUser?.user?.uid);
      toast.success("User created successfully");
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    consoleShow("newUser: ", newUser);
  };

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        toast.success(
          `A Verification email has been sent to ${createAcount.email}`
        );
      })
      .catch((err) => {
        toast.error(err?.code.split("auth/")[1]);
      });
  };

  return emailDialogShow ? (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography sx={{ fontSize: "23px" }}>
        Verify your Email Address
      </Typography>

      <Box>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "700", textAlign: "center" }}
        >
          A Verification email has been sent to:
        </Typography>
        <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
          {createAcount?.email}
        </Typography>
      </Box>

      <Typography
        sx={{ fontSize: "14px", textAlign: "center", opacity: "0.6" }}
      >
        Follow the instruction in the email to verify your account
      </Typography>

      <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
        <p className="mb-0">Resend OTP</p>
        <a
          className="btn color_green1"
          role="button"
          style={{ padding: "5px", textDecoration: "underline" }}
          onClick={resendEmailVerification}
        >
          click
        </a>
      </div>
    </Box>
  ) : (
    <div className="register_fields">
      <div className="mb-2">
        <label htmlFor="name" className="form-label mb-0">
          Name
        </label>
        <input
          type="text"
          className={`form-control py-2 ${
            createAcount?.name ? "" : "is-invalid"
          }`}
          id="name"
          value={createAcount?.name}
          onChange={(e) =>
            setcreateAcount({ ...createAcount, name: e.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="form-label mb-0">
          Email Address
        </label>
        <input
          type="email"
          className={`form-control py-2 ${
            createAcount?.email ? "" : "is-invalid"
          }`}
          id="email"
          value={createAcount?.email}
          onChange={(e) =>
            setcreateAcount({ ...createAcount, email: e.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="form-label mb-0">
          Password
        </label>
        <input
          type="password"
          className={`form-control py-2 ${
            createAcount?.password ? "" : "is-invalid"
          }`}
          id="password"
          value={createAcount?.password}
          onChange={(e) =>
            setcreateAcount({ ...createAcount, password: e.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <label htmlFor="c_password" className="form-label mb-0">
          Confirm Password
        </label>
        <input
          type="password"
          className={`form-control py-2 ${
            createAcount?.confirmPassword ? "" : "is-invalid"
          }`}
          id="c_password"
          value={createAcount?.confirmPassword}
          onChange={(e) =>
            setcreateAcount({
              ...createAcount,
              confirmPassword: e.target.value,
            })
          }
        />
      </div>
      <div className="signup_btn my-2">
        <a
          className="w-100 register_btn text-decoration-none "
          onClick={handleSubmission}
        >
          Sign up
        </a>
      </div>

      <div className="d-flex align-items-center justify-content-center mt-2">
        <p className="mb-0">Already have an account?</p>
        <button
          className="color_green1 btn"
          data-bs-target="#loginModal"
          data-bs-toggle="modal"
          onClick={() => toast.dismiss()}
        >
          Sign in
        </button>
      </div>

      {isLoading && (
        <main className="main">
          <span className="loader"></span>
        </main>
      )}
    </div>
  );
}
