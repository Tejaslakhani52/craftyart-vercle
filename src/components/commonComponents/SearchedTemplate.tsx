import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TemplateModel from "../../pages/allTemplate/components/tempateModal/TemplateModel";
import api from "../../services/api";
import { consoleShow } from "../../commonFunction/console";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function SearchBox() {
  const navigate = useNavigate();
  const mainId = -1;
  const location = useLocation();
  const currentPathname = location.pathname;
  const { name } = useParams();
  const { id } = useParams();
  const [value, setValue] = useState<any>(name);
  const [finalData, setfinalData] = React.useState<any>([]);
  const [isloading, setIsloading] = useState<boolean>(false);
  const [showingData, setshowingData] = useState<any>([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [open, setOpen] = useState(false);
  const [dataPass, setDataPaas] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const multiSize = useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 7;
      case screenWidth > 1400:
        return 6;
      case screenWidth > 1200:
        return 5;
      case screenWidth > 1000:
        return 4;
      case screenWidth > 550:
        return 3;
      default:
        return 2;
    }
  }, [screenWidth]);

  const height = useMemo(() => {
    switch (true) {
      case screenWidth > 480:
        return 160;
      default:
        return 150;
    }
  }, [screenWidth]);
  const rowHeight = useMemo(() => {
    switch (true) {
      case screenWidth > 991:
        return `500px`;
      default:
        return "auto";
    }
  }, [screenWidth]);

  // const fetchData = React.useCallback(async () => {
  //   const newImages = await api.getSearchData({
  //     key: "qwfsegxdhbxfjhncf",
  //     app_id: 1,
  //     cat_id: id,
  //     keywords: name as any,
  //     device: 0,
  //     refWidth: 1080,
  //     refHeight: 1080,
  //     page: 1,
  //     debug: "debug",
  //   });
  //   setfinalData(newImages);
  //   console.log("newImages: ", newImages);
  //   setIsloading(false);
  // }, []);
  // useEffect(() => {
  //   fetchData();
  //   setIsloading(true);
  // }, [name, id]);

  const getSearchList = () => {
    // const formData = new FormData();

    // formData.append("key", "qwfsegxdhbxfjhncf");
    // formData.append("app_id", "1");
    // formData.append("cat_id", id as any);
    // formData.append("keywords", name as any);
    // formData.append("device", "0");
    // formData.append("refWidth", "1080");
    // formData.append("refHeight", "1080");
    // formData.append("page", "1");
    // formData.append("debug", "debug");
    axios
      .post("/search-template", {
        key: "qwfsegxdhbxfjhncf",
        app_id: "1",
        cat_id: id?.toString() ?? "0",
        keywords: value?.toString(),
        device: "0",
        refWidth: "1080",
        refHeight: "1080",
        page: "1",
        debug: "debug",
      })
      .then((response: any) => {
        const jsonString = response.data.substring(
          response.data.indexOf("{"),
          response.data.lastIndexOf("}") + 1
        );
        const getData = JSON.parse(jsonString);
        setfinalData(getData);
        consoleShow("getSearchList", getData);
        setIsloading(false);
      });
  };

  useEffect(() => {
    getSearchList();
    setIsloading(true);
  }, [name, id]);

  window.addEventListener("popstate", function (event) {
    setOpen(false);
  });

  return (
    <div>
      <div className="template_modal">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <div
                className="template_modal_body"
                style={{ minHeight: `${screenHeight - 435}px` }}
              >
                <div
                  className="insta_template_left template_left_width px-0 px-lg-2"
                  style={{ border: "none", width: "100%" }}
                >
                  <div className="d-none d-lg-block serachbar_position">
                    <div
                      className="search_input d-flex align-items-center"
                      // onKeyPress={(e) =>
                      //   e.key === "Enter" &&
                      //   value &&
                      //   (id && id !== "latest" && id !== "trending"
                      //     ? navigate(`/templates/${id}/${value}`)
                      //     : navigate(`/${value}`))
                      // }
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          value &&
                            (id && id !== "latest" && id !== "trending"
                              ? window.history.replaceState(
                                  { replace: true },
                                  "",
                                  `/templates/${id}/${value}`
                                )
                              : window.history.replaceState(
                                  { replace: true },
                                  "",
                                  `/${value}`
                                ));
                          getSearchList();
                          setIsloading(true);
                        }
                      }}

                      //  window.history.replaceState({}, "", `/p/${item.id_name}`);
                      // onKeyPress={(e) => {
                      //   if (e.key === "Enter") {
                      //     getSearchList();
                      //     setIsloading(true);
                      //   }
                      // }}
                    >
                      <input
                        type="search"
                        value={value}
                        placeholder="Search instagram posts"
                        className="border-0 bg-transparent w-100 h-100 fs-5"
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <i
                        className="fa-solid fa-magnifying-glass color_green1 fs-6"
                        onClick={() => {
                          value &&
                            (id && id !== "latest" && id !== "trending"
                              ? window.history.replaceState(
                                  { replace: true },
                                  "",
                                  `/templates/${id}/${value}`
                                )
                              : window.history.replaceState(
                                  { replace: true },
                                  "",
                                  `/${value}`
                                ));
                          getSearchList();
                          setIsloading(true);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>
                {isloading ? (
                  <main className="main">
                    <span className="loader"></span>
                  </main>
                ) : (
                  <div className="you_may_like template_main ">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0 30px",
                        minHeight: "70px",
                      }}
                    >
                      {finalData?.datas?.length > 0 ? (
                        <h3 className="mb-0 text-center">
                          The template you found
                        </h3>
                      ) : (
                        <div
                          style={{
                            textAlign: "center",
                            // height: `${screenHeight - 485}px`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <h3> No templates found</h3>
                        </div>
                      )}

                      {/* <p
                        className="use_template_btn d-none d-lg-block"
                        style={{ width: "150px", cursor: "pointer" }}
                        onClick={() =>
                          currentPathname?.includes("templates")
                            ? navigate(`/templates/${id}`, { replace: true })
                            : navigate("/", { replace: true })
                        }
                      >
                        <i className="fa-solid fa-arrow-left-long pe-2"></i>

                        <span>Back</span>
                      </p> */}
                    </div>

                    <div
                      style={{
                        gridTemplateColumns: ` repeat(${multiSize}, minmax(0px, 1fr))`,
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      {finalData?.datas?.map((item: any, index: number) => {
                        function calculateHeight(
                          width: number,
                          height: number,
                          newWidth: number
                        ) {
                          return (height / width) * newWidth;
                        }
                        return (
                          <div
                            key={index}
                            className="single_template_card see_all  "
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setDataPaas(item);
                              setTimeout(() => {
                                setOpen(true);
                              }, 200);
                              const newPath = `p/${item.id_name}`;
                              window.history.pushState({}, "", newPath);
                            }}
                          >
                            <div
                              className={`${
                                id && id !== "latest" && id !== "trending"
                                  ? "h_auto"
                                  : "background_light_green padding_10 min_h_240"
                              } gallery_img position-relative`}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              // style={{ display: isLoadedImage ? "flex" : "none" }}
                              // onClick={() => setOpen(true)}
                            >
                              <img
                                className={`${
                                  mainId < 0
                                    ? " no_width "
                                    : `img_width_187px border_radius this_template_width`
                                }  `}
                                src={item?.template_thumb}
                                alt={item?.template_name}
                                // onLoad={handleImageLoad}
                                style={{
                                  height: `${calculateHeight(
                                    item?.width,
                                    item?.height,
                                    height
                                  )}px`,
                                }}
                              />

                              {item.is_premium ? (
                                <div className="pricing_option">
                                  <a className="pricing_icon text-decoration-none">
                                    <i className="fa-solid fa-crown text-warning" />
                                  </a>
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                            <div
                              className={`img_small_title mt-3 pb-3 ${"img_small_title_template_width"} `}
                            >
                              <h6 className="mb-0">{item.template_name}</h6>
                              <span>{item.category_name}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TemplateModel
        open={open}
        setOpen={setOpen}
        templateData={dataPass}
        templates={finalData?.datas ?? []}
        screenWidth={screenWidth}
        mainId={"-1"}
        currentPathname={currentPathname}
      />
    </div>
  );
}
