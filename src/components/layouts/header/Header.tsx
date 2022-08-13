const navLinks = [
  { text: "Resume", url: "/resume" },
  { text: "Conatct", url: "/contact" },
  { text: "Home", url: "/" },
];

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1><a href="/">Hamid Eslami</a></h1>
      <nav className={styles.nav}>
        <ul className="">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};


export default Header;