import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { listBoss, listIntroduce, settingTeam } from '../constants';
import useViewport from '../hook/useViewPort';

const Team = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [startX, setStartX] = useState(0);
  const listRef = useRef(null);
  const ref = useRef(null);
  const [start, setStart] = useState(0);
  const [itemView, setItemView] = useState(settingTeam.itemPerView);
  const listWidth = (settingTeam.itemListQuantity / itemView) * 100;
  const itemWidth = (1 / settingTeam.itemListQuantity) * 100;
  const marginX = start * itemWidth;
  const [width] = useViewport();

  useEffect(() => {
    if (width < 1260) {
      setItemView(settingTeam.itemPerViewTablet);
    }
    else {
      setItemView(settingTeam.itemPerView);
    }
  }, [width])

  const handleRightClick = () => {
    if (start >= 0 && start < (settingTeam.itemListQuantity - (itemView))) {
      setStart(start + 1)
    }
  }

  const handleLeftClick = () => {
    if (start > 0) {
      setStart(start - 1)
    }
  }

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
          {listIntroduce.map((intro, index) => (
            <div className="one-introduce" key={index}>
              <img src={intro.img} alt="icon-introduce" title="icon-introduce" width="50" height="50" />
              <div className="introduce-content">
                <h2>{intro.title}</h2>
                <p>{intro.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="introduce-right">
          <img src="/img_introduce.webp" alt="img-introduce" title="img-introduce" width="610" height="628" />
        </div>
      </div>

      {/* Meet */}
      <div className="meet">
        <div className="meet-header">
          <div className="bar"></div>
          <h2 className="meet-title"><label>MEET</label> THE TEAM</h2>
        </div>
        <div className="meet-main">
          <div onClick={handleLeftClick} className={start === 0 ? 'undisable left' : 'button'}>
            <svg viewBox="0 0 20 20" color="green" width="50" height="50">
              <path d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path>
            </svg>
          </div>
          <div className="meet-list">
            <div className="meet-img">
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
          <div onClick={handleRightClick} className={start === (settingTeam.itemListQuantity - (itemView)) ? 'undisable right' : 'button'}>
            <svg viewBox="0 0 20 20" color="green" width="50" height="50">
              <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="meet-mobile container" ref={ref}>
        <div>
          <div className="bar"></div>
          <h2 className="meet-title"><label>MEET</label> THE TEAM</h2>
        </div>
        <div className="meet-main-mobile"
          ref={listRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {listBoss.map((list, index) => (
            <div className="boss-mobile" key={index}>
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
          }
          .header-right>img {
            aspect-ratio: 1;
            object-fit: cover;
            width: 100%;
            height: 100%;
            vertical-align: top;
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
            margin-bottom: 28px;
          }
          .introduce-right {
            width: 48%;
            height: auto;
          }
          .introduce-right>img {
            width: 100%;
            height: 100%;
            aspect-ratio: 1;
            object-fit: cover;
            border-radius: 5px;
          }

          //Meet----------------------------
          .meet {
            max-width: 1360px;
            margin: auto;
            position: relative;
          }
          .meet-header {
            margin-left: 50px;
          }
          .meet-main {
            display: flex;
            align-items: center;
            max-width: 1360px;
            height: auto;
            padding-bottom: 95px;
          }
          .meet-list {
            max-width: 1260px;
            margin: auto;
            overflow: hidden;
          }
          .button {
            cursor: pointer;
          }
          .button>svg {
            fill: #96bbdc;
          }
          .left {
            margin-left: 50px;
          }
          .right {
            margin-right: 50px;
          }
          .undisable>svg {
            display: none;
          }
          .meet-mobile {
            display: none;
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
          .meet-img {
            transform: translateX(-${marginX}%);
            width: ${listWidth}%;
            height: auto;
            display: flex;
            gap: 12px;
            transition: .4s;
          }
          .boss {
            width: ${itemWidth}%;
            height: auto;
            min-height: 200px;
            background: #F3F3F3;
            border-radius: 5px;
            overflow: hidden;
          }
          .meet-main-mobile {
            max-width: 1260px;
            width: 100%;
            overflow: auto;
            margin: auto;
            display: flex;
            gap: .9rem;
          }
          .meet-main-mobile::-webkit-scrollbar-track {
            display: none;
          }
          .meet-main-mobile::-webkit-scrollbar {
            display: none;
          }
          .boss-mobile {
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
          .boss-mobile.active:before {
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
            width: 100%;
            aspect-ratio: 0.82;
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
          .bg-meet>p {
            padding-left: 36px;
            margin-bottom: 30px;
            width: 20%;
          }
          .icon-meet {
            position: relative;
          }
          .icon-meet>img {
            width: 23%;
            height: auto;
            aspect-ratio: 1;
    	      object-fit: cover;
            position: absolute;
            top: -35px;
            right: 11%;
          }
          .meet-content {
            width: auto;
            padding-left: 25px;
            padding-right: 20px;
            padding-bottom: 10px;
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
              margin-top: 10%;
              margin-bottom: 10%;
            }
            //-------------------
            .introduce {
              flex-direction: column;
              margin-bottom: 0;
            }
            .introduce-left,.introduce-right {
              width: auto;
              padding: 5px 0;
            }
            //-------------------
            .meet {
              display: none;
            }
            .meet-mobile {
              display: flex;
              width: auto;
            }
          }
          @media screen and (max-width: 768px) {
            .container {
              padding: 0 20px;
              padding-bottom: 80px;
            }
            .about-header {
              padding: 0;
            }
            .header-right {
              width: 75%;
            }
            .img-header {
              width: 200%;
              height: auto;
              aspect-ratio: 2.1;
              object-fit: cover;
            }
          }
          @media screen and (max-width: 480px) {
            .container {
              padding: 0 12px;
              padding-bottom: 30px;
            }
            .header-title {
              font-size: 30px;
            }
            .about-header {
              padding: 0;
            }
            .header-left {
              font-size: 14px;
              text-align: justify;
            }
            .one-introduce {
              align-items: flex-start;
              padding-left: 28px;
              padding-right: 12px;
            }
            .one-introduce>img {
              margin-top: 26px;
              margin-right: 18px;
            }
            .introduce-content>h2 {
              font-size: 22px;
              margin-bottom: 0;
            }
            .introduce-content>p {
              font-size: 13px;
              line-height: 20px;
              margin-bottom: 20px;
              letter-spacing: 0;
            }
            .bar {
              margin-bottom: 8px;
            }
            .meet-title {
              font-size: 30px;
              margin-bottom: 8px;
            }
            .img-meet {
              aspect-ratio: 1;
            }
            .boss-mobile {
              width: auto;
              height: auto;
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Team
