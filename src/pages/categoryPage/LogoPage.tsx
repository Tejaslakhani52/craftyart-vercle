import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo1 from "../../assets/images/logo1.svg";
import logo2 from "../../assets/images/logo2.svg";
import logo3 from "../../assets/images/logo3.svg";
// import logoGroup from "../../assets/images/happyRes.svg";
import logoGroup from "../../assets/images/Grouplogo.png";
import stunning from "../../assets/images/stunningLogo.png";
import custome from "../../assets/images/customLogos.png";
import mainLogo from "../../assets/images/logoMainGroup.png";
import mark from "../../assets/images/rightMarks.svg";
import api from "../../services/api";
import LogoBox from "./components/LogoBox";
import { useNavigate } from "react-router-dom";
import GetTemplates from "./components/GetTemplates";
import FAQs from "../faqs/faqs";
import FaqsBox from "./components/Faqs";
import Banner from "./components/Banner";

export const MarkText = ({ text }: any) => {
  return (
    <Box sx={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
      <img src={mark} alt="" style={{ marginTop: "5px" }} />
      <Typography sx={{ fontSize: "16px", color: "#1C3048" }}>
        {text}
      </Typography>
    </Box>
  );
};

export const CustomeButton = ({ text }: any) => {
  return (
    <button
      style={{
        background:
          "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
        width: "162px",
        fontSize: "20px",
        textTransform: "unset",
        filter:
          "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        marginLeft: "40px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: "white",
          width: "100%",
          fontWeight: "500",
        }}
      >
        {text}
      </Typography>
    </button>
  );
};

export const DetailTitle = ({ text1, text2, text3 }: any) => {
  return (
    <Typography
      sx={{
        fontSize: "32px",
        color: "#000",
        fontWeight: "600",
      }}
    >
      {text1}
      <span
        style={{
          background:
            "-webkit-linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
          WebkitBackgroundClip: "text",
          // color: "transparent",
          WebkitTextFillColor: "transparent",
          width: "100%",
          margin: "0 10px",
        }}
      >
        {text2}
      </span>
      {text3}
    </Typography>
  );
};
export default function LogoPage() {
  return (
    <div>
      <Banner
        heading={
          <Typography
            sx={{
              fontSize: "40px",
              color: "#ffffff",
              width: "70%",
              fontWeight: "600",
              lineHeight: "48px",
            }}
          >
            Let Your Brand Shine with Our Custom Logo Design
          </Typography>
        }
        text=" Create a Lasting Impression with a Custom Logo Design That Truly
            Represents Your Business, Begin with custom logos that are simple to
            create and use."
        buttonName="Create a logo"
        image={
          <Box sx={{ width: "354px" }}>
            <img
              src={mainLogo}
              alt=""
              // className="img_logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        }
      />
      <Box
        sx={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          padding: "0 0px",
          width: "80%",
          margin: "auto",
          justifyContent: "space-between",
          marginY: "50px",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <img
            src={logoGroup}
            alt=""
            style={{ width: "500px", height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <DetailTitle
              text1={" Craft the"}
              text2={"PERFACT LOGO"}
              text3={"with ease"}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Our user-friendly logo crafting tool simplifies the process of creating the perfect logo for your brand" />
              <MarkText text="Choose from a wide selection of design templates and customise them to suit your needs." />
              <MarkText text="Our intuitive drag-and-drop interface allows you to easily add and edit text, graphics and other design elements." />
              <MarkText text="With our powerful logo creation tools, you can experiment with different fonts, colours and layouts until you find the perfect combination for your brand identity." />
              <MarkText text="Craft a professional-grade logo that will set your business apart from the competition." />
            </Box>

            <CustomeButton text="Create a logo" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          padding: "0 0px",
          width: "80%",
          margin: "auto",
          justifyContent: "space-between",
          marginY: "50px",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <DetailTitle
              text1={"Make"}
              text2={"CUSTOM LOGOS"}
              text3={"in minutes"}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Our online logo maker enables you to create a custom logo for your business in just a few minutes." />
              <MarkText text="Choose from a vast selection of design templates, icons, and fonts to get started." />
              <MarkText text="Customise your logo by changing the colours, font styles, and layout to fit your brand personality." />
              <MarkText text="Easily save and download your logo once it's completed." />
              <MarkText text="Our logo maker is accessible from any device, making it easy to create a logo on-the-go." />
            </Box>

            <CustomeButton text="Create a logo" />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "flex-end",
          }}
        >
          <img
            src={custome}
            alt=""
            style={{ width: "550px", height: "100%" }}
          />
        </Box>
      </Box>
      <LogoBox />
      <Box
        sx={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          padding: "0 0px",
          width: "80%",
          margin: "auto",
          justifyContent: "space-between",
          marginY: "50px",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <img
            src={stunning}
            alt=""
            style={{ width: "550px", height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <DetailTitle
              text1={"How to make"}
              text2={"STUNNING LOGO"}
              text3={"for free"}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Our logo maker offers a range of high-quality design tools that help you create stunning logos quickly and easily." />
              <MarkText text="Choose from a range of professionally designed templates, or start from scratch." />
              <MarkText text="Experiment with a variety of fonts, colours, and graphic elements to create a unique logo that reflects your brand identity." />
              <MarkText text="Our user-friendly interface makes it easy to create multiple versions of your logo, so you can choose the one that best fits your needs." />
              <MarkText text="Best of all, our logo maker is completely free, ensuring that you can create a professional-grade logo without breaking the bank." />
            </Box>

            <CustomeButton text="Create a logo" />
          </Box>
        </Box>
      </Box>

      <GetTemplates
        heading=" Ready to take your branding to the next level? Browse our 5000+ logo
            designs and find the perfect fit."
        text="Build your own brand identity - start with custom logos."
        path="/templates/logos"
      />

      <Box
        sx={{
          width: "60%",
          my: "100px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DetailTitle text1={"Some Popular"} text2={"Questions/Answered"} />
        <Box sx={{ p: "20px" }}></Box>
        <FaqsBox
          heding="1. What is Logo Design?"
          text="Logo design is the process of creating a unique symbol or emblem that visually represents a brand, company, or individual. It involves the use of typography, colours, and graphic elements to create a distinctive visual identity."
        />
        <FaqsBox
          heding="2. Why is a logo important for my business?"
          text="A logo is an essential component of your brand identity. It helps your customers to recognize and remember your
          business, products, and services. A well-designed logo can create a positive impression, build trust, and communicate
          your brand's values and personality."
        />
        <FaqsBox
          heding="3. How long does it take to design a logo?"
          text="The time required to design a logo depends on various factors, such as the complexity of the design, the number of
          revisions needed, and the designer's availability. Typically, it can take anywhere from a few days to a few weeks to
          create a high-quality logo."
        />
        <FaqsBox
          heding="4. How much should I expect to pay for a logo design?"
          text="The cost of a logo design can vary significantly depending on the designer's experience, the complexity of the design,
          and the level of customization required. Generally, you can expect to pay anywhere between $1 to $1000 for a
          professional logo design."
        />
        <FaqsBox
          heding="5. What should I consider when designing a logo for my business?"
          text="When designing a logo for your business, you should consider several factors to ensure that it reflects your brand
          identity and resonates with your target audience. These factors include selecting appropriate colours that represent
          your brand values and personality, choosing a font style that aligns with your brand messaging, and creating a design
          that is simple, memorable, and easily recognizable."
        />
      </Box>
    </div>
  );
}
