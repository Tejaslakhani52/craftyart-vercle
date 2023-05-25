import React from "react";
import { Link } from "react-router-dom";
import SmallScreen from "../../components/smallScreenBottom/SmallScreen";
import Profile from "../../components/profile/Profile";
import Creation from "../../components/creationOffcanvas/Creation";
import CustomeSize from "../../components/footer/customeSize/CustomeSize";

export default function AllTemplate() {
  return (
    <div>
      {/* =============== SMALL SCREEEN BOTTOM ============ */}
      <div className="small_fixed_footer d-bock d-sm-none">
        <SmallScreen />
        {/* ======= PROFILE OFFCANVAS ========= */}
        <Profile />
        {/* ======= CREATION OFFCANVAS ========= */}
        <Creation />
        {/* ============ CUSTOM SIZE OFFCANVAS ================= */}
        <CustomeSize />
      </div>
      {/* =============== ALL TEMPLATE SECTION ================= */}
      <section className="all_template">
        <div className="all_template_inner px-3">
          <div className="all_template_heading text-center d-flex justify-content-center align-items-center h-100 flex-column">
            <h1 className="main_heading mb-3">Instagram Post Templates</h1>
            <p className="comman_para mb-0 w-75">
              Make your Instagram Post attract even more with stunning images.
              Promote your brand and engage your followers with eye-catching
              templates. With pre-designed templates, you will all stay on the
              same page as you edit your visuals directly in Crafty Art.
            </p>
          </div>
        </div>
      </section>
      {/* ============ INSTAGRAM POST TEMPALTE ==============*/}
      <section className="insta_post_template py-4">
        <div className="container-fluid">
          <div className="insta_tempalte">
            <div className="d-flex justify-content-between flex-wrap">
              {/* -======= LARGE SCREEN MENU ====== */}
              <div className="insta_template_right template_right_width d-none d-lg-block">
                <div className="filter_option">
                  <div className="filter_button">
                    <div className="d-flex justify-content-between align-items-center h-100">
                      <div className="filter_btn_left">
                        <img
                          src="assets/images/Icons/filtericon.png"
                          className="img-fluid pe-3"
                          alt="filtericon"
                        />
                        <span>Filter</span>
                      </div>
                      <div className="filter_btn_right">
                        <i className="fa-solid fa-angles-right" />
                      </div>
                    </div>
                  </div>
                  <div className="filter_option_inner mt-3">
                    <div
                      className="accordion"
                      id="accordionPanelsStayOpenExample"
                    >
                      <div className="accordion-item category_filter">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button px-0 align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#category_collapse"
                            aria-expanded="true"
                            aria-controls="category_collapse"
                          >
                            Category
                          </button>
                        </h2>
                        <div
                          id="category_collapse"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#category_collapse"
                        >
                          <div className="accordion-body px-0">
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="invitations"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="invitations"
                                >
                                  Wedding Invitations (170K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="wedding_days"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="wedding_days"
                                >
                                  Wedding Days To Go (150K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="pre_wedding"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="pre_wedding"
                                >
                                  Coming Soon Pre Wedding (100K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="haldi_ceremony"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="haldi_ceremony"
                                >
                                  Haldi Ceremony (80K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="bridal"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="bridal"
                                >
                                  Bridal Shower (75K)
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item style_filter">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button px-0 align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#style_collapse"
                            aria-expanded="true"
                            aria-controls="style_collapse"
                          >
                            Style
                          </button>
                        </h2>
                        <div
                          id="style_collapse"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#style_collapse"
                        >
                          <div className="accordion-body px-0">
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="modern"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="modern"
                                >
                                  Modern (350K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="minimalist"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="minimalist"
                                >
                                  Minimalist (240K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="simple"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="simple"
                                >
                                  Simple (500K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="colorful"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="colorful"
                                >
                                  Colorful (37K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="elegant"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="elegant"
                                >
                                  Elegant (55K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="view_more">
                                <label
                                  className="form-check-label"
                                  htmlFor="bridal"
                                >
                                  <a
                                    href="javscript:;"
                                    className="text-decoration-none d-flex align-items-center"
                                  >
                                    <i className="fa-solid fa-plus" />
                                    <span>View more</span>
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item theme_filter">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button px-0 align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#theme_collapse"
                            aria-expanded="true"
                            aria-controls="theme_collapse"
                          >
                            Theme
                          </button>
                        </h2>
                        <div
                          id="theme_collapse"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body px-0">
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="post"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="post"
                                >
                                  Post (200K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="sale"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="sale"
                                >
                                  Sale (60K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="fashion"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="fashion"
                                >
                                  Fashion (600K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="business"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="business"
                                >
                                  Business (88K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="illustration"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="illustration"
                                >
                                  Illustration (52K)
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="view_more">
                                <label
                                  className="form-check-label"
                                  htmlFor="bridal"
                                >
                                  <a
                                    href="javscript:;"
                                    className="text-decoration-none d-flex align-items-center"
                                  >
                                    <i className="fa-solid fa-plus" />
                                    <span>View more</span>
                                  </a>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item licence_filter">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button px-0 align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#licence_collapse"
                            aria-expanded="true"
                            aria-controls="licence_collapse"
                          >
                            Licence
                          </button>
                        </h2>
                        <div
                          id="licence_collapse"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body px-0">
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="free"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="free"
                                >
                                  Free
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="premium"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="premium"
                                >
                                  Premium
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item color_filter">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button px-0 align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#color_collapse"
                            aria-expanded="true"
                            aria-controls="color_collapse"
                          >
                            Color
                          </button>
                        </h2>
                        <div
                          id="color_collapse"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body px-0">
                            <div className="select_color_main">
                              <button className="border-0">
                                <div className="select_color">
                                  <i className="fa-solid fa-plus" />
                                </div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg_red"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg_yellow"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg_summer_sky"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg_slate_blue"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg_spring_green"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg_cosmos"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg-white"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg-black"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg_shocking_pink"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg_chartreuse_yellow"></div>
                              </button>
                              <button className="border-0">
                                <div className="select_color bg_aluminium"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item sortBy_filter">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button px-0 align-items-center"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sortBy_collapse"
                            aria-expanded="true"
                            aria-controls="sortBy_collapse"
                          >
                            Sort By
                          </button>
                        </h2>
                        <div
                          id="sortBy_collapse"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body px-0">
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="mp_template"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="mp_template"
                                >
                                  Most Popular Template
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="ld_template"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="ld_template"
                                >
                                  latest Design Template
                                </label>
                              </div>
                            </div>
                            <div className="category_name mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="td_template"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="td_template"
                                >
                                  Trending Design Template
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========= SMALL SCREEN MENU ====== */}
              <div className="small_insta_temp d-block d-lg-none insta_template_right w-100">
                <div className="filter_option">
                  <div className="row">
                    <div className="col-6">
                      <div className="filter_button border_radius_5">
                        <div
                          className="d-flex justify-content-center align-items-center h-100"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#filter_offcanvasBottom"
                          aria-controls="filter_offcanvasBottom"
                        >
                          <div className="filter_btn_left">
                            <img
                              src="assets/images/Icons/filtericon.png"
                              className="img-fluid pe-3"
                              alt="filtericon"
                            />
                            <span>Filters </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* =========== FILTERS OFFCANVAS ======== */}
                    <div
                      className="offcanvas offcanvas-bottom d-block d-lg-none filter_offcanvas"
                      tabIndex={-1}
                      id="filter_offcanvasBottom"
                      aria-labelledby="offcanvasBottomLabel"
                    >
                      <div className="offcanvas-header border-bottom">
                        <h5
                          className="offcanvas-title w-100 text-center"
                          id="offcanvasBottomLabel"
                        >
                          Filters
                        </h5>
                        <span
                          className="color_green1"
                          data-bs-dismiss="offcanvas"
                        >
                          Done
                        </span>
                      </div>
                      <div className="offcanvas-body">
                        <div
                          className="accordion"
                          id="accordionPanelsStayOpenExample"
                        >
                          <div className="accordion-item category_filter">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button px-0 align-items-center"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#category_collapse"
                                aria-expanded="true"
                                aria-controls="category_collapse"
                              >
                                Category
                              </button>
                            </h2>
                            <div
                              id="category_collapse"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#category_collapse"
                            >
                              <div className="accordion-body px-0">
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="wedding_invitations"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="wedding_invitations"
                                    >
                                      Wedding Invitations (170K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="wedding_days_go"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="wedding_days_go"
                                    >
                                      Wedding Days To Go (150K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="cs_pre_wedding"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="cs_pre_wedding"
                                    >
                                      Coming Soon Pre Wedding (100K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="haldi"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="haldi"
                                    >
                                      Haldi Ceremony (80K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="bridal_shower"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="bridal_shower"
                                    >
                                      Bridal Shower (75K)
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item style_filter">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button px-0 align-items-center"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#style_collapse"
                                aria-expanded="true"
                                aria-controls="style_collapse"
                              >
                                Style
                              </button>
                            </h2>
                            <div
                              id="style_collapse"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#style_collapse"
                            >
                              <div className="accordion-body px-0">
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_modern"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_modern"
                                    >
                                      Modern (350K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_minimalist"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_minimalist"
                                    >
                                      Minimalist (240K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_simple"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_simple"
                                    >
                                      Simple (500K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_colorful"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_colorful"
                                    >
                                      Colorful (37K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_elegant"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_elegant"
                                    >
                                      Elegant (55K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="view_more">
                                    <label
                                      className="form-check-label"
                                      htmlFor="bridal"
                                    >
                                      <a
                                        href="javscript:;"
                                        className="text-decoration-none d-flex align-items-center"
                                      >
                                        <i className="fa-solid fa-plus" />
                                        <span>View more</span>
                                      </a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item theme_filter">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button px-0 align-items-center"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#theme_collapse"
                                aria-expanded="true"
                                aria-controls="theme_collapse"
                              >
                                Theme
                              </button>
                            </h2>
                            <div
                              id="theme_collapse"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingThree"
                              data-bs-parent="#theme_collapse"
                            >
                              <div className="accordion-body px-0">
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_post"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_post"
                                    >
                                      Post (200K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_sale"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_sale"
                                    >
                                      Sale (60K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_fashion"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_fashion"
                                    >
                                      Fashion (600K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_business"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_business"
                                    >
                                      Business (88K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_illustration"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_illustration"
                                    >
                                      Illustration (52K)
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="view_more">
                                    <label
                                      className="form-check-label"
                                      htmlFor="bridal"
                                    >
                                      <a
                                        href="javscript:;"
                                        className="text-decoration-none d-flex align-items-center"
                                      >
                                        <i className="fa-solid fa-plus" />
                                        <span>View more</span>
                                      </a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item licence_filter">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button px-0 align-items-center"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#licence_collapse"
                                aria-expanded="true"
                                aria-controls="licence_collapse"
                              >
                                Licence
                              </button>
                            </h2>
                            <div
                              id="licence_collapse"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingFour"
                              data-bs-parent="#licence_collapse"
                            >
                              <div className="accordion-body px-0">
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_free"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_free"
                                    >
                                      Free
                                    </label>
                                  </div>
                                </div>
                                <div className="category_name mb-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="ss_premium"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="ss_premium"
                                    >
                                      Premium
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item color_filter">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button px-0 align-items-center"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#color_collapse"
                                aria-expanded="true"
                                aria-controls="color_collapse"
                              >
                                Color
                              </button>
                            </h2>
                            <div
                              id="color_collapse"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingFour"
                              data-bs-parent="#color_collapse"
                            >
                              <div className="accordion-body px-0">
                                <div className="select_color_main">
                                  <div className="select_color">
                                    <i className="fa-solid fa-plus" />
                                  </div>
                                  <div className="select_color bg_red"></div>
                                  <div className="select_color bg_yellow"></div>
                                  <div className="select_color bg_summer_sky"></div>
                                  <div className="select_color bg_slate_blue"></div>
                                  <div className="select_color bg_spring_green"></div>
                                  <div className="select_color bg_cosmos"></div>
                                  <div className="select_color bg-white"></div>
                                  <div className="select_color bg-black"></div>
                                  <div className="select_color bg_shocking_pink"></div>
                                  <div className="select_color bg_chartreuse_yellow"></div>
                                  <div className="select_color bg_aluminium"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="offcanvas-footer bg-white py-3">
                        <div className="d-flex align-items-center justify-content-between small_screen_btn px-3">
                          <div className="w-50 me-3">
                            <a className="w-100 small_login_btn text-decoration-none">
                              Clear All
                            </a>
                          </div>
                          <div className="w-50">
                            <a className="w-100 register_btn text-decoration-none">
                              Apply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="sort_by_option border_radius_5">
                        <div
                          className="d-flex justify-content-between align-items-center h-100"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#sortBy_offcanvasBottom"
                          aria-controls="sortBy_offcanvasBottom"
                        >
                          <span>Sort By</span>
                          <i className="fa-solid fa-angle-down" />
                        </div>
                      </div>
                    </div>
                    {/* =========== SORT BY OFFCANVAS ======== */}
                    <div
                      className="offcanvas offcanvas-bottom d-block d-lg-none sort_by_offcanvas"
                      tabIndex={-1}
                      id="sortBy_offcanvasBottom"
                      aria-labelledby="offcanvasBottomLabel"
                    >
                      <div className="offcanvas-header border-bottom">
                        <h5
                          className="offcanvas-title"
                          id="offcanvasBottomLabel"
                        >
                          Sort By
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        />
                      </div>
                      <div className="offcanvas-body">
                        <div className="category_name mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="ss_mp_template"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="ss_mp_template"
                            >
                              Most Popular Template
                            </label>
                          </div>
                        </div>
                        <div className="category_name mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="ss_ld_template"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="ss_ld_template"
                            >
                              Latest Design Template
                            </label>
                          </div>
                        </div>
                        <div className="category_name mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="ss_td_template"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="ss_td_template"
                            >
                              Trending Design Template
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="insta_template_left template_left_width px-0 px-lg-2">
                <div className="d-none d-lg-block serachbar_position">
                  <div className="search_input d-flex align-items-center">
                    <input
                      type="search"
                      placeholder="Search instagram posts"
                      className="border-0 bg-transparent w-100 h-100 fs-5"
                    />
                    <i className="fa-solid fa-magnifying-glass color_green1 fs-6" />
                  </div>
                </div>
                {/* =========== BREADCRUMB ========= style={{"--bs-breadcrumb-divider":"'>'"}}*/}
                <div className="d-none d-lg-block">
                  <nav aria-label="breadcrumb" className="pt-4 breadcrumb_nav">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#" className="text-decoration-none">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#" className="text-decoration-none">
                          Template
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#" className="text-decoration-none">
                          Instagram
                        </a>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        <a href="#" className="text-decoration-none active">
                          Instagram Stroy
                        </a>
                      </li>
                    </ol>
                  </nav>
                </div>
                {/* ========== TEMPLATE SECTION ====== */}
                <div className="template_main mt-4 mt-lg-0">
                  <div className="d-flex flex-wrap">
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a
                          href="javscript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <img
                            src="assets/images/invitation/invitaion-1.png"
                            alt="templateinsta"
                          />
                        </a>
                        {/* <Link to="/subTemplate">
                      <img src="assets/images/invitation/invitaion-1.png" alt="templateinsta" />
                    </Link> */}
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javscript:;">
                          <img
                            src="assets/images/latest Template/LT-2.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javscript:;">
                          <img
                            src="assets/images/latest Template/LT-3.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javscript:;">
                          <img
                            src="assets/images/latest Template/LT-4.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javscript:;">
                          <img
                            src="assets/images/latest Template/LT-5.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/insta story/IP-2.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/insta story/IS-4.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/insta story/IS-5.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/insta story/IS-6.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/invitation/invitaion-2.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-1.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/invitation/invitaion-3.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/invitation/invitaion-4.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-7.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-8.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-9.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-10.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-11.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-10.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-11.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-1.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-12.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-2.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-3.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-4.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-5.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-6.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                    <div className="single_template mb-4">
                      <div className="template_img">
                        <a href="javascript:;">
                          <img
                            src="assets/images/latest Template/LT-7.png"
                            alt="templateinsta"
                          />
                        </a>
                      </div>
                      <div className="img_small_title mt-2">
                        <h6 className="mb-0">
                          Bright Yellow and Black Photographic Fitness Service
                          Website
                        </h6>
                        <span>Website</span>
                      </div>
                    </div>
                  </div>
                  <div className="template_bottom d-flex align-items-center">
                    <div className="next_btn_main d-none d-sm-block">
                      <div className="custom_button">
                        <a
                          href="javascript:;"
                          className="next_page_btn text-decoration-none text-black text-white"
                        >
                          Next Page
                        </a>
                      </div>
                    </div>
                    <div className="pagination_main">
                      <nav>
                        <ul className="pagination justify-content-sm-end justify-content-between mb-0 align-items-center">
                          <li className="page-item">
                            <a className="page-link" href="javascript:;">
                              <span>1-100 of 10,000</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link deactive_color"
                              href="javascript:;"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">
                                <i className="fa-solid fa-chevron-left" />
                              </span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="javascript:;">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="javascript:;"
                              aria-label="Next"
                            >
                              <span aria-hidden="true">
                                <i className="fa-solid fa-chevron-right" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* ====================== TEMPLATE MODAL ================= */}
                <div
                  className="modal fade template_modal"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                      <div className="modal-header justify-content-end border-bottom-0">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <div className="template_modal_body">
                          <div className="row">
                            <div className="col-xl-8 col-lg-7 col-12">
                              <div className="template_left">
                                <div className="swiper mySwiper h-100">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide d-flex justify-content-center align-items-center">
                                      <img
                                        src="assets/images/insta story/IP-1.png"
                                        alt="templateinsta"
                                      />
                                    </div>
                                    <div className="swiper-slide d-flex justify-content-center align-items-center">
                                      <img
                                        src="assets/images/insta story/IP-2.png"
                                        alt="templateinsta"
                                      />
                                    </div>
                                    <div className="swiper-slide d-flex justify-content-center align-items-center">
                                      <img
                                        src="assets/images/invitation/invitaion-1.png"
                                        alt="templateinsta"
                                      />
                                    </div>
                                    <div className="swiper-slide d-flex justify-content-center align-items-center">
                                      <img
                                        src="assets/images/insta story/IS-6.png"
                                        alt="templateinsta"
                                      />
                                    </div>
                                    <div className="swiper-slide d-flex justify-content-center align-items-center">
                                      <img
                                        src="assets/images/latest Template/LT-1.png"
                                        alt="templateinsta"
                                      />
                                    </div>
                                    <div className="swiper-slide d-flex justify-content-center align-items-center">
                                      <img
                                        src="assets/images/latest Template/LT-2.png"
                                        alt="templateinsta"
                                      />
                                    </div>
                                    <div className="swiper-slide d-flex justify-content-center align-items-center">
                                      <img
                                        src="assets/images/latest Template/LT-6.png"
                                        alt="templateinsta"
                                      />
                                    </div>
                                    <div className="swiper-slide d-flex justify-content-center align-items-center">
                                      <img
                                        src="assets/images/latest Template/LT-12.png"
                                        alt="templateinsta"
                                      />
                                    </div>
                                    <div className="swiper-slide d-flex justify-content-center align-items-center">
                                      <img
                                        src="assets/images/instapost/IP-1.png"
                                        alt="templateinsta"
                                      />
                                    </div>
                                  </div>
                                  <div className="swiper-button-next" />
                                  <div className="swiper-button-prev" />
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-12 mt-4 mt-lg-0">
                              <div className="template_details">
                                <h3 className="teamplate_heading">
                                  Wedding Invitations Green Flowers Template
                                </h3>
                                <h5 className="fw-normal my-3">
                                  Your Story • 1080 × 1920 px
                                </h5>
                                <p className="use_template_btn d-none d-lg-block">
                                  <a
                                    href="javscript:;"
                                    className="text-decoration-none text-white"
                                  >
                                    <i className="fa-solid fa-crown text-warning pe-2" />
                                    <span> Use this Template</span>
                                  </a>
                                </p>
                                <p className="mb-3">
                                  <span className="pe-2">
                                    <img
                                      src="assets/images/Icons/Brush.svg"
                                      className="template_details_icon"
                                      alt="brush"
                                    />
                                  </span>
                                  <span>100% fully customizable</span>
                                </p>
                                <p className="mb-3">
                                  <span className="pe-2">
                                    <img
                                      src="assets/images/Icons/Phone.svg"
                                      className="template_details_icon"
                                      alt="phone"
                                    />
                                  </span>
                                  <span> Edit and download on the go</span>
                                </p>
                                <p className="mb-3">
                                  <span className="pe-2">
                                    <img
                                      src="assets/images/Icons/mobile2.svg"
                                      className="template_details_icon"
                                      alt="mobile"
                                    />
                                  </span>
                                  <span>Share and publish anywhere</span>
                                </p>
                                <p className="mb-3">
                                  <span className="pe-2">
                                    <img
                                      src="assets/images/Icons/fileframe.svg"
                                      className="template_details_icon"
                                      alt="fileframe"
                                    />
                                  </span>
                                  <span> File Type: JPG, PNG,PDF</span>
                                </p>
                                <p className="mb-3">
                                  <span className="pe-2">
                                    <img
                                      src="assets/images/Icons/shield.svg"
                                      className="template_details_icon"
                                      alt="shield"
                                    />
                                  </span>
                                  <span>Premium license </span>
                                  <a
                                    href="javascript:;"
                                    className="text-decoration-none color_slate_blue"
                                  >
                                    More info
                                  </a>
                                </p>
                                <p className="text-center mb-2">
                                  <a
                                    href="javascript:;"
                                    className="text-decoration-none color_slate_blue"
                                  >
                                    {" "}
                                    How to edit template ?
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="you_may_like template_main my-4">
                            <h3 className="mb-4">You might also like</h3>
                            <div className="d-flex flex-wrap">
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a
                                    href="javscript:;"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    <img
                                      src="assets/images/invitation/invitaion-1.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javscript:;">
                                    <img
                                      src="assets/images/latest Template/LT-2.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javscript:;">
                                    <img
                                      src="assets/images/latest Template/LT-3.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javscript:;">
                                    <img
                                      src="assets/images/latest Template/LT-4.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javscript:;">
                                    <img
                                      src="assets/images/latest Template/LT-5.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/insta story/IP-2.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/insta story/IS-4.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/insta story/IS-5.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/insta story/IS-6.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/invitation/invitaion-2.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/latest Template/LT-1.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/invitation/invitaion-3.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/invitation/invitaion-4.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/latest Template/LT-7.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="single_template mb-4">
                                <div className="template_img">
                                  <a href="javascript:;">
                                    <img
                                      src="assets/images/latest Template/LT-8.png"
                                      alt="templateinsta"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/* =========== MOBILE SCREEN BUTTON ======== */}
                            <p className="use_template_btn d-block d-lg-none mb-0">
                              <a
                                href="javscript:;"
                                className="text-decoration-none text-white"
                              >
                                <i className="fa-solid fa-crown text-warning me-2" />
                                <span> Use this Template</span>
                              </a>
                            </p>
                            <div className="load_more text-center mt-4 d-none d-lg-block">
                              <a
                                href="javscript:;"
                                className="btn_custom_outline text-decoration-none"
                              >
                                Load More
                              </a>
                            </div>
                          </div>
                          <div className="explore_more mt-3 d-none d-lg-block">
                            <h3 className="mb-3">Explore More</h3>
                            <div className="explore_more_badge d-flex flex-wrap">
                              <div className="small_bagde">
                                <span>invitation</span>
                              </div>
                              <div className="small_bagde">
                                <span>cards</span>
                              </div>
                              <div className="small_bagde">
                                <span>wedding invitation</span>
                              </div>
                              <div className="small_bagde">
                                <span>wedding</span>
                              </div>
                              <div className="small_bagde">
                                <span>bridal</span>
                              </div>
                              <div className="small_bagde">
                                <span>groom</span>
                              </div>
                              <div className="small_bagde">
                                <span>lagan</span>
                              </div>
                              <div className="small_bagde">
                                <span>marriage invitation</span>
                              </div>
                              <div className="small_bagde">
                                <span>marriage</span>
                              </div>
                              <div className="small_bagde">
                                <span>wedding collection</span>
                              </div>
                              <div className="small_bagde">
                                <span>wedding ceremony</span>
                              </div>
                              <div className="small_bagde">
                                <span>weds</span>
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
          </div>
        </div>
      </section>
    </div>
  );
}
