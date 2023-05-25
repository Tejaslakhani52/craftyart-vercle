import React from 'react'

export default function CreateBlog() {
  return (
    <>
  {/* ======== EDITER =========== */}
  <div className="editer_main">
    <div className="d-flex justify-content-center align-items-center m-0">
      <div className="editer_left_width">
        <div className="editer_left">
          <div className="upload_btn pt-3">
            <a href="javscript::" className="text-decoration-none text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.75 13.81v7.44a.75.75 0 1 1-1.5 0v-7.4L9.49 15.6a.75.75 0 1 1-1.06-1.06l2.35-2.36c.68-.68 1.8-.68 2.48 0l2.35 2.36a.75.75 0 1 1-1.06 1.06l-1.8-1.8zM9 18v1.5H6.75v-.01A5.63 5.63 0 0 1 5.01 8.66a6 6 0 0 1 11.94-.4 5.63 5.63 0 0 1 .3 11.23v.01H15V18h1.88a4.12 4.12 0 1 0-1.5-7.97A4.51 4.51 0 0 0 11 4.5a4.5 4.5 0 0 0-4.43 5.29 4.13 4.13 0 0 0 .68 8.2V18H9z"
                />
              </svg>
              <span className="font_size_14">Upload</span>
            </a>
          </div>
        </div>
      </div>
      <div className="editer_right_width">
        <div className="editer_right">
          <div className="editer_header p-3 d-flex justify-content-between align-items-center">
            <div className="editer_header_left d-flex align-items-center">
              <div className="back_option d-flex justify-content-center align-items-center">
                <a href="javascript:;" className="pe-2 text-black">
                  <i className="fa-solid fa-chevron-left" />
                </a>
                <a
                  href="javascript:;"
                  className="text-decoration-none text-black"
                >
                  Home
                </a>
              </div>
              <div className="undo_redu d-flex justify-content-center align-items-center">
                <a href="javascript:;" className="pe-3">
                  <img
                    src="assets/images/Icons/undo.png"
                    alt="undo"
                    className="img-fluid"
                  />{" "}
                </a>
                <a href="javascript:;">
                  <img
                    src="assets/images/Icons/redu.png"
                    alt="redu"
                    className="img-fluid"
                  />{" "}
                </a>
              </div>
            </div>
            <div className="editer_header_right d-flex">
              <div className="editer_header_btn me-3">
                <a href="javascript:;" className="preview_btn">
                  <i className="fa-solid fa-eye pe-1 font_size_14" />{" "}
                  <span>Preview</span>
                </a>
              </div>
              <div className="editer_header_btn">
                <a href="javascript:;" className="publish_btn">
                  <i className="fa-sharp fa-solid fa-paper-plane pe-1 font_size_14" />{" "}
                  <span>Publish</span>
                </a>
              </div>
              {/* <div class="editer_header_btn">
                          <a href="javascript:;" class="publish_btn"><i class="fa-solid fa-send-back"></i> <span>Publish</span></a>
                      </div> */}
            </div>
          </div>
          <textarea name="editor" id="editor"/>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
