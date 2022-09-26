import React from "react";
import Link from "next/link";

import { Button } from "antd";

import sampImg from "../../../public/Images/design-home.webp";

import Layout from "../../../components/Layout/Layout";

import CartCard from "../../../components/CartCard/CartCard";
import CartCheckout from '../../../components/CartCheckout/CartCheckout'

import css from "./Cart.module.css";

const Cart = () => {
  const cartData = {
    img: sampImg,
    ttl: "Test product",
    price: "400",
    cartItems: "2",
  };
  return (
    <Layout>
      <div className={css.cart}>
        <div className={css.cartTtl}>Cart (2)</div>
        <div className={css.bdy}>
          <div className={css.cartItems}>
            <CartCard cartData={cartData} />
            <div className={css.tileDiv}>
              <Button className={css.btn}>
                <Link href="/products">Add More Products</Link>
              </Button>
              <Button className={css.btn} type="primary">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
          <div className={css.checkoutCard}>
            <CartCheckout />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
