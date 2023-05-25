import { getAuth, signInWithPopup } from "@firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import { toast } from "react-hot-toast";

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

export default function LoginGoogle() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>({});

  const location = useLocation();
  const currentPathname = location.pathname;

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log("userProfileGoogle: ", data);
        setUserData(data?.user);
        toast.success("Success Login");
        localStorage.setItem("userProfile", data?.user?.uid);
        navigate(`${currentPathname}`);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        toast.error(error?.code.split("auth/")[1]);
      });
  };

  // localStorage.clear();

  useEffect(() => {
    fetchData();
  }, [userData]);

  const fetchData = async () => {
    const newImages: any = await api.createUser({
      key: "qwfsegxdhbxfjhncf",
      user_id: userData?.uid,
      name: userData?.displayName,
      email: userData?.email,
      login_type: "google",
      device_id: "",
      utm_medium: "craftyart",
      utm_source: "craftyart",
    });

    console.log("userProfileGoogle2: ", newImages);
  };

  return (
    <div className="col-10">
      <a
        href="javascript:;"
        className="text-decoration-none text-black"
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </a>
    </div>
  );
}
