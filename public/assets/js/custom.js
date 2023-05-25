//  =========== SCRIPT FOR SEARCH HIDE AND SHOW ON SCROLL
$(function () {
  $(window).on("scroll", function () {
    refreshCarousal();
    if ($(window).scrollTop() > 270) {
      $(".header_search_box").addClass("hide_show_search");
    } else {
      $(".header_search_box").removeClass("hide_show_search");
    }
  });
  // ======== JQUERY FOR HIDE OFFCANVS ON OPEN OFFCANVAS
  $(document).on("click", ".login_modal_open", function () {
    $("#offcanvasNavbar").offcanvas("hide");
  });

  $(document).on("click", ".common-card", function () {
    var inputId = $(this).find(":input").attr("id");
    $("#" + inputId).prop("checked", true);
    $("div").removeClass("selected-cards");
    $(this).addClass("selected-cards");
  });

  // ======== JQUERY FOR HIDE OFFCANVS ON OPEN MODAL
  $(document).on("click", ".close_offcanvas", function () {
    $("#loginOffcanvas_mobile").offcanvas("hide");
  });

  // ============= CONTENT HIDE AND SHOW
  $(".showMore_designLogo").on("click", function (e) {
    e.preventDefault();
    $(".show-data-app").toggleClass("show_more_data_app");
  });
  // ============= JQUERY FOR VIEWMORE FAQ
  $(".viewmoreless_button").click(function () {
    $(".more_accordion_items").slideToggle();
    if ($(".viewmoreless_button").text() == "View more") {
      $(this).text("View less");
    } else {
      $(this).text("View more");
    }
  });
  // =========== JQUERY FOR WHAT ARE YOU WAITING FOR SECTION SLIDER
  var swiper = new Swiper(".waitingforSwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // ======== SCRIPT FOR COUNTRY FLAGE AND CODE DROPDOWN
  $("#mobile_code").intlTelInput({
    initialCountry: "in",
    separateDialCode: true,
  });
  // ======== SCRIPT FOR COUNTRY FLAGE AND CODE DRODOWN
  $("#small_mobile_code").intlTelInput({
    initialCountry: "in",
    separateDialCode: true,
  });
  // ================ CUSTOM SELECT OPTION ==========
  // $("select").each(function () {
  //   var $this = $(this),
  //     numberOfOptions = $(this).children("option").length;

  //   $this.addClass("select-hidden");
  //   $this.wrap('<div class="select"></div>');
  //   $this.after('<div class="select-styled"></div>');

  //   var $styledSelect = $this.next("div.select-styled");
  //   $styledSelect.text($this.children("option").eq(0).text());

  //   var $list = $("<ul />", {
  //     class: "select-options",
  //   }).insertAfter($styledSelect);

  //   for (var i = 0; i < numberOfOptions; i++) {
  //     $("<li />", {
  //       text: $this.children("option").eq(i).text(),
  //       rel: $this.children("option").eq(i).val(),
  //     }).appendTo($list);
  //   }

  //   var $listItems = $list.children("li");

  //   $styledSelect.click(function (e) {
  //     e.stopPropagation();
  //     $("div.select-styled.active")
  //       .not(this)
  //       .each(function () {
  //         $(this).removeClass("active").next("ul.select-options").hide();
  //       });
  //     $(this).toggleClass("active").next("ul.select-options").toggle();
  //   });

  //   $listItems.click(function (e) {
  //     e.stopPropagation();
  //     $styledSelect.text($(this).text()).removeClass("active");
  //     $this.val($(this).attr("rel"));
  //     $list.hide();
  //     //console.log($this.val());
  //   });

  //   $(document).click(function () {
  //     $styledSelect.removeClass("active");
  //     $list.hide();
  //   });
  // });
  // =============== OTP VALUE SCRIPT
  $(".otp-form *:input[type!=hidden]:first").focus();
  let otp_fields = $(".otp-form .otp-field"),
    otp_value_field = $(".otp-form .otp-value");
  otp_fields
    .on("input", function (e) {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      );
      let opt_value = "";
      otp_fields.each(function () {
        let field_value = $(this).val();
        if (field_value != "") opt_value += field_value;
      });
      otp_value_field.val(opt_value);
    })
    .on("keyup", function (e) {
      let key = e.keyCode || e.charCode;
      if (key == 8 || key == 46 || key == 37 || key == 40) {
        // Backspace or Delete or Left Arrow or Down Arrow
        $(this).prev().focus();
      } else if (key == 38 || key == 39 || $(this).val() != "") {
        // Right Arrow or Top Arrow or Value not empty
        $(this).next().focus();
      }
    })
    .on("paste", function (e) {
      let paste_data = e.originalEvent.clipboardData.getData("text");
      let paste_data_splitted = paste_data.split("");
      $.each(paste_data_splitted, function (index, value) {
        otp_fields.eq(index).val(value);
      });
    });
  // DSIGN LOGO

  $(".design_post_swiper").owlCarousel({
    items: 2.5,
    loop: false,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: true,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      320: {
        items: 3.5,
      },
      420: {
        items: 4,
      },
      480: {
        items: 4.5,
      },
      575: {
        items: 5.5,
      },
      768: {
        items: 6.5,
      },
      992: {
        items: 7,
      },
      1024: {
        items: 9,
      },
      1366: {
        items: 11,
      },
      1499: {
        items: 12,
      },
      1700: {
        items: 15,
      },
    },
  });
  // // HIGHLIGHT SWIPER JS
  $(".highlight_swiper").owlCarousel({
    items: 2.5,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      390: {
        items: 3.5,
      },
      480: {
        items: 4,
      },
      575: {
        items: 5,
      },
      768: {
        items: 6,
      },
      992: {
        items: 7,
      },
      1366: {
        items: 10,
      },
    },
  });
  // LATEST TEMPLATE js
  $(".latest_templates_swiper").owlCarousel({
    items: 2,
    loop: false,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      390: {
        items: 2.5,
      },
      480: {
        items: 3,
      },
      575: {
        items: 3.5,
      },
      768: {
        items: 5,
      },
      992: {
        items: 6,
      },
      1240: {
        items: 6.5,
      },
      1366: {
        items: 8,
      },
    },
  });

  // INSTA POST JS
  $(".insta_post_swiper").owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      480: {
        items: 2.5,
      },
      575: {
        items: 3.5,
      },
      768: {
        items: 4.5,
      },
      992: {
        items: 5,
      },
      1280: {
        items: 5.5,
      },
      1366: {
        items: 6,
      },
      1499: {
        items: 7.5,
      },
    },
  });
  // INSTA STORY JS
  $(".insta_story_swiper").owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      390: {
        items: 2.5,
      },
      480: {
        items: 3,
      },
      575: {
        items: 3.5,
      },
      768: {
        items: 4.5,
      },
      992: {
        items: 5,
      },
      1280: {
        items: 5.5,
      },
      1366: {
        items: 7.5,
      },
    },
  });
  // LOGO JS
  $(".logo_design_swiper").owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      480: {
        items: 2.5,
      },
      575: {
        items: 3.5,
      },
      768: {
        items: 4.5,
      },
      992: {
        items: 5,
      },
      1280: {
        items: 5.5,
      },
      1366: {
        items: 6,
      },
      1499: {
        items: 7.5,
      },
    },
  });
  // INVITATION JS
  $(".invitaion_swiper").owlCarousel({
    items: 2.5,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      480: {
        items: 3,
      },
      575: {
        items: 3.5,
      },
      768: {
        items: 4.5,
      },
      992: {
        items: 5,
      },
      1280: {
        items: 5.5,
      },
      1366: {
        items: 7.5,
      },
    },
  });
  // INSTA LANDSCAPE JS
  $(".insta_landscape_swiper").owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      575: {
        items: 2.5,
      },
      768: {
        items: 3.5,
      },
      992: {
        items: 4,
      },
      1366: {
        items: 4.5,
      },
      1441: {
        items: 5.5,
      },
    },
  });
  // INATS PORTRAIT JS
  $(".insta_portrait_swiper").owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      390: {
        items: 2.5,
      },
      480: {
        items: 3,
      },
      575: {
        items: 3.5,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1366: {
        items: 5.5,
      },
      1441: {
        items: 6.5,
      },
    },
  });
  // FB LANDSCAPE JS
  $(".fb_landscape_swiper").owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      575: {
        items: 2.5,
      },
      768: {
        items: 3.5,
      },
      992: {
        items: 4,
      },
      1366: {
        items: 4.5,
      },
      1441: {
        items: 5.5,
      },
    },
  });
  // certificate landscape JS
  $(".certificate_landscape_swiper").owlCarousel({
    items: 2,
    loop: true,
    autoplay: false,
    autoplayTimeout: 1500,
    margin: 20,
    nav: false,
    dots: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      575: {
        items: 2.5,
      },
      768: {
        items: 3.5,
      },
      992: {
        items: 4,
      },
      1366: {
        items: 4.5,
      },
      1441: {
        items: 5.5,
      },
    },
  });

  // IMAGE UPLOAD ANS PREVIEW CSS
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#imagePreview").css(
          "background-image",
          "url(" + e.target.result + ")"
        );
        $("#imagePreview").hide();
        $("#imagePreview").fadeIn(650);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function () {
    readURL(this);
  });
  CKEDITOR.replace("editor");
  function refreshCarousal() {
    $(".latest_templates_swiper").owlCarousel({
      items: 2,
      loop: false,
      autoplay: false,
      autoplayTimeout: 1500,
      margin: 20,
      nav: false,
      dots: false,
      navText: [
        '<span class="fas fa-chevron-left fa-2x"></span>',
        '<span class="fas fa-chevron-right fa-2x"></span>',
      ],
      responsive: {
        390: {
          items: 2.5,
        },
        480: {
          items: 3,
        },
        575: {
          items: 3.5,
        },
        768: {
          items: 5,
        },
        992: {
          items: 6,
        },
        1240: {
          items: 6.5,
        },
        1366: {
          items: 8,
        },
      },
    });
  }
});
