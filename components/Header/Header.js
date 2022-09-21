import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import css from "./Header.module.css";

import menuIcon from '../../public/Icons/menu.png';
import crossIcon from '../../public/Icons/close.png';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(true);

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
            Profile
            <ul className={css.tabDropdown}>
              <li className={css.tabDropdownList}>
                <Link href="/profile">My Profile</Link>
              </li>
              <li className={css.tabDropdownList}>
                <Link href="/my-orders">My Orders</Link>
              </li>
              <li className={css.tabDropdownList}>Logout</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
