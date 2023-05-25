import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import loadjs from "loadjs";
import api from "../../services/api"
import {AllDataRoot} from "../../interfaces/AllDataObject";
import axios from "axios";

export default function Home22(): JSX.Element {

    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [templates, setTemplates] = useState<AllDataRoot>()
    const [isloading, setIsloading] = React.useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = React.useCallback(
        async () => {
            setIsloading(true)
            const newImages = await api.getDatas({
                key: "qwfsegxdhbxfjhncf",
                page: 1,
                count: 0
            })

            setTemplates(newImages)
            setIsloading(false)
        },
        [templates]
    )
    return (
        <>
            {/* =============== SMALL SCREEEN BOTTOM ============ */}
            <div className="small_fixed_footer d-bock d-sm-none">
                <div className="small_screen_footer_link position-relative">
                    <div className="d-flex justify-content-between">
                        <div className="bottom_footer_link">
                            <Link to="/" className="d-flex flex-column align-items-center text-decoration-none active">
                                <i className="fa-sharp fa-solid fa-house fs-5"/>
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
                                <i className="fa-sharp fa-solid fa-folder fs-5"/>
                                <span>Creation</span>
                            </a>
                        </div>
                        <div className="bottom_footer_link">
                            {/* <a
                href="price&plan.html"
                className="d-flex flex-column align-items-center text-decoration-none"
              >
                <i className="fa-sharp fa-solid fa-crown fs-5" />
                <span>Premium</span>
              </a> */}

                            <Link
                                to="/pricePlans"
                                className="d-flex flex-column align-items-center text-decoration-none"
                            >
                                <i className="fa-sharp fa-solid fa-crown fs-5"/>
                                <span>Premium</span>
                            </Link>
                        </div>
                        <div className="bottom_footer_link">
                            <a
                                href="javscript:;"
                                className="d-flex flex-column align-items-center text-decoration-none"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#profile_bottom"
                            >
                                <i className="fa-sharp fa-solid fa-circle-user fs-5"/>
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
                            <i className="fa-sharp fa-solid fa-plus fs-2"/>
                        </a>
                    </div>
                </div>
                {/* ============= PROFILE OFFCANVAS ============= */}
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
                {/* ============ CREATION OFFCANVAS ================= */}
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
                                                <i className="fa-sharp fa-solid fa-ellipsis"/>
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
                                                <i className="fa-sharp fa-solid fa-ellipsis"/>
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
                                                <i className="fa-sharp fa-solid fa-ellipsis"/>
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
                                                <i className="fa-sharp fa-solid fa-ellipsis"/>
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
                                            <i className="fa-sharp fa-solid fa-arrows-left-right"/>
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
                                            style={{maxHeight: 20}}
                                        />
                                    </div>
                                </div>
                                <div className="pe-2 input_single_data">
                                    <label htmlFor="height" className="form-label mb-0">
                                        Height
                                    </label>
                                    <div className="d-flex border_shadow align-items-center me-2 px-1 rounded-1">
                                        <i className="fa-sharp fa-solid fa-arrows-up-down"/>
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
            </div>
            {/* =============== HERO SECTION ================= */}
            <section className="hero d-none d-sm-block">
                <div className="hero_inner">
                    <div
                        className="hero_heading text-center d-flex justify-content-center align-items-center h-100 flex-column">
                        <h1 className="main_heading mb-0">
                            Graphic Design Tool | Crafty Art
                        </h1>
                        <p className="comman_para my-2 py-2">
                            Create eye-catching visual content for social media in minutes -
                            it’s easy, fast, and free! Pick a template, customize it, and
                            post.
                        </p>
                    </div>
                    <div className="search_input d-flex align-items-center">
                        <input
                            type="search"
                            placeholder="Search thousands of templates"
                            className="border-0 bg-transparent w-100 h-100"
                        />
                        {/* <i class="fa-solid fa-magnifying-glass color_green1 font_size_14"></i> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="red"
                                d="M15.2 16.34a7.5 7.5 0 1 1 1.38-1.45l4.2 4.2a1 1 0 1 1-1.42 1.41l-4.16-4.16zm-4.7.16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                            />
                        </svg>
                    </div>
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
                                            <i className="fa-sharp fa-solid fa-arrows-left-right"/>
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
                                            style={{maxHeight: 20}}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 pe-2 input_single_data">
                                    <label htmlFor="height" className="form-label mb-0">
                                        Height
                                    </label>
                                    <div className="d-flex border_shadow align-items-center me-2 px-1 rounded-1">
                                        <i className="fa-sharp fa-solid fa-arrows-up-down"/>
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
            {/* =========== DESIGN FOR SECTION================= */}
            {/* ========= SMALL SCREEN VIEW ========= */}
            <section className="design_post mt-3 d-block d-md-none">
                <div className="container-fluid design_post_inner">
                    <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                        <h3 className="section_title mb-0">Design For</h3>
                        <a
                            href="javascript:;"
                            className="show_more_link text-decoration-none me-3 d-none d-lg-block"
                        >
                            Show more
                        </a>
                        {/* <Link to={"javascript:;"} className="show_more_link text-decoration-none me-3 d-none d-lg-block">Show more</Link> */}
                    </div>
                    <div className="gallery_main">
                        <div className="gallery_inner">
                            <div className="owl-carousel design_post_swiper">
                                <div className="single_small_card">
                                    <div className="small_card_icon">
                                        <img
                                            src="assets/images/Icons/instagram.png"
                                            alt="instagram"
                                        />
                                    </div>
                                    <div className="samll_card_text text-center mt-2">
                                        <h6>Insta Post</h6>
                                    </div>
                                </div>
                                <div className="single_small_card">
                                    <div className="small_card_icon">
                                        <img
                                            src="assets/images/Icons/facebook.png"
                                            alt="facebook"
                                        />
                                    </div>
                                    <div className="samll_card_text text-center mt-2">
                                        <h6>Logo</h6>
                                    </div>
                                </div>
                                <div className="single_small_card">
                                    <div className="small_card_icon">
                                        <img
                                            src="assets/images/Icons/instagram.png"
                                            alt="instagram"
                                        />
                                    </div>
                                    <div className="samll_card_text text-center mt-2">
                                        <h6>
                                            Insta <br/>
                                            (Landscape)
                                        </h6>
                                    </div>
                                </div>
                                <div className="single_small_card">
                                    <div className="small_card_icon">
                                        <img
                                            src="assets/images/Icons/facebook.png"
                                            alt="facebook"
                                        />
                                    </div>
                                    <div className="samll_card_text text-center mt-2">
                                        <h6>
                                            Facebook <br/>
                                            (Landscape)
                                        </h6>
                                    </div>
                                </div>
                                <div className="single_small_card">
                                    <div className="small_card_icon">
                                        <img src="assets/images/Icons/mail.png" alt="mail"/>
                                    </div>
                                    <div className="samll_card_text text-center mt-2">
                                        <h6>
                                            Invitation <br/>
                                            (Portrait)
                                        </h6>
                                    </div>
                                </div>
                                <div className="single_small_card">
                                    <div className="small_card_icon">
                                        <img
                                            src="assets/images/Icons/certificate.png"
                                            alt="certificate"
                                        />
                                    </div>
                                    <div className="samll_card_text text-center mt-2">
                                        <h6>Certificates</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========= DESKTOP VIEW ========= */}
            <section className="design_post mt-3 d-none d-md-block">
                <div className="design_post_inner container-fluid">
                    <div className="section_title_main d-flex justify-content-between align--items-center">
                        <h3 className="section_title mb-0">Design For</h3>
                        <a
                            href="javascript:;"
                            className="show_more_link text-decoration-none me-3 showMore_designLogo"
                        >
                            Show more
                        </a>
                    </div>
                    <div
                        className="d-flex align-items-center flex-wrap overflow-hidden show-data-app show_more_data_app">
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/instagram.png"
                                        alt="instagram"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Insta Post</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Logo</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/instagram.png"
                                        alt="instagram"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Insta <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Facebook <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/certificate.png"
                                        alt="certificate"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Certificates</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png" alt="mail"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/certificate.png"
                                        alt="certificate"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Certificates</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Facebook <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png" alt="mail"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Facebook <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png" alt="mail"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/certificate.png"
                                        alt="certificate"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Certificates</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png" alt="mail"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/certificate.png"
                                        alt="certificate"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Certificates</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Facebook <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/instagram.png"
                                        alt="instagram"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Insta Post</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Logo</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/instagram.png"
                                        alt="instagram"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Insta <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Facebook <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png" alt="mail"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/certificate.png"
                                        alt="certificate"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Certificates</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png" alt="mail"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/certificate.png"
                                        alt="certificate"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Certificates</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Facebook <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png" alt="mail"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Facebook <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png" alt="mail"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/certificate.png"
                                        alt="certificate"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Certificates</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/mail.png" alt="mail"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Invitation <br/>
                                        (Portrait)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img
                                        src="assets/images/Icons/certificate.png"
                                        alt="certificate"
                                    />
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>Certificates</h6>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 designfor_logo_inner">
                            <div className="single_small_card">
                                <div className="small_card_icon">
                                    <img src="assets/images/Icons/facebook.png" alt="facebook"/>
                                </div>
                                <div className="samll_card_text text-center mt-2">
                                    <h6>
                                        Facebook <br/>
                                        (Landscape)
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================ TEMPALTE DESIGN =========== */}
            <main className="template_design pt-4">
                <div className="section_heading text-center container-fluid d-none d-sm-block">
                    <h5 className="section_heading_title mb-2 pb-1">
                        Make your designs as unique as your business
                    </h5>
                    <p className="comman_para w-75 mx-auto">
                        Create Professional Designs Effortlessly with Our Free Online Logo
                        Maker, Invitation Card Maker, Poster Maker, Thumbnail Maker,
                        Instagram Story Maker, Facebook Story Maker, Resume Maker, YouTube
                        Banner Template, Festival Poster Maker, Diwali Poster, Book Cover
                        Templates, Calendar Templates, Portrait Certificate Template,
                        Visiting Card Design, Bio Data for Marriage, Bio Data Format, Bio
                        Data Editor and Graphic Design with Crafty Art.
                    </p>
                </div>

                {/*{isloading ? <div>*/}

                {/*    </div> :*/}
                {/*    templates.map((data) => {*/}

                {/*    })*/}
                {/*}*/}

                {/* ========== LATEST TEMPALTE ======== */}
                <section className="latest_templates mt-2">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Latest Templates</h3>
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel carousel-main latest_templates_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-1.png"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-2.png"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-3.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-4.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascripit;">
                                                <img
                                                    src="assets/images/latest Template/LT-5.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-7.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-8.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-6.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========== LATEST TEMPALTE ======== */}
                <section className="latest_templates mt-2">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Latest Templates</h3>
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel carousel-main latest_templates_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/latest Template/LT-7.png"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-8.png"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-9.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-10.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascripit;">
                                                <img
                                                    src="assets/images/latest Template/LT-11.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-8.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========== INSTA POST ======== */}

                <section className="insta_post mt-2">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Insta Post</h3>
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel insta_post_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/instapost/IP-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/instapost/IP-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/instapost/IP-3.png"
                                                    className="img-fluid w-100"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/instapost/IP-4.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascripit;">
                                                <img
                                                    src="assets/images/instapost/IP-5.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/instapost/IP-6.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/instapost/IP-6.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/instapost/IP-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/instapost/IP-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========== INSTA STROY ======== */}
                <section className="insta_story mt-2">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Insta Story</h3>
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel insta_story_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/insta story/IS-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/insta story/IS-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/insta story/IS-3.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Your Story by Louisenel Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/insta story/IS-4.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Your Story by Louisenel Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascripit;">
                                                <img
                                                    src="assets/images/insta story/IS-5.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Your Story by Louisenel Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/insta story/IS-6.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/insta story/IS-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/insta story/IS-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/insta story/IS-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ============= LOGO =============== */}
                <section className="logo_design mt-2">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Logo</h3>
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel logo_design_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/logo/logo-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/logo/logo-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/logo/logo-3.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/logo/logo-4.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascripit;">
                                                <img
                                                    src="assets/images/logo/logo-5.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/logo/logo-6.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/logo/logo-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/logo/logo-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/logo/logo-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ============= INVITATION =============== */}
                <section className="invitaion mt-2">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Invitation</h3>
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel invitaion_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/invitation/invitaion-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/invitation/invitaion-2.png"
                                                    className="img-fluid w-100"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/invitation/invitaion-3.png"
                                                    className="img-fluid w-100"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/invitation/invitaion-4.png"
                                                    className="img-fluid w-100"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascripit;">
                                                <img
                                                    src="assets/images/latest Template/LT-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/latest Template/LT-5.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javascript:;">
                                                <img
                                                    src="assets/images/insta story/IS-5.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/insta story/IS-4.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/insta story/IS-4.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Neutral Website Launch Instagram Story
                                            </h6>
                                            <span>Your Story by Louisenel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ============= Insta (Landscape) =============== */}
                <section className="insta_landscape mt-2">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Insta (Landscape)</h3>
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel insta_landscape_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/instapost/instaL-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/instapost/instaL-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/instapost/instaL-3.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/instapost/instaL-3.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/instapost/instaL-3.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Digital Brainstorm</h6>
                                            <span>Presentation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ============= Insta (Portrait) =============== */}
                <section className="insta_portrait mt-2">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Insta (Portrait)</h3>
                            {/* <a
            href="alltemplate.html"
            className="show_more_link text-decoration-none me-3"
          >
            Show more
          </a> */}
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel insta_portrait_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/insta story/IP-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/insta story/IP-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/insta story/IP-3.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/insta story/IP-4.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/insta story/IP-5.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/insta story/IP-4.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/insta story/IP-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">
                                                Bright Yellow and Black Photographic Fitness Service
                                                Website
                                            </h6>
                                            <span>Website</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ============= Facebook (Landscape) =============== */}
                <section className="fb_landscape mt-2">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Facebook (Landscape)</h3>
                            {/* <a
            href="alltemplate.html"
            className="show_more_link text-decoration-none me-3"
          >
            Show more
          </a> */}
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel fb_landscape_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/fb post/fbL-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/fb post/fbL-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/fb post/fbL-3.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/fb post/fbL-1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/fb post/fbL-2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ============= CERTIFICATE (Landscape)=============== */}
                <section className="certificate_landscape mt-2 mb-4">
                    <div className="container-fluid">
                        <div className="section_title_main d-flex justify-content-between align-items-center pb-3">
                            <h3 className="section_title mb-0">Certificate (Landscape)</h3>
                            {/* <a
            href="alltemplate.html"
            className="show_more_link text-decoration-none me-3"
          >
            Show more
          </a> */}
                            <Link
                                to="/alltemplate"
                                className="show_more_link text-decoration-none me-3"
                            >
                                Show more
                            </Link>
                        </div>
                        <div className="gallery_main">
                            <div className="gallery_inner">
                                <div className="owl-carousel certificate_landscape_swiper">
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/sectionimg/certi1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/sectionimg/certi2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/sectionimg/certi3.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                <img
                                                    src="assets/images/sectionimg/certi1.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                    <div className="single_template_card">
                                        <div className="gallery_img position-relative">
                                            <a href="javscript:;">
                                                {" "}
                                                <img
                                                    src="assets/images/sectionimg/certi2.png"
                                                    className="img-fluid w-100"
                                                    alt="template"
                                                />
                                            </a>
                                            <div className="pricing_option">
                                                <a
                                                    href="javscript:;"
                                                    className="pricing_icon text-decoration-none"
                                                >
                                                    <i className="fa-solid fa-crown text-warning"/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img_small_title mt-2">
                                            <h6 className="mb-0">Untitled Design</h6>
                                            <span>Doc</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* ================= WHAT ARE YOU WAITING FOR ======================= */}
            <section className="template_design_info bg-white py-4">
                {/* create_temp_container */}
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h5 className="section_heading_title mb-4">
                            So what are you waiting for?
                        </h5>
                    </div>
                    <div className="swiper mySwiper waitingforSwiper">
                        <div className="swiper-wrapper pb-4">
                            <div className="swiper-slide">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <img
                                            src="assets/images/sectionimg/sliderimg1.png"
                                            alt="slider"
                                            className="img-fluid h-100 waitingforSwiper_img"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <div className="d-flex justify-content-center flex-column h-100">
                                            <h5 className="custom_temp_heading mb-3 color_midnight text-start">
                                                "Create Custom Invitations with Crafty Art for Your
                                                Special Events"
                                            </h5>
                                            <p className="custom_temp_text mb-3">
                                                If you are looking to create beautiful wedding and
                                                birthday invitations, then look no further than Crafty
                                                Art. This online graphic design tool is the perfect
                                                solution for creating stunning and customized
                                                invitations that will get your guests excited to attend
                                                your special event.
                                            </p>
                                            <p className="custom_temp_text mb-3">
                                                With Crafty Art, you can easily create stunning
                                                invitation cards that will have your guests in awe.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <img
                                            src="assets/images/sectionimg/sliderimg2.png"
                                            alt="slider"
                                            className="img-fluid h-100 waitingforSwiper_img"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <div className="d-flex justify-content-center flex-column h-100">
                                            <h5 className="custom_temp_heading mb-3 color_midnight text-start">
                                                "Create Professional Logos and Social Media Posts with
                                                Crafty Art!"
                                            </h5>
                                            <p className="custom_temp_text mb-3">
                                                Crafty art is the perfect tool for creating logos, Insta
                                                (Landscape), Insta (Potrait), and Facebook (Landscape)
                                                posts, Facebook (Potrait) posts, invitations (Portrait),
                                                certificates, thumbnails, and Instagram stor y posts
                                                without watermarks.
                                            </p>
                                            <p className="custom_temp_text mb-3">
                                                {" "}
                                                Whether you are creating graphics for your business or
                                                personal use, you can do it all with this design and
                                                photo editor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <img
                                            src="assets/images/sectionimg/sliderimg3.png"
                                            alt="slider"
                                            className="img-fluid h-100 waitingforSwiper_img"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <div className="d-flex justify-content-center flex-column h-100">
                                            <h5 className="custom_temp_heading mb-3 color_midnight text-start">
                                                Customize Your Designs with ease
                                            </h5>
                                            <p className="custom_temp_text mb-3">
                                                The platform is also great for making festival posters,
                                                logos, resumes, and more, all free of charge.
                                            </p>
                                            <p className="custom_temp_text mb-3">
                                                With Crafty Art, you don't need to be a professional
                                                designer to create stunning graphics.
                                            </p>
                                            <p className="custom_temp_text mb-3">
                                                You can access a wide range of templates, fonts, colors,
                                                and more to customize your designs to your exact
                                                specifications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <img
                                            src="assets/images/sectionimg/sliderimg4.png"
                                            alt="slider"
                                            className="img-fluid h-100 waitingforSwiper_img"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <div className="d-flex justify-content-center flex-column h-100">
                                            <h5 className="custom_temp_heading mb-3 color_midnight text-start">
                                                Explore Our Ready-Made Logo Designs
                                            </h5>
                                            <p className="custom_temp_text mb-3">
                                                Crafty Art also offers a online free logo maker and
                                                download option.
                                            </p>
                                            <p className="custom_temp_text mb-3">
                                                You can create a logo or a edit logo template and then
                                                download it in PNG, JPG or PDF format.
                                            </p>
                                            <p className="custom_temp_text mb-3">
                                                You can also choose from a range of sizes and colors to
                                                customize your logo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <img
                                            src="assets/images/sectionimg/sliderimg5.png"
                                            alt="slider"
                                            className="img-fluid h-100 waitingforSwiper_img"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <div className="d-flex justify-content-center flex-column h-100">
                                            <h5 className="custom_temp_heading mb-3 color_midnight text-start">
                                                "Unlock Your Creative Potential with Our prestigious
                                                Design Tool!"
                                            </h5>
                                            <p className="custom_temp_text mb-3">
                                                Creating beautiful template designs is now easier than
                                                ever with Crafty Art.
                                            </p>
                                            <p className="custom_temp_text mb-3">
                                                Whether you're looking to create logos, Insta posts,
                                                Insta Story Maker, thumbnail maker without watermark,
                                                free resume maker or certificates, you can do it all
                                                with Crafty Art. With its ease of use, the wide
                                                selection of templates and fonts, free logo maker and
                                                download options, you can create stunning graphics in no
                                                time. Get creative and start crafting with Crafty Art
                                                today!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <img
                                            src="assets/images/sectionimg/sliderimg6.png"
                                            alt="slider"
                                            className="img-fluid h-100 waitingforSwiper_img"
                                        />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <div className="d-flex justify-content-center flex-column h-100">
                                            <h5 className="custom_temp_heading mb-3 color_midnight text-start">
                                                "Effortlessly Remove Backgrounds with Crafty Art's Free
                                                Background Remover"
                                            </h5>
                                            <p className="custom_temp_text mb-3">
                                                Crafty Art's background remover is designed to be
                                                user-friendly and intuitive, so you can easily remove
                                                backgrounds with the click of a button.
                                            </p>
                                            <p className="custom_temp_text mb-3">
                                                This tool makes it easy to remove unwanted backgrounds
                                                and replace them with a solid color, a transparent
                                                background, or a custom background of your choice. Plus,
                                                Crafty Art's background remover is the perfect tool for
                                                quickly and easily removing backgrounds.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"/>
                    </div>
                </div>
            </section>
        </>
    );
}
