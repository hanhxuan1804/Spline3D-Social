import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Logo from "./images/logo.svg";
import IconLaptop from "./images/icon-laptop.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconYoutube from "./images/icon-youtube.svg";
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const watermark = document.querySelector("body > a");
    if (watermark) {
      watermark.style.display = "none";
    }
  }, []);
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/FvnugehmyL9D0VR3/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <img src={Logo} alt="logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
        <button>
          <img src={IconLaptop} alt="Download" />
          Download for MAC
        </button>
      </Content>
      <Social>
        <div />
        {/* <img src={IconTwitter} alt="twitter" />
        <img src={IconYoutube} alt="youtube" /> */}
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  background: #0e1129;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
  }
`;
const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: fit-content;
  pointer-events: none;

  @media (max-width: 1024px) {
    gap: 40px;
  }
  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    max-width: 500px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);
    pointer-events: auto;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    transition: 1s;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      cursor: pointer;
      transform: translateY(-3px);
    }
  }
  h1,
  p,
  button {
    margin: 0 30px 0 100px;
    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;
  pointer-events: auto;


  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
        cursor: pointer;
      }
    }
  }
  
  @media(max-width: 1024px){
    margin: 0 30px;
  }
  
  @media(max-width: 800px){
     justify-content: space-between;
     li: nth-child(2),
     li: nth-child(3),
     li: nth-child(4),
     li: nth-child(5) {
      display: none;
     }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33%,
      #1306dd 66%,
      #aa0eb2 100%
    );
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
