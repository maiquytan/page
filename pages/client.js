import React from 'react';
import Head from 'next/head';

import { HOME_URL, listFeedback, listReason } from '../constants';

const Client = () => {
  return (
    <>
      <Head>
        <title>Axalize Incorporated | Clients' satisfaction is at the heart of everything we do.</title>
        <meta data-n-head="ssr" data-hid="title" name="title"
          content="Axalize Incorporated | Clients' satisfaction is at the heart of everything we do." />
        <meta data-n-head="ssr" data-hid="og:title" name="og:title"
          content="Axalize Incorporated | Clients' satisfaction is at the heart of everything we do." />
        <meta data-n-head="ssr" data-hid="description" name="description" content="By working with Axalize, clients can trust that their project is in capable hands and that they will receive a tailored solution designed to drive business success." />
        <meta data-n-head="ssr" data-hid="og:description" name="og:description" content="By working with Axalize, clients can trust that their project is in capable hands and that they will receive a tailored solution designed to drive business success." />
        <meta data-n-head="ssr" data-hid="og:url" name="og:url"
          content={HOME_URL + '/client'} />
        <meta data-n-head="ssr" name="keywords"
          content="" />
        <meta data-n-head="ssr" data-hid="og:image" property="og:image"
          content={HOME_URL + '/logo1.svg'} />
        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index,follow" />
        <meta data-n-head="ssr" data-hid="googlebot" name="googlebot" content="index,follow" />
        <link data-n-head="ssr" data-hid="i18n-can" rel="canonical" href={HOME_URL + '/client'} ></link>
      </Head>

      <div className="client">
        <h1 className="h1">Clients' satisfaction is at the heart of everything we do.</h1>

        {/* Header */}
        <div className="bg-header session">
          <div className="img-header">
            <img src="/bg_about.webp" alt="bg-header" title="bg-header" width="1920" height="637" />
          </div>
          <div className="about-header container">
            <div className="header-title">Our Clients</div>
            <div className="header-content">
              <div className="header-left">Unlocking your growth potential with dedication and responsiveness</div>
              <div className="header-right">
                <img src="/img_client.webp" alt="img-header" title="img-header" width="644" height="644" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile, Web */}
        <div className="bg-mobile-web session">
          <div className="mobile-web container">
            <div className="mobile-web-header">Customized Software Solutions for Web and Mobile: Axalize's Commitment to Innovation and Versatility</div>
            <div className="mobile-web-content">At Axalize, we are dedicated to providing customized
              software solutions that meet the unique needs of each client. With a focus on web and
              mobile application development, we leverage our extensive experience to deliver high
              -quality results. Our portfolio showcases the diverse range of industries and businesses
              we have served, demonstrating our versatility and commitment to delivering innovative
              solutions. By working with Axalize, clients can trust that their project is in capable
              hands and that they will receive a tailored solution designed to drive business success.
            </div>
          </div>
        </div>

        {/* Reason */}
        <div className="bg-reason">
          <div className="reason">
            <div className="reason-header">What sets Axalize apart in the eyes of our clients</div>
            <div className="reason-content">
              {listReason.map((reason, index) => (
                <div className="one-reason" key={index}>
                  <div className="img-one-reason">
                    <img src={reason.img} alt="img-reason" title="img-reason" width="110" height="115" />
                  </div>
                  <p>{reason.title}</p>
                </div>
              ))}
            </div>
            <div className="img-reason">
              <img src="/Asset.svg" alt="img-reason" title="img-reason" width="200" height="35" />
            </div>
          </div>
        </div>

        {/* Expert */}
        <div className="session">
          <div className="expert container">
            <div className="expert-left">
              <div className="expert-header">Expert software solutions driving business success.</div>
              <div className="bar blue"></div>
              <p className="expert-content">With deep expertise in over 50 projects, Axalize operates
                under a quality-driven model. We leverage innovative technical knowledge to deliver
                cutting-edge, timely, and valuable solutions. At Axalize, we prioritize a customer-centric
                approach, ensuring that our core values align with those of our clients to deliver results
                that truly drive business success.</p>
            </div>
            <div className="expert-right">
              <img src="/Group23.webp" alt="img-expert" title="img-expert" width="605" height="663" />
            </div>
          </div>
        </div>
        {/* Feedback */}
        <div className="bg-feedback">
          <div className="bg-feedback2">
            <div className="feedback">
              <div className="feedback-header">
                <div>
                  <p>Success and Satisfaction with Axalize</p>
                  <div className="bar white"></div>
                </div>
                <p>At Axalize, client satisfaction is at the heart of everything we do. Our commitment
                  to delivering exceptional software development solutions has earned us a reputation
                  as a trusted partner for businesses looking to drive success and growth.</p>
              </div>
              <div className="what-say">What do our customers say?</div>
            </div>
            <div className="feedback-content">
              {listFeedback.map((feed, index) => (
                <div className="one-feedback" key={index}>
                  <img src={feed.img} className="img-feedback" alt="img-feedback" title="img-feedback" width="210" height="210" />
                  <div className="evaluate">{feed.title}</div>
                  <div className="client-name">{feed.clientName}</div>
                  <p className="company-name">{feed.companyName}</p>
                </div>
              ))}
            </div>
            <div className="feedback-content-mobile">
              {listFeedback.map((feed, index) => (
                <div className="one-feedback" key={index}>
                  <div className="feedback-left">
                    <img src={feed.img} className="img-feedback" alt="img-feedback" title="img-feedback" width="120" height="120" />
                    <div className="client-name">{feed.clientName}</div>
                    <p className="company-name">{feed.companyName}</p>
                  </div>
                  <div className="evaluate">{feed.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>
          {`
          .client {
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }
          .h1 {
            display: none;
          }
          .bg-header {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          .session {
            padding: 0 30px;
            box-sizing: border-box;
          }
          .container {
            max-width: 1260px;
            width: 100%;
            display: flex;
            margin: auto;
          }
          .img-header {
            position: absolute;
            right: 0;
            top: 78px;
            z-index: 1;
          }
          .about-header {
            position: relative;
            height: calc(100vh - 118px);
            margin-top: 78px;
            flex-direction: column;
            align-items: flex-start;
            z-index: 2;
          }
          .header-title {
            background-image: url("../Ellipse.svg");
            background-size: cover;
            background-repeat: round;
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
            width: 100%;
            justify-content: space-between;
            margin-bottom: 50px;
          }
          .header-left {
            width: 40%;
            max-width: 400px;
            font-size: 23px;
            line-height: 33px;
            color: #FFFFFF;
            margin-top: 20%;
            margin-bottom: 100px;
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

          //---------------------------------
          .bg-mobile-web {
            background: url("../61769.webp");
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 15px;
            max-width: 1260px;
            margin: auto;
            margin-bottom: 90px;

          }
          .mobile-web {
            flex-direction: column;
          }
          .mobile-web-header {
            width: 90%;
            margin: auto;
            padding-top: 60px;
            margin-bottom: 40px;
            font-size: 32px;
            font-weight: 600;
            color: #1365B1;
          }
          .mobile-web-content {
            margin-left: 5%;
            width: 40%;
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 100px;
          }

          //Reason------------------------
          .bg-reason {
            background-image: url("../bg_reason.webp");
            background-size: cover;
            background-repeat: no-repeat;
            background-position-x: center;
            position: relative;
          }
          .img-reason {
            display: block;
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
          }
          .img-reason>img {
            width: 100%;
          }
          .reason {
            display:flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            padding: 0 30px;
            position: relative;
            z-index: 2;
            margin: auto;
            background: linear-gradient(180deg, rgba(72, 71, 71, 0.05) 60%, #1466B1 91%);
          }
          .reason-header {
            font-size: 36px;
            max-width: 1260px;
            margin: auto;
            color: #E2ECF5;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
            margin-top: 300px;
            margin-bottom: 100px;
          }
          .reason-content {
            display: flex;
            gap: 1%;
            max-width: 1260px;
            margin: auto;
            margin-bottom: 50px;
            flex-wrap: wrap;
          }
          .one-reason {
            diplay: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            width: 24%;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          .img-one-reason {
            margin: auto;
            margin-top: 58px;
            margin-bottom: 35px;
            width: 35%;
            height: auto;
            aspect-ratio: 1;
    	      object-fit: cover;
          }
          .img-one-reason>img {
            width: 100%;
            height: 100%;
          }
          .one-reason>p {
            padding: 0 20px;
            margin: auto;
            font-size: 17px;
            line-height: 21px;
            padding-bottom: 50px;
          }

          //Expert-------------------------
          .expert {
            display: flex;
            justify-content: space-between;
            max-width: 1260px;
            margin: auto;
            margin-top: 100px;
            margin-bottom: 100px;
          }
          .expert-left {
            width: 50%;
            margin-left: 25px;
          }
          .expert-header {
            width: 30%;
            font-weight: 500;
            font-size: 42px;
            line-height: 57px;
            letter-spacing: 0.08em;
          }
          .bar {
            width: 15px;
            height: 80px;
            margin-bottom: 15px;
          }
          .blue {
            background: #1466B1;
          }
          .white {
            background: #FFFFFF;
          }
          .expert-content {
            width: 75%;
            font-weight: 300;
            font-size: 18px;
            line-height: 23px;
            letter-spacing: 0.03em;
            color: #525252;
          }
          .expert-right {
            width: 48%;
            height: auto;
            aspect-ratio: 0.9;
          }
          .expert-right>img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          //Feedback---------------------
          .bg-feedback {
            height: auto;
            background: #FFFFFF;
            padding-bottom: 450px;
          }
          .bg-feedback2 {
            background: #1466B1;
            height: 650px;
            padding: 0 30px;
          }
          .feedback {
            max-width: 1260px;
            margin: auto;
            color: #FFFFFF;
          }
          .feedback-header {
            padding-top: 60px;
            max-width: 1260px;
            display: flex;
            justify-content: space-between;
          }
          .feedback-header>div {
            width: 42%;
            font-weight: 600;
            font-size: 42px;
            line-height: 51px;
          }
          .feedback-header>p {
            width: 47%;
            margin-top: 8px;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.04em;
          }
          .what-say {
            font-weight: 600;
            font-size: 42px;
            line-height: 51px;
            margin-bottom: 30px;
            color: #E2ECF5;
            text-shadow: 1px 4px 4px rgba(26, 75, 120, 0.62);
          }
          .feedback-content,.feedback-content-mobile {
            display: flex;
            gap: 15px;
            max-width: 1260px;
            height: auto;
            margin: auto;
          }
          .feedback-content-mobile {
            display: none;
          }
          .one-feedback {
            width: 33%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #F8F8F8;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
          }
          .img-feedback {
            border-radius: 50%;
            margin-top: 40px;
            margin-bottom: 32px;
          }
          .client-name {
            font-size: 20px;
            line-height: 22px;
            font-weight: 500;
          }
          .evaluate {
            width: 68%;
            margin: auto;
            margin-top: 0;
            margin-bottom: 35px;
            color: #424040;
            font-size: 16px;
            line-height: 22px;
            font-style: italic;
          }
          .company-name {
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            color: #1466B1;
            margin-bottom: 75px;
          }
          @media screen and (max-width: 1024px) {
            .about-header {
              width: 100%;
              height: auto;
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
              width: 100%;
              padding: 0;
              text-align: center;
              top: 0;
              left: 0;
            }
            .header-content {
              flex-direction: column-reverse;
              width: 100%;
            }
            .header-left {
              width: auto;
              max-width: 900px;
              padding: 0 24px;
              margin: 0;
              font-size: 18px;
              line-height: 30px;
              color: #494949;
              text-align: center;
            }
            .header-right {
              width: 60%;
              margin: auto;
              margin-top: 10%;
              margin-bottom: 10%;
            }
            .bg-mobile-web {
              width: 100%;
              margin: 0;
              background-position-x: 40%;
            }
            .mobile-web-header {
              width: auto;
              margin: 0;
              padding: 40px;
            }
            .mobile-web-content {
              width: auto;
              margin: 0;
              padding: 0 40px;
              text-align: justify;
              padding-bottom: 40px;
            }
            .bg-reason {
              background-size: contain;
            }
            .reason {
              background: linear-gradient(180deg, rgba(20, 102, 177, 0) 0%, #1466B1 69.44%);
            }
            .reason-header {
              font-size: 28px;
              margin-top : 250px;
              margin-bottom: 80px;
            }
            .reason-content {
              gap: 2%;
              margin-bottom: 30px;
            }
            .one-reason {
              width: 49%;
              margin-bottom: 15px;
            }
            .img-one-reason {
              margin-top: 25px;
              margin-bottom: 15px;
            }
            .expert {
              flex-direction: column;
            }
            .expert-left {
              width: auto;
              margin: 0;
              margin-bottom: 20px;
            }
            .expert-header,.expert-content,.expert-right {
              width: auto;
              margin: 0;
            }
            .expert-right {
              display: flex;
              justify-content: center;
            }
            //----------------------------
            .bg-feedback {
              background: #1667B2;
              padding-bottom: 50px;
            }
            .bg-feedback2 {
              height: auto;
            }
            .feedback-header {
              flex-direction: column;
            }
            .feedback-header>div {
              width: auto;
              font-size: 40px;

            }
            .feedback-header>p {
              width: auto;
              margin-bottom: 20px;
            }
            .bar {
              width: 10px;
              height: 60px;
            }
            .what-say {
              width: auto;
              margin-bottom: 30px;
            }
            .feedback-content {
              display: none;
              flex-direction: column;
            }
            .feedback-content-mobile {
              display: block;
              background-color: #1466b1;
            }
            .one-feedback {
              width: auto;
              margin-bottom: 16px;
              padding: 24px 0;
              flex-direction: row;
              justify-content: center;
              gap: 3%;
            }
            .feedback-left {
              width: 40%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .img-feedback {
              margin: 0;
              margin-bottom: 20px;
            }
            .evaluate {
              width: 53%;
              margin: 0;
            }
            .company-name {
              margin: 0;
            }
          }
          @media screen and (max-width: 768px) {
            .reason {
              padding: 0 12px;
            }
            .bg-feedback2 {
              padding: 0 20px;
            }
            .one-reason>p {
              font-size: 15px;
              padding-bottom: 40px;
            }
            .img-header {
              width: 200%;
              height: auto;
              aspect-ratio: 2.1;
              object-fit: cover;
            }
            .header-left {
              font-size: 16px;
              line-height: 25px;
            }
            .header-right {
              width: 75%;
            }
          }
          @media screen and (max-width: 480px) {
            .session {
              padding: 0 12px;
            }
            .header-title {
              font-size: 30px;
            }
            .header-left {
              font-size: 14px;
              text-align: left;
              padding: 0 12px;
            }
            .mobile-web-header {
              font-size: 18px;
              padding: 0 12px;
              padding-bottom: 20px;
              padding-top: 40px;
            }
            .mobile-web-content {
              font-size: 14px;
              padding: 0 12px;
              padding-bottom: 40px;
            }
            .reason {
              padding: 0 12px;
            }
            .one-reason {
              margin-bottom: 10px;
            }
            .reason-header {
              font-size: 15px;
              margin-top : 130px;
              margin-bottom: 30px;
            }
            .two-reason {
              margin-bottom: 12px;
            }
            .one-reason>p {
              font-size: 13px;
              line-height: 16px;
              padding: 0 10px;
              padding-bottom: 25px;
            }
            //------------------------
            .expert {
              margin-top: 30px;
            }
            .expert-header {
              font-size: 20px;
              line-height: 24px;
              color: #1365B1;
              font-weight: 600;
              letter-spacing: normal;
            }
            .bar {
              width: 3px;
              height: 35px;
              margin-bottom: 10px;
            }
            .expert {
              margin-bottom: 40px;
            }
            .expert-content {
              font-size: 14px;
              color: #383838;
              letter-spacing: 0;
              font-weight: 500;
            }
            //-----------------------
            .bg-feedback2 {
              padding: 0 12px;
            }
            .feedback-header {
              padding-top: 35px;
            }
            .feedback-header>div {
              font-size: 19px;
            }
            .feedback-header>p {
              font-size: 14px;
              margin: 0;
              letter-spacing: 0;
              line-height: 23px;
            }
            .what-say {
              font-size: 18px;
              margin-bottom: 10px;
            }
            .client-name {
              font-size: 15px;
            }
            .evaluate,.company-name {
              font-size: 12px;
              line-height: 20px;
              margin-right: 10px;
            }
          }
        `}
        </style>
      </div>
    </>
  )
}

export default Client
