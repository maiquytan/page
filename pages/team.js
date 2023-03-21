import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'

import { listBoss,settings } from '../constants'

const Team = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [startX, setStartX] = useState(0);
  const listRef = useRef(null);
  const ref = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX);
    listRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.pageX - startX;
      listRef.current.scrollLeft = scrollPosition - deltaX;
      setIsMoving(true);
    }
  };
  const handleMouseUp = () => {
    setTimeout(() => {
      setIsMoving(false);
    }, 10);
    setIsDragging(false);
    setScrollPosition(listRef.current.scrollLeft);
    listRef.current.style.cursor = 'grab';
  };

  return (
    <div className="team">
      <h1 className="h1">** Our Team screen **</h1>

      {/* Header */}
      <div className="bg-header">
        <div className="img-header">
          <img src="/bg_about.webp" alt="bg-header" title="bg-header" width="1920" height="637" />
        </div>
        <div className="about-header container">
          <div className="header-title">Our Team</div>
          <div className="header-content">
            <div className="header-left">Meet the talented and dedicated individuals behind Axalize's success.</div>
            <div className="header-right">
              <img src="/Frame132.webp" alt="img-header" title="img-header" width="644" height="644" />
            </div>
          </div>
        </div>
      </div>

      {/* Introduce */}
      <div className="introduce container">
        <div className="introduce-left">
          <div className="one-introduce">
            <img src="/icon_introduce.svg" alt="icon-introduce" title="icon-introduce" width="50" height="50" />
            <div className="introduce-content">
              <h2>Our People</h2>
              <p>At Axalize, we believe in hiring top-notch talent and fostering a supportive, collaborative work environment.</p>
            </div>
          </div>
          <div className="one-introduce">
            <img src="/icon_introduce.svg" alt="icon-introduce" title="icon-introduce" width="50" height="50" />
            <div className="introduce-content">
              <h2>Our Culture</h2>
              <p>From our values to our approach to work, here's what makes Axalize a unique and dynamic place to work.</p>
            </div>
          </div>
          <div className="one-introduce">
            <img src="/icon_introduce.svg" alt="icon-introduce" title="icon-introduce" width="50" height="50" />
            <div className="introduce-content">
              <h2>Our Leadership</h2>
              <p>Leading Axalize forward with vision and expertise, our executive team brings years of experience and a passion for innovation.</p>
            </div>
          </div>
          <div className="one-introduce">
            <img src="/icon_introduce.svg" alt="icon-introduce" title="icon-introduce" width="50" height="50" />
            <div className="introduce-content">
              <h2>Our Careers</h2>
              <p>Join our team and be part of a company that values hard work, creativity, and a commitment to excellence.</p>
            </div>
          </div>
        </div>
        <div className="introduce-right">
          <img src="/img_introduce.webp" alt="img-introduce" title="img-introduce" width="610" height="628" />
        </div>
      </div>

      {/* Meet */}
      <div className="meet container" ref={ref}>
        <div>
          <div className="bar"></div>
          <h2 className="meet-title"><label>MEET</label> THE TEAM</h2>
        </div>
        <div className="meet-main"
          ref={listRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {listBoss.map((list, index) => (
            <div className="boss" key={index}>
              <div className="img-meet" style={{ backgroundImage: `url('${(list.image)}')` }} >
                <div className="bg-meet">
                  <p> {list.name}</p>
                </div>
              </div>
              <div className="icon-meet" >
                <img src={list.icon} alt="icon-meet" title="icon-meet" width="70" height="70" />
              </div>
              <div className="meet-content">
                <h3> {list.job}</h3>
                <label> {list.describe}</label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .team {
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }
          .h1 {
            display: none;
          }
          .container {
            max-width: 1260px;
            display: flex;
            padding: 0 30px;
            box-sizing: content-box;
          }
          .bg-header {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          .img-header {
            position: absolute;
            right: 0;
            top: 78px;
            z-index: 1;
            width: 100%;
            height: auto;
            aspect-ratio: 3;
    	      object-fit: cover;
          }
          .img-header>img {
            width: 100%;
          }
          .about-header {
            position: relative;
            height: calc(100vh - 118px);
            max-width: 1260px;
            margin: auto;
            margin-top: 118px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            z-index: 2;
          }
          .header-title {
            background-image: url("../Ellipse.svg");
            background-size: cover;
            background-repeat: no-repeat;
            padding: 25px 75px;
            font-size: 43px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            top: 165px;
            font-family: 'Lexend', sans-serif;
            color: #DEDEDE;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
          }
          .header-content {
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;
          }
          .header-left {
            width: 40%;
            font-size: 23px;
            line-height: 33px;
            color: #FFFFFF;
            margin-top: 200px;
          }
          .header-right {
            width: 50%;
            height: auto;
            aspect-ratio: 1;
    	      object-fit: cover;
          }
          .header-right>img {
            width: 100%;
            height: 100%;
          }

          //Introduce--------------------
          .introduce {
            max-width: 1260px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            margin-bottom: 145px;
          }
          .introduce-left {
            width: 49%;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .one-introduce {
            display: flex;
            align-items: center;
            background: #F8F8F8;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            padding: 0 35px;
          }
          .one-introduce>img {
            margin-right: 22px;
            margin-bottom: 10px;
          }
          .introduce-content>h2 {
            font-weight: 600;
            font-size: 28px;
            line-height: 34px;
            letter-spacing: 0.02em;
            margin-bottom: 12px;
            margin-top: 22px;
          }
          .introduce-content>p {
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.02em;
            font-weight: 500;
            margin-bottom: 28px;
          }
          .introduce-right {
            width: 48%;
            height: auto;
            aspect-ratio: 1;
            object-fit: cover;
          }
          .introduce-right>img {
            width: 100%;
            height: 100%;
          }

          //Meet----------------------------
          .meet {
            flex-direction: column;
            max-width: 1260px;
            width: auto;
            margin: auto;
            padding: 0 30px;
            padding-bottom: 95px;
            width: 100%;
            user-select: none;
          }
          .bar {
            width: 120px;
            height: 10px;
            background: #1667B2;
            margin-bottom: 15px;
          }
          .meet-title {
            font-weight: 600;
            font-size: 34px;
            line-height: 41px;
            color: #000;
            margin-bottom: 34px;
          }
          .meet-title>label {
            color: #1667B2;
          }
          .meet-main {
            max-width: 1260px;
            width: 100%;
            overflow: auto;
            margin: auto;
            display: flex;
            gap: .9rem;
          }
          .meet-main::-webkit-scrollbar-track {
            display: none;
          }
          .meet-main::-webkit-scrollbar {
            display: none;
          }
          .boss {
            width: 24%;
            height: 480px;
            background: #F3F3F3;
            border-radius: 5px;
            overflow: hidden;
            position: relative;
            min-width: 304px;
            max-width: 304px;
            text-decoration: none;
            -webkit-user-drag: none;
          }
          .boss.active:before {
            content: "";
            height: 2px;
            width: 100%;
            background: #fff;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          .img-meet {
            background-size: cover;
            background-repeat: no-repeat;
            height: 372px;
            color: #FFFFFF;
            font-weight: 600;
            font-size: 31px;
            line-height: 38px;
          }
          .bg-meet {
            background: rgba(0, 0, 0, 0.43);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .bg-meet > p {
            padding-left: 36px;
            margin-bottom: 30px;
            width: 20%;
          }
          .icon-meet {
            position: relative;
          }
          .icon-meet>img {
            position: absolute;
            top: -35px;
            right: 36px;
          }
          .meet-content {
            width: auto;
            padding-left: 25px;
            padding-right: 20px;
            margin: auto;
          }
          .meet-content>h3 {
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            margin-top: 16px;
            margin-bottom: 7px;
          }
          .meet-content>label {
            font-size: 13px;
            line-height: 18px;
            color: #525252;
          }
          @media screen and (max-width: 1320px) {
          .meet{
            width: auto;
          }
          @media screen and (max-width: 1024px) {
            .container {
              padding: 0 30px;
              padding-bottom: 95px;
            }
            .about-header {
              width: 100%;
              height: auto;
              padding: 0;
              margin-top: 50px;
              justify-content: normal;
            }
            .img-header {
              top: 0px;
              left: -70%;
              width: 200%;
              height: auto;
              aspect-ratio: 3;
              object-fit: cover;
            }
            .img-header>img {
              width: 100%;
              height: 100%;
            }
            .header-title {
              margin-top: 10%;
              background: none;
              padding: 0;
              width: 100%;
              height: auto;
              text-align: center;
              top: 0;
              left: 0;
            }
            .header-content {
              flex-direction: column-reverse;
              width: 100%;
            }
            .header-left {
              margin: 0;
              width: auto;
              padding: 0 24px;
              font-size: 18px;
              line-height: 30px;
              color: #494949;
              text-align: center;
            }
            .header-right {
              margin: auto;
              margin-top: 5%;
              margin-bottom: 10%;
            }
            .header-right>img {
              width: 100%;
              height: 100%;
            }
            //-------------------
            .introduce {
              flex-direction: column;
              margin-bottom: 35px;
            }
            .introduce-left,.introduce-right {
              width: auto;
              padding: 5px 0;
            }
            // .meet-main {
            //   flex-wrap: wrap;
            // }
            // .boss {
            //   width: 49%;
            //   margin-bottom: 12px;
            // }
          }
          @media screen and (max-width: 768px) {
            .container {
              padding: 0 20px;
              padding-bottom: 80px;
            }
            .about-header {
              padding: 0;
            }
          }
          @media screen and (max-width: 480px) {
            .container {
              padding: 0 12px;
              padding-bottom: 70px;
            }
            .about-header {
              padding: 0;
            }
            .img-header {
              width: 200%;
              height: auto;
              aspect-ratio: 2.1;
              object-fit: cover;
            }
            .header-left {
              font-size: 14px;
              text-align: justify;
            }
            .one-introduce {
              align-items: flex-start;
            }
            .one-introduce>img {
              margin-top: 25px;
              margin-left: 30px;
              margin-right: 18px;
            }
            .introduce-content>h2 {
              font-size: 22px;
              margin-bottom: 6px;
            }
            .introduce-content>p {
              font-size: 13px;
              line-height: 20px;
              margin-bottom: 20px;
              letter-spacing: 0;
            }
            // .meet-main {
            //   flex-direction: column;
            // }
            .bar {
              margin-bottom: 8px;
            }
            .meet {
              padding: 0 12px;
            }
            .meet-title {
              font-size: 30px;
            }
            .meet-title {
              margin-bottom: 8px;
            }
            .boss {
              width: auto;
              margin-bottom: 10px;
            }

          }
        `}
      </style>
    </div>
  )
}

export default Team
