import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const inputStyle = {
  // iconColor: "#c4f0ff",
  color: "black",
  fontWeight: "500",
  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
  fontSize: "16px",
  border: "1px solid #ced4da",
  fontSmoothing: "antialiased",
  ":-webkit-autofill": {
    color: "#fce883",
  },
  "::placeholder": {
    color: "#ced4da",
  },
};

export default function PaymentForm({ selectPaln, countryCode }: any) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardNumberElement),
    } as any);

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response: any = await axios.post("/payments/create", {
          amount: selectPaln?.price * 100,
          id,
          currency: countryCode === "IN" ? "INR" : "USD",
        });

        if (response?.data?.next_action?.redirect_to_url?.url) {
          window.location.href =
            response?.data?.next_action?.redirect_to_url?.url;
          setIsLoading(false);
        }

        if (response.data.success) {
          toast.success("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form>
        <fieldset className="FormGroup">
          <div className="FormRow">
            {/* <CardElement options={CARD_OPTIONS as any} /> */}
            <div className="payment-from mb-5">
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="form-group position-relative">
                    <label htmlFor="" className="form-label">
                      Card number
                    </label>
                    <div
                      style={{
                        border: "1px solid  #ced4da",
                        padding: "10px",
                        borderRadius: ".375rem",
                      }}
                    >
                      <CardNumberElement
                        options={{
                          style: {
                            base: inputStyle,
                          },
                        }}
                      />
                    </div>
                    <div className="cart-img" style={{ top: "38px" }}>
                      <img
                        src="assets/images/payment-img/cart-img-1.png"
                        alt="cardimg"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Expiry date
                    </label>
                    <div
                      style={{
                        border: "1px solid  #ced4da",
                        padding: "10px",
                        borderRadius: ".375rem",
                      }}
                    >
                      <CardExpiryElement
                        options={{
                          style: {
                            base: inputStyle,
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6  mb-4">
                  <div className="form-group position-relative">
                    <label htmlFor="" className="form-label">
                      CVV/CVC
                    </label>
                    <div
                      style={{
                        border: "1px solid  #ced4da",
                        padding: "10px",
                        borderRadius: ".375rem",
                      }}
                    >
                      <CardCvcElement
                        options={{
                          style: {
                            base: inputStyle,
                          },
                        }}
                      />
                    </div>

                    <div className="cart-img" style={{ top: "38px" }}>
                      <img
                        src="assets/images/payment-img/cart-img-2.png"
                        alt="cardimg"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-text d-flex">
                <i className="fa-solid fa-unlock-keyhole" />
                <p className="mb-0 ps-2">
                  This transaction is secured with SSL encryption and protected
                  by reCAPTCHA.Privacy and Cookie Policy and Terms of Service
                  apply.
                </p>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="paynow_button">
          <a
            className="btn paynow my-3"
            data-bs-toggle="offcanvas"
            role="button"
            onClick={handleSubmit}
          >
            Pay Now
          </a>
        </div>
      </form>

      {isLoading && (
        <main className="main">
          <span className="loader"></span>
        </main>
      )}
    </>
  );
}

// 4700 1101 0209 0703
// 477
// 10/26
