import React from "react";
import { Link } from "react-router-dom";

export default function TermCondition() {
  return (
    <>
      {/* =============== SMALL SCREEEN BOTTOM ============ */}
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
      </div>
      {/* =========== TERMS AND CONDITION */}
      <section className="terms_condition">
        <div className="terms_condition_hero bg_light_green p-5">
          <h1 className="main_heading my-3 text-center">Terms and condition</h1>
        </div>
        <div className="terms_condition_main my-4">
          <div className="container">
            <div className="d-flex align-items-start terms_condition_inner">
              <div
                className="nav flex-column nav-pills me-3 terms_nav"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link py-0 mb-3 text-start active"
                  id="v-pills-terms-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-terms"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-terms"
                  aria-selected="true"
                >
                  Terms and condition
                </button>
                <button
                  className="nav-link py-0 mb-3 text-start"
                  id="v-pills-refund-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-refund"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-refund"
                  aria-selected="false"
                >
                  Refund and Cancellation Policy
                </button>
                <button
                  className="nav-link py-0 mb-3 text-start"
                  id="v-pills-refer-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-refer"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-refer"
                  aria-selected="false"
                >
                  Refer And Earn
                </button>
              </div>
              <div
                className="tab-content px-lg-3 terms_content"
                id="v-pills-tabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="v-pills-terms"
                  role="tabpanel"
                  aria-labelledby="v-pills-terms-tab"
                  tabIndex={0}
                >
                  <div className="terms_condition_content">
                    <p className="comman_para">
                      <span className="color_green1">Welcome</span> to Crafty
                      Art! These Terms of Use (“Terms”) apply to your (“you” or
                      “your”) use of Crafty Art’s visual communication platform
                      (the “Service”). By using the Service, you agree that
                      these terms will become a legally binding agreement
                      between you and the Crafty Art Contracting Entity
                      identified in these Terms (“Crafty Art”).
                    </p>
                    <p className="comman_para">
                      At Crafty Art, we like to Make Complex Things Simple!
                      You’ll find simple explanations of our Terms in these
                      boxes, but keep in mind only the Terms outside these boxes
                      are legally binding.
                    </p>
                    <div className="terms_condition_list">
                      <h5 className="fw-bold">1. Over view</h5>
                      <p className="comman_para">
                        Crafty Art is a visual communications platform that
                        empowers people to design virtually anything, from logos
                        and greeting cards to posters, Banner, and Flyers (each
                        a “Design”). When you use the Service, you’ll have
                        access to a variety of content provided by Crafty Art
                        and other content providers to use in your designs
                        (“Licensed Content”). Your use of the Licensed Content
                        is subject to the Content License Agreement. You also
                        have the option to upload your own content (“User
                        Content”) which you have full control and responsibility
                        over. You can use Licensed Content, your User Content,
                        and tools available in Crafty Art to create your
                        Designs.
                      </p>
                      <p className="comman_para">
                        The Service is made available on craftyart.in, Crafty
                        Art mobile apps, Crafty Art desktop applications, and in
                        other forms provided or made available by Crafty Art.
                        Your use of the Service is subject to these Terms and
                        Crafty Art’s Acceptable Use Policy. By using the Service
                        you acknowledge Crafty Art’s Privacy Policy.
                      </p>
                      <p className="comman_para">
                        If you are using Crafty Art for Education, please refer
                        to the Crafty Art for Education Additional Terms which
                        are supplemental to these Terms.
                      </p>
                      <p className="comman_para">
                        You may use the Service only if you can form a binding
                        contract with Crafty Art and are legally permitted to do
                        so. By using the Service, you represent and warrant that
                        you have the full right, power and authority to agree to
                        and be bound by these Terms and to fully perform all of
                        your obligations hereunder.
                      </p>
                      <p className="comman_para">
                        If you sign up for the Service on behalf of an
                        organization using an email address provided by your
                        employer or another organization, (i) you represent and
                        warrant that you are an authorized representative of
                        that entity with authority to bind that entity to these
                        Terms; (ii) your use of the Service will bind that
                        entity to these Terms; and (iii) “you” and “your” in
                        these Terms will refer to both you and that entity.
                      </p>
                      <p className="comman_para">
                        Our Crafty Art for Teams plan is intended for teams,
                        businesses and organizations of all sizes who want to
                        work and design together. If you create a Team on behalf
                        of an organization or employer, you are binding them to
                        these Terms and all the obligations set out in them. If
                        they haven’t authorized you to do this, you’ll need
                        someone who is authorized to create the Team.
                      </p>
                    </div>
                    <div className="terms_condition_list">
                      <h5 className="fw-bold">2. Using the Service</h5>
                      <ol style={{ listStyleType: "lower-alpha" }}>
                        <li className="mb-3 comman_para">
                          Age Requirement. Children may not access or use the
                          Service unless their use is directly authorized by
                          their parent, guardian or another authorized adult
                          (such as a teacher) who agrees to be bound by these
                          Terms. For purposes of these Terms, a child is a
                          person under the age of 13 (or the minimum legal age
                          required to provide consent for processing of personal
                          data in the country where the child is located). For
                          children using Crafty Art for Education please refer
                          to the Crafty Art for Education Additional Terms.
                          <br />
                          There are legal restrictions on making certain
                          services available to children. Our free Crafty Art
                          for Education plan for students is compliant with all
                          the laws that apply to children using an online
                          service. You can learn more about Crafty Art for
                          Education here.
                        </li>
                        <li className="mb-3 comman_para">
                          {" "}
                          Access to the Service. Subject to your compliance with
                          these Terms, you are granted a non-exclusive, limited,
                          non-transferable, freely revocable license to access
                          and use the Service for business or personal use.
                          Crafty Art reserves all rights not expressly granted
                          under these Terms. Each person must have a unique
                          account and you are responsible for any activity
                          conducted on your account.
                        </li>
                        <li className="mb-3 comman_para">
                          Acceptable Use Policy. Your use of the Service, your
                          User Content, and your Designs, must comply with
                          Crafty Art’s Acceptable Use Policy.
                        </li>
                        <li className="mb-3 comman_para">
                          Anti-discrimination. Crafty Art does not support and
                          will not tolerate its Service being used to
                          discriminate against others, especially when based on
                          race, religion, sex, sexual orientation, age,
                          disability, ancestry or national origin. You are not
                          permitted to use the Service in a manner which would
                          or would likely incite, promote or support such
                          discrimination and you must not use the Service to
                          incite or promote hostility or violence.
                          <br />
                          We believe in Being a Force for Good in the world and
                          that means we don’t tolerate Crafty Art being used in
                          inappropriate ways.
                        </li>
                        <li className="mb-3 comman_para">
                          Restrictions on Use of the Service. You shall not
                          yourself or through any third party (i) rent, lease,
                          sell, distribute, offer in a service bureau,
                          sublicense, or otherwise make available the Service or
                          the Licensed Content to any third party (except as
                          permitted under these Terms); (ii) copy, replicate,
                          decompile, reverse-engineer, attempt to derive the
                          source code of, modify, or create derivative works of
                          the Service, or any part thereof; (iii) access the
                          Service for purposes of performance benchmarking; (iv)
                          access the Service for purposes of building or
                          marketing a competitive product; (v) use the Service
                          to store or transmit a virus or malicious code; (vi)
                          use a virtual private network (VPN) to circumvent
                          geographic-based pricing or content access; (vii) use
                          the Service to transmit unsolicited emails or engage
                          in spamming; (viii) use any form of data mining,
                          extraction, or scraping on the Service and/or the
                          contents available therein for machine learning or
                          other purposes; or (ix) bypass the measures we may use
                          to prevent or restrict access to the Service,
                          including without limitation features that prevent or
                          restrict use or copying of any content or enforce
                          limitations on use of the Service or the Licensed
                          Content.
                          <br />
                          We work hard to make Crafty Art available to everyone,
                          so we can’t allow you to bring harm to Crafty Art or
                          the platform.
                        </li>
                      </ol>
                    </div>
                    <div className="terms_condition_list">
                      <h5 className="fw-bold">3. Security and Data Privacy</h5>
                      <ol style={{ listStyleType: "lower-alpha" }}>
                        <li className="mb-3 comman_para">
                          Information Security. Crafty Art implements and
                          maintains physical, technical and administrative
                          security measures designed to protect your information
                          from unauthorized access, destruction, use,
                          modification or disclosure. You can learn more about
                          how Crafty Art protects the Service and your
                          information at Crafty Art’s Trust Center.
                        </li>
                        <li className="mb-3 comman_para">
                          Data Privacy. Crafty Art’s Privacy Policy describes
                          how Crafty Art collects, uses, transfers, discloses
                          and stores your personal data. By creating a Crafty
                          Art for Teams account, you confirm that you have read,
                          understood and agree to our Data Processing Addendum
                          in full, and that the Data Processing Addendum shall
                          be incorporated into these Terms to the extent
                          Personal Data subject to the Applicable Data Laws (as
                          defined in the Data Processing Addendum) is processed
                          in your use of the Service. In the event of any
                          conflict between these Terms and the Data Processing
                          Addendum, the Data Processing Addendum shall prevail.
                          <br />
                          If you have a Crafty Art for Teams account, we act as
                          a "Data Processor" under laws like the GDPR because
                          you make the decisions about the personal data in your
                          account and we are processing that data on your
                          behalf. The Data Processing Addendum governs our
                          relationship as it relates to that personal data.
                        </li>
                      </ol>
                    </div>
                    <div className="more_accordion_items">
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">4.Content and Designs</h5>
                        <ol style={{ listStyleType: "lower-alpha" }}>
                          <li className="mb-3 comman_para">
                            {" "}
                            User Content. You represent and warrant that you own
                            all rights, title, and interest in and to your User
                            Content or that you have otherwise secured all
                            necessary rights in your User Content as may be
                            necessary to permit the access, use and distribution
                            thereof as contemplated by these Terms. As between
                            you and Crafty Art, you own all right, title and
                            interest in and to your User Content. You grant
                            Crafty Art a royalty-free and sublicensable license
                            to display, host, copy, store and use your User
                            Content solely to the extent necessary to provide
                            the Service to you. To the extent you include User
                            Content in a Design that you’ve shared with others,
                            you grant Crafty Art a perpetual, royalty-free,
                            sublicensable, license to display, host, copy, store
                            and use your User Content to the extent necessary to
                            continue to make that Design available.
                            <br />
                            When you upload content to Crafty Art, you’re
                            guaranteeing that you have the rights to it. We
                            never obtain any ownership over your content, but we
                            do need you to give us certain rights to store it
                            and have it ready for you to use in your designs.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Licensed Content. You may use Licensed Content in
                            connection with the Service. The use of Licensed
                            Content is subject to additional license rights and
                            restrictions set forth in the Content License
                            Agreement. The applicable license rights and
                            restrictions vary depending on the type and source
                            of the Licensed Content. You can determine which
                            Content License Terms apply by hovering over the
                            item of Licensed Content and clicking on the info
                            icon.
                            <br />
                            We make a variety of content available for you to
                            use in your designs. Certain restrictions apply to
                            how you can use that content and what you can do
                            with the designs you include that content in. The
                            restrictions vary based on the type and source of
                            the content. You can learn more here: Crafty Art's
                            Licensing Explained.
                          </li>
                          <li className="mb-3 comman_para">
                            Designs. Your Designs may include a combination of
                            User Content and Licensed Content. While you retain
                            ownership of your User Content, any use of Designs
                            containing Licensed Content are subject to the
                            applicable terms of the Content License Agreement.
                            <br />
                            We never own your designs, but there may be certain
                            restrictions depending on the types of Crafty
                            Art-provided content you’ve included in your
                            designs.
                          </li>
                          <li className="mb-3 comman_para">
                            Sharing and Publishing Your Designs. You may publish
                            or share Designs with others within the Service, via
                            a Third Party Service, or via a link. Crafty Art
                            maintains no responsibility in relation to such
                            sharing of Designs and Crafty Art’s enablement of
                            such activity or the Service’s performance of
                            actions to publicly share Designs at your
                            instruction shall not be considered a violation of
                            any of Crafty Art’s obligations under these Terms.
                            <br />
                            There are a number of ways to share your designs
                            with the world. You’re responsible for who you share
                            them with and how you do it.
                          </li>
                          <li className="mb-3 comman_para">
                            Printing your Designs. You can use the Service to
                            print your Designs (only available in certain
                            locations). Print orders are subject to additional
                            fees and taxes as specified when you place a print
                            order. Print services are provided by third party
                            print partners who are responsible for completing,
                            delivering or otherwise making available print
                            orders. You can choose to have your print order
                            delivered to you or to pick it up at one of our
                            partners’ locations (subject to availability in your
                            area). Print orders may be affected by circumstances
                            outside of Crafty Art’s control. Delivery times are
                            only estimates which Crafty Art cannot guarantee. If
                            you have an issue with a print order, reach out to
                            Crafty Art Support. Unfortunately, we’re unable to
                            provide refunds for errors made by you or if you
                            just change your mind about a print order.
                            <br />
                            You can bring your designs to life on everything
                            from greeting cards and t-shirts to coffee mugs and
                            journals. Printing is done through our print
                            partners and can be delivered to you, or picked up
                            at a partner’s location (where available). You can
                            learn more here: Crafty Art Print.
                          </li>
                        </ol>
                      </div>
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">5.Teams Administration</h5>
                        <p className="comman_para">
                          You can create or join a “Team” on Crafty Art that
                          allows you to collaborate with others. The creator of
                          the Team is the “Team Owner.” Each Team may have one
                          or more people identified as administrators (each, an
                          “Administrator”) by the Team Owner or another
                          Administrator. Both the Team Owners and Administrators
                          can add, modify or remove people from the Team as well
                          as manage their permissions and access to User Content
                          and Designs. Only the Team Owner may assign a new Team
                          Owner. If you add a person to a Team, you represent
                          and warrant that you or your organization have
                          obtained all necessary consents from that person to be
                          added. If you enable account management services which
                          allow you to manage the Teams and Users using Crafty
                          Art at your organization, you represent and warrant
                          that you are authorized to do so on behalf of your
                          Team and/or organization.
                        </p>
                        <p className="comman_para">
                          If you are on Team on Crafty Art for Teams, the Team
                          Owner or Administrator may control access to, delete,
                          or re-assign ownership to the User Content you upload
                          and Designs you create on the account you access as
                          part of the Team. Crafty Art is not responsible for
                          any actions taken by Team Owners or Administrators. It
                          is your responsibility to not upload User Content or
                          create Designs on an account associated with a Team if
                          you do not want to potentially transfer ownership or
                          disclose such User Content or Designs to others on the
                          Team.
                        </p>
                        <p className="comman_para">
                          If you’re on a Team on Crafty Art for Teams, make sure
                          you’re aware of the privacy settings and only upload
                          content and create designs you’re comfortable with
                          others on the Team having access to and control over.
                          Administrators can transfer designs between people on
                          the Team. Keep your personal content and designs to
                          yourself by creating a personal account.
                        </p>
                      </div>
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">6. Billing</h5>
                        <p className="comman_para">
                          Crafty Art offers a free and paid Service. You can
                          learn more about Crafty Art’s various subscription
                          offerings here. Pricing may vary by location and will
                          be based on the billing information you provide us at
                          the time of purchase. If you are on a Crafty Art for
                          Teams plan, the Team Owner will be billed for and is
                          responsible for payment of subscription fees.
                        </p>
                        <ol style={{ listStyleType: "lower-alpha" }}>
                          <li className="mb-3 comman_para">
                            Subscriptions and Renewals. If you are subscribing
                            to Crafty Art Pro or Crafty Art for Teams, you can
                            sign up for either a monthly or annual subscription.
                            Your subscription will automatically renew on a
                            monthly or annual basis as applicable. You can
                            cancel your subscription at any time. If you cancel
                            your subscription, you will not receive a refund or
                            credit for any amounts that have already been
                            billed.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Pricing for Additional People on your Team. If you
                            are on a Crafty Art for Teams plan, you are billed
                            according to Crafty Art’s “Pay as You Grow” model.
                            When you add people to a Team, you will be billed
                            for them on your next Billing Date (as defined
                            below) unless they delete their account or are
                            removed from your Team by you or an Administrator
                            prior to the Billing Date. Three (3) days prior to
                            the Billing Date, Crafty Art will notify via email
                            the billing contact associated with your Crafty Art
                            Team account of the number of additional people and
                            the associated subscription fees. The applicable
                            “Billing Date” is as follows: (i) if you are on a
                            monthly subscription, the date of your next monthly
                            renewal; (ii) if you are on an annual subscription,
                            every 3 months after the start date of your
                            subscription. Subscription fees for additional
                            people on your Team will be in accordance with the
                            Crafty Art for Teams Pricing. You will not receive a
                            refund or credit for removing people from your Team
                            that have already been paid for.
                            <br />
                            The Pay as You Grow model allows you to scale your
                            Team as needed and reconcile costs for anyone who
                            has joined your Team but will no longer need access
                            to the Service before you are billed for them.
                          </li>
                          <li className="mb-3 comman_para">
                            Taxes. Your subscription fees are inclusive of all
                            taxes unless otherwise specified in an agreement
                            with Crafty Art, within the Service or on an
                            applicable invoice. Tax rates are calculated based
                            on the billing information you provide and the
                            applicable tax rate at the time of your subscription
                            charge.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Cancellation. You can stop using the Service and/or
                            cancel your subscription at any time via your
                            account settings. If you cancel your subscription
                            you will not be entitled to a refund of any fees
                            already paid and any outstanding fees will become
                            immediately due and payable.
                          </li>
                          <li className="mb-3 comman_para">
                            Free Trials and Pilots. Crafty Art may offer you a
                            free trial or pilot to allow you to try our Service.
                            Crafty Art reserves the right to set eligibility
                            requirements and the duration for free trials and
                            pilots.
                            <br />
                            At the end of your free trial, Crafty Art will
                            charge the relevant subscription fee for the next
                            billing cycle to your nominated payment method,
                            unless you cancel your subscription prior to the end
                            of the free trial. If you have access to a pilot,
                            your access to the Service will cease if you do not
                            enter into a paid subscription prior to the end of
                            the pilot period.
                          </li>
                          <li className="mb-3 comman_para">
                            Changes to Pricing. Crafty Art reserves the right to
                            change its prices at any time. If you are on a
                            subscription plan, changes to pricing will not apply
                            until your next renewal or thirty (30) days after
                            notice, whichever is later.
                          </li>
                        </ol>
                      </div>
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">
                          7. Crafty Art’s Intellectual Property
                        </h5>
                        <p className="comman_para">
                          Except as expressly set out in these Terms, all
                          intellectual property rights in and to the Service and
                          Licensed Content remain the sole property of Crafty
                          Art and its licensors. You assign to Crafty Art any
                          suggestions, ideas, enhancement requests, or other
                          feedback you provide to Crafty Art relating to the
                          Service or Crafty Art’s products. Crafty Art owns all
                          content, data, software, inventions, ideas and other
                          technology and intellectual property that it develops
                          in connection with the Service and its products.
                        </p>
                        <p className="comman_para">
                          We get great ideas about how to improve Crafty Art
                          from our users. If you share feedback or ideas with
                          us, you’re letting us use that information to improve
                          Crafty Art, and we own any of those improvements we
                          make.
                        </p>
                      </div>
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">8. Warranty Disclaimer.</h5>
                        <p className="comman_para">
                          The Service is provided on an “as-is” and
                          “as-available” basis. To the maximum extent permitted
                          by applicable law and subject to any non-excludable
                          rights and remedies you may have under applicable law,
                          Crafty Art, its licensors, and its suppliers,
                          expressly disclaim any and all warranties of any kind,
                          whether express or implied, including, but not limited
                          to, warranties of merchantability, fitness for a
                          particular purpose, or non-infringement. Crafty Art
                          does not warrant that your use of the Service will be
                          uninterrupted or error-free. Crafty Art does not
                          warrant that it will review your data for accuracy or
                          that it will preserve or maintain your data without
                          loss. You understand that use of the Service
                          necessarily involves transmission of your data over
                          networks that Crafty Art does not own, operate, or
                          control, and that Crafty Art is not responsible for
                          any of your data lost, altered, intercepted or stored
                          across such networks. Crafty Art will not be liable
                          for delays, interruptions, service failures, or other
                          problems inherent in use of the internet and
                          electronic communications or other systems outside
                          Crafty Art’s reasonable control.
                        </p>
                        <p className="comman_para">
                          We offer the Service as-is and can’t be responsible
                          for things outside of our control.
                        </p>
                      </div>
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">9. Third Party Services.</h5>
                        <p className="comman_para">
                          You may elect to use the Service in conjunction with
                          third-party websites, platforms or apps (including,
                          but not limited to, those available at Crafty
                          Art.com/apps) (“Third Party Service(s)”). Your use of
                          a Third Party Service is subject to the terms and
                          conditions applicable to that Third Party Service.
                          Crafty Art makes no representations or warranties in
                          relation to Third Party Services and expressly
                          disclaims all liability arising from your use of Third
                          Party Services.
                        </p>
                        <p className="comman_para">
                          {" "}
                          Within Crafty Art, you can use apps created by third
                          parties. Those apps might have their own set of terms
                          that apply to you and because the apps were created by
                          third parties, we can’t be responsible for them.
                        </p>
                      </div>
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">
                          10. Your Indemnity Obligations
                        </h5>
                        <p className="comman_para">
                          You agree, to the extent permitted by law, to defend,
                          indemnify and hold harmless Crafty Art and its
                          affiliates, officers, directors, agents, licensors and
                          employees from and against any and all claims, costs,
                          damages, losses, liabilities and expenses (including
                          reasonable attorneys’ fees and costs) resulting from
                          or related to (i) your violation of these Terms or
                          (ii) your User Content.
                        </p>
                        <p className="comman_para">
                          If Crafty Art suffers harm due to your content or your
                          violation of these Terms, or if someone tries to hold
                          Crafty Art responsible for your content or your
                          violations, you’ll be responsible for any costs
                          incurred by Crafty Art and defending Crafty Art.
                        </p>
                      </div>
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">11. Limitation of Liability</h5>
                        <p className="comman_para">
                          In no event shall either party’s aggregate cumulative
                          liability hereunder (whether in contract, tort,
                          negligence, strict liability in tort or by statute or
                          otherwise) exceed the greater of (i) $100 USD or (ii)
                          the subscription fees paid by you to Crafty Art during
                          the twelve-month period preceding the event or
                          occurrence giving rise to such liability. The
                          foregoing limitations shall not apply to liabilities
                          arising out of your indemnification obligations or
                          your breach of the section entitled ‘restrictions on
                          use of the service.’
                        </p>
                        <p className="comman_para">
                          In no event shall either party be liable for any
                          consequential, incidental, indirect, special,
                          exemplary or punitive damages, losses, or expenses
                          (including but not limited to business interruption,
                          lost business or lost profits) even if it has been
                          advised of their possible existence and
                          notwithstanding the failure of essential purpose of
                          any remedy. The foregoing limitations shall not apply
                          to liabilities arising out of your indemnification
                          obligations or your breach of the section entitled
                          ‘restrictions on use of the service.’
                        </p>
                        <p className="comman_para">
                          Crafty Art is not responsible for, and assumes no
                          liability for, the contents of User Content.
                        </p>
                        <p className="comman_para">
                          These terms do not affect consumer rights that cannot
                          by law be waived or limited. These terms do not
                          exclude or limit liability arising out of either
                          party’s gross negligence, fraud or willful misconduct.
                        </p>
                      </div>
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">12. Term and Termination</h5>
                        <ol style={{ listStyleType: "lower-alpha" }}>
                          <li className="mb-3 comman_para">
                            {" "}
                            Term. These Terms shall take effect the first time
                            you access the Service and shall continue in full
                            force and effect until i) if you are a paid
                            subscriber, the expiration or termination of your
                            subscription; or ii) if you are using Crafty Art’s
                            free offering, when your account is deleted or
                            terminated.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Violations. If Crafty Art, in its sole discretion,
                            determines that you or your use of the Service, your
                            User Content, or your Designs violate these Terms,
                            including but not limited to, Crafty Art’s
                            Acceptable Use Policy, the Section entitled
                            ‘Restrictions on Use of the Service,” or the Section
                            entitled “Anti-discrimination,” (any of which is
                            considered a “Violation”) Crafty Art may take one or
                            more of the following actions in its sole
                            discretion: (i) delete the prohibited User Content
                            or Designs; (ii) suspend your access to the Service;
                            (iii) terminate and delete your account along with
                            all Designs and User Content associated with that
                            account (iv) permanently ban you from using the
                            Service; and/or (v) disclose the prohibited User
                            Content or Designs to appropriate government
                            authorities.
                            <br />
                            If you break the rules, we have the right to remove
                            you and everything in your account from the Service.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Effect of Termination. In the event of termination
                            of your subscription for cause due to default by
                            Crafty Art, Crafty Art shall refund, on a prorated
                            basis, any prepaid fees for the Service for the
                            period beginning on the effective date of
                            termination through the end of your then-current
                            subscription. In the event of a termination of your
                            subscription to a violation by you, you will not
                            receive any refund and shall immediately pay any
                            outstanding fees for the remaining period of your
                            subscription.
                            <br />
                            Upon any expiration or termination of your
                            Subscription, you must cease using the Service. You
                            will lose access to your Designs, User Content, and
                            any other information uploaded to the Service (and
                            we may delete all such data unless legally
                            prohibited) after expiration or termination of Your
                            Subscription. User Content included in any shared
                            Design will continue to available within that Design
                            even after the expiration of Your Subscription.
                            Unless your account was terminated due to a
                            Violation, you can download or export your User
                            Content and Designs using the functionality of the
                            Service prior to the expiration or termination of
                            your subscription. If your account has been
                            terminated due to a Violation, you may not create a
                            new account on any Crafty Art Service unless you
                            receive Crafty Art’s written permission.
                          </li>
                          <li className="mb-3 comman_para">
                            Survival of Terms. Sections titled “Term and
                            Termination,” “Billing,” “Crafty Art’s Intellectual
                            Property,” “Limitation of Liability,”
                            “Indemnification,”and “Miscellaneous” inclusive,
                            shall survive any expiration or termination of these
                            Terms.
                          </li>
                        </ol>
                      </div>
                      <div className="terms_condition_list">
                        <h5 className="fw-bold">13. Miscellaneous</h5>
                        <ol style={{ listStyleType: "lower-alpha" }}>
                          <li className="mb-3 comman_para">
                            {" "}
                            Compliance with Applicable Law. You agree to abide
                            by all applicable local, state, national and foreign
                            laws, treaties and regulations, in connection with
                            your use of the Service. Crafty Art agrees to abide
                            by all applicable local, state, national and foreign
                            laws, treaties and regulations, in connection with
                            its provision of the Service.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Governing Law and Jurisdiction. These Terms will be
                            governed by and construed in accordance with the
                            laws of the State of California, without regard to
                            its conflict of laws provisions. Any legal action or
                            proceeding arising under these Terms shall be
                            brought exclusively in the federal or state courts
                            located in Santa Clara County, California and the
                            parties consent to exclusive jurisdiction of such
                            courts. The United Nations Convention on Contracts
                            for the International Sale of Goods is expressly
                            excluded in its entirety from application to these
                            Terms.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Export Restrictions. The Service is subject to trade
                            sanctions and laws and regulations that govern the
                            import, export, and use of the Service. These laws
                            or regulations may prohibit Crafty Art from
                            providing you the Service or require that we
                            discontinue making it available to you without
                            notice. By using the Service you agree to comply
                            with all trade sanctions, export and import laws,
                            and regulations and warrant that (i) you are not
                            prohibited from accessing the Service, and (ii) you
                            will not make available the Service to anyone who is
                            prohibited from accessing it under the laws or
                            regulations of any jurisdiction.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Dispute Resolution. If you have a dispute arising
                            out of these Terms, contact us here and we’ll
                            attempt to work with you to resolve the dispute. If
                            we’re unable to resolve a dispute, you and Crafty
                            Art each agree to resolve any claim, dispute, or
                            controversy (excluding any Crafty Art claims for
                            injunctive or other equitable relief) arising out of
                            or in connection with these Terms (collectively,
                            “Claims”), by binding arbitration by the American
                            Arbitration Association (“AAA”) under the Commercial
                            Arbitration Rules and Supplementary Procedures for
                            Consumer Related Disputes then in effect for the
                            AAA, except as provided herein. The arbitration will
                            be conducted in Santa Clara County, California,
                            unless you and Crafty Art agree otherwise. Each
                            party will be responsible for paying any AAA filing,
                            administrative and arbitrator fees in accordance
                            with AAA rules. The award rendered by the arbitrator
                            shall include costs of arbitration, reasonable
                            attorneys’ fees and reasonable costs for expert and
                            other witnesses, and any judgment on the award
                            rendered by the arbitrator may be entered in any
                            court of competent jurisdiction. Nothing in this
                            Section shall prevent either party from seeking
                            injunctive or other equitable relief from the courts
                            as necessary to prevent the actual or threatened
                            infringement, misappropriation, or violation of that
                            party’s data security, Intellectual Property Rights,
                            or other proprietary rights. All claims must be
                            brought in the parties’ individual capacity, and not
                            as a plaintiff or class member in any purported
                            class or representative proceeding, and, unless we
                            agree otherwise, the arbitrator may not consolidate
                            more than one person’s claims. You agree that, by
                            entering into this agreement, you and Crafty Art are
                            each waiving the right to a trial by jury or to
                            participate in a class action.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Crafty Art Contracting Entity. The Crafty Art entity
                            contracting with you under these Terms and the
                            address to which you should send legal notices
                            depend on where your billing address.
                          </li>
                          <li className="mb-3 comman_para">
                            {" "}
                            Assignment.You may not assign these Terms or any of
                            your rights under these Terms without Crafty Art’s
                            consent except to any successor by way of a merger,
                            acquisition, or change of control. Crafty Art may
                            transfer or assign any of its rights and obligations
                            under these Terms, in whole or in part, at any time
                            with or without notice.
                          </li>
                          <li className="mb-3 comman_para">
                            Headings and Explanations. Headings used in these
                            Terms and the explanatory boxes are provided for
                            convenience only and will not in any way affect the
                            meaning or interpretation of the Terms or any
                            portion thereof.
                          </li>
                          <li className="mb-3 comman_para">
                            Severability. If a particular provision of these
                            Terms is found to be invalid or unenforceable, it
                            shall not affect the other provisions and the Terms
                            shall be construed in all respects as if that
                            invalid or unenforceable provision had been limited
                            or omitted to the minimum extent necessary.
                          </li>
                          <li className="mb-3 comman_para">
                            Waiver. Crafty Art’s express waiver or failure to
                            enforce any provision of these Terms shall in no way
                            be construed to be a present or future waiver of
                            such provision nor affect Crafty Art’s ability to
                            enforce any provision thereafter.
                          </li>
                          <li className="mb-3 comman_para">
                            Notices. All required notices to you will be sent to
                            the email address associated with your account or
                            through other legally permissible means.
                          </li>
                          <li className="mb-3 comman_para">
                            DMCA. We respect the intellectual property rights of
                            artists and content owners. We will respond to
                            notices of alleged copyright infringement that
                            comply with the Digital Millennium Copyright Act of
                            1998 (“DMCA”). For more information please read our
                            Intellectual Property Policy.
                          </li>
                          <li className="mb-3 comman_para">
                            Changes to these Terms. We may modify these Terms
                            (and any policies or agreements referenced in these
                            Terms) at any time. We will post the most current
                            version of these Terms on Crafty Art.com. We will
                            provide you with reasonable advance notice of any
                            change to the Terms that, in our sole determination,
                            materially adversely affect your rights or your use
                            of the Service. We may provide you this notice via
                            the Service and/or by email to the email address
                            associated with your account. By continuing to use
                            the Service after any revised Terms become
                            effective, you agree to be bound by the new Terms.
                          </li>
                          <li className="mb-3 comman_para">
                            Changes to the Service. Crafty Art may add, change
                            or remove features or functionality to the Service;
                            modify or introduce limitations to storage or other
                            features; or discontinue the Service altogether at
                            any time. If you are on a paid subscription and
                            Crafty Art discontinues the Service you are using
                            during your subscription, Crafty Art will migrate or
                            make available to you a substantially similar
                            service provided by Crafty Art (if available) and if
                            it’s unable to do so, Crafty Art will provide you a
                            pro-rata refund of fees prepaid for the remaining
                            period of your subscription.
                          </li>
                          <li className="mb-3 comman_para">
                            Entire Agreement. These Terms and the terms and
                            policies referenced herein constitute the entire
                            agreement between you and Crafty Art with respect to
                            the Service. These Terms supersede any prior
                            representations, agreements, or understandings
                            between you and Crafty Art, whether written or oral,
                            with respect to the Service including previous
                            versions of the Terms. All terms, conditions or
                            provisions on a purchase order shall be of no force
                            and effect notwithstanding any acceptance of such
                            purchase order. The English version of these Terms
                            will control.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="text-center my-3">
                    <a
                      className="register_btn text-decoration-none d-inline-block px-4 fs-6 rounded-3 viewmoreless_button"
                      href="javascript:;"
                    >
                      View more
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-refund"
                  role="tabpanel"
                  aria-labelledby="v-pills-refund-tab"
                  tabIndex={0}
                >
                  <div className="refund_cancel_content">
                    <div className="refund_cancel_list">
                      <h5 className="fw-bold">
                        Crafty art reserves the right to refuse/cancel any
                        order. Crafty art at its sole discretion may cancel any
                        order(s):
                      </h5>
                      <ol style={{ listStyleType: "lower-roman" }}>
                        <li className="mb-3 comman_para">
                          If it suspects a fraudulent transaction, or
                        </li>
                        <li className="mb-3 comman_para">
                          If it suspects a customer has undertaken a transaction
                          which is not in accordance with the Terms of Use or
                        </li>
                        <li className="mb-3 comman_para">
                          For any reason outside the control of the Crafty art
                          including causes for delivery related difficulties.
                        </li>
                      </ol>
                    </div>
                    <div className="refund_cancel_list">
                      <h5 className="fw-bold">
                        Refund/cancellation policies applicable in the following
                        conditions:
                      </h5>
                      <ol style={{ listStyleType: "lower-alpha" }}>
                        <li className="mb-3 comman_para">
                          In case, the buyer cancels the order online Withing
                          half hour, the entire order amount will be refunded.
                        </li>
                        <li className="mb-3 comman_para">
                          In case the item ordered has been shipped but has not
                          yet been delivered to the buyer, the order can not be
                          cancelled.
                        </li>
                        <li className="mb-3 comman_para">
                          However, the order once delivered cannot be cancelled
                          in any case.
                        </li>
                        <li className="mb-3 comman_para">
                          In case there is an option for online download of data
                          than cancellation will not be possible
                        </li>
                        <li className="mb-3 comman_para">
                          In case of failed transactions or double realization
                          of account for the same order, the total deducted
                          amount will be refunded
                        </li>
                        <li className="mb-3 comman_para">
                          In case of cancelled order/failed transactions, the
                          bank/card transaction charges of the buyer, if any, is
                          likely to be forfeited
                        </li>
                        <li className="mb-3 comman_para">
                          Crafty art offers no guarantees whatsoever for the
                          accuracy or timeliness of the refunds in the buyers
                          card/account
                        </li>
                        <li className="mb-3 comman_para">
                          In case of part cancellations, the amount refunded
                          will be corresponding to the part cancellation
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-refer"
                  role="tabpanel"
                  aria-labelledby="v-pills-refer-tab"
                  tabIndex={0}
                >
                  <div className="refer_earn_content">
                    <div className="refer_earn_list">
                      <h5 className="fw-bold">General</h5>
                      <ol className="list-unstyled">
                        <li className="mb-3 comman_para">
                          Step 1: Login to Crafy art
                        </li>
                        <li className="mb-3 comman_para">
                          Step 2: You Refer Crafty Art to Friends &amp; Family
                        </li>
                        <li className="mb-3 comman_para">
                          Step 3: They install and Complete User Registration
                        </li>
                        <li className="mb-3 comman_para">
                          Step 4: You Earn Coins
                        </li>
                        <li className="mb-3 comman_para">
                          Step 5: Get a Subscription with Coin
                        </li>
                      </ol>
                    </div>
                    <div className="refer_earn_list">
                      <h5 className="fw-bold">
                        This offer is valid for eligible Crafty Art users only.
                      </h5>
                      <p className="fw-semibold comman_para">
                        Eligible Crafty Art users:
                      </p>
                      <ol>
                        <li className="mb-3 comman_para">
                          Those who have Install Crafty Art have But not
                          Uninstalled it.
                        </li>
                        <li className="mb-3 comman_para">
                          Crafty art user at least Loging in Crafty Art.
                        </li>
                        <li className="mb-3 comman_para">
                          this offer is only applicable for first time
                          registration.
                        </li>
                      </ol>
                    </div>
                    <div className="refer_earn_list">
                      <p className="comman_para">
                        For each successful referral, referrer will earn reward
                        worth 10 Coins.
                      </p>
                      <p className="comman_para">
                        1 Coin equivalent to 1 INR and 0.0125 USD
                      </p>
                      <p className="comman_para">
                        Any User Installing crafty art app after Uninstalling
                        the existing app will also not be considered for the
                        purpose of referral reward.
                      </p>
                      <p className="comman_para">
                        Crafty art, at its sole discretion, reserves the right
                        to either temporarily or permanently, withdraw or
                        suspend the offer at any time without giving any notice
                        or assigning any reason for the same, whether in respect
                        of one or more customer.
                      </p>
                      <p className="comman_para">
                        Crafty art and any of its officers, directors, personnel
                        and employees shall not be liable for any loss, damage
                        of any nature, including but not limited to direct,
                        indirect, punitive, special, exemplary and consequential
                        in any way arising from this campaign.
                      </p>
                      <p className="comman_para">
                        For queries/complaints pertaining to redeeming of the
                        Coins mentioned in the reward, customer may send eMail
                        on Infiappsolution@gmail.com
                      </p>
                      <p className="comman_para">
                        If any referred client already existed in Crafty art
                        database as existing USer or potential User, then it
                        will not be considered as referral.
                      </p>
                      <p className="comman_para">
                        If the details provided for referrals are incomplete/
                        incorrect/ invalid / duplicate, the Referrer who has
                        provided a reference shall not be entitled to any reward
                        under the Referral Program.
                      </p>
                      <p className="comman_para">
                        The Referrer should obtain consent of prospective before
                        referring to HSL and confirms so having obtained the
                        consent of the person referred for providing his/her
                        details.
                      </p>
                    </div>
                    <div className="refer_earn_list">
                      <h5 className="fw-bold">Steps to Redeem</h5>
                      <p className="comman_para">
                        Visit the
                        <a href="https://play.google.com/store/apps/details?id=com.crafty.art">
                          https://play.google.com/store/apps/details?id=com.crafty.art
                        </a>
                      </p>
                      <p className="comman_para">
                        You can Buy Subscription with these coins.
                      </p>
                      <h5 className="fw-bold">Help</h5>
                      <p className="comman_para">
                        For queries/complaints pertaining to redeeming of the
                        Coins mentioned in the reward, customer may send eMail
                        on infiappsolution@gmail.com
                      </p>
                    </div>
                    <div className="refer_earn_list faq_main">
                      <div className="faq_inner">
                        <h5 className="text-center faq_title pt-3">FAQ</h5>
                        <div className="faq_accordion">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#refer_faq1"
                                  aria-expanded="true"
                                  aria-controls="refer_faq1"
                                >
                                  What is a Successful Referral?
                                </button>
                              </h2>
                              <div
                                id="refer_faq1"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p className="mb-0">
                                    When the referee Install a Crafty Art and
                                    Complete User Registration.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#refer_faq2"
                                  aria-expanded="true"
                                  aria-controls="refer_faq2"
                                >
                                  When will Referrer be rewarded?
                                </button>
                              </h2>
                              <div
                                id="refer_faq2"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p className="mb-0">
                                    The referrer will receive the referral
                                    reward within 7 working days once referred
                                    customer successfully Install a Crafty Art
                                    and Complete User Registration within 30
                                    days of Installing.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#refer_faq3"
                                  aria-expanded="true"
                                  aria-controls="refer_faq3"
                                >
                                  Who is a referrer?
                                </button>
                              </h2>
                              <div
                                id="refer_faq3"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p className="mb-0">
                                    Referrer is an existing User Of Crafty Art.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#refer_faq4"
                                  aria-expanded="true"
                                  aria-controls="refer_faq4"
                                >
                                  Is there any limit on number of customers that
                                  can be referred?
                                </button>
                              </h2>
                              <div
                                id="refer_faq4"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <p className="mb-0">There is no Limit</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
