// import React from "react";
import "./FooterStyle.scss";
import ContentWrapper from "../content-wrapper/ContentWrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of use</li>
          <li className="menuItem">Privacy policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          temporibus beatae nemo ipsam officiis sit consectetur voluptatem illo,
          delectus, aliquam fuga suscipit fugiat minus laboriosam neque rem.
          Inventore eligendi ipsum mollitia qui nam? Exercitationem accusamus
          beatae placeat inventore, temporibus sed recusandae, nam doloremque
          officiis totam ad quaerat facere esse doloribus unde. Debitis
          perferendis, nobis vero sequi quo sapiente quos quia officia atque
          tenetur laborum, consequuntur nam natus dignissimos, modi incidunt.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
}

export default Footer;
