import { useState } from "react";
import Image from "next/image";

import css from "./ProductCard.module.css";

import designImg from "../../public/Images/design.webp";
import {} from "@ant-design/icons";

import {
  HeartOutlined,
  HeartFilled,
  PlusOutlined,
  ShoppingCartOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import { Avatar, Card } from "antd";
import React from "react";
const { Meta } = Card;

const ProductCard = () => {
  const [state, setState] = useState({
    addToCart: false,
    addToWhishList: false,
  });

  return (
    <Card
      className={css.card}
      cover={<Image alt="example" src={designImg} width={300} height={250} />}
      actions={[
        state.addToCart ? (
          <CheckOutlined
            key="addtocart"
            onClick={() =>
              setState((prev) => {
                return { ...prev, addToCart: false };
              })
            }
          />
        ) : (
          <PlusOutlined
            key="addtocart"
            onClick={() =>
              setState((prev) => {
                return { ...prev, addToCart: true };
              })
            }
          />
        ),
        state.addToWhishList ? (
          <HeartFilled
            key="addtowhishlist"
            onClick={() =>
              setState((prev) => {
                return { ...prev, addToWhishList: false };
              })
            }
          />
        ) : (
          <HeartOutlined
            key="addtowhishlist"
            onClick={() =>
              setState((prev) => {
                return { ...prev, addToWhishList: true };
              })
            }
          />
        ),
        <ShoppingCartOutlined key="buynow" />,
      ]}
    >
      <Meta
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

export default ProductCard;
