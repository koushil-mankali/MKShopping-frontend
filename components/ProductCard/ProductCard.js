import Image from 'next/image'

import css from "./ProductCard.module.css";

import designImg from '../../public/Images/design.webp'

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
const { Meta } = Card;

const ProductCard = () => (
  <Card
    style={{
      width: 300,
      margin: "1rem",
    }}
    cover={
      <Image
        alt="example"
        src={designImg}
        width ={300}
        height={250}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);

export default ProductCard;