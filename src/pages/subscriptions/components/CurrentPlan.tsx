import React from "react";
import { dateFormate } from "../../../commonFunction/dateFormate";
import { consoleShow } from "../../../commonFunction/console";

export default function CurrentPlan({ userSubscription }: any) {
  consoleShow("userSubscription: ", userSubscription);
  return (
    <>
      <div className="current-plan d-sm-block d-none">
        <h3 className="section_heading_title text-center pt-4 pb-3 mb-0">
          My Current Plan
        </h3>
        {userSubscription?.hasCurrentPlan ? (
          <div className="current-plan-card">
            <div className="row current-contact px-3 pb-3 border-bottom w-100 mx-auto align-items-center">
              <div className="logo-image mb-4">
                <img
                  src="assets/images/Icons/craftyart_logo.png"
                  alt="carftylogo"
                />
              </div>
              <div className="col-md-9 text-md-start text-center">
                <h3 className="section_title mb-4">
                  {userSubscription?.current?.package_name}
                </h3>
                {/* <p className="comman_para mb-3 mx-auto mx-md-0">
                  Now including the 100+ million premium template, photo,
                  greeting, and graphics
                </p> */}
              </div>
              <div className="col-md-3 text-center">
                <h3 className="section_heading_title mb-4">
                  {userSubscription?.current?.amount}
                </h3>
                {/* <a href="javascript:;" className="btn register_btn text-white">
                  Active
                </a> */}
              </div>
            </div>
            <div className="row current-contact px-3 py-3 w-100 mx-auto align-items-center">
              <div className="col-md-8 text-md-start text-center">
                <h3 className="section_title mb-md-0 mb-3">
                  {dateFormate(userSubscription?.current?.billing_date)}
                  <span> Next Billing Date</span>
                </h3>
              </div>
              <div className="col-md-4 text-center">
                <h3 className="section_title mb-0">
                  {userSubscription?.current?.validity}
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="row current-contact px-3 pb-3 border-bottom w-100 mx-auto align-items-center">
            <p className="comman_para mb-3 mx-auto mx-md-0">
              No Current plan exist.
            </p>
          </div>
        )}
        {/* =============== INVOICES ================ */}
        {userSubscription && (
          <>
            <h3 className="section_heading_title text-center pt-4 pb-2 mb-0">
              History
            </h3>
            {userSubscription?.history === "No History exist." ? (
              <p style={{ padding: "15px " }}>{"No History exist."}</p>
            ) : (
              <div className="current-plan-card p-4">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="text-center">
                      <tr>
                        <th scope="col" style={{ width: 200 }}>
                          Package Name
                        </th>
                        <th scope="col" style={{ width: 200 }}>
                          Transaction Id
                        </th>
                        <th scope="col" style={{ width: 180 }}>
                          Date
                        </th>
                        <th scope="col" style={{ width: 180 }}>
                          Amount
                        </th>
                        <th scope="col" style={{ width: 180 }}>
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {userSubscription?.hasHistory &&
                        userSubscription?.history?.map(
                          (item: any, index: any) => (
                            <>
                              <tr key={index}>
                                <td scope="row">
                                  <a
                                    href="javascript:;"
                                    className="text-decoration-none text-dark text-center"
                                  >
                                    {item?.package_name}
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="javascript:;"
                                    className="text-decoration-none text-dark text-center"
                                  >
                                    {item?.transaction_id}
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="javascript:;"
                                    className="text-decoration-none text-dark text-center"
                                  >
                                    {dateFormate(item?.purchase_date)}
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="javascript:;"
                                    className="text-decoration-none text-dark text-center"
                                  >
                                    {item?.amount}
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="javascript:;"
                                    className="text-decoration-none text-dark text-center"
                                  >
                                    {item?.status === "Active" ? (
                                      <i className="fa-solid fa-check" />
                                    ) : (
                                      <i className="fa-solid fa-xmark"></i>
                                    )}
                                  </a>
                                </td>
                              </tr>
                            </>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <div className="current-plan-inner d-sm-none d-block px-4">
        <h3 className="section_heading_title text-center py-4 mb-0">
          My Current Plan
        </h3>
        <div className="current-inner">
          <h3 className="mb-3 title">
            <i className="fa-solid fa-crown text-warning pe-2" />
            Plan
          </h3>
          <div className="card-price d-flex justify-content-between align-items-center mb-3 ">
            <h4 className="mb-0 ">
              <span className="section_heading_title">₹1255</span>{" "}
              <span className="section-text">/month</span>
            </h4>
            <div className="card-price-inner">
              <p className="mb-0">Expires on</p>
              <span>
                6<sup>th</sup> Dec, 2023
              </span>
            </div>
          </div>
          <div className="card-view d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-renew ">
              Renew
            </button>
            <button
              type="button"
              className="btn btn-view"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              View Plan
            </button>
          </div>
        </div>
        {/* =========== VIEW PLAN MODAL ========= */}
        <div
          className="modal fade view_plan_modal"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-bottom-0 pb-0">
                <div className="modal_heading">
                  <h5 className="modal-title fs-3" id="exampleModalLabel">
                    Silver
                  </h5>
                </div>
                <div className="modal_close_btn">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </div>
              <p className="mb-0 fs-5 px-3">Best for professionals</p>
              <div className="modal-body p-0">
                <div className="p-3 border-bottom">
                  <div className="plan_price_details">
                    <span className="fs-1 pe-2 fw-bold">299</span>
                    <span className="fw-bold">INR /per 1 month</span>
                  </div>
                  <div className="plan_info pt-4">
                    <div className="row text-center">
                      <div className="col-4 plan_innfo_inner ps-0">
                        <p className="mb-0 text-muted">Starting Date</p>
                        <h6>06 Dec,2022</h6>
                      </div>
                      <div className="col-4 plan_innfo_inner ps-0">
                        <p className="mb-0 text-muted">Timing</p>
                        <h6>06 Dec,2022</h6>
                      </div>
                      <div className="col-4 plan_innfo_inner ps-0">
                        <p className="mb-0 text-muted">Expire Date</p>
                        <h6>06 Dec,2022</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card_description p-3">
                  <h3 className="fs-4">Everything Crafty Free has, plus:</h3>
                  <div className="plan_list">
                    <ul className="list-unstyled">
                      <li className="py-1 position-relative">
                        <span>You won't be charged today </span>
                      </li>
                      <li className="py-1 position-relative">
                        <span>
                          Paid subscription starts on November 12, 2022{" "}
                        </span>
                      </li>
                      <li className="py-1 position-relative">
                        <span>Pay once upfront. No auto-renew. </span>
                      </li>
                      <li className="py-1 position-relative">
                        <span>Top up whenever you want. </span>
                      </li>
                      <li className="py-1 position-relative">
                        <span>
                          You can cancel the premium anytime in your account
                          settings
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                          </div> */}
            </div>
          </div>
        </div>
        <h3 className="section_heading_title text-center py-4 mb-0">Invoice</h3>
        {/* ====== ACCORDION CONTACT STSRT=============== */}
        <div className="accordion-contact">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <div
                className="accordion-header d-flex justify-content-between align-items-center"
                id="headingOne"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <p className="mb-0">
                  <i className="fa-solid fa-crown text-warning pe-2" />
                  Silver Plan
                </p>
                <p className="mb-0">
                  ₹1255 <span className="section-text">/month</span>
                </p>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body px-4">
                  <div className="d-flex border-bottom justify-content-between align-items-center pb-2">
                    <p className="mb-0">
                      <strong>Date :</strong> 18 Nov, 2022
                    </p>
                    <p className="mb-0">
                      <strong>Amount :</strong> ₹1255
                    </p>
                  </div>
                  <div className="py-3">
                    <p className="mb-2">
                      <strong>Invoice Number:</strong> INV-CA-2022-1226320
                    </p>
                    <p className="mb-2">
                      <strong>Status:</strong>Approve
                    </p>
                  </div>
                  <button type="button" className="btn invoice-btn my-3">
                    Download Invoice
                  </button>
                </div>
              </div>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              ></button>
            </div>
            <div className="accordion-item">
              <div
                className="accordion-header d-flex justify-content-between align-items-center"
                id="headingTwo"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <p className="mb-0">
                  <i className="fa-solid fa-crown text-warning pe-2" />
                  Gold Plan
                </p>
                <p className="mb-0">
                  ₹2149 <span className="section-text">/2 Year</span>
                </p>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body px-4">
                  <div className="d-flex border-bottom justify-content-between align-items-center pb-2">
                    <p className="mb-0">
                      <strong>Date :</strong> 18 Nov, 2022
                    </p>
                    <p className="mb-0">
                      <strong>Amount :</strong> ₹1255
                    </p>
                  </div>
                  <div className="py-3">
                    <p className="mb-2">
                      <strong>Invoice Number:</strong> INV-CA-2022-1226320
                    </p>
                    <p className="mb-2">
                      <strong>Status:</strong>Approve
                    </p>
                  </div>
                  <button type="button" className="btn invoice-btn my-3">
                    Download Invoice
                  </button>
                </div>
              </div>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
