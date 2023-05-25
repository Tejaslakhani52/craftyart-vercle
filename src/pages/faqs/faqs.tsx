import React from "react";
import { Link } from "react-router-dom";
import { faqsList } from "./faqsList/faqsList";

export default function FAQs() {
  return (
    <>
      <div className="faq_main my-4 py-3">
        <div className="container">
          <div className="faq_inner">
            <h5 className="text-center faq_title">FAQ</h5>
            <div className="faq_accordion">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="true"
                      aria-controls="faq1"
                    >
                      How do I make a Crafty Art Instagram post?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        Crafty Art offers a variety of tools to help you create
                        Instagram posts. To start, select the Instagram Post
                        option from the main page and choose one of the premade
                        templates. You can then add your own images, text, and
                        design elements to customise the post. When you’re
                        finished, click "Save," and your Instagram post will be
                        ready to share.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                    >
                      How do I create an Instagram (landscape) post using Crafty
                      Art?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        To create a landscape Instagram post, select the
                        Instagram Post option from the main page and choose one
                        of the premade templates. Then, click "Edit" and select
                        the landscape option from the top of the page. You can
                        then add your own images, text, and design elements to
                        customise the post. When you’re finished, click "Save,"
                        and your Instagram post will be ready to share.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                    >
                      How do I create a Facebook (landscape) post using Crafty
                      Art?
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        To create a landscape Facebook post, select the Facebook
                        Post option from the main page and choose one of the
                        premade templates. Then, click "Edit" and select the
                        landscape option from the top of the page. You can then
                        add your own images, text, and design elements to
                        customise the post. When you’re finished, click "Save,"
                        and your Facebook post will be ready to share.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      aria-expanded="false"
                      aria-controls="faq4"
                    >
                      How do I create an invitation (a portrait) using Crafty
                      Art?
                    </button>
                  </h2>
                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        To create a portrait invitation, select the Invitation
                        option from the main page and choose one of the premade
                        templates. Then, click "Edit" and select the portrait
                        option from the top of the page. You can then add your
                        own images, text, and design elements to customise the
                        post. When you’re finished, click "Save," and your
                        invitation will be ready to share.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                      aria-expanded="false"
                      aria-controls="faq5"
                    >
                      How do I create certificates using Crafty Art?
                    </button>
                  </h2>
                  <div
                    id="faq5"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="mb-0">
                        To create certificates with Crafty Art, select the
                        Certificates option from the main page and choose one of
                        the premade templates. You can then add your own images,
                        text, and design elements to customise the post. When
                        you’re finished, click "Save," and your certificate will
                        be ready to share.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="more_accordion_items">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq6"
                        aria-expanded="false"
                        aria-controls="faq6"
                      >
                        Does Crafty Art offer a free online logo maker?
                      </button>
                    </h2>
                    <div
                      id="faq6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          Yes, Crafty Art offers a free online logo maker. To
                          access it, select the Logo Maker option from the main
                          page and choose one of the premade templates. You can
                          then add your own images, text, and design elements to
                          customise the post. When you’re finished, click
                          "Save," and your logo will be ready to download.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq7"
                        aria-expanded="false"
                        aria-controls="faq7"
                      >
                        Is there a free online logo maker I can download with
                        Crafty Art?
                      </button>
                    </h2>
                    <div
                      id="faq7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          Yes, Crafty Art offers a free online logo maker and
                          download. To access it, select the Logo Maker option
                          from the main page and choose one of the premade
                          templates. You can then add your own images, text, and
                          design elements to customise the post. When you’re
                          finished, click "Save," and your logo will be ready to
                          download.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq8"
                        aria-expanded="false"
                        aria-controls="faq8"
                      >
                        Is there a thumbnail maker without a watermark in Crafty
                        Art?
                      </button>
                    </h2>
                    <div
                      id="faq8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          Yes, Crafty Art offers a thumbnail maker without a
                          watermark. To access it, select the Thumbnail Maker
                          option from the main page and choose one of the
                          premade templates. You can then add your own images,
                          text, and design elements to customise the post. When
                          you’re finished, click "Save," and your thumbnail will
                          be ready to share.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq9"
                        aria-expanded="false"
                        aria-controls="faq9"
                      >
                        Is there an Instagram story maker online with Crafty
                        Art?
                      </button>
                    </h2>
                    <div
                      id="faq9"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          Yes, Crafty Art offers an Instagram story maker
                          online. To access it, select the Instagram Story Maker
                          option from the main page and choose one of the
                          premade templates. You can then add your own images,
                          text, and design elements to customise the post. When
                          you’re finished, click "Save," and your Instagram
                          story will be ready to share.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq10"
                        aria-expanded="false"
                        aria-controls="faq10"
                      >
                        Is there a free resume maker online with Crafty Art?
                      </button>
                    </h2>
                    <div
                      id="faq10"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          Yes, Crafty Art offers a resume maker online for free.
                          To access it, select the Resume Maker option from the
                          main page and choose one of the premade templates. You
                          can then add your own images, text, and design
                          elements to customise the post. When you’re finished,
                          click "Save," and your resume will be ready to share.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq11"
                        aria-expanded="false"
                        aria-controls="faq11"
                      >
                        Is there a festival poster maker with Crafty Art?
                      </button>
                    </h2>
                    <div
                      id="faq11"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          Yes, Crafty Art offers a festival poster maker. To
                          access it, select the Festival Poster Maker option
                          from the main page and choose one of the premade
                          templates. You can then add your own images, text, and
                          design elements to customise the post. When you’re
                          finished, click "Save," and your festival poster will
                          be ready to share.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq12"
                        aria-expanded="false"
                        aria-controls="faq12"
                      >
                        Is there a free logo maker online and a free download
                        with Crafty Art?
                      </button>
                    </h2>
                    <div
                      id="faq12"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          Yes, Crafty Art offers a free logo maker online and a
                          free download. To access it, select the Logo Maker
                          option from the main page and choose one of the
                          premade templates. You can then add your own images,
                          text, and design elements to customise the post. When
                          you’re finished, click "Save," and your logo will be
                          ready to download.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq13"
                        aria-expanded="false"
                        aria-controls="faq13"
                      >
                        What is a free background remover?
                      </button>
                    </h2>
                    <div
                      id="faq13"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          A free background remover is a type of image editing
                          software that can be used to remove the background
                          from an image. This can be useful for a variety of
                          purposes, such as creating a transparent background
                          for an image or creating a new background for a
                          picture. There are a variety of free background
                          removers available online.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq14"
                        aria-expanded="false"
                        aria-controls="faq14"
                      >
                        How do I get started using an online graphic design
                        tool?
                      </button>
                    </h2>
                    <div
                      id="faq14"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          To get started using an online graphic design tool,
                          you will first need to choose a tool like Crafty Art
                          that meets your needs. You may want to research the
                          different features offered by various tools, and read
                          reviews from other users to find the best one for you.
                          Once you have chosen a graphic design tool, you can
                          create an account and start designing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq15"
                        aria-expanded="false"
                        aria-controls="faq15"
                      >
                        What kind of designs can I create with an online graphic
                        design tool?
                      </button>
                    </h2>
                    <div
                      id="faq15"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          {" "}
                          You can create a variety of graphics with an online
                          graphic design tool, such as advertisements, logos,
                          business cards, posters, and more. You can also create
                          vector illustrations and edit photos.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq16"
                        aria-expanded="false"
                        aria-controls="faq16"
                      >
                        What are the Top Online Graphic Design Tool?
                      </button>
                    </h2>
                    <div
                      id="faq16"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ol>
                          <li>Canva</li>
                          <li>Crafty Art</li>
                          <li>Gravit Designer</li>
                          <li>Adobe Illustrator</li>
                          <li>Sketch</li>
                          <li>Pixlr</li>
                          <li>Inkscape</li>
                          <li> GIMP</li>
                          <li>CorelDRAW</li>
                          <li> Adobe InDesign</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  {faqsList?.map((item, index) => (
                    <div key={index} className="accordion-item">
                      <h2 className="accordion-header" id="headingEight">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${index + 18}`}
                          aria-expanded="false"
                          aria-controls={`faq${index + 18}`}
                        >
                          {item?.title}
                        </button>
                      </h2>
                      <div
                        id={`faq${index + 18}`}
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p className="mb-0">
                            You can create a variety of graphics with an online
                            graphic design tool, such as advertisements, logos,
                            business cards, posters, and more. You can also
                            create vector illustrations and edit photos.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
        </div>
      </div>
    </>
  );
}
