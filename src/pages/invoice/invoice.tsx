import React from 'react'

export default function Invoice() {
  return (
    <div className="invioce py-5">
  <div className="container">
    <div className="invioce_inner bg-white py-3 rounded">
      <div className="invoice_top d-flex justify-content-between align-itmes-center flex-wrap">
        <div className="comapny_details invoice_left px-3">
          <div className="invoice_logo mb-3">
            <img
              src="assets/images/Icons/craftyart_logo.png"
              className="img-fluid"
              alt="carftylogo"
            />
          </div>
          <p className="w_40 border-bottom pb-3 w_lg_100">
            Crafty Company, 311 angle square, Uttran, Surat, Gujarat 394105
          </p>
        </div>
        <div className="invoice_info invoice_right px-3">
          <h2>INVOICE</h2>
          <p className="mb-1">
            <span>Invoice #—</span> <span> INV-CA-2022-209905</span>{" "}
          </p>
          <p className="mb-2">
            <span>Invoice Date—</span> <span> Nov 14, 2022</span>{" "}
          </p>
          <p className="mb-2">
            <span>Invoice Amount—</span> <span> Rs.1255.00</span>{" "}
          </p>
          <p className="mb-2">
            <span>Customer ID— </span> <span> 47455392</span>{" "}
          </p>
          <p className="mb-2 color_green1 border-bottom pb-3 w-75 mb-5">PAID</p>
        </div>
      </div>
      <div className="invioce_bottom d-flex justify-content-between align-itmes-center flex-wrap">
        <div className="invoice_details invoice_left px-3">
          <div className="billed_to">
            <h5>BILLED TO</h5>
            <p className="w_40 w_lg_100">
              Infiapp Solution Angel Square Uttran surat, Gujarat 394105 India
              infiappsolution8@gmail.com
            </p>
          </div>
        </div>
        <div className="invoice_right invoice_right px-3">
          <div className="subscription">
            <h5>SUBSCRIPTION</h5>
            <p className="mb-1">
              <span> ID—</span> <span> 8550bcfe-408e-4838-911c-70439c65o</span>{" "}
            </p>
            <p className="mb-1">
              <span>Billing Period—</span> <span>Nov 14 to Dec 14, 2022</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="product_info px-3">
        <div className="product_title d-flex justify-content-between align-itmes-center border-bottom border-top py-4">
          <h5 className="mb-0">PRODUCT TITLE</h5>
          <h5 className="mb-0">AMOUNT (INR)</h5>
        </div>
        <div className="product_amount d-flex justify-content-between align-itmes-center py-4 border-bottom">
          <h4 className="mb-0">Premium account on Crafty Art 1 YEAR INR</h4>
          <h4 className="mb-0">Rs. 1,255.00</h4>
        </div>
        <div className="total_amount text-end pt-3">
          <h4>
            <span className="pe-3">Total Amount (INR)</span>
            <span className="border-bottom pb-3">Rs. 1,255.00</span>
          </h4>
        </div>
      </div>
      <div className="thank_you px-3 mt-5">
        <h6 className="mb-0">
          <span className="border-bottom pb-2">PAYMENTS</span>
        </h6>
        <p className="mt-4">
          Rs.1,255.00 was paid on 14 Nov, 2022 12:28 UTC by Visa card ending
          1234
        </p>
        <div className="thank_you_inner">
          <h4>Thank you for trusting us</h4>
          <p className="mb-0">
            For any queries related to this document please contact us
          </p>
          <p>craftyart@support.com</p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
