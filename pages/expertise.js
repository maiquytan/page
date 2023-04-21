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
              <p className="header-left">At Axalize Incorporated, we are dedicated to providing top-notch IT outsourcing and offshore services that meet the unique needs of our clients. Our services are designed to support businesses in a wide range of industries, and we work closely with each of our clients to ensure that their IT needs are met.</p>
              <div className="header-right">
                <img src="/Group22.webp" alt="img-header" title="img-header" width="737" height="317" />
              </div>
            </div>
          </div>
        </div>

        { /* Mobile, Web */}
        <div className="bg-mobile-web session">
          <div className="mobile-web container">
            <p className="mobile-web-header">Transform your business with Axalize incorporated's tailored IT outsourcing services</p>
            <div className="mobile-web-content">
              <p>Whether you are looking to outsource IT for the first time or you are an established business seeking to improve your existing services, our team of experts is here to help. We are committed to delivering high-quality solutions through collaboration and close partnerships, and we are dedicated to helping our clients achieve their goals.</p>
              <p>We understand that outsourcing IT can be a complex and sensitive process, which is why we take great care to listen to the needs and goals of each of our clients. Our team of experts has extensive experience and technical skills, allowing us to offer a comprehensive range of services that meet the specific needs of your business.</p>
              <p>At Axalize Incorporated, we believe in the power of collaboration and close partnership to achieve the best results. Our goal is to understand your business, your challenges, and your goals so that we can provide tailored solutions that meet your specific needs. We work closely with you throughout the project, providing regular updates and seeking your feedback to ensure that we are on the right track.</p>
              <p>If you are looking for a provider of high-quality IT outsourcing and offshore services, look no further than Axalize Incorporated. Contact us today to learn more about how we can support your business.</p>
            </div>
          </div>
        </div>

        { /* Our Services */}
        <div className="our-services session">
          <div className="services-header">
            <label className="item">Our services</label>
            <div className="crossbar1"></div>
            <div className="crossbar2"></div>
          </div>
          <div className="services-container container">
            <div className="services-row-1">
              <div className="service-img">
                <img src="/web.svg" alt="web" title="web" width="419" height="419" />
              </div>
              <div className="content-right">
                <div className="services-title">Web application development</div>
                <div className="services-content">Our web application development services are designed to meet the unique needs of your business. We focus on delivering high-quality solutions that are robust, scalable, and secure. Our team of experts has extensive experience in a wide range of technologies, allowing us to deliver customized solutions that meet your specific requirements.<br></br>
                  At Axalize Incorporated, we understand that quality and collaboration are key to success. That's why we work closely with our clients to understand their needs and goals, and we use our expertise to deliver solutions that meet their specific needs. Whether you need a simple website or a complex web application, our team is here to help.</div>
              </div>
            </div>
            <div className="services-row-2">
              <div className="content-left">
                <div className="services-title">Mobile app development</div>
                <div className="services-content">Our mobile app development services are designed to help organizations create engaging and user-friendly mobile experiences for their customers. Whether you need a native app for Android or iOS, or a cross-platform solution, our team of experts has the skills and experience to deliver the right solution for your business.<br></br>
                  Quality and collaboration are at the heart of everything we do. We work closely with our clients to understand their needs and goals, and we use our expertise to deliver solutions that meet their specific needs. Our goal is to help you create a mobile app that is not only functional but also user-friendly and engaging, driving business growth and customer satisfaction.</div>
              </div>
              <div className="service-img"  >
                <img src="/mobile_app.svg" alt="mobile-app" title="mobile-app" width="419" height="419" />
              </div>
            </div>
            <div className="services-row-1">
              <div className="service-img">
                <img className="margin-img" src="/RPA.svg" alt="RPA" title="RPA" width="419" height="301" />
              </div>
              <div className="content-right">
                <div className="services-title">RPA development</div>
                <div className="services-content">Our RPA development services help organizations automate repetitive and time-consuming tasks, increasing efficiency and freeing up resources. Whether you need to automate manual processes, streamline workflows, or improve data management, our team of experts can help.<br></br>
                  At Axalize Incorporated, we understand the importance of quality and collaboration in RPA development. That's why we work closely with our clients to understand their needs and goals, and we use our expertise to deliver tailored solutions that meet their specific needs. Our goal is to help you achieve your business objectives through efficient and effective RPA implementation.</div>
              </div>
            </div>
            <div className="services-row-2">
              <div className="content-left">
                <div className="services-title">Dedicated development teams</div>
                <div className="services-content">Our dedicated development teams offer a flexible and cost-effective solution for organizations that require a high level of technical expertise. Whether you need a team of developers to work on a specific project, or you are looking to establish a long-term partnership, our dedicated development teams can help.<br></br>
                  Quality and collaboration are at the core of our dedicated development teams. We understand the importance of building strong relationships with our clients, and we work closely with them to understand their needs and goals. Our goal is to provide a flexible and cost-effective solution that meets the specific needs of your business.</div>
              </div>
              <div className="service-img">
                <img src="/dedicated_teams.svg" className="margin-img" alt="dedicated-teams" title="dedicated-teams" width="419" height="301" />
              </div>
            </div>
            <div className="services-row-1">
              <div className="service-img">
                <img src="/Offshore_center.svg" className="offshore-center" alt="offshore-center" title="offshore-center" width="419" height="300" />
              </div>
              <div className="content-right">
                <div className="services-title">Offshore development center</div>
                <div className="services-content">Our offshore development center provides a secure and reliable outsourcing solution for businesses looking to reduce costs and improve efficiency. Whether you need software development, digital transformation, or IT support, our offshore development center can help.<br></br>
                  Quality and collaboration are key to the success of our offshore development center. We understand the importance of building strong relationships with our clients, and we work closely with them to understand their needs and goals. Our goal is to provide a secure and reliable outsourcing solution that meets the specific needs of your business.</div>
              </div>
            </div>
            <div className="services-row-2">
              <div className="content-left">
                <div className="services-title">Lifecycle maintenance</div>
                <div className="services-content">Our lifecycle maintenance services ensure that your IT systems remain secure, stable, and up-to-date over time. Whether you need ongoing support, bug fixes, or software upgrades, our team of experts can help.<br></br>
                  At Axalize Incorporated, we understand that quality and collaboration are key to effective lifecycle maintenance. That's why we work closely with our clients to understand their needs and goals, and we use our expertise to deliver solutions that meet their specific needs. Our goal is to help you keep your IT systems running smoothly, so you can focus on growing your business</div>
              </div >
              <div className="service-img">
                <img src="/Lifecycle.svg" alt="lifecycle" title="lifecycle" width="419" height="419" />
              </div>
            </div>
            <div className="services-row-1">
              <div className="service-img">
                <img src="/devops.svg" alt="devops" className="margin-img" title="devops" width="419" height="419" />
              </div>
              <div className="content-right">
                <div className="services-title">DevOps development and operations</div>
                <div className="services-content">Our DevOps services help organizations to improve the speed and reliability of their software delivery process. By combining development and operations, Axalize Incorporated can help you to automate your software delivery pipeline, increase collaboration between teams, and reduce the time it takes to get new features and fixes to your customers.<br></br>
                  Quality and collaboration are at the heart of our DevOps services at Axalize Incorporated. We understand the importance of building strong relationships with our clients, and we work closely with them to understand their needs and goals. Our goal is to help you achieve your business objectives by delivering high-quality software solutions quickly and efficiently.</div>
              </div>
            </div>
            <div className="services-row-2">
              <div className="content-left">
                <div className="services-title">UI/UX Design</div>
                <div className="services-content">Our UI/UX design services are designed to help organizations create engaging and user-friendly digital experiences for their customers. Whether you need to design a website, mobile app, or software application, our team of experts has the skills and experience to deliver the right solution for your business.<br></br>
                  Quality and collaboration are key to our UI/UX design services. We understand the importance of working closely with our clients to understand their needs and goals, and we use our expertise to deliver solutions that meet their specific needs. Our goal is to help you create a digital experience that is not only functional but also engaging, driving business growth and customer satisfaction.</div>
              </div>
              <div className="service-img">
                <img src="/UI_UX.svg" className="margin-img" alt="UI-UX" title="UI-UX" width="419" height="419" />
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
          }
          .services-title {
            font-weight: 600;
            font-size: 30px;
            margin: 60px 0 ;
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
            height: 100%;
          }
          .content-right {
            margin-left: 32px;
          }
          .content-left {
            margin-left: 80px;
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
