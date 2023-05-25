import React from "react";

export default function Profile() {
  return (
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
  );
}
