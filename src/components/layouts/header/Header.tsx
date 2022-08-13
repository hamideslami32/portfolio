const navLinks = [
  { text: "Contact", url: "/contact" },
  { text: "About", url: "/about" },
  { text: "Home", url: "/" },
];

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Hamid Eslami</h1>
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