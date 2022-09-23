import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Dropdown, Menu, message, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import css from "./Header.module.css";

import menuIcon from "../../public/Icons/menu.png";
import crossIcon from "../../public/Icons/close.png";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  const logoutHandler = () => {
    message.success("Logged out!");
  }

  const menu = (
    <Menu
      items={[
        {
          label: <Link href="/profile">Profile</Link>,
          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: <Link href="/profile">Cart</Link>,
          key: "2",
          icon: <UserOutlined />,
        },
        {
          label: <div onClick={logoutHandler}>Logout</div>,
          key: "3",
          icon: <UserOutlined />,
        },
      ]}
    />
  );

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <Link href="/">
          <div className={css.title}>MK Shopping</div>
        </Link>
        <div
          className={css.menuIcon}
          onClick={() => setActiveMenu((val) => !val)}
        >
          <Image
            src={activeMenu ? menuIcon : crossIcon}
            alt="menu icon"
            width="32px"
            height="32px"
          />
        </div>
        <ul className={css.menu}>
          <li className={css.tab}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={css.tab}>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
          <li className={css.tab}>
            <Link href="/cart">Cart</Link>
          </li>
          <li className={[css.tab, css.profile].join(" ")}>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Profile
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
