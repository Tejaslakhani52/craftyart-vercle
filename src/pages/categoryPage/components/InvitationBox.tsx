import React, { useEffect, useState } from "react";
import api from "../../../services/api";
import { Box, Typography } from "@mui/material";
import TemplateModel from "../../allTemplate/components/tempateModal/TemplateModel";
import { useLocation, useNavigate } from "react-router-dom";
import { consoleShow } from "../../../commonFunction/console";

export default function InvitationBox() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPathname = location.pathname;
  const [open, setOpen] = useState(false);
  const [templates, setTemplates] = useState<any>();
  const [dataPass, setDataPaas] = useState({});
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const templates_ = await api.getCategoryDatas({
      debug_key: "debug",
      cat_id: "invitation-card" as any,
      limit: 20,
      page: 1,
    });
    consoleShow("templates_: ", templates_);
    setData(templates_?.datas);
    setTemplates(templates_);
  };

  window.addEventListener("popstate", function (event) {
    setOpen(false);
  });

  return (
    <>
      <Box sx={{ width: "90%", margin: "50px auto" }}>
        <Typography
          sx={{
            color: "#1C3048",
            fontSize: "36px",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Start Explore Templates :
        </Typography>

        <Typography
          sx={{
            color: "#1C3048",
            fontSize: "18px",
            textAlign: "center",
            fontWeight: "500",
            my: "20px",
          }}
        >
          Get a headstart with fully customizable templates
        </Typography>

        <Box
          sx={{
            width: "75%",
            justifyContent: "space-between",
            display: "flex",
            margin: "auto",
          }}
        >
          {data
            ?.filter((e: any, index: number) => index < 5)
            .map((item: any, index: number) => (
              <Box
                key={index}
                sx={{ width: "18%", cursor: "pointer" }}
                onClick={() => {
                  setDataPaas(item);
                  setTimeout(() => {
                    setOpen(true);
                  }, 200);
                  window.history.replaceState({}, "", `/p/${item.id_name}`);
                }}
              >
                <img
                  src={item.template_thumb}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
            ))}
        </Box>
        <Box
          sx={{
            width: "90%",
            justifyContent: "space-between",
            display: "flex",
            margin: "auto",
          }}
        >
          {data
            ?.filter((e: any, index: number) => index > 5 && index < 12)
            .map((item: any, index: number) => (
              <Box
                key={index}
                sx={{ width: "14.66%", cursor: "pointer", my: "20px" }}
                onClick={() => {
                  setDataPaas(item);
                  setTimeout(() => {
                    setOpen(true);
                  }, 200);
                  window.history.replaceState({}, "", `/p/${item.id_name}`);
                }}
              >
                <img
                  src={item.template_thumb}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
            ))}
        </Box>

        <Box
          sx={{
            width: "75%",
            justifyContent: "space-between",
            display: "flex",
            margin: "auto",
          }}
        >
          {data
            ?.filter((e: any, index: number) => index > 12 && index < 18)
            .map((item: any, index: number) => (
              <Box
                key={index}
                sx={{ width: "18%", cursor: "pointer", my: "20px" }}
                onClick={() => {
                  setDataPaas(item);
                  setTimeout(() => {
                    setOpen(true);
                  }, 200);
                  const newPath = `p/${item.id_name}`;
                  window.history.pushState({}, "", newPath);
                }}
              >
                <img
                  src={item.template_thumb}
                  alt=""
                  style={{ width: "100%" }}
                />
              </Box>
            ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", p: "30px" }}>
          <button
            style={{
              background:
                "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
              width: "203px",
              fontSize: "20px",
              textTransform: "unset",
              filter:
                "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              margin: "auto",
            }}
            onClick={() => navigate(`/templates/invitation-card`)}
          >
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                width: "100%",
                fontWeight: "500",
              }}
            >
              Get All Templates
            </Typography>
          </button>
        </Box>
        <TemplateModel
          open={open}
          setOpen={setOpen}
          templateData={dataPass}
          templates={data}
          screenWidth={screenWidth}
          mainId={templates?.cat_id}
          currentPathname={currentPathname}
        />
      </Box>
    </>
  );
}
