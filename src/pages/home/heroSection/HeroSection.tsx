import React, { useState } from "react";
import MainSerchbar from "../../../components/commonComponents/MainSerchbar";

export default function HeroSection() {
  const [value, setValue] = useState<any>("");
  // console.log("value: ", value);
  return (
    <section className="hero d-none d-sm-block">
      <div className="hero_inner">
        <div className="hero_heading text-center d-flex justify-content-center align-items-center h-100 flex-column">
          <h1 className="main_heading mb-0" style={{ color: "#ffff" }}>
            Graphic Design Tool | Crafty Art
          </h1>
          <p className="comman_para my-2 py-2" style={{ color: "white" }}>
            Create eye-catching visual content for social media in minutes -
            it’s easy, fast, and free! Pick a template, customize it, and post.
          </p>
        </div>
        <MainSerchbar value={value} setValue={setValue} />
      </div>
      <div
        className="d_block_mobile header_search_box d-none "
        style={{ position: "fixed", top: "34px", zIndex: "5000" }}
      >
        <MainSerchbar value={value} setValue={setValue} />
      </div>
      <div className="custom_size_dropdown d-none d-sm-block">
        <button
          type="button"
          className="dropdown-toggle custom_size_btn"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Custom Size
        </button>
        <div
          className="dropdown-menu custom_dropdown_menu p-3"
          data-popper-placement="bottom-start"
        >
          <form>
            <div className="d-flex justify-content-between align-items-center">
              <div className="mb-3 pe-2 input_single_data">
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
              <div className="mb-3 pe-2 input_single_data">
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
            <a
              className="w-100 register_btn text-decoration-none"
              href="javascript:;"
            >
              Create New page
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
