import React from 'react';
import Head from 'next/head';

import { HOME_URL } from '../constants';

const Service = () => {
  return (
    <>
      <Head>
        <title>Axalize Incorporated Expertise | Providing innovative and effective IT solutions to meet the needs of modern businesses.</title>
        <meta data-n-head="ssr" data-hid="title" name="title"
          content="Axalize Incorporated Expertise | Providing innovative and effective IT solutions to meet the needs of modern businesses." />
        <meta data-n-head="ssr" data-hid="og:title" name="og:title"
          content="Axalize Incorporated Expertise | Providing innovative and effective IT solutions to meet the needs of modern businesses." />
        <meta data-n-head="ssr" data-hid="description" name="description" content="Axalize team of experts has a wealth of experience in enterprise management systems, e-commerce & retail management systems, customer-enabling services, and new business ideas." />
        <meta data-n-head="ssr" data-hid="og:description" name="og:description" content="Axalize team of experts has a wealth of experience in enterprise management systems, e-commerce & retail management systems, customer-enabling services, and new business ideas." />
        <meta data-n-head="ssr" data-hid="og:url" name="og:url"
          content={HOME_URL + '/expertise'} />
        <meta data-n-head="ssr" name="keywords"
          content="" />
        <meta data-n-head="ssr" data-hid="og:image" property="og:image"
          content={HOME_URL + '/logo1.svg'} />
        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index,follow" />
        <meta data-n-head="ssr" data-hid="googlebot" name="googlebot" content="index,follow" />
        <link data-n-head="ssr" data-hid="i18n-can" rel="canonical" href={HOME_URL + 'expertise'} ></link>
      </Head>
      <div className="service">
        <h1 className="h1"> Providing innovative and effective IT solutions to meet the needs of modern businesses.
        </h1>
        { /* Header */}
        <div className="bg-header session">
          <div className="img-header-pc">
            <img src="/img_header.svg" alt="bg-header" title="bg-header" width="1001" height="557" />
          </div>
          <div className="img-header-mobile">
            <img src="/bg_about.webp" alt="bg-header" title="bg-header" width="1001" height="557" />
          </div>
          <div className="service-header">
            <div className="header-title">Our expertise</div>
            <div className="header-content">
              <p className="header-left">Axalize Incorporated is a leader in providing innovative and effective IT solutions to meet the needs of modern businesses. Our team of experts has a wealth of experience in enterprise management systems, e-commerce & retail management systems, customer-enabling services, and new business ideas.</p>
              <div className="header-right">
                <img src="/Group22.webp" alt="img-header" title="img-header" width="737" height="317" />
              </div>
            </div>
          </div>
        </div>
        <div className="our-services session">
          <div className="services-container container">
            <div className="services-row-1">
              <div className="service-img">
                <img src="images/expertise_2.webp" alt="web" title="web" width="419" height="419" />
              </div>
              <div className="content-right">
                <div className="services-title">1. Enterprise Management Systems</div>
                <div className="services-content">
                  <p>
                    Our expertise in enterprise management systems allows us to help organizations to optimize their operations and improve their overall efficiency. Our team can provide the solutions and support you need to streamline your processes, automate tasks, and make better use of your data.
                  </p>
                  <p>
                    - Robust security and data privacy features to protect sensitive information
                  </p>
                  <p>
                    - User-friendly interface and easy navigation
                  </p>
                  <p>
                    - Customizable dashboards and reports to meet specific needs
                  </p>
                  <p>
                    - Integration with other enterprise systems for seamless operation
                  </p>
                  <p>
                    - Automated workflows and task management to improve efficiency
                  </p>
                </div>
              </div>
            </div>
            <div className="services-row-2">
              <div className="content-left">
                <div className="services-title">2. E-commerce & Retail Management Systems</div>
                <div className="services-content">
                  <p>
                    Our expertise in e-commerce and retail management systems helps organizations to grow their online businesses and improve the customer experience. Our team can provide the solutions and support you need to manage your inventory, process orders, and handle customer data securely.
                  </p>
                  <p>
                    - Secure payment gateway integration
                  </p>
                  <p>
                    - Mobile-responsive design for optimal customer experience
                  </p>
                  <p>
                    - Customizable product catalog and order management
                  </p>
                  <p>
                    - Advanced analytics and reporting to track business performance
                  </p>
                  <p>
                    - Integrations with third-party shipping, tax, and inventory management systems
                  </p>
                </div>
              </div>
              <div className="service-img">
                <img src="images/expertise_3.webp" alt="mobile-app" title="mobile-app" width="419" height="419" />
              </div>
            </div>
            <div className="services-row-1">
              <div className="service-img">
                <img src="images/expertise_4.webp" alt="web" title="web" width="419" height="419" />
              </div>
              <div className="content-right">
                <div className="services-title">3. Customer-Enabling Services</div>
                <div className="services-content">
                  <p>
                    Our customer-enabling services are designed to help organizations to improve the way they interact with their customers. Our team can provide the solutions and support you need to handle customer inquiries, manage customer data, and deliver the best possible customer experience.
                  </p>
                  <p>
                    - Multichannel support for customer inquiries (e.g. phone, email, live chat)
                  </p>
                  <p>
                    - Integration with CRM for comprehensive customer data management
                  </p>
                  <p>
                    - Automated customer support and ticket management
                  </p>
                  <p>
                    - Customer feedback and satisfaction surveys to measure performance
                  </p>
                  <p>
                    - Reporting and analytics to track customer interactions and sentiment
                  </p>
                </div>
              </div>
            </div>
            <div className="services-row-2">
              <div className="content-left">
                <div className="services-title">4. New Business Idea</div>
                <div className="services-content">
                  <p>
                    Our expertise in new business ideas allows us to help organizations to create and implement innovative solutions that drive business growth. Our team of experts can work with you to identify new opportunities, develop new products and services, and bring new ideas to market.
                  </p>
                  <p>
                    - Ideation and brainstorming tools to facilitate the creative process
                  </p>
                  <p>
                    - Business model canvas and value proposition design templates
                  </p>
                  <p>
                    - Market research and competitive analysis to validate ideas
                  </p>
                  <p>
                    - Prototype development and testing tools
                  </p>
                  <p>
                    - Business plan development and presentation tools
                  </p>
                </div>
              </div>
              <div className="service-img">
                <img src="images/expertise_1.webp" alt="mobile-app" title="mobile-app" width="419" height="419" />
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
          .service {
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }
          .h1 {
            display: none;
          }
          .session {
            padding: 0 30px;
            box-sizing: border-box;
          }
          .container {
            max-width: 1260px;
            margin: auto;
          }
          .bg-header {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          .img-header-pc,.img-header-mobile {
            position: absolute;
            right: 0;
            top: 78px;
            z-index: 1;
          }
          .img-header-mobile {
            display: none;
          }
          .service-header {
            position: relative;
            height: calc(100vh - 118px);
            max-width: 1260px;
            margin: auto;
            margin-top: 78px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            z-index: 2;
          }
          .header-title {
            background-image: url("../ellipse.svg");
            width: 350px;
            height: 103px;
            font-size: 43px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Lexend', sans-serif;
            color: #DEDEDE;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
          }
          .header-content {
            display: flex;
            justify-content: space-between;
            margin-top: 35px;
            max-width: 1260px;
          }
          .header-left {
            width: 34%;
            margin-top: 10px;
            margin-bottom: 60px;
            font-size: 18px;
            text-align: justify;
            line-height: 26px;
            color: #494949;
          }
          .header-right {
            width: 58%;
            height: auto;
          }
          .header-right>img {
            aspect-ratio: 2.4;
            object-fit: contain;
            width: 100%;
            height: auto;
            vertical-align: top;
          }

          //Mobile-web----------------------------
          .bg-mobile-web {
            background: url("../bg_mobile_web.webp");
            background-size: cover;
            max-width: 1260px;
            margin: auto;
            border-radius: 15px;
          }
          .mobile-web {
            height: auto;
          }
          .mobile-web-header {
            width: 77%;
            margin: auto;
            padding-top: 90px;
            margin-bottom: 45px;
            font-size: 32px;
            font-weight: 600;
            color: #1365B1;
          }
          .mobile-web-content {
            width: 77%;
            margin: auto;
            font-size: 16px;
            line-height: 23px;
            padding-bottom: 80px;
          }
          p {
            margin-bottom: 10px;
          }

          //our-services----------------------------

          .our-services {
            padding-bottom: 250px;
            background: #FFFFFF;
          }
          .services-container {
            gap: 30px;
          }
          .services-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            margin-top: 72px;
            margin-bottom: 10px;
          }
          .item {
            color: #1E1E1E;
            font-size: 32px;
            font-weight: 600;
          }
          .crossbar1 {
            width: 90px;
            height: 4px;
            background: #FC721E;
            margin: auto;
            margin-bottom: 3px;
            margin-top: 10px;
          }
          .crossbar2 {
            width: 90px;
            height: 2px;
            background: #FC721E;
            margin: auto;
            margin-bottom: 55px;
          }
          .services-row-1, .services-row-2 {
            display: flex;
            justify-content: center;
            margin-bottom: 30px
          }
          .services-title {
            font-weight: 600;
            font-size: 30px;
            margin: 0 0 30px 0;
            color: #236B99;
          }
          .services-content {
            max-width: 570px;
            font-size: 17px;
            line-height: 26px;
            text-align: justify;
          }
          .service-img {
            width: 35%;
            height: auto;
            aspect-ratio: 1;
    	      object-fit: cover;
          }
          .service-img>img {
            width: 100%;
            object-fit: cover;
          }
          .content-right {
            margin-left: 32px;
          }
          .content-left {
            margin-left: 16px;
            margin-right: 50px;
          }
          .margin-img {
            margin-top: 20px;
          }
          .offshore-center {
            margin-top: 40px;
          }
          @media screen and (max-width: 1260px) {
            .content-left {
              margin-left: 0;
            }
          }
          @media screen and (max-width: 1024px) {
            .img-header-pc {
              display: none;
            }
            .img-header-mobile {
              display: block;
            }
            .service-header {
              height: auto;
              margin-top: 50px;
              margin-bottom: 50px;
              justify-content: normal;
            }
            .img-header-mobile {
              top: 0px;
              left: -70%;
              width: 200%;
              height: auto;
              aspect-ratio: 3;
              object-fit: cover;
            }
            .img-header-mobile>img {
              width: 100%;
              height: 100%;
            }
            .header-title {
              margin-left: 0;
              margin-top: 10%;
              background: none;
              width: 100%;
              text-align: center;
            }
            .header-content {
              flex-direction: column-reverse;
              width: 100%;
              margin-top: 0;
            }
            .header-left {
              width: auto;
              padding: 0 10px;
              margin: auto;
              font-size: 18px;
              line-height: 30px;
            }
            .header-right {
              width: 86%;
              margin: auto;
              margin-top: 5%;
              margin-bottom: 10%;
            }
            .service-header {
              margin-top: 50px;
            }
            .session {
              padding: 0 20px;
            }
            .img-header-pc {
              top: 50px;
            }
            .service-img {
              width: 45%;
            }
            .services-title {
              margin:0;
              margin-bottom: 20px;
              font-size: 25px;
            }
            .services-row-1,.services-row-2 {
              justify-content: space-between;
            }

            .services-content {
              font-size: 16px;
              max-width: 900px;
            }
            .content-right,.content-left {
              width: 52%;
              margin: 0;
            }
            .mobile-web-header,.mobile-web-content {
              width: auto;
              margin: 0;
              padding: 20px 10px;
            }
            .mobile-web-header {
              padding-top: 40px;
            }
          }
          @media screen and (max-width: 768px) {
            .header-left {
              font-size: 16px;
              line-height: 25px;
            }
            .bg-mobile-web {
              width: 100%;
              background-position-x: 31%;
            }
            .mobile-web-content {
              text-align: justify;
              padding-bottom: 40px;
            }
            .our-services {
              padding-bottom: 50px;
            }
            .services-row-1 {
              flex-direction: column;
            }
            .services-row-2 {
              flex-direction: column-reverse;
            }
            .service-img {
              width: auto;
            }
            .services-title {
              font-size: 18px;
              margin: 10px 0;
            }
            .services-content {
              font-size: 14px;
              margin: 0;
            }
            .content-right,.content-left {
              margin: 0;
              width: auto;
            }
            .img-header-mobile {
              width: 200%;
              height: auto;
              aspect-ratio: 2.1;
              object-fit: cover;
            }
          }
          @media screen and (max-width: 480px) {
            .header-title {
              font-size: 30px;
            }
            .header-right {
              width: 94%;
            }
            .header-left {
              padding: 0 4px;
              font-size: 14px;
              line-height: 20px;
            }
            .mobile-web-header {
              font-size: 20px;
              padding: 0 4px;
              padding-top: 38px;
              padding-bottom: 20px;
            }
            .mobile-web-content {
              font-size: 14px;
              padding: 0 4px;
              padding-bottom: 40px;
              text-align: justify;
            }
            .item {
              font-size: 26px;
            }
            .services-header {
              margin-top: 45px;
            }
            .services-row-1 {
              flex-direction: column;
            }
            .services-row-2 {
              flex-direction: column-reverse;
            }
            .service-img {
              width: auto;
            }
            .services-title {
              font-size: 18px;
              margin: 10px 0;
            }
            .services-content {
              font-size: 14px;
              line-height: 22px;
            }
            .content-right,.content-left {
              margin: 0;
              width: auto;
            }
          }
        `}
        </style>
      </div>
    </>
  )
}

export default Service
