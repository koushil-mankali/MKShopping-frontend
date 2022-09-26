import React from "react";

import Header from "../Header/Header";
import Footer from '../Footer/Footer'

import css from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={css.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
