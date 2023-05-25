import React from "react";
import { Link } from "react-router-dom";

export default function Career(): JSX.Element {
  return (
    <>
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
                        placeholder="1920"
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
                      placeholder="1080"
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
      <div className="crafty_career container">
        <div className="crafty_career_inner container">
          <div className="row">
            <div className="col-lg-6">
              <div className="crafty_career_bg h-100">
                <img
                  src="assets/images/sectionimg/careerimg.png"
                  alt="careerbgimg"
                  className="img-fluid h-100"
                />
              </div>
            </div>
            <div className="col-lg-6 my-3 my-lg-0">
              <div className="d-flex flex-column justify-content-center h-100 px-lg-5 px-0">
                <h5 className="section_heading_title text-start mt-3">
                  Apply to become a Crafty Art Creator
                </h5>
                <p className="comman_para">
                  Our goal is to create the most impressive and motivating
                  Creators program. To apply to join us, please share a URL
                  where we can view your work.
                </p>
                <div className="mb-3 input_group">
                  <label htmlFor="url" className="form-label">
                    <p className="mb-0 fw-bold">
                      Share a URL to your design work
                    </p>
                    <p className="mb-0 text-muted font_size_14">
                      This can be a portfolio, website, social media site url
                      link paste here.
                    </p>
                  </label>
                  <div className="d-flex justify-content-between align-items-center career_input_field">
                    <p className="mb-0">
                      <i className="fa-solid fa-paperclip" />
                    </p>
                    <input
                      type="text"
                      className="form-control border-0 bg-transparent"
                      id="url"
                      placeholder="https://www.blogger.com/blog/"
                    />
                    <a
                      href="javascript:;"
                      className="text-decoration-none paste_link_btn"
                    >
                      Paste
                    </a>
                  </div>
                </div>
                <div className="mb-3 input_group">
                  <label htmlFor="url" className="form-label">
                    <p className="mb-0 fw-bold">Share Your Protfolio</p>
                    <p className="mb-0 text-muted font_size_14">
                      Attach your work
                    </p>
                  </label>
                  <div className="d-flex justify-content-between align-items-center career_input_field">
                    <div className="input-group">
                      <input
                        type="file"
                        className="form-control border-0"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3 input_group">
                  <label htmlFor="url" className="form-label fw-bold">
                    Select Your Coutry
                  </label>
                  <div className="career_input_field">
                    <select
                      className="form-select border-0"
                      aria-label="Default select example"
                    >
                      <option selected={true}>India</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  {/* <a
                    className="w-100 register_btn text-decoration-none login_modal_open"
                    href="successfull.html"
                  >
                    Apply
                  </a> */}
                  <Link to="/successfull" className="w-100 register_btn text-decoration-none login_modal_open">Apply</Link>
                </div>
                <div className="mb-3">
                  <a
                    className="w-100 small_login_btn text-decoration-none login_modal_open"
                    href="javascript:;"
                  >
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
