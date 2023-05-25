import React from "react";

export default function LargeSreenFilter() {
  return (
    <div className="insta_template_right template_right_width d-none d-lg-block">
      <div className="filter_option">
        <div className="filter_button">
          <div className="d-flex justify-content-between align-items-center h-100">
            <div className="filter_btn_left">
              <img
                src="../assets/images/Icons/filtericon.png"
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
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item category_filter">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button px-0 align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#category_collapse"
                  aria-expanded="false"
                  aria-controls="category_collapse"
                >
                  Category
                </button>
              </h2>
              <div
                id="category_collapse"
                className="accordion-collapse collapse "
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
                      <label className="form-check-label" htmlFor="invitations">
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
                      <label className="form-check-label" htmlFor="pre_wedding">
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
                      <label className="form-check-label" htmlFor="bridal">
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
                  aria-expanded="false"
                  aria-controls="style_collapse"
                >
                  Style
                </button>
              </h2>
              <div
                id="style_collapse"
                className="accordion-collapse collapse "
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
                      <label className="form-check-label" htmlFor="modern">
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
                      <label className="form-check-label" htmlFor="minimalist">
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
                      <label className="form-check-label" htmlFor="simple">
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
                      <label className="form-check-label" htmlFor="colorful">
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
                      <label className="form-check-label" htmlFor="elegant">
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
                  aria-expanded="false"
                  aria-controls="theme_collapse"
                >
                  Theme
                </button>
              </h2>
              <div
                id="theme_collapse"
                className="accordion-collapse collapse "
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
                      <label className="form-check-label" htmlFor="post">
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
                      <label className="form-check-label" htmlFor="sale">
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
                      <label className="form-check-label" htmlFor="fashion">
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
                      <label className="form-check-label" htmlFor="business">
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
                  aria-expanded="false"
                  aria-controls="licence_collapse"
                >
                  Licence
                </button>
              </h2>
              <div
                id="licence_collapse"
                className="accordion-collapse collapse "
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
                      <label className="form-check-label" htmlFor="free">
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
                      <label className="form-check-label" htmlFor="premium">
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
                  aria-expanded="false"
                  aria-controls="color_collapse"
                >
                  Color
                </button>
              </h2>
              <div
                id="color_collapse"
                className="accordion-collapse collapse "
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
                  aria-expanded="false"
                  aria-controls="sortBy_collapse"
                >
                  Sort By
                </button>
              </h2>
              <div
                id="sortBy_collapse"
                className="accordion-collapse collapse "
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
                      <label className="form-check-label" htmlFor="mp_template">
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
                      <label className="form-check-label" htmlFor="ld_template">
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
                      <label className="form-check-label" htmlFor="td_template">
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
  );
}
