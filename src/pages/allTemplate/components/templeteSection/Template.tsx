import React, { useEffect, useState, useMemo, useRef } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import api from "../../../../services/api";
import { CatDataRoot } from "../../../../interfaces/CatDataObject";
import TemplateModel from "../tempateModal/TemplateModel";
import { consoleShow } from "../../../../commonFunction/console";

export const ImageComponent = ({ state, item, height, isNotFix }: any) => {
  const [isLoadedImage, setIsLoadedImage] = useState(false);

  const handleImageLoad = (event: any) => {
    setIsLoadedImage(true);
  };

  function calculateHeight(width: number, height: number, newWidth: number) {
    return (height / width) * newWidth;
  }

  return (
    <>
      <div
        className={`${
          !isNotFix ? "background_light_green padding_10 min_h_240" : "h_auto"
        } gallery_img position-relative`}
        style={{ display: isLoadedImage ? "flex" : "none" }}
      >
        <img
          className={`${
            !isNotFix
              ? " no_width "
              : "img_width_187px border_radius this_template_width"
          }  `}
          src={item?.template_thumb}
          alt={item?.template_name}
          onLoad={handleImageLoad}
          style={{
            height: `${calculateHeight(item?.width, item?.height, height)}px`,
            width: "auto",
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
        className={`${
          !isNotFix ? "background_light_green padding_10 min_h_240" : "h_auto"
        } gallery_img position-relative`}
        style={{
          backgroundColor: "#497dec26",
          display: isLoadedImage ? "none" : "block",
          borderRadius: "10px",
          height: `${calculateHeight(item?.width, item?.height, height)}px`,
        }}
      ></div>
    </>
  );
};

export default function Templete({ setId }: any) {
  const location = useLocation();
  const currentPathname = location.pathname;
  const lastItemRef = useRef(null);
  const { categoryId } = useParams();
  consoleShow("categoryId: ", categoryId);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [templates, setTemplates] = useState<CatDataRoot>();
  const [isloading, setIsloading] = React.useState(true);
  const [mainLoading, setMainLoading] = useState<any>(false);
  const [apiData, setapiData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [open, setOpen] = useState(false);
  const [dataPass, setDataPaas] = useState({});
  const [isNotFix, setIsNotFix] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchData = async () => {
    const templates_ = await api.getCategoryDatas({
      debug_key: "debug",
      cat_id: categoryId as any,
      limit: 50,
      page: page,
    });
    consoleShow("templates_: ", templates_);
    setIsNotFix(templates_?.cat_id >= 0);
    const newItems = templates_?.datas;
    setPage(page + 1);
    setTemplates(templates_);
    setIsloading(false);
    setId(
      templates_?.cat_id < 0
        ? templates_?.cat_id
        : templates_?.datas[0]?.category_id
    );

    if (page > 1) {
      setapiData([...apiData, ...newItems]);
    } else {
      setapiData(newItems);
    }
  };

  useEffect(() => {
    fetchData();
    setIsloading(true);
    setPage(1);
  }, [categoryId]);

  const multiSize = useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 8;
      case screenWidth > 1200:
        return 6;
      case screenWidth > 900:
        return 5;
      case screenWidth > 800:
      case screenWidth > 700:
        return 4;
      case screenWidth > 600:
      case screenWidth > 550:
        return 3;
      default:
        return 2;
    }
  }, [screenWidth]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 1 }
    );
    if (lastItemRef.current) {
      observer.observe(lastItemRef.current);
    }
    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
      }
    };
  }, [lastItemRef, page]);

  function calculateHeight(width: number, height: number, newWidth: number) {
    return (height / width) * newWidth;
  }

  const height = useMemo(() => {
    switch (true) {
      case screenWidth > 480:
        return 160;
      default:
        return 150;
    }
  }, [screenWidth]);
  // const handleClose = () => {
  //   navigate(`/templates/ip/p/`, { replace: true });
  //   // Close the dialog
  //   setOpen(false);
  // };

  window.addEventListener("popstate", function (event) {
    setOpen(false);
  });

  return (
    <div
      className="template_main mt-4 mt-lg-0 template_design  "
      id="scrollableDiv"
    >
      {isloading ? (
        <section className="latest_templates mt-2">
          <div className="container-fluid">
            <Skeleton count={5} height={200} />
          </div>
        </section>
      ) : (
        <>
          <div
            style={{
              gridTemplateColumns: ` repeat(${multiSize}, minmax(0px, 1fr))`,
              display: "grid",
              placeItems: "center",
            }}
          >
            {apiData.map((item: any, index: number) => (
              <>
                <div
                  key={index}
                  className="single_template_card see_all  "
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setDataPaas(item);
                    setTimeout(() => {
                      setOpen(true);
                    }, 200);

                    const newPath = `p/${item?.id_name}`;
                    window.history.pushState({}, "", newPath);
                  }}
                >
                  <ImageComponent
                    state={categoryId}
                    item={item}
                    height={height}
                    isNotFix={isNotFix}
                  />

                  <div
                    className={`img_small_title mt-3 pb-3 ${
                      isNotFix && "img_small_title_template_width"
                    } `}
                  >
                    <h6 className="mb-0">{item.template_name}</h6>
                    <span>{item.category_name}</span>
                  </div>
                </div>
              </>
            ))}
            {templates && templates?.total_pages > page ? (
              new Array(multiSize).fill("#497dec26").map((item, index) => (
                <div
                  key={index}
                  ref={lastItemRef}
                  style={{
                    backgroundColor: "#497dec26",
                    borderRadius: "10px",
                    marginBottom: "61px",
                    height: `${calculateHeight(
                      apiData[0]?.width,
                      apiData[0]?.height,
                      height
                    )}px`,
                  }}
                  className={` ${
                    !isNotFix ? "min_h_240" : ""
                  } skeleton-loader img_width_187px this_template_width`}
                ></div>
              ))
            ) : (
              <></>
            )}
          </div>

          <TemplateModel
            open={open}
            setOpen={setOpen}
            templateData={dataPass}
            templates={apiData}
            screenWidth={screenWidth}
            mainId={templates?.cat_id}
            currentPathname={currentPathname}
          />
        </>
      )}
    </div>
  );
}
