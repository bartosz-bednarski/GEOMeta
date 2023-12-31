import React from "react";
import Logo from "../ui/LogoSmall";
import classes from "./footer.module.scss";
import facebookLogo from "../../assets/images/footer/facebook-circle-logo-204.png";
import gmailLogo from "../../assets/images/footer/gmail-logo-204.png";
import instagramLogo from "../../assets/images/footer/instagram-logo-204.png";
import phoneLogo from "../../assets/images/footer/phone-regular-204.png";
import twitterLogo from "../../assets/images/footer/twitter-logo-204.png";
const SOCIAL_ICONS: { icon: string; alt: string }[] = [
  { icon: facebookLogo, alt: "facebook" },
  { icon: gmailLogo, alt: "gmail" },
  { icon: instagramLogo, alt: "instagram" },
  { icon: phoneLogo, alt: "phone" },
  { icon: twitterLogo, alt: "twitter" },
];
const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <Logo />
      <span>Copyright © 2023 https://geo-meta.vercel.app</span>
      <div className={classes["footer__contact"]}>
        <div className={classes["footer__contact__icons-box"]}>
          {SOCIAL_ICONS.map((item) => (
            <img
              className={classes["footer__contact__icons-box__icon"]}
              src={item.icon}
              alt={item.alt}
            />
          ))}
        </div>
        <a href="/privacy" className={classes["footer__contact__privacy"]}>
          Polityka prywatności
        </a>
      </div>
    </div>
  );
};
export default Footer;
