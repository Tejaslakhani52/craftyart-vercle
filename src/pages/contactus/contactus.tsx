import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import background from "../../assets/images/bg.png";
import Select from "react-select";
import countryList from "react-select-country-list";

const style = {
  label: { fontSize: "14px", color: "#1C3048", mb: "4px" },
  input: {
    border: "1px solid #ABB2C7",
    borderRadius: "5px",
    fontSize: "14px",
    padding: "10px 10px",
    width: "100%",
  },
};

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "1px solid #ABB2C7",
    borderRadius: "5px",
    fontSize: "14px",
    padding: "0",
    width: "100%",
  }),
};

export default function ContactUs() {
  const [value, setValue] = useState("");
  const options: any = useMemo(() => countryList().getData(), []);

  const changeHandler = (value: any) => {
    setValue(value);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Box sx={{ minHeight: `${screenHeight + 100}px` }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: `${screenHeight - 270}px`,
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              // width: "60%",
              margin: "auto",
              width: { sm: "80%", lg: "60%" },
            }}
          >
            <Typography
              sx={{
                fontSize: "53px",
                fontWeight: "700",
                lineHeight: "60.66px",
                color: "#1C3048",
              }}
            >
              We look forward to hearing from you.
            </Typography>
            <Box>
              <Typography>
                Let us know how we can help and we’ll get right back to you.
              </Typography>
              <Typography>
                Please submit a case if you need product support.
              </Typography>
            </Box>
            <Typography>
              For technical issues or general inquiries,
              <span
                style={{
                  color: "#5961F8",
                  marginLeft: "5px",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                please visit our Help Center.
              </span>
            </Typography>
            <span
              style={{
                color: "#5961F8",
                marginLeft: "5px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              info@CraftyArt.com
            </span>
          </Box>
        </Box>

        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
              position: "absolute",
              padding: "50px",
              backgroundColor: "white",
              boxShadow: "0px 0px 8px 6px rgba(28, 48, 72, 0.07)",
              borderRadius: "10px",
              top: "80px",
              width: { sm: "45%", md: "45%", lg: "37%" },
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "60.66px",
                color: "#1C3048",
                mb: 2,
              }}
            >
              Contact Us
            </Typography>

            <Box sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "48%" }}>
                  <Typography sx={style?.label}>First name *</Typography>
                  <input
                    type="text"
                    style={style.input}
                    placeholder="Enter first name"
                  />
                </Box>
                <Box sx={{ width: "48%" }}>
                  <Typography sx={style?.label}>Last name *</Typography>
                  <input
                    type="text"
                    style={style.input}
                    placeholder="Enter last name"
                  />
                </Box>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography sx={style?.label}>Business Email *</Typography>
                <input
                  type="email"
                  style={style.input}
                  placeholder="Enter your email"
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography sx={style?.label}>Company name *</Typography>
                <input
                  type="text"
                  style={style.input}
                  placeholder="Enter your company name"
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                <Typography sx={style?.label}>Country *</Typography>
                <Select
                  options={options}
                  value={value}
                  onChange={changeHandler}
                  styles={customStyles}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography sx={style?.label}>Phone number *</Typography>
                <input
                  type="number"
                  style={style.input}
                  placeholder="Enter your phone number"
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography sx={style?.label}>How can we help? *</Typography>
                <textarea
                  style={style.input}
                  rows={4}
                  placeholder="Describe your question in detail, we will reply to you soon!"
                />
              </Box>

              <Typography
                sx={{
                  fontSize: "12px",
                  textAlign: "justify",
                  color: "#1C3048",
                }}
              >
                Craftyart needs the contact information you provide to us to
                contact you about our products and services. You may unsubscribe
                from these communications at any time. For information on how to
                unsubscribe, as well as our privacy practices and commitment to
                protecting your privacy, please review our{" "}
                <span
                  style={{
                    color: "#5961F8",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    to="/privacy-policy"
                    className="text-decoration-none footer_items"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </Typography>

              <div className="choose-plan-inner px-sm-0 px-3">
                <div
                  className="choose-plan-card"
                  style={{
                    backgroundColor: "#F5F5F5",
                    paddingLeft: "0",
                    paddingRight: "0",
                  }}
                >
                  <button
                    type="button"
                    className="w-100 register_btn text-decoration-none login_modal_open"
                    style={{ border: "none" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
