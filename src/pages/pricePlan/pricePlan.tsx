import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Payment from "./payment/Payment";

const getCountryCode = async () => {
  try {
    const response = await axios.get("https://ipapi.co/json/");
    return response.data.country_code;
  } catch (error) {
    console.error(error);
  }
};

export default function PricePlan() {
  const uId = localStorage.getItem("userProfile");
  console.log("token: ", uId);
  const [pricePlaneData, setpricePlaneData] = useState<any>();
  console.log("pricePlaneData: ", pricePlaneData);
  const [checkedDataPlane, setcheckedDataPlane] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [razorpayDetails, setRazorpayDetails] = useState<any>({});
  console.log("checkedDataPlane: ", razorpayDetails);
  const [countryCode, setCountryCode] = useState("");
  console.log("countryCode: ", countryCode);

  useEffect(() => {
    getCountryCode().then((code) => setCountryCode(code));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(
        "/my-api",
        { user_id: uId, currency: countryCode === "IN" ? "INR" : "USD" },
        { withCredentials: false }
      )
      .then((response: any) => {
        const jsonString = response.data.substring(
          response.data.indexOf("{"),
          response.data.lastIndexOf("}") + 1
        );
        // const a = JSON.stringify(response?.data);
        console.log("itsData", JSON.parse(jsonString));
        const getData = JSON.parse(jsonString);
        setpricePlaneData(getData?.subs);
        setIsLoading(false);
      });
  }, [countryCode, uId]);

  const getPayment = () => {
    axios
      .post("/my-payment", {
        packageId: checkedDataPlane?.id,
        packageName: checkedDataPlane?.package_name,
        rate: checkedDataPlane?.price,
        currency: checkedDataPlane?.currency,
        pay_mode: "subs",
        fromWallet: "0",
        user_id: uId,
      })
      .then((response: any) => {
        const jsonString = response.data;
        console.log("jsonString: ", jsonString);
        const getData = JSON.parse(
          jsonString.replace(/True/g, "true").replace(/'/g, '"')
        );
        console.log("getPayment", getData);
        setRazorpayDetails(getData);
        // const a = JSON.stringify(response?.data);
        // setpricePlaneData(getData?.subs);
        // setIsLoading(false);
      });
    axios
      .post("/my-payment/stripe", {
        packageId: checkedDataPlane?.id,
        packageName: checkedDataPlane?.package_name,
        rate: checkedDataPlane?.price,
        currency: checkedDataPlane?.currency,
        pay_mode: "subs",
        fromWallet: "0",
        user_id: uId,
      })
      .then((response: any) => {
        const jsonString = response.data;
        console.log("jsonString: ", jsonString);
        const getData = JSON.parse(
          jsonString.replace(/True/g, "true").replace(/'/g, '"')
        );
        console.log("stripeData", getData);
        // setRazorpayDetails(getData);
        // const a = JSON.stringify(response?.data);
        // setpricePlaneData(getData?.subs);
        // setIsLoading(false);
      });
  };

  // localStorage.clear();

  useEffect(() => {
    getPayment();
  }, [checkedDataPlane]);
  return (
    <>
      <div className="row mx-5">
        <div
          className="faq_main  col-md-6"
          style={{ backgroundColor: "#F5F5F5", paddingTop: "25px" }}
        >
          <div className="section_heading text-center mb-4 pb-2">
            <h5 className="color_green1">Welcome To Crafty Art Design</h5>
            <h2 className="section_title mb-0">Select Your Best Plan</h2>
          </div>
          <div className="container">
            <div className="faq_inner">
              <div className="faq_accordion">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="true"
                        aria-controls="faq1"
                      >
                        Can I use Crafty Art for free?
                      </button>
                    </h2>
                    <div
                      id="faq1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes, Crafty Art offers a free online logo maker. To
                          access it, select the Logo Maker option from the main
                          page and choose one of the premade templates. You can
                          then add your own images, text, and design elements to
                          customise the post. When you’re finished, click
                          "Save," and your logo will be ready to download.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="false"
                        aria-controls="faq2"
                      >
                        What are the benefits of a premium subscription?
                      </button>
                    </h2>
                    <div
                      id="faq2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          As a premium user you can download unlimited Crafty
                          Art assets, and various services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                      >
                        Why do i have to purchase Crafty Art Pro?
                      </button>
                    </h2>
                    <div
                      id="faq3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          With the premium user, you can access unlimited
                          service of Crafty Art Pro.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                      >
                        Are my downloads unlimited as a premium user?
                      </button>
                    </h2>
                    <div
                      id="faq4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes, as a premium user, you have unlimited downloads.
                          There is no limitations on the use of Crafty Art
                          assets, templates, and the Background Remover Tool.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========= CHOOSE PLAN SECTION ========= */}
        <section
          className="choose-plan my-5 container-fluid col-md-6"
          style={{ paddingTop: "40px" }}
        >
          <a
            href="javascript:;"
            className=" btn view-choose-plan mt-4 mb-5"
            // data-bs-toggle="offcanvas"
            // data-bs-target="#choosePlanOffcanvas"
            // aria-controls="choosePlanOffcanvas"
          >
            <i className="fa-solid fa-crown text-warning pe-2" />
            View Subscriptions Plan
          </a>
          <div className="choose-plan-inner px-sm-0 px-3">
            <div className="justify-content-center align-items-center flex-wrap">
              {pricePlaneData?.map((item: any) => (
                <div
                  className="px-3 mb-4"
                  style={{ cursor: "pointer" }}
                  onClick={() => setcheckedDataPlane(item)}
                >
                  <div
                    className="choose-plan-card common-card selected-cards"
                    id="basic"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="radioButton">
                        <input
                          type="radio"
                          id={`plane-${item.id}`}
                          name="plane-selector"
                          value={item.id}
                          checked={checkedDataPlane?.id === item.id}
                        />
                        <label htmlFor="f-option">
                          <h3 className="section_title mb-3">
                            {item?.package_name}
                          </h3>
                        </label>
                        <div className="check"></div>
                      </div>

                      <div
                        className="choose-plan-inr"
                        style={{
                          display: "inline-block",
                          alignItems: "flex-end",
                        }}
                      >
                        <h4
                          className=" mb-0"
                          style={{
                            textDecoration: "line-through",
                            opacity: "0.6",
                          }}
                        >
                          {item?.has_offer ? item?.actual_price : ""}
                        </h4>
                        <h4 className=" mb-0">
                          {/* {convertINRtoUSD(item?.price) as any} */}
                          {item?.offer_price}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="choose-plan my-3 container-fluid">
            <div className="choose-plan-inner px-sm-0 px-3">
              <div
                className="choose-plan-card"
                style={{
                  backgroundColor: "#F5F5F5",
                  paddingLeft: "0",
                  paddingRight: "0",
                }}
              >
                {uId ? (
                  <button
                    type="button"
                    className="w-100 register_btn text-decoration-none login_modal_open"
                    data-bs-toggle="modal"
                    data-bs-target="#payout"
                    style={{ border: "none" }}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="button"
                    className="w-100 register_btn text-decoration-none login_modal_open"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    role="button"
                    style={{ border: "none" }}
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* ========= CHOOSE PLAN MODAL START ========= */}
          <Payment
            selectPaln={checkedDataPlane}
            razorpayDetails={razorpayDetails}
            countryCode={countryCode}
          />
          {/* ========= CHOOSE PLAN OFFCANVAS START ========= */}
          <div
            className="offcanvas offcanvas-end "
            tabIndex={-1}
            id="choosePlanOffcanvas"
            aria-labelledby="choosePlanOffcanvasLabel"
          >
            <div className="offcanvas-header justify-content-start align-items-baseline">
              <button
                type="button"
                className="btn text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-solid fa-arrow-left" />
              </button>
              <h5 className="section_heading_title mb-0">Subscriptions Plan</h5>
            </div>
            <div className="plan-inner-body">
              <div className="plan-card card active mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Basic</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">99</h3>
                    <p className="text-start mb-0">INR / per 7 days</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Standard</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">299</h3>
                    <p className="text-start mb-0">INR / per 1 month</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Premium</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">899</h3>
                    <p className="text-start mb-0">INR / per 6 month</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Silver</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">1255</h3>
                    <p className="text-start mb-0">INR / per 1 year</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Gold</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">2149</h3>
                    <p className="text-start mb-0">INR / per 2 year</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Platinum</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">4469</h3>
                    <p className="text-start mb-0">INR / per 5 year</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
            </div>
            <div className="plan-inner-footer">
              <a
                href="javascript:;"
                className="btn paynow py-2"
                data-bs-toggle="modal"
                data-bs-target="#payout"
              >
                Next
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="small_fixed_footer d-bock d-sm-none">
        <div className="small_screen_footer_link position-relative">
          <div className="d-flex justify-content-between">
            <div className="bottom_footer_link">
              <a
                href="index.html"
                className="d-flex flex-column align-items-center text-decoration-none active"
              >
                <i className="fa-sharp fa-solid fa-house fs-5" />
                <span>Home</span>
              </a>
            </div>
            <div className="bottom_footer_link">
              <a
                href="javscript:;"
                className="d-flex flex-column align-items-center text-decoration-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#creation_bottom"
              >
                <i className="fa-sharp fa-solid fa-folder fs-5" />
                <span>Creation</span>
              </a>
            </div>
            <div className="bottom_footer_link">
              {/* <a
          href="price&plan.html"
          className="d-flex flex-column align-items-center text-decoration-none"
        >
          <i className="fa-sharp fa-solid fa-crown fs-5" />
          <span>Premium</span>
        </a> */}
              <Link
                to="/pricePlans"
                className="d-flex flex-column align-items-center text-decoration-none"
              >
                <i className="fa-sharp fa-solid fa-crown fs-5" />
                <span>Premium</span>
              </Link>
            </div>
            <div className="bottom_footer_link">
              <a
                href="javscript:;"
                className="d-flex flex-column align-items-center text-decoration-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#profile_bottom"
              >
                <i className="fa-sharp fa-solid fa-circle-user fs-5" />
                <span>Profile</span>
              </a>
            </div>
          </div>
          <div className="bottom_footer_pluse">
            <a
              href="javscript:;"
              className="text-decoration-none text-white fs-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#custom_size"
            >
              <i className="fa-sharp fa-solid fa-plus fs-2" />
            </a>
          </div>
        </div>
        {/* ======= PROFILE OFFCANVAS ========= */}
        <div
          className="profile_offcanvas offcanvas offcanvas-bottom"
          tabIndex={-1}
          id="profile_bottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-center w-100"
              id="offcanvasBottomLabel"
            >
              Account
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="profile_offcanvas_inner">
              <div className="profile_single_item d-flex align-items-start mb-4">
                <div className="single_item_icon pe-3">
                  <img
                    src="assets/images/Icons/accountuser.png"
                    alt="usericon"
                    className="img-fluid"
                  />
                </div>
                <div className="single_items_text border-bottom w-100 pb-4">
                  <h6 className="mb-2 fw-bold">Profile</h6>
                  <p className="mb-0 text-muted fw-normal">
                    Edit photo, display name, user name, email id
                  </p>
                </div>
              </div>
              <div className="profile_single_item d-flex align-items-start mb-4">
                <div className="single_item_icon pe-3">
                  <img
                    src="assets/images/Icons/subscription.png"
                    alt="usericon"
                    className="img-fluid"
                  />
                </div>
                <div className="single_items_text border-bottom w-100 pb-4">
                  <h6 className="mb-2 fw-bold">Subscriptions</h6>
                  <p className="mb-0 text-muted fw-normal">
                    View current plan, download your invoice pdf
                  </p>
                </div>
              </div>
              <div className="profile_single_item d-flex align-items-start mb-4">
                <div className="single_item_icon pe-3">
                  <img
                    src="assets/images/Icons/referuser.png"
                    alt="usericon"
                    className="img-fluid"
                  />
                </div>
                <div className="single_items_text border-bottom w-100 pb-4">
                  <h6 className="mb-2 fw-bold">Refer Friends</h6>
                  <p className="mb-0 text-muted fw-normal">
                    Easily refer and share your templates with friends
                  </p>
                </div>
              </div>
              <div className="profile_single_item d-flex align-items-start mb-4">
                <div className="single_item_icon pe-3">
                  <img
                    src="assets/images/Icons/help.png"
                    alt="usericon"
                    className="img-fluid"
                  />
                </div>
                <div className="single_items_text border-bottom w-100 pb-4">
                  <h6 className="mb-2 fw-bold">Get Support</h6>
                  <p className="mb-0 text-muted fw-normal">
                    24/7 any issue instant support
                  </p>
                </div>
              </div>
              <div className="profile_single_item d-flex align-items-start mb-4">
                <div className="single_item_icon pe-3">
                  <img
                    src="assets/images/Icons/file.png"
                    alt="usericon"
                    className="img-fluid"
                  />
                </div>
                <div className="single_items_text border-bottom w-100 pb-4">
                  <h6 className="mb-2 fw-bold">My Creation</h6>
                  <p className="mb-0 text-muted fw-normal">
                    View your last create design tempate
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-footer p-3">
            <a
              className="w-100 register_btn text-decoration-none"
              href="javacript:;"
            >
              Logout
            </a>
          </div>
        </div>
        {/* ======= CREATION OFFCANVAS ========= */}
        <div
          className="profile_offcanvas creation_offcanvas offcanvas offcanvas-bottom"
          tabIndex={-1}
          id="creation_bottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-center w-100"
              id="offcanvasBottomLabel"
            >
              Creation
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <div className="creation_offcanvas_inner template_design">
              <div className="row">
                <div className="col-6 mb-3">
                  <div className="position-relative">
                    <div className="gallery_img">
                      <a href="javascript:;">
                        <img
                          src="assets/images/latest Template/LT-3.png"
                          className="img-fluid w-100"
                          alt="template"
                        />
                      </a>
                    </div>
                    <div className="gallery_menu">
                      <a href="javascript:;" className="gallery_menu_icon">
                        <i className="fa-sharp fa-solid fa-ellipsis" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="position-relative">
                    <div className="gallery_img">
                      <a href="javascript:;">
                        <img
                          src="assets/images/latest Template/LT-5.png"
                          className="img-fluid w-100"
                          alt="template"
                        />
                      </a>
                    </div>
                    <div className="gallery_menu">
                      <a href="javascript:;" className="gallery_menu_icon">
                        <i className="fa-sharp fa-solid fa-ellipsis" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="position-relative">
                    <div className="gallery_img">
                      <a href="javascript:;">
                        <img
                          src="assets/images/latest Template/LT-4.png"
                          className="img-fluid w-100"
                          alt="template"
                        />
                      </a>
                    </div>
                    <div className="gallery_menu">
                      <a href="javascript:;" className="gallery_menu_icon">
                        <i className="fa-sharp fa-solid fa-ellipsis" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="position-relative">
                    <div className="gallery_img">
                      <a href="javascript:;">
                        <img
                          src="assets/images/insta story/IS-3.png"
                          className="img-fluid w-100"
                          alt="template"
                        />
                      </a>
                    </div>
                    <div className="gallery_menu">
                      <a href="javascript:;" className="gallery_menu_icon">
                        <i className="fa-sharp fa-solid fa-ellipsis" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading && (
        <main className="main">
          <span className="loader"></span>
        </main>
      )}
    </>
  );
}
