import { Box } from "@mui/material";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

interface MyComponentProps {
  // templates: {cats: object[], count: number, },
  templates: any;
  isloading: boolean;
}
export default function DesignFor({
  templates,
  isloading,
}: MyComponentProps): JSX.Element {
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState<any>(false);
  return (
    <>
      {isloading ? (
        <div
          style={{
            gap: "10px",
            overflow: "hidden",
            justifyContent: "space-between",
          }}
          className=" d-flex d-md-none px-3 mt-3"
        >
          {new Array(5).fill("#497dec26").map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#497dec26",
                borderRadius: "50%",
                marginBottom: "10px",
                height: "60px",
                width: "60px",
              }}
              className={`skeleton-loader   `}
            ></div>
          ))}
        </div>
      ) : (
        <section className="design_post mt-3 d-block d-md-none">
          <div className="design_post_inner container-fluid">
            <div className="flex_menu gap_10">
              {templates?.cats.map((item: any, index: any) => (
                <div
                  key={item.category_id}
                  style={{ cursor: "pointer" }}
                  className="mt-2 designfor_logo_inner"
                  onClick={() =>
                    navigate(`/template/${item?.category_id}`, {
                      state: {
                        id: item?.category_id,
                        name: item?.category_name,
                      },
                    })
                  }
                >
                  <div className="single_small_card">
                    <div className="small_card_icon">
                      <img src={item.category_thumb} alt={item.category_name} />
                    </div>
                    <div className="samll_card_text text-center mt-2">
                      <h6 className="  font_11 ">{item.category_name}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="design_post mt-3 d-none d-md-block">
        <div className="design_post_inner container-fluid">
          <div className="section_title_main d-flex justify-content-between align--items-center mb-3">
            <h3 className="section_title mb-0">Design For</h3>
            <a
              className="show_more_link text-decoration-none me-3  "
              onClick={() => setShowMore(!showMore)}
            >
              Show more
            </a>
          </div>
          <div className="d-flex align-items-center flex-wrap overflow-hidden show-data-app  ">
            {isloading ? (
              <div
                style={{
                  gap: "20px",
                  overflow: "hidden",
                  justifyContent: "space-between",
                }}
                className=" d-none d-md-flex px-3 mt-3"
              >
                {new Array(20).fill("#497dec26").map((item) => (
                  <div
                    style={{
                      backgroundColor: "#497dec26",
                      borderRadius: "50%",
                      marginBottom: "10px",
                      height: "80px",
                      minWidth: "80px",
                    }}
                    className={`skeleton-loader   `}
                  ></div>
                ))}
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    height: "auto",
                    // justifyContent: "space-between",
                  }}
                >
                  {templates?.cats
                    .filter((e: any, index: number) =>
                      showMore ? index > -1 : index < 12
                    )
                    .map((item: any) => (
                      <Box
                        sx={{
                          width: "8.2%",
                          cursor: "pointer",
                        }}
                        key={item.category_id}
                        onClick={() => navigate(`/templates/${item?.id_name}`)}
                      >
                        <div className="small_card_icon">
                          <img
                            src={item.category_thumb}
                            alt={item.category_name}
                          />
                        </div>
                        <div className="samll_card_text text-center mt-2">
                          <h6 className="px-2" style={{ fontSize: "13px" }}>
                            {item.category_name}
                          </h6>
                        </div>
                      </Box>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
