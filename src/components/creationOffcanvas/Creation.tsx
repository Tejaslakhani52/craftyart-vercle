import React from "react";

export default function Creation() {
  return (
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
  );
}
