import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo1 from "../../assets/images/logo1.svg";
import logo2 from "../../assets/images/logo2.svg";
import logo3 from "../../assets/images/logo3.svg";
// import logoGroup from "../../assets/images/happyRes.svg";
import logoGroup from "../../assets/images/perfactInvitation.png";
import stunning from "../../assets/images/stunningInvitation.png";
import custome from "../../assets/images/customeInvitation.png";
import mainLogo from "../../assets/images/invitationMainGroup.png";
import mark from "../../assets/images/rightMarks.svg";
import api from "../../services/api";
import LogoBox from "./components/LogoBox";
import { useNavigate } from "react-router-dom";
import GetTemplates from "./components/GetTemplates";
import FAQs from "../faqs/faqs";
import FaqsBox from "./components/Faqs";
import Banner from "./components/Banner";
import InvitationBox from "./components/InvitationBox";

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
export default function InvitationPage() {
  return (
    <div>
      <Banner
        heading={
          <Typography
            sx={{
              fontSize: "40px",
              color: "#ffffff",
              width: "100%",
              fontWeight: "600",
              lineHeight: "48px",
            }}
          >
            Let Your Invitation Shine with Our Smooth and Sleek Invitation Maker
          </Typography>
        }
        text=" Make lovely invitations for birthdays, baby showers, weddings, and save-the-dates. Regardless of
        the event, you can make beautiful, personalised invites and shop with confidence by choosing
        the finish type, size, and matching envelopes."
        buttonName="Start Designing"
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
            style={{ width: "570px", height: "100%" }}
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
              text2={"PERFACT INVITATION"}
              text3={"with ease"}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Choose a design template that matches your event's theme and purpose." />
              <MarkText text="Customise the text, font, and colour to convey your message and personality." />
              <MarkText text="Select high-quality images or graphics to add visual appeal and context." />
              <MarkText text="Preview the invitation to ensure it looks clean, professional, and error-free." />
              <MarkText text="Share the invitation via social media, email, or print to reach your desired audience." />
            </Box>

            <CustomeButton text="Start Designing" />
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
              text2={"CUSTOM INVITATIONS"}
              text3={"in minutes"}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Sign up for an account or log in with your existing credentials." />
              <MarkText text="Browse through the selection of customizable invitation templates." />
              <MarkText text="Pick a template that aligns with your event's style and tone." />
              <MarkText text="Add your personalised information, such as event details, date, time, location, etc." />
              <MarkText text="Save, preview, and send the invitation to your guests." />
            </Box>

            <CustomeButton text="Start Designing" />
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
            style={{ width: "500px", height: "100%" }}
          />
        </Box>
      </Box>
      <InvitationBox />
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
              text2={"STUNNING INVITATIONS"}
              text3={"for free"}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Start by searching for a reputable online invitation maker." />
              <MarkText text="Explore the different design templates available and select one that fits your occasion." />
              <MarkText text="Personalise your invitation by adding your own text, images, and other elements." />
              <MarkText text="Experiment with different fonts, colours, and layouts to create a visually appealing invitation." />
              <MarkText text="Preview your work before sending it out to ensure it looks polished and professional." />
            </Box>

            <CustomeButton text="Start Designing" />
          </Box>
        </Box>
      </Box>

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Invitation Templates."
        text="Create unforgettable moments with personalized invitations"
        path="/templates/invitation-card"
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
          heding="1. What are the available design templates for invitations? "
          text="Our invitation maker offers a wide range of design templates to choose from, including options for birthdays, weddings,
          baby showers, graduations, and more."
        />
        <FaqsBox
          heding="2. Can I customise the text and images on the invitations?"
          text="Yes, our invitation maker allows you to personalise your invitations with your own text and images. You can also
          experiment with different fonts, colours, and layouts to create a unique look that matches your event."
        />
        <FaqsBox
          heding="3. How can I share my invitations with guests?"
          text="You can share your invitations via email, social media, or print. Our platform makes it easy to send your invitations
          directly to your guests' inboxes or share them on your social media accounts."
        />
        <FaqsBox
          heding="4. Can I preview my invitations before sending them out?"
          text="Yes, our invitation maker comes with a preview feature that allows you to see how your finished invitations will look. You
          can make any necessary changes before sending them out to ensure they are error-free and visually appealing."
        />
        <FaqsBox
          heding="5. Is the invitation maker free to use?"
          text="We offer both free and paid options for using our invitation maker. The free version allows you to access basic features
          and templates, while the paid version offers advanced customization options and premium templates."
        />
      </Box>
    </div>
  );
}
