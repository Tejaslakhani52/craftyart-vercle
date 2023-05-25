import React from "react";
import { Link } from "react-router-dom";

export default function SmallScreen() {
  return (
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
  );
}
