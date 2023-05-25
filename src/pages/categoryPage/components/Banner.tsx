import { Box, Typography } from "@mui/material";
import React from "react";

export default function Banner(props: any) {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
          height: "420px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "50px",
          borderRadius: "8px",
          margin: "10px auto",
          width: "97%",
        }}
      >
        <Box
          sx={{
            width: "57%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {props?.heading}

          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C3048",
              width: "100%",
              fontWeight: "500",
            }}
          >
            {props?.text}
          </Typography>

          <button
            style={{
              backgroundColor: "white",
              width: "162px",
              fontSize: "20px",
              textTransform: "unset",
              filter:
                "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
            }}
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
              {props?.buttonName}
            </Typography>
          </button>
        </Box>
        <Box
          sx={{
            width: "43%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props?.image}
        </Box>
      </Box>
    </>
  );
}
