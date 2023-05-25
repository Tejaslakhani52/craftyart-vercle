import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-hot-toast";
import CurrentPlan from "./components/CurrentPlan";
import axios from "axios";
import { consoleShow } from "../../commonFunction/console";

export default function Subscriptions() {
  const [userProfile, setUserProfile] = useState<any>(null);
  console.log("userProfile: ", userProfile);
  const [uId, setuId] = useState<any>("");
  const [imagePreview, setImagePreview] = useState<any>(null);
  console.log("imagePreview: ", imagePreview);
  const [imageBaseUrl, setImageBaseUrl] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [currentPlan, setcurrentPlan] = useState<any>();
  const [removeImage, setRemoveImage] = useState<any>(false);

  useEffect(() => {
    const getData = localStorage.getItem("userProfile");
    setuId(getData);

    axios
      .post(
        "/my-currentPlan",
        {
          key: "qwfsegxdhbxfjhncf",
          user_id: getData,
        },
        { withCredentials: false }
      )
      .then((response: any) => {
        const jsonString = response.data.substring(
          response.data.indexOf("{"),
          response.data.lastIndexOf("}") + 1
        );
        const getData = JSON.parse(jsonString);
        setcurrentPlan(getData);
      })
      .catch((error) => consoleShow("currError: ", error));
  }, []);

  useEffect(() => {
    if (uId == "") {
      setUserProfile(null);
    } else fetchData();
    setIsLoading(true);
  }, [uId]);

  const fetchData = async () => {
    const getUserData: any = await api.getUser({
      key: "qwfsegxdhbxfjhncf",
      device_id: "",
      email: uId,
    });
    setImageBaseUrl(getUserData?.url);
    setUserProfile(getUserData?.user);
    setIsLoading(false);
  };

  const [acountDetail, setacountDetail] = useState<any>({
    name: "",
    user_id: "",
    updateDp: 0,
    photo_uri: null,
  });
  consoleShow("acountDetail: ", acountDetail);

  useEffect(() => {
    setacountDetail({
      ...acountDetail,
      name: userProfile?.name,
      user_id: userProfile?.uid,
      // photo_uri: userProfile?.photo_uri ?? "",
    });
  }, [userProfile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file) {
        const imageUrl: any = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        setacountDetail({ ...acountDetail, photo_uri: file, updateDp: 1 });
      }
    }
  };

  const handleFileRemove = () => {
    setacountDetail({ ...acountDetail, photo_uri: null, updateDp: 1 });
    setImagePreview(null);
    setRemoveImage(true);
  };

  const updateFetchData = (event: any) => {
    setIsLoading(true);
    event.preventDefault();
    const getUpdateData: any = api.updateUser({
      key: "qwfsegxdhbxfjhncf",
      ...acountDetail,
    });
    consoleShow("getUpdateData: ", getUpdateData);

    setTimeout(() => {
      fetchData();
      toast.success("User updated successfully");
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <div className="small_fixed_footer d-bock d-sm-none">
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
      </div>
      {/* ========== SUBSCRIPTION TABS START ======= */}
      <section className="subscriptions-contact mb-4">
        {/* ================ PROFILE UPLOAD ===========*/}
        <div className="profile_upload bg-white">
          <div className="current-contact px-md-5 px-sm-4 px-2 w-100 mx-auto align-items-center">
            <div className="current-profile d-sm-flex align-items-center justify-content-center py-3">
              <div className="current-profile-logo text-center">
                <div className="avatar-upload">
                  <div className="avatar-preview mx-sm-0 mx-auto">
                    <div
                      id="imagePreview"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      {imagePreview && (
                        <img
                          src={imagePreview}
                          alt="Selected file preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      )}
                      {userProfile?.photo_uri && !removeImage ? (
                        userProfile?.photo_uri.includes("googleusercontent") ? (
                          <img
                            src={`${userProfile?.photo_uri}`}
                            alt="Selected file preview"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <img
                            src={`${imageBaseUrl}${userProfile?.photo_uri}`}
                            alt="Selected file preview"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        )
                      ) : (
                        <div
                          style={{
                            background:
                              "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            fontSize: "30px",
                            textTransform: "capitalize",
                          }}
                        >
                          {userProfile?.name?.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-md-5 ps-sm-3 ps-0 text-sm-start text-center">
                <h3>The file should be in PNG or JPG. Max size of 3 MB.</h3>
                <button
                  type="button"
                  className="btn btn-upload py-2 px-5 mt-sm-0 mt-3 position-relative"
                >
                  <div className="avatar-edit">
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="imageUpload"> Upload</label>
                  </div>
                </button>
                <button
                  type="button"
                  className="btn btn-upload py-2 px-5 mt-sm-0 mt-3 mx-3 position-relative"
                  onClick={handleFileRemove}
                >
                  <div className="avatar-edit">Remove</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link py-3 active"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="true"
            >
              <i className="fa-solid fa-circle-user pe-2" />
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link py-3"
              id="pills-subscriptons-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-subscriptons"
              type="button"
              role="tab"
              aria-controls="pills-subscriptons"
              aria-selected="false"
            >
              <i className="fa-regular fa-credit-card pe-2" />
              Subscription
            </button>
          </li>
        </ul>
        <div className="sm-container">
          <div
            className="tab-content container-sm-fluid mt-4"
            id="pills-tabContent"
          >
            <div
              className="tab-pane fade show active account_details_tab"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              <div className="current-plan p-4">
                {/* =============== PROFILE PHOTO START ================ */}
                {/* <h3 class="section_heading_title text-center pt-4 pb-2 mb-0">Profile Photo</h3>
                  <div class="profile_upload">
                      <div class="row current-contact px-md-5 px-sm-4 px-2 w-100 mx-auto align-items-center">
                          <div class="col-sm-8">
                              <div class="current-profile d-sm-flex align-items-center">
                                  <div class="current-profile-logo text-center">
                                      <div class="avatar-upload">
                                          <div class="avatar-preview mx-sm-0 mx-auto">
                                              <div id="imagePreview" style="background-image: url(assets/images/Icons/profile-icon.png);">
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <h3 class="mb-0 ps-md-5 ps-sm-3 ps-0">The file should be in PNG or JPG. Max size of 3 MB.</h3>
                              </div>
                          </div>
                          <div class="col-sm-4 text-center">
                              <button type="button" class="btn btn-upload py-2 px-5 mt-sm-0 mt-3">
                                  <div class="avatar-edit">
                                      <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                      <label for="imageUpload"> Upload</label>
                                  </div>
                              </button>
                          </div>
                      </div>
                  </div> */}
                {/* =============== ACCOUNT DETAILS START ================ */}
                <h3 className="section_heading_title text-center">
                  Account Details
                </h3>
                <div className="current-plan-card">
                  <div className="current-contact w-100 mx-auto align-items-center">
                    {/* ======== LARGE SCREEN ACCOUNT DETAILS =========== */}
                    <div className="current-profile d-none d-sm-block">
                      <div className="form-group mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Display name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name"
                          value={acountDetail?.name}
                          onChange={(e) =>
                            setacountDetail({
                              ...acountDetail,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      {/* <div className="form-group mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Username
                        </label>
                        <input
                          disabled
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Infiapp Solutions"
                          value={userProfile?.name}
                        />
                      </div> */}
                      {userProfile?.email && (
                        <div className="form-group mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Email ID
                          </label>
                          <input
                            disabled
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Infiappsolutions2022@gmail.com"
                            value={userProfile?.email}
                          />
                        </div>
                      )}
                      {userProfile?.number && (
                        <div className="form-group mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Phone number
                          </label>
                          <input
                            disabled
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="123 456 7890"
                            value={userProfile?.number}
                          />
                        </div>
                      )}
                    </div>
                    {/* ======== SMALL SCREEN ACCOUNT DETAILS =========== */}
                    <div className="account_deatils d-block d-sm-none pb-4">
                      <div className="display_name border-bottom pb-4 mb-3">
                        <div className="form-group mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Display name
                          </label>
                          <input
                            type="text"
                            className="form-control py-2"
                            id="exampleFormControlInput1"
                            placeholder="Infiapp Solutions"
                          />
                        </div>
                        <div className="d-flex justify-content-end">
                          <div className="displayname_btn me-2">
                            <a href="javscript:;" className="bg_grey">
                              Cancel
                            </a>
                          </div>
                          <div className="displayname_btn">
                            <a
                              href="javscript:;"
                              className="bg_light_green text-white"
                            >
                              Save
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3 border-bottom pb-4">
                        <label htmlFor="userName" className="form-label">
                          Username
                        </label>
                        <div className="d-flex align-items-center justify-content-between">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="userName"
                            placeholder="Infiapp Solutions"
                            readOnly
                          />
                          <div className="displayname_btn me-2">
                            <a href="javscript:;" className="bg_grey">
                              Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3 border-bottom pb-4">
                        <label htmlFor="userName" className="form-label">
                          Email ID
                        </label>
                        <div className="d-flex align-items-center justify-content-between">
                          <input
                            type="email"
                            className="form-control border-0"
                            id="userName"
                            placeholder="Infiappsolutions@gmail.coms"
                            readOnly
                          />
                          <div className="displayname_btn me-2">
                            <a href="javscript:;" className="bg_grey">
                              Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3 border-bottom pb-4">
                        <label htmlFor="userName" className="form-label">
                          Phone Number
                        </label>
                        <div className="d-flex align-items-center justify-content-between">
                          <input
                            type="number"
                            className="form-control border-0"
                            id="userName"
                            placeholder="123 456 7890"
                            readOnly
                          />
                          <div className="displayname_btn me-2">
                            <a href="javscript:;" className="bg_grey">
                              Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="update_profile_btn">
                        <a
                          className="w-100 register_btn text-decoration-none text-white"
                          onClick={updateFetchData}
                        >
                          Update Profile
                        </a>
                      </div>
                    </div>
                    <div className="current-profile text-center d-none d-sm-block">
                      {/* <p class="comman_para">Manage your display name, username and email id withCrafty..</p> */}
                      <button
                        type="button"
                        className="btn register_btn text-white w-100"
                        onClick={updateFetchData}
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade current_plan_tab"
              id="pills-subscriptons"
              role="tabpanel"
              aria-labelledby="pills-subscriptons-tab"
              tabIndex={0}
            >
              {/* =============== CURRENT PLAN START ================ */}
              <CurrentPlan userSubscription={currentPlan} />
              {/* ==========CURRENT-PLAN-INNER START ================ */}
            </div>
          </div>
        </div>
        {isLoading && (
          <main className="main">
            <span className="loader"></span>
          </main>
        )}
      </section>
    </>
  );
}
