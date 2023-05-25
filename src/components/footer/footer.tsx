import { Link, useNavigate } from "react-router-dom";
import AppStore from "../../style/images/Icons/appstore.png";
import PlayStore from "../../style/images/Icons/playstore.png";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      {/* ========================= FOOTER ========================= */}
      {/* ================ HIGHLIGHT WORK =============== */}
      {/* <section className="highlight_work bg-dark text-white py-5">
        <div className="container-fluid">
          <div className="highlight_wotk_title pb-5 px-4 text-center">
            <h5 className="section_heading_title m-0 text-white">
              Helping you highlight what’s remarkable about your business
            </h5>
          </div> */}
      {/* ========= LARGE SCREEN HIGHLIGHT TAB ======= */}
      {/* <div className="highlight_tab container d-none d-sm-block">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item mb-3" role="presentation">
                <button
                  className="nav-link active"
                  id="social_media_tab"
                  data-bs-toggle="pill"
                  data-bs-target="#social_media"
                  type="button"
                  role="tab"
                  aria-controls="social_media"
                  aria-selected="true"
                >
                  Social Media
                </button>
              </li>
              <li className="nav-item mb-3" role="presentation">
                <button
                  className="nav-link"
                  id="certificate_tab"
                  data-bs-toggle="pill"
                  data-bs-target="#certificate"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Certificate
                </button>
              </li>
              <li className="nav-item mb-3" role="presentation">
                <button
                  className="nav-link"
                  id="quotes_tab"
                  data-bs-toggle="pill"
                  data-bs-target="#quotes"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Quotes
                </button>
              </li>
              <li className="nav-item mb-3" role="presentation">
                <button
                  className="nav-link"
                  id="instagram_tab"
                  data-bs-toggle="pill"
                  data-bs-target="#instagram"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Instagram
                </button>
              </li>
              <li className="nav-item mb-3" role="presentation">
                <button
                  className="nav-link"
                  id="logo_tab"
                  data-bs-toggle="pill"
                  data-bs-target="#logo"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Logo
                </button>
              </li>
              <li className="nav-item mb-3" role="presentation">
                <button
                  className="nav-link"
                  id="trending_tab"
                  data-bs-toggle="pill"
                  data-bs-target="#trending"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Trending
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="social_media"
                role="tabpanel"
                aria-labelledby="social_media_tab"
                tabIndex={0}
              >
                <div className="highlight_single_tab">
                  <div className="owl-carousel highlight_swiper">
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/1.png" alt="footerimg" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2">
                        <h6>
                          Facebook <br />
                          Portrait
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/2.png" alt="footerimg" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2">
                        <h6>
                          Instagram <br />
                          Portrait
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/3.png" alt="footerimg" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2">
                        <h6>
                          Instagram <br />
                          Story
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img
                          src="assets/images/Footer/footer-4.png"
                          alt="footerimg"
                        />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2">
                        <h6>Youtube Thumbnail</h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/5.png" alt="footerimg" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2">
                        <h6>Insta Landscape</h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/6.png" alt="footerimg" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2">
                        <h6>
                          Facebook <br />
                          Portrait
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/7.png" alt="footerimg" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2">
                        <h6>
                          Instagram <br />
                          Story
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/8.png" alt="footerimg" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2">
                        <h6>
                          Instagram <br />
                          Portrait
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="certificate"
                role="tabpanel"
                aria-labelledby="certificate_tab"
                tabIndex={0}
              >
                Certificate
              </div>
              <div
                className="tab-pane fade"
                id="quotes"
                role="tabpanel"
                aria-labelledby="quotes_tab"
                tabIndex={0}
              >
                Quotes
              </div>
              <div
                className="tab-pane fade"
                id="instagram"
                role="tabpanel"
                aria-labelledby="instagram_tab"
                tabIndex={0}
              >
                Instagram
              </div>
              <div
                className="tab-pane fade"
                id="logo"
                role="tabpanel"
                aria-labelledby="logo_tab"
                tabIndex={0}
              >
                Logo
              </div>
              <div
                className="tab-pane fade"
                id="trending"
                role="tabpanel"
                aria-labelledby="trending_tab"
                tabIndex={0}
              >
                Trending
              </div>
            </div>
          </div> */}
      {/* ========== SMALL SCREEN HIGHLIGHT ACCORDION ========== */}
      {/* <div className="highlight_accordion d-block d-sm-none">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item social_media mb-3">
                <h2 className="accordion-header active" id="headingOne">
                  <button
                    className="accordion-button text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#category_collapse"
                    aria-expanded="true"
                    aria-controls="category_collapse"
                  >
                    Social Media
                  </button>
                </h2>
                <div
                  id="category_collapse"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white">
                    <div className="highlight_single_tab">
                      <div className="owl-carousel highlight_swiper">
                        <div className="highlight_smallcard">
                          <div className="highlight_smallcard_img">
                            <img
                              src="assets/images/Footer/1.png"
                              alt="footer"
                            />
                          </div>
                          <div className="highlight_smallcard_text text-center mt-2 text-white">
                            <h6>
                              Facebook <br />
                              Portrait
                            </h6>
                          </div>
                        </div>
                        <div className="highlight_smallcard">
                          <div className="highlight_smallcard_img">
                            <img
                              src="assets/images/Footer/2.png"
                              alt="footer"
                            />
                          </div>
                          <div className="highlight_smallcard_text text-center mt-2 text-white">
                            <h6>
                              Instagram <br />
                              Portrait
                            </h6>
                          </div>
                        </div>
                        <div className="highlight_smallcard">
                          <div className="highlight_smallcard_img">
                            <img
                              src="assets/images/Footer/3.png"
                              alt="footer"
                            />
                          </div>
                          <div className="highlight_smallcard_text text-center mt-2 text-white">
                            <h6>
                              Instagram <br />
                              Story
                            </h6>
                          </div>
                        </div>
                        <div className="highlight_smallcard">
                          <div className="highlight_smallcard_img">
                            <img
                              src="assets/images/Footer/footer-4.png"
                              alt="footer"
                            />
                          </div>
                          <div className="highlight_smallcard_text text-center mt-2 text-white">
                            <h6>Youtube Thumbnail</h6>
                          </div>
                        </div>
                        <div className="highlight_smallcard">
                          <div className="highlight_smallcard_img">
                            <img
                              src="assets/images/Footer/5.png"
                              alt="footer"
                            />
                          </div>
                          <div className="highlight_smallcard_text text-center mt-2 text-white">
                            <h6>Insta Landscape</h6>
                          </div>
                        </div>
                        <div className="highlight_smallcard">
                          <div className="highlight_smallcard_img">
                            <img
                              src="assets/images/Footer/6.png"
                              alt="footer"
                            />
                          </div>
                          <div className="highlight_smallcard_text text-center mt-2 text-white">
                            <h6>
                              Facebook <br />
                              Portrait
                            </h6>
                          </div>
                        </div>
                        <div className="highlight_smallcard">
                          <div className="highlight_smallcard_img">
                            <img
                              src="assets/images/Footer/7.png"
                              alt="footer"
                            />
                          </div>
                          <div className="highlight_smallcard_text text-center mt-2 text-white">
                            <h6>
                              Instagram <br />
                              Story
                            </h6>
                          </div>
                        </div>
                        <div className="highlight_smallcard">
                          <div className="highlight_smallcard_img">
                            <img
                              src="assets/images/Footer/8.png"
                              alt="footer"
                            />
                          </div>
                          <div className="highlight_smallcard_text text-center mt-2 text-white">
                            <h6>
                              Instagram <br />
                              Portrait
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item certificate mb-3">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Certificate_collapse"
                    aria-expanded="true"
                    aria-controls="Certificate_collapse"
                  >
                    Certificate
                  </button>
                </h2>
                <div
                  id="Certificate_collapse"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white">
                    Certificate........
                  </div>
                </div>
              </div>
              <div className="accordion-item quotes mb-3">
                <h2 className="accordion-header " id="headingOne">
                  <button
                    className="accordion-button text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#quotes_collapse"
                    aria-expanded="true"
                    aria-controls="quotes_collapse"
                  >
                    Quotes
                  </button>
                </h2>
                <div
                  id="quotes_collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white">Quotes</div>
                </div>
              </div>
              <div className="accordion-item instagram mb-3">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#instagram_collapse"
                    aria-expanded="true"
                    aria-controls="instagram_collapse"
                  >
                    Instagram
                  </button>
                </h2>
                <div
                  id="instagram_collapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white">Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* =================== FOOTER ============ */}
      <footer className="footer">
        <div className="footer_primary py-5 d-none d-sm-block">
          <div className="container">
            <div className="d-flex justify-content-lg-between flex-wrap">
              <div className="footer_discover px-2">
                <div className="footer_link">
                  <h6 className="footer_title">Discover</h6>
                  <div className="d-flex">
                    <ul className="list-unstyled me-5 me-sm-0 pe-5">
                      <li className="py-2">
                        <a
                          // to="/templates/invitation-card"
                          onClick={() => {
                            navigate("/invitation");
                          }}
                          className="text-decoration-none footer_items"
                        >
                          Invitations
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          onClick={() => {
                            navigate("/templates/quotes-post-square");
                            window.location.reload();
                          }}
                          className="text-decoration-none footer_items"
                        >
                          Quotes
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          onClick={() => {
                            navigate("/templates/resume-portrait");
                            window.location.reload();
                          }}
                          className="text-decoration-none footer_items"
                        >
                          Resume
                        </a>
                      </li>
                      <li className="py-2">
                        <Link
                          to="/"
                          className="text-decoration-none footer_items"
                        >
                          Flyer
                        </Link>
                      </li>
                    </ul>
                    <ul className="list-unstyled">
                      <li className="py-2">
                        <a
                          onClick={() => {
                            navigate("/logos");
                          }}
                          className="text-decoration-none footer_items"
                        >
                          Logo
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          onClick={() => {
                            navigate("/templates/daily-post");
                            window.location.reload();
                          }}
                          className="text-decoration-none footer_items"
                        >
                          Festival
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer_company px-2">
                <div className="footer_link">
                  <h6 className="footer_title">Company</h6>
                  <ul className="list-unstyled">
                    <li className="py-2">
                      <Link
                        to="/aboutus"
                        className="text-decoration-none footer_items"
                      >
                        About Us
                      </Link>
                    </li>
                    {/* <li className="py-2">
                      <Link
                        to="/contactus"
                        className="text-decoration-none footer_items"
                      >
                        Contact Us
                      </Link>
                    </li> */}

                    <li className="py-2">
                      <Link
                        to="/pricePlans"
                        className="text-decoration-none footer_items"
                      >
                        Plans &amp; Prices
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer_legal px-2">
                <div className="footer_link">
                  <h6 className="footer_title">Legal</h6>
                  <ul className="list-unstyled">
                    <li className="py-2">
                      <Link
                        to="/privacy-policy"
                        className="text-decoration-none footer_items"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/term-condition"
                        className="text-decoration-none footer_items"
                      >
                        Terms and Conditions
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/copyright-information"
                        className="text-decoration-none footer_items"
                      >
                        Copyright Information
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer_learn px-2">
                <div className="footer_link">
                  <h6 className="footer_title">Learn</h6>
                  <ul className="list-unstyled">
                    {/* <li className="py-2">
                      <a
                        href="javascript:;"
                        className="text-decoration-none footer_items"
                      >
                        Tutorials
                      </a>
                    </li> */}
                    <li className="py-2">
                      <Link
                        to="https://blog.craftyartapp.com/"
                        className="text-decoration-none footer_items"
                      >
                        Blog
                      </Link>
                    </li>
                    {/* <li className="py-2">
                      <Link
                        to="/contactus"
                        className="text-decoration-none footer_items"
                      >
                        Help center
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="footer_support px-2">
                <div className="footer_link">
                  <h6 className="footer_title">Support</h6>
                  <ul className="list-unstyled">
                    <li className="py-2">
                      <Link
                        to="/faqs"
                        className="text-decoration-none footer_items"
                      >
                        FAQ
                      </Link>
                    </li>
                    {/* <li className="py-2">
                      <Link
                        to="/contactus"
                        className="text-decoration-none footer_items"
                      >
                        Contact Us
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="get_app_footer">
                <div className="footer_link">
                  <h6 className="footer_title">Get The Free App</h6>
                  <ul className="list-unstyled">
                    <li className="py-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.crafty.art"
                        className="text-decoration-none footer_items get_app"
                      >
                        <img src={PlayStore} alt="playstore" />
                      </a>
                    </li>
                    {/* <li className="py-2">
                      <a
                        href="javscript:;"
                        className="text-decoration-none footer_items get_app"
                      >
                        <img src={AppStore} alt="appstore" />
                      </a>
                    </li> */}
                    <li className="py-2">
                      <div className="social_icon d-flex justify-content-sm-between align-items-center">
                        <a
                          href="https://www.instagram.com/craftyart_official/"
                          className="text-decoration-none footer_items text-white me-3 me-sm-0"
                        >
                          <i className="fa-brands fa-instagram" />
                        </a>
                        <a
                          href="https://www.facebook.com/people/Crafty-Art/100087508073608/"
                          className="text-decoration-none footer_items text-white me-3 me-sm-0"
                        >
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a
                          href="https://www.youtube.com/@craftyartgraphic7864"
                          className="text-decoration-none footer_items text-white me-3 me-sm-0"
                        >
                          <i className="fa-brands fa-youtube" />
                        </a>
                        <a
                          href="https://twitter.com/craftyartstudio"
                          className="text-decoration-none footer_items text-white me-3 me-sm-0"
                        >
                          <i className="fa-brands fa-twitter" />
                        </a>
                        <a
                          href="https://in.pinterest.com/crafty_art_official/_saved/"
                          className="text-decoration-none footer_items text-white"
                        >
                          <i className="fa-brands fa-pinterest" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============== MOBILE SCREEN FOOTER ============= */}
        <div className="mobile_footer footer d-block d-sm-none">
          <div className="footer_primary container-fluid">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item discover">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button text-white footer_title px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#discover_collapse"
                    aria-expanded="true"
                    aria-controls="discover_collapse"
                  >
                    Discover
                  </button>
                </h2>
                <div
                  id="discover_collapse"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white">
                    <div className="d-flex justify-content-sm-between footer_link">
                      <ul className="list-unstyled me-5 me-sm-0">
                        <li className="py-2">
                          <a
                            href="alltemplate.html"
                            className="text-decoration-none footer_items"
                          >
                            Templates
                          </a>
                        </li>
                        <li className="py-2">
                          <a
                            href="javascript:;"
                            className="text-decoration-none footer_items"
                          >
                            Facebook Story
                          </a>
                        </li>
                        <li className="py-2">
                          <a
                            href="javascript:;"
                            className="text-decoration-none footer_items"
                          >
                            Facebook Post
                          </a>
                        </li>
                        <li className="py-2">
                          <Link
                            to="/"
                            className="text-decoration-none footer_items"
                          >
                            Instagram Story
                          </Link>
                        </li>
                      </ul>
                      <ul className="list-unstyled">
                        <li className="py-2">
                          <a
                            href="javascript:;"
                            className="text-decoration-none footer_items"
                          >
                            Facebook Post
                          </a>
                        </li>
                        <li className="py-2">
                          <a
                            href="javascript:;"
                            className="text-decoration-none footer_items"
                          >
                            Youtube Thumbnail
                          </a>
                        </li>
                        <li className="py-2">
                          <a
                            href="javascript:;"
                            className="text-decoration-none footer_items"
                          >
                            Invitations
                          </a>
                        </li>
                        <li className="py-2">
                          <a
                            href="javascript:;"
                            className="text-decoration-none footer_items"
                          >
                            Posters
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item company">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button text-white footer_title px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#company_collapse"
                    aria-expanded="true"
                    aria-controls="company_collapse"
                  >
                    Company
                  </button>
                </h2>
                <div
                  id="company_collapse"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white">
                    <div className="footer_link">
                      <ul className="list-unstyled">
                        <li className="py-2">
                          <Link
                            to="/aboutus"
                            className="text-decoration-none footer_items"
                          >
                            About Us
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link
                            to="/contactus"
                            className="text-decoration-none footer_items"
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link
                            to="/career"
                            className="text-decoration-none footer_items"
                          >
                            Career
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link
                            to="/pricePlans"
                            className="text-decoration-none footer_items"
                          >
                            Plans &amp; Prices
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item legal">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button text-white footer_title px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#legal_collapse"
                    aria-expanded="true"
                    aria-controls="legal_collapse"
                  >
                    Legal
                  </button>
                </h2>
                <div
                  id="legal_collapse"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white">
                    <div className="footer_link">
                      <ul className="list-unstyled">
                        <li className="py-2">
                          <a
                            href="term&condition.html"
                            className="text-decoration-none footer_items"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li className="py-2">
                          <a
                            href="term&condition.html"
                            className="text-decoration-none footer_items"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                        <li className="py-2">
                          <a
                            href="javascript:;"
                            className="text-decoration-none footer_items"
                          >
                            Copyright Information
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item learn">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button text-white footer_title px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#learn_collapse"
                    aria-expanded="true"
                    aria-controls="learn_collapse"
                  >
                    Learn
                  </button>
                </h2>
                <div
                  id="learn_collapse"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white">
                    <div className="footer_link">
                      <ul className="list-unstyled">
                        <li className="py-2">
                          <a
                            href="javascript:;"
                            className="text-decoration-none footer_items"
                          >
                            Tutorials
                          </a>
                        </li>
                        <li className="py-2">
                          <Link
                            to="/blog"
                            className="text-decoration-none footer_items"
                          >
                            Blog
                          </Link>
                        </li>
                        <li className="py-2">
                          <a
                            href="contactus.html"
                            className="text-decoration-none footer_items"
                          >
                            Help center
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item support">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button text-white footer_title px-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#support_collapse"
                    aria-expanded="true"
                    aria-controls="support_collapse"
                  >
                    Support
                  </button>
                </h2>
                <div
                  id="support_collapse"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-white">
                    <div className="footer_link">
                      <ul className="list-unstyled">
                        <li className="py-2">
                          <a
                            href="contactus.html"
                            className="text-decoration-none footer_items"
                          >
                            FAQ
                          </a>
                        </li>
                        <li className="py-2">
                          <Link
                            to="/contactus"
                            className="text-decoration-none footer_items"
                          >
                            Contact Us
                          </Link>
                        </li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_link text-center mt-3">
              <h5 className="footer_title">Get The Free App</h5>
              <div className="get_app_img">
                <a
                  href="https://play.google.com/store/apps/details?id=com.crafty.art"
                  className="text-decoration-none footer_items get_app me-3"
                >
                  <img src={PlayStore} alt="playstore" />
                </a>
                <a
                  href="javscript:;"
                  className="text-decoration-none footer_items get_app"
                >
                  <img src={AppStore} alt="appstore" />
                </a>
              </div>
              <div className="social_icon d-flex justify-content-center align-items-center py-4">
                <a
                  href="https://www.instagram.com/craftyart_official/"
                  className="text-decoration-none footer_items text-white me-3 me-sm-0"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="https://www.facebook.com/people/Crafty-Art/100087508073608/"
                  className="text-decoration-none footer_items text-white me-3 me-sm-0"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  href="https://www.youtube.com/@craftyartgraphic7864"
                  className="text-decoration-none footer_items text-white me-3 me-sm-0"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
                <a
                  href="https://twitter.com/craftyartstudio"
                  className="text-decoration-none footer_items text-white me-3 me-sm-0"
                >
                  <i className="fa-brands fa-twitter" />
                </a>
                <a
                  href="https://in.pinterest.com/crafty_art_official/_saved/"
                  className="text-decoration-none footer_items text-white"
                >
                  <i className="fa-brands fa-pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copyright text-center py-3 border-top">
          <p className="mb-0">Copyright © by Crafty Art All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
