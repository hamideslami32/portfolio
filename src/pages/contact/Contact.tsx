import styles from "./contact.module.scss";
import { ReactComponent as LinkedIn } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Skype } from "../../assets/svg/skype.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Google } from "../../assets/svg/google3.svg";
import { ReactComponent as WhatsApp } from "../../assets/svg/whatsapp.svg";
import { ReactComponent as Telegram } from "../../assets/svg/telegram.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Link to="/">
        <Google className="icon" />
      </Link>
      <Link to="/">
        <LinkedIn className="icon" />
      </Link>
      <Link to="/">
        <Github className="icon" />
      </Link>
      <Link to="/">
        <Skype className="icon" />
      </Link>
      <Link to="/">
        <WhatsApp className="icon" />
      </Link>
      <Link to="/">
        <Telegram className="icon" />
      </Link>
    </div>
  );
};
export default Contact;
