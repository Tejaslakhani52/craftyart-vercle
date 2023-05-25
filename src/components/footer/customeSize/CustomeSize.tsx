import React from "react";

export default function CustomeSize() {
  return (
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
  );
}
