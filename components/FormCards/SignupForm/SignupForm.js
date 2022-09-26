import React from "react";

import { Button, Input } from "antd";

import css from "./SignupForm.module.css";

const SignupForm = () => {
  return (
    <div className={css.signupForm}>
      <div className={css.ttl}>Sign Up</div>
      <div className={css.calcArea}>
       
        <div className={css.couponArea}>
          <Input placeholder="Enter coupon code..." className={css.inpt} />
          <Button type="primary" className={css.btn}>Apply Coupon</Button>
          <Button type="danger" className={css.btn}>Remove Coupon</Button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
