import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TemplateModel from "../../allTemplate/components/tempateModal/TemplateModel";

export const ImageComponent = ({
  temp,
  item,
  multiSize,
  templates,
  screenWidth,
  currentPathname,
}: any) => {
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const [open, setOpen] = useState(false);

  const handleImageLoad = () => {
    setIsLoadedImage(true);
  };
  function calculateHeight(width: number, height: number, newWidth: number) {
    return (height / width) * newWidth;
  }

  window.addEventListener("popstate", function (event) {
    setOpen(false);
  });

  return (
    <>
      <div
        className={`${
          item.category_id < 0
            ? "background_light_green padding_10 min_h_240"
            : "h_auto"
        } gallery_img position-relative`}
        style={{ display: isLoadedImage ? "flex" : "none" }}
        onClick={() => {
          const newPath = `p/${temp.id_name}`;
          window.history.pushState({}, "", newPath);
          setOpen(true);
        }}
      >
        <a
          className="text-decoration-none"
          href="javscript:;"
          data-bs-target="#templateModal"
          data-bs-toggle="modal"
        >
          <img
            className={`${
              item.category_id < 0
                ? " no_width "
                : `img_width_187px border_radius`
            }  `}
            src={temp?.template_thumb}
            alt={temp?.template_name}
            onLoad={handleImageLoad}
            style={{
              height: `${calculateHeight(
                temp?.width,
                temp?.height,
                multiSize
              )}px`,
              width: "100%",
            }}
          />
        </a>

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
          item.category_id < 0
            ? "background_light_green padding_10 min_h_240"
            : "h_auto"
        } gallery_img position-relative  skeleton-loader`}
        style={
          {
            backgroundColor: "#497dec26",
            display: isLoadedImage ? "none" : "block",
            borderRadius: "10px",
            height: `${calculateHeight(
              temp?.width,
              temp?.height,
              multiSize
            )}px`,
          } as any
        }
      ></div>

      <TemplateModel
        open={open}
        setOpen={setOpen}
        templateData={temp}
        templates={templates}
        screenWidth={screenWidth}
        mainId={item.category_id}
        currentPathname={currentPathname}
      />
    </>
  );
};

export const MainComponent = ({
  item,
  multiSize,
  templates,
  screenWidth,
}: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPathname = location.pathname;
  const containerId = `carousel-slide-container-${item.category_id}`;

  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [containerId]);

  const handleNextClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section key={item.category_id} className="latest_templates mt-2">
      <div
        className="container-fluid"
        style={{ paddingBottom: "10px", position: "relative" }}
      >
        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
          <h3 className="section_title mb-0">
            {item.category_name} ({item.template_model.length})
          </h3>

          <a
            onClick={() => navigate(`/templates/${item?.id_name}`)}
            className="show_more_link text-decoration-none me-3"
          >
            See all
          </a>
        </div>
        <div className="gallery_main">
          <div className="gallery_inner" style={{ position: "relative" }}>
            <div
              className="flex_menu gap_10 carousel-slide-container"
              id={containerId}
            >
              {item?.template_model?.map((temp: any) => {
                return (
                  <div key={temp.template_id} className="single_template_card ">
                    <ImageComponent
                      item={item}
                      temp={temp}
                      multiSize={multiSize}
                      templates={item?.template_model}
                      screenWidth={screenWidth}
                      currentPathname={currentPathname}
                    />
                    <div
                      className={`img_small_title mt-3 ${
                        item.category_id > 0 && "img_small_title_width"
                      } `}
                    >
                      <h6 className="mb-0">{temp.template_name}</h6>
                      <span>{temp.category_name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {showPrevButton && (
          <button onClick={handlePrevClick} className="pre_botton">
            <KeyboardArrowLeftIcon />
          </button>
        )}
        {showNextButton && (
          <button onClick={handleNextClick} className="next_botton">
            <KeyboardArrowRightIcon />
          </button>
        )}
      </div>
    </section>
  );
};

export default function TamplateDesign({ templates, isloading }: any) {
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

  useEffect(() => {
    setTimeout(() => {
      if (!isloading) {
        window.scrollBy(0, 0.5);
      }
    }, 10);
  }, [isloading]);

  const multiSize = useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 170;

      case screenWidth > 480:
        return 160;
      default:
        return 110;
    }
  }, [screenWidth]);

  return (
    <>
      <main className="template_design pt-sm-4">
        <div className="section_heading text-center container-fluid d-none d-sm-block">
          <h5 className="section_heading_title mb-2 pb-1">
            Make your designs as unique as your business
          </h5>
          <p className="comman_para w-75 mx-auto">
            Create Professional Designs Effortlessly with Our Free Online Logo
            Maker, Invitation Card Maker, Poster Maker, Thumbnail Maker,
            Instagram Story Maker, Facebook Story Maker, Resume Maker, YouTube
            Banner Template, Festival Poster Maker, Diwali Poster, Book Cover
            Templates, Calendar Templates, Portrait Certificate Template,
            Visiting Card Design, Bio Data for Marriage, Bio Data Format, Bio
            Data Editor and Graphic Design with Crafty Art.
          </p>
        </div>

        {isloading ? (
          <div style={{ padding: "0 20px", overflow: "hidden" }}>
            {new Array(10).fill("#497dec26").map((data, index) => (
              <div
                key={index}
                style={{
                  gap: "10px",
                  overflow: "hidden",
                  justifyContent: "space-between",
                  // flexDirection: "column",
                  display: "flex",
                }}
                className="mt-3"
              >
                {new Array(25).fill("#497dec26").map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#497dec26",
                      marginBottom: "10px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                    className={`skeleton-loader single_template_card_loader`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          templates?.datas?.map((item: any) => {
            return (
              <MainComponent
                item={item}
                multiSize={multiSize}
                templates={templates}
                screenWidth={screenWidth}
              />
            );
          })
        )}
      </main>
    </>
  );
}
