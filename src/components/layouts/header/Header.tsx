const navLinks = [
  { text: "Resume", url: "/resume" },
  { text: "Conatct", url: "/contact" },
  { text: "Home", url: "/" },
];

import styles from "./header.module.scss";
import { ReactComponent as Home } from "../../../assets/svg/home3.svg";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="/">Hamid Eslami</a>
      </h1>
      <nav className={styles.nav}>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                {link.text === "Home" ? (
                  <Link to={link.url}>
                    <Home className={clsx("icon", styles["home-icon"])} />
                  </Link>
                ) : (
                  <Link to={link.url}>{link.text}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
