import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
const FooterStyles = styled.footer`
  width: 50%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 25%;
  

  .social {
    display: flex;
    justify-content: space-evenly;
    font-size: 1.7rem;
    width: 15%;
    a {
      padding: 0.5rem;
      border-radius: 50%;
    }
    a:hover {
      box-shadow: 5px 5px 20px 0px rgba(34, 36, 33, 0.75);
    }
  }
  .copy-rights {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    border-radius: 0.35rem;
    font-weight: 600;

    &:hover {
      box-shadow: 5px 5px 20px 0px rgba(34, 36, 33, 0.75);
    }
  }

  @media screen and (max-width: 48rem) {
      
    width: 100%;
    bottom: 0;
    left: 0;
    .copy-rights {
      font-size: 1rem;
    }
    .social {
      font-size: 1.2rem;
    }
  }
`;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="copy-rights">
        Created by <BiCopyright />
        e-mad2022
      </div>
      <div className="social">
        <a href="https://github.com/emsoltan">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/emad-h-soltan-9a773595/">
          <BsLinkedin />
        </a>
      </div>
    </FooterStyles>
  );
};

export default Footer;
