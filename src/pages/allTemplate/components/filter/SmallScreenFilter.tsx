import React from "react";

export default function SmallSCreenFilter() {
  return (
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
                    src="../assets/images/Icons/filtericon.png"
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
              <span className="color_green1" data-bs-dismiss="offcanvas">
                Done
              </span>
            </div>
            <div className="offcanvas-body">
              <div className="accordion" id="accordionPanelsStayOpenExample">
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
                          <label className="form-check-label" htmlFor="haldi">
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
                          <label className="form-check-label" htmlFor="bridal">
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
                          <label className="form-check-label" htmlFor="ss_post">
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
                          <label className="form-check-label" htmlFor="ss_sale">
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
                          <label className="form-check-label" htmlFor="bridal">
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
                          <label className="form-check-label" htmlFor="ss_free">
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
              <h5 className="offcanvas-title" id="offcanvasBottomLabel">
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
                  <label className="form-check-label" htmlFor="ss_mp_template">
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
                  <label className="form-check-label" htmlFor="ss_ld_template">
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
                  <label className="form-check-label" htmlFor="ss_td_template">
                    Trending Design Template
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
