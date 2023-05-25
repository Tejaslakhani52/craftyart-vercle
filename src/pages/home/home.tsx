import React, { PropsWithChildren, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AllDataRoot } from "../../interfaces/AllDataObject";
import "react-loading-skeleton/dist/skeleton.css";
import HeroSection from "./heroSection/HeroSection";
import DesignFor from "./designFor/DesignFor";
import TamplateDesign from "./tamplateDesign/TamplateDesign";
import Waiting from "./waitingFor/Waiting";
import Profile from "../../components/profile/Profile";
import SmallScreen from "../../components/smallScreenBottom/SmallScreen";
import Creation from "../../components/creationOffcanvas/Creation";
import CustomeSize from "../../components/footer/customeSize/CustomeSize";
import axios from "axios";

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<AllDataRoot>();
  console.log("templates: ", templates);

  const [isloading, setIsloading] = React.useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = React.useCallback(async () => {
    setIsloading(true);
    const newImages = await api.getDatas({
      key: "qwfsegxdhbxfjhncf",
      page: 1,
      count: 0,
    });
    setTemplates(newImages);
    setIsloading(false);
  }, [templates]);

  // useEffect(() => {
  //   const handlePopstate = () => {
  //     if (window.location.pathname === "/") {
  //       window.history.pushState({}, "", "/"); // Prevent going back further
  //     }
  //   };

  //   window.addEventListener("popstate", handlePopstate);

  //   return () => {
  //     window.removeEventListener("popstate", handlePopstate);
  //   };
  // }, []);
  return (
    <>
      <div className="small_fixed_footer d-bock d-sm-none">
        <SmallScreen />
        <Profile />
        <Creation />
        <CustomeSize />
      </div>
      <HeroSection />
      <DesignFor templates={templates} isloading={isloading} />
      <TamplateDesign templates={templates} isloading={isloading} />
      <Waiting />
    </>
  );

  function InlineWrapperWithMargin({ children }: PropsWithChildren<unknown>) {
    return <span style={{ marginRight: "0.5rem" }}>{children}</span>;
  }
}
