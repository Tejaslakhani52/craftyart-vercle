import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <div>
        {/* =============== SMALL SCREEEN BOTTOM ============ */}
        <div className="small_fixed_footer d-bock d-sm-none">
          <div className="small_screen_footer_link position-relative">
            <div className="d-flex justify-content-between">
              <div className="bottom_footer_link">
                <Link to="/" className="d-flex flex-column align-items-center text-decoration-none active">
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
                        style={{ maxHeight: "20px" }}
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
                      <option selected>PX</option>
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
        {/* ============== BLOG SECTION ============== */}
        <section className="blog py-4">
          <div className="blog_inner">
            <div className="overflow-auto blog_tab_main d-grid">
              <div className="blog_tab p-3 d-flex justify-content-center align-items-center flex-nowrap">
                <ul
                  className="nav nav-pills justify-content-center pe-lg-5 pe-3 flex-nowrap"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-all-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-all"
                      type="button"
                      role="tab"
                      aria-controls="pills-all"
                      aria-selected="true"
                    >
                      ALL
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-design-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-design"
                      type="button"
                      role="tab"
                      aria-controls="pills-design"
                      aria-selected="false"
                    >
                      DESIGN
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-marketing-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-marketing"
                      type="button"
                      role="tab"
                      aria-controls="pills-marketing"
                      aria-selected="false"
                    >
                      MARKETING
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      NEWS
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      PRODUCTIVITY
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      ENTERTAINMENT
                    </button>
                  </li>
                </ul>
                <div className="search_icon ps-lg-5 ps-3">
                  <i className="fa-solid fa-magnifying-glass" />
                </div>
              </div>
            </div>
            <div
              className="tab-content blog_tab_content pb-5"
              id="pills-tabContent"
            >
              {/*========== ALL BLOG TAB =================== */}
              <div
                className="all_blog_tab tab-pane fade show active"
                id="pills-all"
                role="tabpanel"
                aria-labelledby="pills-all-tab"
                tabIndex={0}
              >
                <h5 className="section_heading_title text-uppercase my-3">
                  Crafty Art Blog
                </h5>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="all_blog_left">
                        <div className="allBlogLeft_img d-flex justify-content-center align-items-center">
                          <img
                            src="assets/images/sectionimg/blog1.png"
                            alt="blog"
                            className="img-fluid"
                          />
                        </div>
                        <div className="allBlogLeft_content my-3">
                          <h5> The Best Of Design Trends in2023 </h5>
                          <p className="mb-0 comman_para">
                            In 2023, design trends will shift. You’ll see more
                            photography jewel tonescoming to the forefront, and
                            fonts with personality!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-3">
                      <div className="all_blog_right">
                        <div className="allBlogRight_content">
                          <div className="allBlog_right_heading blog_borderBottom">
                            <h5>Featured Posts</h5>
                          </div>
                          <div className="blogRight_content blog_borderBottom">
                            <p className="my-3 comman_para">
                              How to Drive Attendees to Your Next Event
                              (Literally!), According to Uber for Business'
                              Marketing Director
                            </p>
                            <div className="blogRight_small d-flex justify-content-between align-items-center">
                              <p className="mb-0">Anna Goroshko</p>
                              <p className="mb-0">1 Feb 2023</p>
                            </div>
                          </div>
                          <div className="blogRight_content blog_borderBottom">
                            <p className="my-3 comman_para">
                              How to Drive Attendees to Your Next Event
                              (Literally!), According to Uber for Business'
                              Marketing Director
                            </p>
                            <div className="blogRight_small d-flex justify-content-between align-items-center">
                              <p className="mb-0">Anna Goroshko</p>
                              <p className="mb-0">1 Feb 2023</p>
                            </div>
                          </div>
                          <div className="blogRight_content blog_borderBottom">
                            <p className="my-3 comman_para">
                              How to Drive Attendees to Your Next Event
                              (Literally!), According to Uber for Business'
                              Marketing Director
                            </p>
                            <div className="blogRight_small d-flex justify-content-between align-items-center">
                              <p className="mb-0">Anna Goroshko</p>
                              <p className="mb-0">1 Feb 2023</p>
                            </div>
                          </div>
                          <div className="blogRight_content blog_borderBottom">
                            <p className="my-3 comman_para">
                              How to Drive Attendees to Your Next Event
                              (Literally!), According to Uber for Business'
                              Marketing Director
                            </p>
                            <div className="blogRight_small d-flex justify-content-between align-items-center">
                              <p className="mb-0">Anna Goroshko</p>
                              <p className="mb-0">1 Feb 2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ========== DESIGN BLOG ========== */}
                  <div className="design_blog my-5">
                    <div className="blog_heading_withline">
                      <div className="cont-left">
                        <h3 className="mb-0">DESIGN</h3>{" "}
                      </div>
                      <div className="line line_bgorange" />
                      <div className="cont-right">
                        <a
                          href="javascript:;"
                          className="text-decoration-none line_colororange"
                        >
                          See more Article
                        </a>
                      </div>
                    </div>
                    <div className="blog_card mt-5">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ========== DESIGN TREND SLIDER ======== */}
                  <div className="design_trend">
                    <div className="row align-items-center px-5">
                      <div className="col-12 col-carousel">
                        <div className="owl-carousel carousel-main design_trend_slider">
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/designblog4.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/blogslider.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/designblog4.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/blogslider.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/designblog4.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/blogslider.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* =========== MARKETING BLOG ============= */}
                  <div className="marketing_blog my-5">
                    <div className="blog_heading_withline">
                      <div className="cont-left">
                        <h3 className="mb-0">MARKETING</h3>{" "}
                      </div>
                      <div className="line line_bgskyblue" />
                      <div className="cont-right">
                        <a
                          href="javascript:;"
                          className="text-decoration-none line_colorskyblue"
                        >
                          See more Article
                        </a>
                      </div>
                    </div>
                    <div className="blog_card mt-5">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgskyblue">
                                  marketing
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgskyblue">
                                  marketing
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgskyblue">
                                  marketing
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* =========== NEWS BLOG ============= */}
                  <div className="news_blog my-5">
                    <div className="blog_heading_withline">
                      <div className="cont-left">
                        <h3 className="mb-0">NEWS</h3>{" "}
                      </div>
                      <div className="line line_bgpurple" />
                      <div className="cont-right">
                        <a
                          href="javascript:;"
                          className="text-decoration-none line_colorpurple"
                        >
                          See more Article
                        </a>
                      </div>
                    </div>
                    <div className="blog_card mt-5">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgpurple">news</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgpurple">news</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgpurple">news</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* =========== PRODUCTIVITY BLOG ============= */}
                  <div className="productivity_blog my-5">
                    <div className="blog_heading_withline">
                      <div className="cont-left">
                        <h3 className="mb-0">PRODUCTIVITY</h3>{" "}
                      </div>
                      <div className="line line_bglightpink" />
                      <div className="cont-right">
                        <a
                          href="javascript:;"
                          className="text-decoration-none line_colorlightpink"
                        >
                          See more Article
                        </a>
                      </div>
                    </div>
                    <div className="blog_card mt-5">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bglightpink">
                                  productivity
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bglightpink">
                                  productivity
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bglightpink">
                                  productivity
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ========== DESIGN TREND SLIDER ======== */}
                  <div className="design_trend">
                    <div className="row align-items-center px-5">
                      <div className="col-12 col-carousel">
                        <div className="owl-carousel carousel-main design_trend_slider">
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/designblog4.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/blogslider.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/designblog4.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/blogslider.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="blog_card">
                            <div className="card h-100">
                              <img
                                src="assets/images/sectionimg/blogslider.png"
                                className="card-img-top"
                                alt="blogcard"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb-3">
                                  Every marketing campaign in Emily in Paris
                                  season 3,deconstructed and rated
                                </h5>
                                <p className="card-text blog_borderBottom comman_para">
                                  The location of your data center affects a key
                                  aspect of user experience – website speed.The
                                  further the server is from your visitors,{" "}
                                </p>
                                <div className="card_footer d-flex justify-content-between align-items-center">
                                  <div className="card_footer_left">
                                    <a
                                      href="javscript:;"
                                      className="text-decoration-none text-black"
                                    >
                                      <i className="fa-regular fa-circle-play pe-3" />
                                      <span>25 Min Lister</span>
                                    </a>
                                  </div>
                                  <div className="card_footer_right d-flex justify-content-between align-items-center">
                                    <img
                                      src="assets/images/sectionimg/cardfooter.png"
                                      alt="userimg"
                                      className="card_footer_img rounded-circle"
                                    />
                                    <p className="mb-0 ps-2">Anna Goroshko</p>
                                    <p className="mb-0 text-muted ps-3">
                                      1 Feb 2023
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* =========== ENTERAINMENT BLOG ============= */}
                  <div className="enterainment_blog my-5">
                    <div className="blog_heading_withline">
                      <div className="cont-left">
                        <h3 className="mb-0">ENTERAINMENT</h3>{" "}
                      </div>
                      <div className="line line_bgyellow" />
                      <div className="cont-right">
                        <a
                          href="javascript:;"
                          className="text-decoration-none line_coloryellow"
                        >
                          See more Article
                        </a>
                      </div>
                    </div>
                    <div className="blog_card mt-5">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgyellow">
                                  enterainment
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgyellow">
                                  enterainment
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgyellow">
                                  enterainment
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* =========== DESIGN BLOG TAB ======== */}
              <div
                className="design_blog_tab tab-pane fade"
                id="pills-design"
                role="tabpanel"
                aria-labelledby="pills-design-tab"
                tabIndex={0}
              >
                <h5 className="section_heading_title text-uppercase my-3">
                  Design
                </h5>
                <div className="container">
                  {/* ========== DESIGN BLOG ========== */}
                  <div className="design_blog">
                    <div className="blog_card">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/designblog1.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                                <span className="line_bgskyblue">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/designblog1.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                                <span className="line_bgskyblue">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ========== DESIGN BLOG ========== */}
                  <div className="design_blog my-5">
                    <div className="blog_card">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ========== DESIGN BLOG 3 ========== */}
                  <div className="design_blog">
                    <div className="blog_card">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/designblog4.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text blog_borderBottom comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left">
                                  <a
                                    href="javscript:;"
                                    className="text-decoration-none text-black"
                                  >
                                    <i className="fa-regular fa-circle-play pe-3" />
                                    <span>25 Min Lister</span>
                                  </a>
                                </div>
                                <div className="card_footer_right d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                  <p className="mb-0 text-muted ps-3">
                                    1 Feb 2023
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/designblog5.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text blog_borderBottom comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left">
                                  <a
                                    href="javscript:;"
                                    className="text-decoration-none text-black"
                                  >
                                    <i className="fa-regular fa-circle-play pe-3" />
                                    <span>25 Min Lister</span>
                                  </a>
                                </div>
                                <div className="card_footer_right d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                  <p className="mb-0 text-muted ps-3">
                                    1 Feb 2023
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ========== DESIGN BLOG ========== */}
                  <div className="design_blog my-5">
                    <div className="blog_card">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgorange">design</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <a
                      className="px-5 register_btn text-decoration-none d-inline-block"
                      href="javascript:;"
                    >
                      See All
                    </a>
                  </div>
                </div>
              </div>
              {/* ========== MRKETING BLOG ============ */}
              <div
                className="merking_blog_tab tab-pane fade"
                id="pills-marketing"
                role="tabpanel"
                aria-labelledby="pills-marketing-tab"
                tabIndex={0}
              >
                <div className="container-fluid">
                  <div className="marketing_blog_main">
                    <div className="social__icons d-none d-xl-block">
                      <div className="social_icon">
                        <a href="javascript:;" className="text-white">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </div>
                      <div className="social_icon">
                        <a href="javascript:;" className="text-white">
                          <i className="fa-brands fa-pinterest" />
                        </a>
                      </div>
                      <div className="social_icon">
                        <a href="javascript:;" className="text-white">
                          <i className="fa-brands fa-twitter" />
                        </a>
                      </div>
                      <div className="social_icon">
                        <a href="javascript:;" className="text-white">
                          <i className="fa-brands fa-linkedin" />{" "}
                        </a>
                      </div>
                      <div className="social_icon">
                        <a href="javascript:;" className="text-white">
                          <i className="fa-solid fa-link" />{" "}
                        </a>
                      </div>
                      <div className="semi__circles mt-2 position-relative">
                        <p className="mb-0 inner_text">50%</p>
                        <div className="semi-circle" />
                        <div className="semi-circle-second" />
                      </div>
                    </div>
                    <div className="instagram_feed_title">
                      <h5 className="marketing_title blog_borderBottom mt-3 pb-3">
                        How to A brief guide to Instagram feed aesthetics
                      </h5>
                      <div className="d-flex justify-content-between align-items-center blog_borderBottom mb-3">
                        <p className="mb-0">Daniel Doan</p>
                        <p className="mb-0">Jan 27, 2023</p>
                      </div>
                    </div>
                    <div className="instagram_feed">
                      <img
                        src="assets/images/sectionimg/instafeed.png"
                        alt="blogcard"
                        className="img-fluid w-100 rounded insta_feed_img"
                      />
                      <div className="insta_feed_breadcrumb text-center my-3">
                        {/* style={{-bsBreadcrumbDivider: '">"'}} */}
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item">
                              <a href="javascript">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="javascript">Blog</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="javascript:;"> Design</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="javscript:;" className="active">
                                {" "}
                                How To Social Media Calender{" "}
                              </a>
                            </li>
                          </ol>
                        </nav>
                      </div>
                      <ul className="list-unstyled">
                        <li className="insta_feed_details mb-3">
                          Instagram and good aesthetics go hand in hand — after
                          all, it’s what the platform was built for in the first
                          place.
                        </li>
                        <li className="insta_feed_details mb-3">
                          While Instagram has changed quite a bit and is far
                          from the photos-first platform from the early 2010s,
                          it’s still primarily visual-centric. It’s where you go
                          to get your hit of painstakingly-choreographed food
                          arrangements and the odd news article and funny cat.
                        </li>
                        <li className="insta_feed_details mb-3">
                          And as the platform grew, small businesses have
                          flocked to Instagram to get more eyeballs on their
                          services. Because what better way to make a good first
                          impression than going to the platform with the exact
                          functionalities needed to make your handmade talismans
                          look their best?
                        </li>
                        <li className="insta_feed_details mb-3">
                          So, in this article, we’ll look at some top tips for
                          creating an aesthetically pleasing Instagram feed that
                          will help your small business look professional and
                          stand out from the crowd. Buckle up.
                        </li>
                      </ul>
                      <div className="insta_feed_smalltitle">
                        <p>Social Media Channels Gaining Steam in 2023</p>
                      </div>
                      <div className="insta_feed_inner">
                        <div className="feed_deatils">
                          <h5 className="marketing_title mt-3 pb-3 fw-bold">
                            Why have an aesthetic in the first place?
                          </h5>
                          <ul className="list-unstyled">
                            <li className="insta_feed_details mb-3">
                              1.{" "}
                              <b>
                                {" "}
                                Small businesses have a lot on their plate{" "}
                              </b>
                              , so why should you bother with Instagram beyond
                              setting up a page and publishing the odd product
                              post?
                            </li>
                            <li className="insta_feed_details mb-3">
                              And as the platform grew, small businesses have
                              flocked to Instagram to get more eyeballs on their
                              services. Because what better way to make a good
                              first impression than going to the platform with
                              the exact functionalities needed to make your
                              handmade talismans look their best?
                            </li>
                            <li className="insta_feed_details mb-3">
                              So, in this article, we’ll look at some top tips
                              for creating an aesthetically pleasing Instagram
                              feed that will help your small business look
                              professional and stand out from the crowd. Buckle
                              up.
                            </li>
                          </ul>
                          <div className="insta_feed_slider_main">
                            <div className="swiper mySwiper insta_feed_slider h-100">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="feed_deatils">
                          <h5 className="marketing_title mt-3 pb-3 fw-bold">
                            First things first — style guide
                          </h5>
                          <ul className="list-unstyled">
                            <li className="insta_feed_details mb-3">
                              Before doing anything else, you should roll up
                              your sleeves and set up a style guide for your
                              Instagram page. This will help you create posts
                              that are visually consistent and recognizable as
                              part of your overall brand.
                            </li>
                            <li className="insta_feed_details mb-3">
                              Your style guide could include colors, fonts,
                              filter settings, or even specific hashtags you
                              want to use in your posts. You should also decide
                              on the general vibe and feel of the page; for
                              example, are you aiming for a minimalist, bright
                              or bold look? Here are some things to consider
                              when creating your style guide:
                            </li>
                          </ul>
                          <div className="insta_styleguide_main">
                            <div className="swiper mySwiper insta_feed_slider h-100">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider2.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider2.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider2.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider2.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                  <img
                                    src="assets/images/sectionimg/instafeedslider2.png"
                                    alt="templateinsta"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="feed_deatils">
                          <h5 className="marketing_title my-3 fw-bold">
                            Your small business’ voice &amp; tone
                          </h5>
                          <div className="insta_feed_smalltitle">
                            <p className="text-black text-decoration-none">
                              Social Media Channels Gaining Steam in 2023
                            </p>
                          </div>
                          <ul className="list-unstyled">
                            <li className="insta_feed_details mb-3">
                              they can show off their brand’s personality in
                              more unique ways and experiment with different
                              posts to see what works with their followers.
                            </li>
                            <li className="insta_feed_details mb-3">
                              When creating your style guide, you should think
                              about how you want to present your brand on
                              Instagram – is it more light-hearted and fun or
                              professional and refined? Take stock of your
                              target audience, too – this will help inform the
                              voice &amp; tone you use in your posts and define
                              your visual identity.
                            </li>
                            <li className="insta_feed_details mb-3">
                              For example, a boutique coffee shop might go for a
                              more light-hearted tone to appeal to its younger
                              customers, while an accounting firm might opt for
                              something more professional and serious. Well,
                              actually, you don’t have to be that serious on
                              social media, even if you’re operating in a more
                              “established” field. It’s all about finding the
                              right balance between being professional and
                              having a fun voice.
                            </li>
                          </ul>
                        </div>
                        <div className="feed_deatils">
                          <h5 className="marketing_title my-3 fw-bold">
                            Your small business’ voice &amp; tone
                          </h5>
                          <ul>
                            <li className="insta_feed_details mb-3">
                              Colors: Identify the primary colors used
                              throughout their posts and aim to use \ similar
                              tones in your own content.
                            </li>
                            <li className="insta_feed_details mb-3">
                              Fonts: Note the fonts they use for captions,
                              headlines, and other text elements – this will
                              help create a cohesive look.
                            </li>
                            <li className="insta_feed_details mb-3">
                              Layout: Think about how they arrange their images
                              and what kind of patterns they’re using.
                              Internalize their patterns and break them down.
                              Maybe there’s something they’re doing wrong that
                              you could do better?
                            </li>
                          </ul>
                        </div>
                        <div className="text-center py-3">
                          <a
                            className="register_btn text-decoration-none d-inline-block px-4"
                            href="javscrtipt;"
                          >
                            Start Designing With Crafty Design
                          </a>
                        </div>
                        <div className="author_details d-flex justify-content-end align-items-center position-relative">
                          <div className="author_img pe-3">
                            <img
                              src="assets/images/sectionimg/author.png"
                              alt="author"
                            />
                          </div>
                          <div className="author_info">
                            <h6>Daniel Doan</h6>
                            <a
                              href="javscript:;"
                              className="color_green1 text-decoration-none"
                            >
                              See author Profile{" "}
                              <i className="fa-solid fa-angle-right ps-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="related_post my-5">
                    <div className="blog_card">
                      <h3 className="section_title my-4 text-uppercase">
                        Related articles
                      </h3>
                      <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgyellow">
                                  enterainment
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bglightpink">
                                  productivity
                                </span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12 mb-3">
                          <div className="card h-100">
                            <img
                              src="assets/images/sectionimg/blog2.png"
                              className="card-img-top"
                              alt="blogcard"
                            />
                            <div className="card-body">
                              <div className="blog_badge mb-3">
                                <span className="line_bgpurple">news</span>
                              </div>
                              <h5 className="card-title mb-3">
                                Every marketing campaign in Emily in Paris
                                season 3,deconstructed and rated
                              </h5>
                              <p className="card-text comman_para">
                                The location of your data center affects a key
                                aspect of user experience – website speed.The
                                further the server is from your visitors,{" "}
                              </p>
                              <div className="card_footer d-flex justify-content-between align-items-center">
                                <div className="card_footer_left d-flex justify-content-between align-items-center">
                                  <img
                                    src="assets/images/sectionimg/cardfooter.png"
                                    alt="userimg"
                                    className="card_footer_img rounded-circle"
                                  />
                                  <p className="mb-0 ps-2">Anna Goroshko</p>
                                </div>
                                <div className="card_footer_right">
                                  <p className="mb-0 text-muted">1 Feb 2023</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="guset_blogging_card">
                    <div className="guest_card_inner position-relative">
                      <div className="guest_card_img">
                        <img
                          src="assets/images/sectionimg/blogbg.png"
                          alt="blogimg"
                          className="img-fluid"
                        />
                      </div>
                      <div className="guset_blogging_card_content text-center">
                        <h5 className="color_green1">
                          Guest blogging with Crafty Art
                        </h5>
                        <p className="comman_para">
                          Share your story or article idea with us and thousands
                          of Crafty Art blog readers. Pitch your ideas by
                          filling out a short form.
                        </p>
                        <a
                          href="jasvascript::"
                          className="text-decoration-none contribute_btn"
                        >
                          {" "}
                          Contribute
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-disabled"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabIndex={0}
              >
                ...
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
