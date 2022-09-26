import React from "react";

import { Button, Input } from "antd";

import css from "./CartCheckout.module.css";

const CartCheckout = () => {
  return (
    <div className={css.cartCheckout}>
      <div className={css.ttl}>ORDER SUMMARY</div>
      <div className={css.calcArea}>
        <div className={css.br}></div>
        <div className={css.item}>
          <span className={css.itemL}>Total Mrp</span>
          <span className={css.itemR}>200</span>
        </div>
        <div className={css.item}>
          <span className={css.itemL}>Shipping Charges</span>
          <span className={css.itemR}>200</span>
        </div>
        <div className={css.item}>
          <span className={css.itemL}>Quantity</span>
          <span className={css.itemR}>200</span>
        </div>
        <div className={css.br}></div>
        <div className={css.item}>
          <span className={css.itemL}>Coupon Discount</span>
          <span className={css.itemR}>200</span>
        </div>
        <div className={css.br}></div>
        <div className={css.item}>
          <span className={css.itemL}>Amount Payable</span>
          <span className={css.itemR}>200</span>
        </div>
        <div className={css.br}></div>
        <div className={css.couponArea}>
          <Input placeholder="Enter coupon code..." className={css.inpt} />
          <Button type="primary" className={css.btn}>Apply Coupon</Button>
          <Button type="danger" className={css.btn}>Remove Coupon</Button>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
