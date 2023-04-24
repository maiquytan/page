import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useRef } from 'react';

import Archivement from '../components/Archivement/Archivement';
import Techniques from '../components/Techniques/Techniques';
import { HOME_URL, listExpertise, listServices } from '../constants';

const Index = () => {
  const router = useRouter();
  const myRef = useRef(null)

  const handleClickContactBtn = () => {
    myRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Axalize Incorporated - a leading IT outsourcing software development business </title>
        <meta data-n-head="ssr" data-hid="title" name="title"
          content="Axalize Incorporated - a leading IT outsourcing software development business" />
        <meta data-n-head="ssr" data-hid="og:title" name="og:title"
          content="Axalize Incorporated - a leading IT outsourcing software development business" />
        <meta data-n-head="ssr" data-hid="description" name="description" content="Committed to providing our clients with superior solutions and services. We believe in collaborating closely with our clients to identify their specific needs and then developing solutions to satisfy those objectives. With an emphasis on quality, we seek to exceed client expectations and establish long-lasting connections. Let us aid you in achieving your IT objectives!" />
        <meta data-n-head="ssr" data-hid="og:description" name="og:description" content="Committed to providing our clients with superior solutions and services. We believe in collaborating closely with our clients to identify their specific needs and then developing solutions to satisfy those objectives. With an emphasis on quality, we seek to exceed client expectations and establish long-lasting connections. Let us aid you in achieving your IT objectives!" />
        <meta data-n-head="ssr" data-hid="og:url" name="og:url"
          content={HOME_URL} />
        <meta data-n-head="ssr" name="keywords"
          content="" />
        <meta data-n-head="ssr" data-hid="og:image" property="og:image"
          content={HOME_URL + '/logo1.svg'} />
        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index,follow" />
        <meta data-n-head="ssr" data-hid="googlebot" name="googlebot" content="index,follow" />
        <link data-n-head="ssr" data-hid="i18n-can" rel="canonical" href={HOME_URL + '/'} ></link>
      </Head>
      <div>
        <div className="home">
          <h1 className="h1">Axalize Incorporated - a leading IT outsourcing business</h1>
          {/* Header */}
          <div className="home-header session">
            <div className="header-container container">
              <div className="title1">Axalize Incorporated - a leading IT outsourcing business</div>
              <div className="title2">Committed to providing our clients with superior solutions and services. </div>
              <div className="title3">
                We believe in collaborating closely with our clients to identify their specific needs and then developing solutions to satisfy those objectives. With an emphasis on quality, we seek to exceed client expectations and establish long-lasting connections.
                Let us aid you in achieving your IT objectives!
              </div>
              <div className="header-btn">
                <button onClick={handleClickContactBtn} className="btn-contact">Contact us</button>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="our-services session">
            <div className="services-header">
              <label className="item">Our services</label>
              <div className="crossbar1"></div>
              <div className="crossbar2"></div>
            </div>
            <div className="services-main container">
              {listServices.map((ser, index) => (
                <div className="services-one" key={index}>
                  <div className="img-services">
                    <img src={ser.img} alt="logo" title="logo" width="116" height="113" />
                  </div>
                  <div className="services-text">{ser.title}</div>
                  <p>
                    {ser.des}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Archivement*/}
          <Archivement />

          {/* Target */}
          <div className="target session">
            <div className="container target-container">
              <div className="about-us">
                <div className="about-us-bg">
                  <div className="about-us-header">About us</div>
                  <div className="crossbar1"></div>
                  <div className="crossbar2"></div>
                  <div className="about-content">
                    <div className="introduce-header">Origin of <label className="text-color">Axalize</label>: A coined word combining <label className="text-color">Axia</label> (value) + <label className="text-color">Actualize</label> (realize)</div>
                    <div className="introduce-content">Welcome to Axalize Incorporated, a provider of top-notch IT outsourcing and offshore services. Our team of experts is dedicated to delivering high-quality solutions through collaboration and close partnerships with our clients.</div>
                    <div className="introduce-content">We understand that outsourcing IT requires a tailored approach. That's why we listen to your needs and goals, and work with you every step of the way to ensure success. From software development to digital transformation, trust us to support your business.
                    </div>
                    <div className="introduce-content">Our goal is to deliver exceptional value and outstanding services. Let us show you how collaboration and quality can make a difference for your business.
                    </div>
                    <div className="introduce-content">
                      <Link href="/about"><a className="contact">Contact us </a></Link>
                      <label>today to learn more!</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mission-vision">
                <div className="target-row">
                  <img src="/icons/about_icon_2.png" alt="mission" title="mission" width="61" height="61" />
                  <div className="mission">
                    <div className="mission-header">Mission</div>
                    <label className="mission-content">To provide world-class IT outsourcing and offshore services that deliver measurable business value to our clients.</label>
                  </div>
                </div>
                <div className="target-row">
                  <img src="/icons/about_icon_1.png" alt="vision" title="vision" width="61" height="61" />
                  <div className="mission">
                    <div className="mission-header">Vision</div>
                    <label className="mission-content">Elevating the recognition of Vietnamese tech capabilities and delivering impactful IT solutions for a better future.</label>
                  </div>
                </div>
                <div className="target-row">
                  <img src="/icons/about_icon_3.png" alt="core-value" title="core-value" width="61" height="61" />
                  <div className="mission">
                    <div className="mission-header">Core value</div>
                    <div className="one-core">
                      <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                      <p> Quality: We are committed to delivering high-quality solutions that meet the needs of our clients.</p>
                    </div>
                    <div className="one-core">
                      <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                      <label> Collaboration: We work closely with our clients to understand their unique needs and develop solutions that meet their goals.</label>
                    </div>
                    <div className="one-core">
                      <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                      <label> Innovation: We are dedicated to staying at the forefront of technology and continuously finding new ways to deliver value to our clients.</label>
                    </div>
                    <div className="one-core">
                      <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                      <label> Integrity: We conduct all of our business with honesty and transparency, always acting in the best interest of our clients.</label>
                    </div>
                    <div className="one-core">
                      <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                      <label> Respect: We value and respect our clients, employees, and partners, and foster an inclusive and supportive workplace culture.</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mission-vision-mobile">
                <div className="target-row">
                  <div className="mission-mobile">
                    <img src="/icons/about_icon_2.png" alt="mission" title="mission" width="61" height="61" />
                    <div className="mission-header">Mission</div>
                  </div>
                  <label className="mission-content">To provide world-class IT outsourcing and offshore services that deliver measurable business value to our clients.</label>
                </div>
                <div className="target-row">
                  <div className="mission-mobile">
                    <img src="/icons/about_icon_1.png" alt="vision" title="vision" width="61" height="61" />
                    <div className="mission-header">Vision</div>
                  </div>
                  <label className="mission-content">Elevating the recognition of Vietnamese tech capabilities and delivering impactful IT solutions for a better future.</label>
                </div>
                <div className="target-row">
                  <div className="mission-mobile">
                    <img src="/icons/about_icon_3.png" alt="core-value" title="core-value" width="61" height="61" />

                    <div className="mission-header">Core value</div>
                  </div>
                  <div className="one-core">
                    <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                    <p> Quality: We are committed to delivering high-quality solutions that meet the needs of our clients.</p>
                  </div>
                  <div className="one-core">
                    <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                    <label> Collaboration: We work closely with our clients to understand their unique needs and develop solutions that meet their goals.</label>
                  </div>
                  <div className="one-core">
                    <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                    <label> Innovation: We are dedicated to staying at the forefront of technology and continuously finding new ways to deliver value to our clients.</label>
                  </div>
                  <div className="one-core">
                    <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                    <label> Integrity: We conduct all of our business with honesty and transparency, always acting in the best interest of our clients.</label>
                  </div>
                  <div className="one-core">
                    <img src="/Vector.svg" alt="check" title="check" width="16" height="12" />
                    <label> Respect: We value and respect our clients, employees, and partners, and foster an inclusive and supportive workplace culture.</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="expertise session">
            <div className="expertise-header">
              <label className="item">Expertise</label>
              <div className="crossbar1"></div>
              <div className="crossbar2"></div>
            </div>
            <div className="expertise-main container">
              {listExpertise.map((exp, index) => (
                <div className="one-expertise" key={index}>
                  <div className="img-expertise">
                    <img src={exp.img} alt="expertise" title="expertise" width="100" height="100" />
                  </div>
                  <div className="one-expertise-content">
                    <label className="system-header">{exp.title}</label>
                    <label className="system-content">{exp.content}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Techniques */}
          <Techniques />
          <div ref={myRef} />
        </div>

        {/* CSS */}
        <style jsx>
          {`
            .home {
              background: #FFFFFF;
              font-family: 'Inter', sans-serif;
              scroll-behavior: smooth;
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
              display: flex;
              box-sizing: border-box;
            }
            .home-header {
              height: calc(100vh - 78px);
              margin-top: 78px;
              display: flex;
              justify-content: center;
              color: #FFFFFF;
              background-image: url("../imgheader.webp");
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
            .title1 {
              font-size: 2.625rem;
              font-weight: 600;
              margin-bottom: 35px;
            }
            .title2 {
              font-size: 1.75rem;
              font-weight: 500;
              margin-bottom: 30px;
            }
            .title3 {
              font-size: 1.25rem;
              margin-bottom: 50px;
              max-width: 660px;
              text-align: justify;
            }
            .header-container {
              flex-direction: column;
              justify-content: center;
              width: 100%;
            }
            .header-btn {
              display: flex;
              width: 100%;
            }
            .header-btn>button {
              border-radius: 5px;
              height: 46px;
              width: 188px;
              display: flex;
              justify-content: center;
              align-items: center;
              outline: none;
              color: #FFFFFF;
              font-size: 1.25rem;
            }
            .btn-contact {
              background: #BA4F13;
              margin-right: 18px;
              border: 1px solid #BA4F13;
              cursor: pointer;
              transition: 0.3;
            }
            .btn-contact:hover {
              background: #994211;
            }
            .btn-learn {
              background: #051024;
              border: 1px solid #051024;
            }

            //our-services----------------------------

            .our-services {
              margin-bottom: 45px
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
              font-size: 2rem;
              font-weight: 600;
            }
            .crossbar1,.crossbar-left-1 {
              width: 90px;
              height: 4px;
              background: #FC721E;
              margin: auto;
              margin-bottom: 3px;
              margin-top: 10px;
            }
            .crossbar2,.crossbar-left-2 {
              width: 90px;
              height: 2px;
              background: #FC721E;
              margin: auto;
              margin-bottom: 55px;
            }
            .services-main {
              padding: 24px 0;
              margin: auto;
              flex-wrap: wrap;
              gap: 1%;
            }
            .services-one {
              width: 24%;
              margin-bottom: 40px;
              padding: 6px;
              box-sizing: border-box;
            }
            .services-one:hover {
              background: #3839b6;
              transition: 0.6s;
              box-shadow: 0px 0px 9px 2px #3839b6
            }
            .services-one:hover .services-text {
              margin-top: 6px;
              color: white;
              transition: 0.4s;
            }
            .services-one:hover .img-services img{
              height: 0;
              transition: 0.4s;
              opacity: 0;
            }
            .services-one:hover p {
              max-height: 120px;
              transition: 0.4s;
              opacity: 1;
              color: white;
            }
            .services-one p {
              margin: 6px;
              font-size: 15px;
              text-align: center;
              max-height: 0;
              overflow: hidden;
            }
            .img-services {
              display: flex;
              margin: auto;
              justify-content: center;
              margin-bottom: 13px;
            }
            .img-services img{
              width: 200px;
              height: 120px;
              max-height: 120px;
            }
            .services-text {
              max-width: 200px;
              margin: auto;
              text-align: center;
              font-weight: 600;
              color: #236B99;
            }

            //------------------------------
            .target {
              height: auto;
              background: url("../Axalize.webp");
              background-size: contain;
              background-repeat: no-repeat;
            }
            .target-container {
              width: 100%;
              margin: auto;
              justify-content: space-between;
              gap: 50px;
              padding-top: 120px;
            }
            .about-us {
              background: url("../IMG_0799.webp");
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              width: 50%;
              max-width: 521px;
              min-width: 450px;
              height: auto;
              overflow: hidden;
              border-radius: 5px;
            }
            .about-us-bg {
              background: rgba(0, 0, 0, 0.7);
              height: 100%;
              border-radius: 5px;
            }
            .about-content {
              margin-bottom: 95px;
            }
            .about-us-header {
              color: #FFFFFF;
              font-size: 2rem;
              font-weight: 600;
              text-align: center;
              padding-top: 38px;
            }
            .contact {
              color: rgba(66, 172, 232, 1);
              text-decoration: none;
              margin: 0;
            }
            .text-color {
              color: rgba(252, 114, 30, 1);
            }
            .introduce-header {
              color: #FFFFFF;
              width: auto;
              padding: 0 10px;
              margin: auto;
              margin-bottom: 50px;
              font-size: 1.375rem;
              text-align: center;
            }
            .introduce-content {
              color: #DCDCDC;
              width: auto;
              padding: 0 38px;
              margin-bottom: 18px;
              font-family: 'Lato', sans-serif;
            }
            .target-row {
              width: auto;
              display: flex;
              margin-bottom: 38px;
              align-items: flex-start;
            }
            .mission-vision {
              margin-top: 30px;
            }
            .mission {
              display: flex;
              flex-direction: column;
              margin-left: 29px;
              max-width: 566px;
              font-size: 16px;
              line-height: 19px;
            }
            .mission-header {
              font-size: 2rem;
              line-height: 36px;
              font-weight: 500;
              color: #1667B2;
              margin-bottom: 16px;
            }
            .mission>label {
              margin-bottom: 8px;
            }
            .one-core {
              display: flex;
              font-weight: 500;
              font-size: 1rem;
              line-height: 19px;
              margin-bottom: 5px;
            }
            .one-core>img {
              margin-right: 8px;
              margin-top: 4px;
            }

            //----------------------------------

            .expertise {
              background-image: url("../service_bg.svg");
              background-color: #A1ACBB;
              height: 850px;
              margin-top: 120px;
              scroll-behavior: smooth;
            }
            .expertise-header {
              text-align: center;
              padding-top: 80px;
            }

            .expertise-main {
              flex-direction: row;
              justify-content: center;
              flex-flow: inherit;
              margin: auto;
              margin-top: 100px;
              gap: 35px;
            }
            .one-expertise {
              position: relative;
            }
            .one-expertise-content {
              position: relative;
              height: 100%;
              box-sizing: border-box;
              background: #ffffff;
              box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.17);
              border-radius: 10px;
              z-index: 1;
              display: flex;
              flex-direction: column;
              padding: 0 30px;
              padding-bottom: 38px;
            }
            .img-expertise {
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: #1667B2;
              z-index: 2;
              top: -50px;
              left: 50%;
              transform: translateX(-50%);
              position: absolute;
            }
            .img-expertise img{
              width: 64%;
            }
            .system-header {
              margin-top: 95px;
              height: 77px;
              font-size: 1.125rem;
              font-weight: 500;
              text-align: center;
              max-width: 220px;
            }

            .system-content {
              margin-top: 0;
              color: #808080;
              font-weight: 400;
              font-size: 0.938rem;
              line-height: 18px;
            }
            .system-button {
              border: none;
              color: #1667B2;
              background: #FFFFFF;
              cursor: pointer;
              font-size: 1.125rem;
              outline: none;
            }
            .mission-vision-mobile {
              display: none;
            }
            @media screen and (max-width: 1024px) {
              .home-header {
                margin-top: 50px;
                height: calc(100vh - 50px);
              }
              .session {
                padding: 0 20px;
              }
              .target {
                flex-direction: column;
                height: auto;
                background: #FFFFFF;
                padding: 0;
              }
              .target-container {
                padding: 0;
                margin: 0;
                flex-direction: column;
                gap: 0;
              }
              .about-us-bg {
                background: linear-gradient(180deg,rgba(43,42,42,0)45%,#236b99 77%);
                max-width: 1024px;
                margin: auto;
                width: auto;
                height: auto;
                object-fit: cover;
              }
              .about-us {
                border-radius: 0px;
                background: linear-gradient(180deg, rgba(5, 63, 117, 0.65) 0%, rgba(47, 47, 47, 0.5005) 50%), url("../IMG_0799.webp");
                background-size: cover;
                background-repeat: no-repeat;
                max-width: 1024px;
                margin: auto;
                margin-top: 0;
                width: 100%;
                height: auto;
                object-fit: cover;
                position: relative;
              }
              .about-content {
                margin-top: 75%;
                margin-bottom: 0;
                padding-bottom: 30px;
              }
              .introduce-header {
                margin-bottom: 40px;
                width: auto;
                padding: 0 50px;
              }
              .introduce-content {
                font-size: 17px;
              }
              .contact {
                color: rgba(252, 114, 30, 1);
              }
              .mission-vision-mobile {
                display: block;
                padding: 0 20px;
              }
              .target-row {
                margin: 0;
                flex-direction: column;
              }
              .mission-mobile {
                display: flex;
                max-width: 294px;
                font-size: 15px;
                align-items: center;
                margin-bottom: 10px;
                margin-top: 28px;
              }
              .mission-header {
                margin-bottom: 0;
                font-size: 27px;
              }
              .mission-vision {
                display: none;
              }
              .mission-content {
                font-size: 15px;
                font-family: 'Lato', sans-serif;
                font-weight: 500;
                color: #515151;
              }
              .one-core {
                font-size: 15px;
                margin-right: 20px;
                margin-left: 8px;
              }
              .one-core>img {
                margin-right: 18px;
              }
              .expertise {
                height: auto;
                padding-bottom: 50px;
                margin-top: 50px;
              }
              .expertise-header {
                padding-top: 60px;
              }
              .expertise-main {
                display: flex;
                flex-wrap: wrap;
                gap: 2%;
                margin-top: 40px;
              }
              .one-expertise {
                width: 49%;
                margin-bottom: 15px;
              }
              .one-expertise-content {
                max-width: 900px;
                margin: auto;
                height: 100%;
                padding: 0 26px;
                box-sizing: border-box;
              }
              .img-expertise {
                transform: unset;
                width: 54px;
                height: 54px;
                top: 15px;
                left: 30px;
              }
              .system-header {
                margin-top: 20px;
                height: 60px;
                font-size: 20px;
                text-align: left;
                margin-left: 75px;
                max-width: 1024px;
              }
              .system-content {
                text-align: justify;
                padding-bottom: 20px;
              }
            }
            @media screen and (max-width: 768px) {
              .img-services {
                width: 50%;
              }
              .img-services>img {
                width: 100%;
              }
              .target {
                flex-direction: column;
                height: auto;
                background: #FFFFFF;
                padding: 0;
              }
              .target-container {
                padding: 0;
                flex-direction: column;
              }
              .about-us {
                background-size: contain;
              }
              .introduce-content {
                text-align: justify;
              }
              //----------------------------------
              .expertise-main {
                flex-direction: column;
              }
              .one-expertise {
                width: 100%;
              }
              .img-expertise {
                left: 26px;
              }
              .services-main {
                justify-content: center;
              }
              .services-one {
                width: 49%;
              }
            }
            @media screen and (max-width: 480px) {
              .session {
                padding: 0 12px;
              }
              .header-container {
                position: relative;
                padding: 0 10px;
              }
              .title1 {
                font-size: 2.188rem;
                margin-bottom: 35px;
              }
              .title2 {
                font-size: 1.313rem;
                margin-bottom: 25px;
                width: 84%;
                line-height: 25px;
              }
              .title3 {
                width: 95%;
                font-size: 1.053rem;
                line-height: 21px;
              }
              .crossbar2 {
                margin-bottom: 8px;
              }
              .our-services {
                margin-bottom: 0;
              }
              .services-one {
                width: 49%;
                padding: 10px 5px;
                margin: 0;
              }
              .services-text {
                max-width: 155px;
                font-size: 15px;
              }
              .header-btn {
                flex-direction: column;
                align-items: center;
                position: absolute;
                bottom: 20px;
                width: 93%;
              }
              .header-btn>button {
                width: 100%;
                height: 38px;
              }
              .btn-contact {
                margin-right: 0;
                margin-bottom: 10px;
              }
              .container {
                padding-bottom: 20px;
              }
              //our-services----------------------------
              .services-header {
                margin-top: 32px;
                margin-bottom: 40px;
              }
              .item {
                font-size: 26px;
              }

             //-----------------------------------------
              .target {
                padding: 0;
              }
              .target-container {
                padding: 0;
              }
              .about-us {
                min-width: 0;
              }
              .about-us-bg {
                width: 100%;
              }
              .introduce-header {
                font-size: 1rem;
                padding: 0 30px;
              }
              .introduce-content {
                padding: 0 24px;
                font-size: 13px;
              }
              .mission-vision-mobile {
                padding: 0 12px;
              }
              .expertise {
                margin-top: 60px;
              }
            }
          `}
        </style>
      </div>
    </>
  )
}

export default Index
