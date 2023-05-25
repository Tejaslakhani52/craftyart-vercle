import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs(): JSX.Element {
  return (
    <>
      {/* =============== SMALL SCREEEN BOTTOM ============ */}
      <div className="small_fixed_footer d-bock d-sm-none">
        <div className="small_screen_footer_link position-relative">
          <div className="d-flex justify-content-between">
            <div className="bottom_footer_link">
              <Link
                to="/"
                className="d-flex flex-column align-items-center text-decoration-none active"
              >
                <i className="fa-sharp fa-solid fa-house fs-5" />
                <span>Home</span>
              </Link>
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
              <a
                href="price&plan.html"
                className="d-flex flex-column align-items-center text-decoration-none"
              >
                <i className="fa-sharp fa-solid fa-crown fs-5" />
                <span>Premium</span>
              </a>
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
        {/* ============ CUSTOM SIZE OFFCANVAS ================= */}
        <div
          className="custom_size_offcanvas offcanvas offcanvas-bottom custom_size_dropdown h-auto"
          tabIndex={-1}
          id="custom_size"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-center w-100"
              id="offcanvasBottomLabel"
            >
              Custom Size
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <form>
              <div className="d-flex justify-content-between align-items-center">
                <div className="pe-2 input_single_data">
                  <label htmlFor="width" className="form-label mb-0">
                    Width
                  </label>
                  <div className="d-flex align-items-center">
                    <div className="border_shadow d-flex align-items-center me-2 px-1 rounded-1">
                      <i className="fa-sharp fa-solid fa-arrows-left-right" />
                      <input
                        type="number"
                        className="form-control border-0"
                        id="width"
                        placeholder={"1920"}
                      />
                    </div>
                    <img
                      src="assets/images/Icons/Lock.png"
                      alt="lock"
                      className="img-fluid lock_icon"
                      style={{ maxHeight: 20 }}
                    />
                  </div>
                </div>
                <div className="pe-2 input_single_data">
                  <label htmlFor="height" className="form-label mb-0">
                    Height
                  </label>
                  <div className="d-flex border_shadow align-items-center me-2 px-1 rounded-1">
                    <i className="fa-sharp fa-solid fa-arrows-up-down" />
                    <input
                      type="number"
                      className="form-control border-0"
                      id="height"
                      placeholder={"1080"}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="height" className="form-label opacity-0">
                    Units
                  </label>
                  <select id="units">
                    <option selected={true}>PX</option>
                    <option value={1}>CM</option>
                    <option value={2}>INCH</option>
                    <option value={3}>MM</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="offcanvas-footer p-3">
            <a
              className="w-100 register_btn text-decoration-none"
              href="javascript:;"
            >
              Create New page
            </a>
          </div>
        </div>
      </div>
      {/* ============= ABOUT US SECTION ======= */}
      <section className="about_us py-5">
        <div className="container-fluid">
          <div className="about_us_header text-center container">
            <h1 className="mb-5 main_heading position-relative">
              About Us - What We Do
            </h1>
            <h4 className="about_section_title mb-2">Welcome to Crafty Art,</h4>
            <p>
              The Online graphic design tool that makes <br />
              it easy to create stunning visuals for any project.{" "}
            </p>
          </div>
          <div className="art_img container text-center">
            <img
              src="assets/images/sectionimg/about1.png"
              alt="art"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
      <div className="aboutus_template my-4">
        <div className="unlimited_template">
          {/* <div class="unlimited_img">
          <img src="assets/images/sectionimg/aboutnewbg.png" alt="">
      </div> */}
          <div className="template_inner">
            <h3 className="about_main_title mb-4">Unlimited Templates</h3>
            <div className="template_content w-75 mx-auto">
              <p>
                Unlimited templates provide users with a wide range of creative
                options for all their design projects.{" "}
              </p>
              <p>
                With a selection of ready-made and custom-made templates, users
                can quickly and easily create unique designs for logos, flyers,
                invitations, and more.
              </p>
              <p>
                {" "}
                With the help of this powerful tool, users can easily create
                beautiful projects in no time.
              </p>
            </div>
          </div>
        </div>
        <div className="about_design_tool container my-4 border-bottom pb-5">
          <div className="row">
            <div className="col-md-5 px-3">
              <div className="design_tool_left h-100 text-lg-start text-center">
                <img
                  src="assets/images/sectionimg/about-4.png"
                  alt="designtool"
                  className="img-fluid rounded h-100"
                />
              </div>
            </div>
            <div className="col-md-7 mt-md-0 mt-3 px-3">
              <div className="design_tool_right h-100 d-flex justify-content-center flex-column template_content">
                <h3 className="about_main_title mb-3">
                  Unlock Your Creativity with the Online Graphic Design Tool
                  Crafty Art
                </h3>
                <p>
                  An online graphic design tool Crafty Art is a digital platform
                  that enables users to create professional-looking artwork
                  using a variety of tools and templates.
                </p>
                <p>
                  It is perfect for those looking to make eye-catching visuals
                  for websites, social media, and other digital projects.{" "}
                </p>
                <p>
                  It offers a range of features to help users create stunning
                  designs quickly and easily.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="startup_info container my-3">
          <div className="text-md-center my-4">
            <h3 className="about_main_title">
              One of World’s Fastest-Growing Start-ups
            </h3>
            <h4 className="about_section_title fw-normal">
              “567 World’s Fastest-Growing Companies” from Financial Times.
            </h4>
          </div>
          <div className="startup_info_inner">
            <div className="row">
              <div className="col-md-6 px-3">
                <img
                  src="assets/images/sectionimg/blogstartup1.png"
                  alt="blogstartup"
                  className="img-fluid w-100"
                />
              </div>
              <div className="col-md-6 mt-4 mt-md-0 px-3">
                <div className="row">
                  <div className="col-6 px-3">
                    <img
                      src="assets/images/sectionimg/blogstartup3.png"
                      alt="blogstartup"
                      className="img-fluid w-100 h-100"
                    />
                  </div>
                  <div className="col-6 px-3">
                    <img
                      src="assets/images/sectionimg/blogstartup2.png"
                      alt="blogstartup"
                      className="img-fluid w-100 h-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-md-5 mx-md-5 px-4 my-5">
            <div className="row align-items-center">
              <div className="col-lg-2 col-sm-4 col-6 text-center">
                <h6 className="color_green1">2023</h6>
                <p className="mb-0">lanched</p>
              </div>
              <div className="col-lg-2 col-sm-4 col-6  text-center">
                <h6 className="color_green1">10M+</h6>
                <p className="mb-0">MAUS</p>
              </div>
              <div className="col-lg-2 col-sm-4 col-6  text-center">
                <h6 className="color_green1">1M+</h6>
                <p className="mb-0">Design Created</p>
              </div>
              <div className="col-lg-2 col-sm-4 col-6  text-center">
                <h6 className="color_green1">143+</h6>
                <p className="mb-0">Coutries</p>
              </div>
              <div className="col-lg-2 col-sm-4 col-6  text-center">
                <h6 className="color_green1">3</h6>
                <p className="mb-0">Language</p>
              </div>
              <div className="col-lg-2 col-sm-4 col-6  text-center">
                <h6 className="color_green1">100+</h6>
                <p>Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
