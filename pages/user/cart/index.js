import React from "react";
import Link from 'next/link';

import { Button, Card } from "antd";

import Layout from "../../../components/Layout/Layout";

import css from './Cart.module.css'

const Cart = () => {
  return (
    <Layout>
      <div className={css.cart}>
        <div className={css.cartTtl}>Cart (2)</div>
        <div className={css.bdy}>
          <div className={css.cartItems}>
            <div className={css.tileDiv}>
              <Button className={css.btn}><Link href='/products'>Add More Products</Link></Button>
              <Button className={css.btn} type="primary"><Link href='/checkout'>Proceed to Checkout</Link></Button>
            </div>
          </div>
          <div className={css.checkoutCard}>
            <Card />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
