import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqsBox(props: any) {
  const [open, setopen] = useState<boolean>(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderBottom: "1px solid #D9D9D9",
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={() => setopen(!open)}
      >
        <Typography
          sx={{ color: "#1C3048", fontWeight: "500", fontSize: "20px" }}
        >
          {props?.heding}
        </Typography>
        <Button sx={{ color: "black" }} onClick={() => setopen(!open)}>
          {open ? (
            <ExpandLessIcon sx={{ fontSize: "25px" }} />
          ) : (
            <ExpandMoreIcon sx={{ fontSize: "25px" }} />
          )}
        </Button>
      </Box>
      {open && <Typography sx={{ pt: 2 }}>{props?.text}</Typography>}
    </Box>
  );
}
