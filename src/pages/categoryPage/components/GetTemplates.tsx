import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GetTemplates(props: any) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background:
            "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              color: "#ffffff",
              fontWeight: "600",
              lineHeight: "41px",
            }}
          >
            {props?.heading}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#ffffff",
              fontWeight: "400",
              lineHeight: "41px",
            }}
          >
            {props?.text}
          </Typography>
        </Box>
        <button
          style={{
            backgroundColor: "white",
            width: "203px",
            fontSize: "20px",
            textTransform: "unset",
            filter:
              "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            border: "none",
            padding: "5px 10px",
            borderRadius: "4px",
            // margin: "20px 0",
          }}
          onClick={() => navigate(props?.path)}
        >
          <Typography
            sx={{
              fontSize: "20px",
              background:
                "-webkit-linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
              WebkitBackgroundClip: "text",
              // color: "transparent",
              WebkitTextFillColor: "transparent",
              width: "100%",
              fontWeight: "500",
            }}
          >
            Get All Templates
          </Typography>
        </button>
      </Box>
    </>
  );
}
