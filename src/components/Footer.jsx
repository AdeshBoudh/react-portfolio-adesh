import React from "react";
import me from "../assets/tanjiro.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Founder" />
        <h2>Adesh Boudh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://youtube.com/@adeshboudh" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/adeshboudh" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/adeshboudh" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
