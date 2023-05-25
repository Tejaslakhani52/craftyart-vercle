import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../../../firebase";
import { useNavigate } from "react-router-dom";
export default function CreateDeckstockAcount() {
  const navigate = useNavigate();
  const [createAcount, setcreateAcount] = useState<any>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isInvalid, setisInvalid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  //console.log("messageError: ", messageError);

  const handleSubmission = () => {
    if (
      !createAcount.name ||
      !createAcount.email ||
      !createAcount.password ||
      !createAcount.confirmPassword
    ) {
      setisInvalid(true);
      setMessageError("Please fill out all required fields.");
      return;
    }
    if (createAcount?.password !== createAcount?.confirmPassword) {
      setcreateAcount({ ...createAcount, confirmPassword: "" });
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      createAcount.email,
      createAcount.password
    )
      .then(async (res) => {
        //console.log("res: ", res);
        const user = res.user;
        await updateProfile(user, {
          displayName: createAcount.name,
        });
        //console.log("user: ", user);
        navigate("/");
        localStorage.setItem("userProfile", JSON.stringify(user));
        window.location.reload();
        setMessage("Acount created success");
      })
      .catch((err) => {
        //console.log("err: ", err);
        setMessageError(err.message);
      });
  };

  return (
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

      {/* {message && <Toast message={message} setMessage={setMessage} />}
      {messageError && (
        <ToastError message={messageError} setMessage={setMessageError} />
      )} */}
    </div>
  );
}
