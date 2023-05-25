import { Elements } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import SmallLogo from "../../../style/images/Icons/craftysmall.png";
import { loadStripe } from "@stripe/stripe-js";
import { consoleShow } from "../../../commonFunction/console";
import PaymentForm from "./components/Stripe";

const PUBLIC_KEY =
  "pk_live_51M92RVSF3l7nabbsQXTnM8YdI33NTB7FGC32dhqnwWPECcQ4LddrwsxM68TgkS5munQ9VsVtpF4m7PqGRmkVQGzF00EfT8vVbj";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const loadScript = (src: any) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export default function Payment({
  selectPaln,
  razorpayDetails,
  countryCode,
}: any) {
  consoleShow("selectPaln: ", selectPaln);

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const rzp = new (window as any).Razorpay({
      key: razorpayDetails?.key,
      name: razorpayDetails?.name,
      description: razorpayDetails?.description,
      amount: selectPaln?.price * 100,
      image: SmallLogo,
      // order_id: "123",

      theme: {
        color: "#2ec5b6",
      },
    });
    consoleShow("rzp: ", rzp);

    rzp.open({
      name: razorpayDetails?.name,
      description: razorpayDetails?.description,
      amount: selectPaln?.price * 100,
      currency: selectPaln?.currency,

      notes: {
        customer_id: razorpayDetails?.customer_id,
        remember_customer: razorpayDetails?.remember_customer,
      },

      handler: function (response: any) {
        consoleShow("res", response);
      },
      modal: {
        ondismiss: function () {
          consoleShow("err", "Payment cancelled");
        },
      },
    });
    // }
  };

  return (
    <>
      <div className="modal fade" id="payout" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0 position-relative">
              <button
                type="button"
                className=" btn close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
              <h3 className="finalize-payment-title text-center mb-0 d-sm-none d-block">
                Finalize Payment
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="finalize-left">
                    <div className="logo mb-5 text-center d-none d-sm-block">
                      <img
                        src="assets/images/Icons/craftyart_logo.png"
                        alt="carftyicon"
                        className=""
                      />
                    </div>
                    <div className="finalize-card d-flex align-items-center">
                      <div className="d-none d-sm-block">
                        <div className="finalize-card-outer">
                          <div className="finalize-card-inner"></div>
                        </div>
                      </div>
                      <div className="d-flex finalize-card-contact justify-content-between w-100 align-items-center">
                        <div className=" ps-3  ">
                          <h4 className="mb-0">{selectPaln?.desc}</h4>
                          <p className="mb-0 ">{selectPaln?.package_name}</p>
                        </div>
                        <h4 className="mb-0">{selectPaln?.offer_price}</h4>
                      </div>
                    </div>
                    <div className="finalize-contact">
                      <p className="mb-2">You won't be charged today</p>
                      <p className="mb-2">
                        Paid subscription starts on November 12, 2022
                      </p>
                      <p className="mb-2">Pay once upfront. No auto-renew.</p>
                      <p className="mb-2">Top up whenever you want.</p>
                      <p className="mb-2">
                        You can cancel the premium anytime in your account
                        settingsp
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between border-top pt-3">
                      <h3 className="mb-0">Total Payout</h3>
                      <h3 className="mb-0">{selectPaln?.offer_price}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="finalize-right">
                    <h3 className="finalize-payment-title text-center mb-0 d-sm-block d-none">
                      Finalize Payment
                    </h3>
                    {countryCode === "IN" && (
                      <>
                        <div className="d-flex align-items-center justify-content-around flex-wrap payment-image">
                          <a href="javscript:;" onClick={handleSubmit}>
                            <img
                              src="assets/images/Icons/razorpay_img.png"
                              alt="razorypay"
                              className="img-fluid"
                            />
                          </a>
                        </div>

                        <div className="separator">
                          <div className="line" />
                          <h2 className="mb-0">or</h2>
                          <div className="line" />
                        </div>
                      </>
                    )}
                    <div className="finalize-contact flex-wrap pb-4">
                      <h4 className="mb-0 text-center">Credit or debit card</h4>
                      <div className="d-flex payment-card-img text-center">
                        <img
                          src="assets/images/payment-img/img-1.png"
                          alt="payment"
                          className="img-fluid"
                        />
                        <img
                          src="assets/images/payment-img/img-2.png"
                          alt="payment"
                          className="img-fluid"
                        />
                        <img
                          src="assets/images/payment-img/img-3.png"
                          alt="payment"
                          className="img-fluid"
                        />
                        <img
                          src="assets/images/payment-img/img-4.png"
                          alt="payment"
                          className="img-fluid"
                        />
                        <img
                          src="assets/images/payment-img/img-5.png"
                          alt="payment"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <Elements stripe={stripeTestPromise}>
                      <PaymentForm
                        selectPaln={selectPaln}
                        countryCode={countryCode}
                      />
                    </Elements>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
