import React from "react";
import Image from "next/image";

import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

import css from "./CartCard.module.css";

const CartCard = (props) => {
  const { img, ttl, price, cartItems } = props.cartData;
  return (
    <div className={css.cartCard}>
      <div className={css.leftDiv}>
        <div className={css.imgBox}>
          <Image src={img} alt="product image" width="100px" height="100px" />
        </div>
        <div className={css.desc}>
          <div className={css.ttl}>{ttl}</div>
          <div className={css.price}>₹ {price}</div>
        </div>
      </div>
      <div className={css.rightDiv}>
        <div className={css.btns}>
          <Button type="primary">
            <MinusOutlined />
          </Button>
          <span className={css.cartItems}>{cartItems}</span>
          <Button type="primary">
            <PlusOutlined />
          </Button>
        </div>
        <Button type="danger">Remove</Button>
      </div>
    </div>
  );
};

export default CartCard;
