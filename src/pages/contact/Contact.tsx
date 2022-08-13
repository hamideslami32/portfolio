import styles from "./contact.module.scss";
import { ReactComponent as LinkedIn } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Skype } from "../../assets/svg/skype.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Gmail } from "../../assets/svg/gmail.svg";
import { ReactComponent as WhatsApp } from "../../assets/svg/whatsapp.svg";
import { ReactComponent as Telegram } from "../../assets/svg/telegram.svg";
import { Link } from "react-router-dom";

const socials = [
  { name: "Gmail", url: "/" },
  { name: "Linkedin", url: "/" },
  { name: "Github", url: "/" },
  { name: "Skype", url: "/" },
  { name: "Whatsapp", url: "/" },
  { name: "Telegram", url: "/" },
];

const Contact = () => {

  const socialComponents = socials.map((social, index) => {
    return (
      <div key={index} className={styles.social}>
        <Link to={social.url}>
          {social.name === "Gmail" ? (
            <Gmail />
          ) : social.name === "Linkedin" ? (
            <LinkedIn />
          ) : social.name === "Github" ? (
            <Github />
          ) : social.name === "Skype" ? (
            <Skype />
          ) : social.name === "Whatsapp" ? (
            <WhatsApp />
          ) : social.name === "Telegram" ? (
            <Telegram />
          ) : (
            <Gmail />
          )}
        </Link>
      </div>
    );
  });

  return <div className={styles.contact}>{socialComponents}</div>;
};
export default Contact;
