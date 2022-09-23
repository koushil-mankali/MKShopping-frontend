import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <div className={css.creditLine}>
          Made with ❤️ in India by 
          <a
            href="https://www.koushilmankali.com/"
            target="_blank"
            rel="noreferrer"
          >
            Koushil Mankali
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
