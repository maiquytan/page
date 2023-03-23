import { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link';

import Archivement from '../components/Archivement/Archivement';
import Techniques from '../components/Techniques/Techniques';

const Index = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title></title>
        <meta data-n-head="ssr" data-hid="title" name="title"
          content="" />
        <meta data-n-head="ssr" data-hid="og:title" name="og:title"
          content="" />
        <meta data-n-head="ssr" data-hid="description" name="description" content="" />
        <meta data-n-head="ssr" data-hid="og:description" name="og:description" content="" />
        <meta data-n-head="ssr" data-hid="og:url" name="og:url"
          content="" />
        <meta data-n-head="ssr" name="keywords"
          content="" />
        <meta data-n-head="ssr" data-hid="og:image" property="og:image"
          content="" />
        <meta data-n-head="ssr" data-hid="robots" name="robots" content="" />
        <meta data-n-head="ssr" data-hid="googlebot" name="googlebot" content="" />
        <link data-n-head="ssr" data-hid="i18n-can" rel="canonical" href="" ></link>
      </Head>
      <div>
        <div className="home">
          <h1 className="h1"> ** HomePage screen ** </h1>
          {/* Header */}
          <div className="home-header session">
            <div className="header-container container">
              <div className="title1">Feel your pleasure, find your treasure</div>
              <div className="title2">Realize system development with "value".</div>
              <div className="title3">
                We provide services that satisfy "high quality," "low cost," and "high
                speed," and realize system development that is "value" for our customers.
                Please feel free to contact us regarding requests .
              </div>
              <div className="header-btn">
                <button className="btn-contact">Contact us</button>
                <button className="btn-learn">Learn more ...</button>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="our-services session">
            <div className="services-header">
              <label className="item-first">Our services</label>
              <div className="crossbar1"></div>
              <div className="crossbar2"></div>
            </div>
            <div className="services-main container">
              <div className="services-column">
                <div className="services-two">
                  <div className="services-one">
                    <img src="/services1.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Web application development</div>
                  </div>
                  <div className="services-one">
                    <img src="/services2.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Mobile app development</div>
                  </div>
                </div>
                <div className="services-two">
                  <div className="services-one">
                    <img src="/services3.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">RPA development</div>
                  </div>
                  <div className="services-one">
                    <img src="/services4.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Dedicated development teams</div>
                  </div>
                </div>
              </div>
              <div className="services-column">
                <div className="services-two">
                  <div className="services-one">
                    <img src="/services5.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Offshore development center</div>
                  </div>
                  <div className="services-one">
                    <img src="/services6.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Lifecycle maintenance</div>
                  </div>
                </div>
                <div className="services-two">
                  <div className="services-one">
                    <img src="/services7.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">DevOps development and operations</div>
                  </div>
                  <div className="services-one">
                    <img src="/services8.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">UI/UX Design</div>
                  </div>
                </div>
              </div>

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
                <img src="/icons8.svg" alt="mission" title="mission" width="61" height="61" />
                <div className="mission">
                  <div className="mission-header">Mission</div>
                  <label className="mission-content">To provide world-class IT outsourcing and offshore services that deliver measurable business value to our clients.</label>
                </div>
              </div>
              <div className="target-row">
                <img src="/icons8-financial.svg" alt="vision" title="vision" width="61" height="61" />
                <div className="mission">
                  <div className="mission-header">Vision</div>
                  <label className="mission-content">Elevating the recognition of Vietnamese tech capabilities and delivering impactful IT solutions for a better future.</label>
                </div>
              </div>
              <div className="target-row">
                <img src="/icons8-tree.svg" alt="core-value" title="core-value" width="61" height="61" />
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
                  <img src="/icons8.svg" alt="mission" title="mission" width="61" height="61" />
                  <div className="mission-header">Mission</div>
                </div>
                <label className="mission-content">To provide world-class IT outsourcing and offshore services that deliver measurable business value to our clients.</label>
              </div>
              <div className="target-row">
                <div className="mission-mobile">
                  <img src="/icons8-financial.svg" alt="vision" title="vision" width="61" height="61" />
                  <div className="mission-header">Vision</div>
                </div>
                <label className="mission-content">Elevating the recognition of Vietnamese tech capabilities and delivering impactful IT solutions for a better future.</label>
              </div>
              <div className="target-row">
                <div className="mission-mobile">
                  <img src="/icons8-tree.svg" alt="core-value" title="core-value" width="61" height="61" />

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
              <div className="one-expertise">
                <div className="img-expertise">
                  <img src="/Expertise1.svg" alt="expertise" title="expertise" width="100" height="100" />
                </div>
                <div className="one-expertise-content">
                  <label className="system-header">Enterprise Management Systems</label>
                  <label className="system-content">Our expertise in enterprise management systems allows us to help organizations to optimize their operations and improve their overall efficiency. Our team can provide the solutions and support you need to streamline your processes, automate tasks, and make better use of your data.</label>
                </div>
              </div>
              <div className="one-expertise">
                <div className="img-expertise">
                  <img src="/Expertise2.svg" alt="expertise" title="expertise" width="100" height="100" />
                </div>
                <div className="one-expertise-content">
                  <label className="system-header">Ecommerce & Retail Management Systems</label>
                  <label className="system-content">Our expertise in e-commerce and retail management systems helps organizations to grow their online businesses and improve the customer experience. Our team can provide the solutions and support you need to manage your inventory, process orders, and handle customer data securely.</label>
                </div>
              </div>
              <div className="one-expertise">
                <div className="img-expertise">
                  <img src="/Expertise3.svg" alt="expertise" title="expertise" width="100" height="100" />
                </div>
                <div className="one-expertise-content">
                  <label className="system-header">Customer-enabling services</label>
                  <label className="system-content">Our customer-enabling services are designed to help organizations to improve the way they interact with their customers. Our team can provide the solutions and support you need to handle customer inquiries, manage customer data, and deliver the best possible customer experience.</label>
                </div>
              </div>
              <div className="one-expertise">
                <div className="img-expertise">
                  <img src="/Expertise4.svg" alt="expertise" title="expertise" width="100" height="100" />
                </div>
                <div className="one-expertise-content">
                  <label className="system-header one">New business ideas</label>
                  <label className="system-content">Our expertise in new business ideas allows us to help organizations to create and implement innovative solutions that drive business growth. Our team of experts can work with you to identify new opportunities, develop new products and services, and bring new ideas to market.</label>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
          {/* Techniques */}
          <Techniques />
        </div>

        {/* CSS */}
        <style jsx>
          {`
            .home {
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
            .item,.item-first {
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
              margin: auto;
              flex-direction: column;
            }
            .services-column {
              display: flex;
              margin-bottom: 65px;
              width: 100%;
            }
            .services-two {
              width: 50%;
              display: flex;
              font-size: 1.125rem;
            }
            .services-one {
              width: 50%;
            }
            .img-services {
              display: flex;
              flex-direction: column;
              margin: auto
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
              margin-top: 70px;
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
              margin-top: 100px;
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
              font-weight: 500;
              color: #454545;
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
              display: flex;
              justify-content: center;
              width: 100%;
              z-index: 2;
              top: -50px;
              position: absolute;
            }
            .system-header {
              padding-top: 100px;
              font-size: 1.125rem;
              font-weight: 500;
              text-align: center;
              margin-bottom: 33px;
              max-width: 220px;
            }
            .one {
              margin-bottom: 54px;
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
              .expertise-main {
                gap: 20px;
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
                background-size: contain;
                background-position: center;
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
                padding: 0 12px;
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
                margin-bottom: 15px;
                margin-top: 28px;
              }
              .mission-header {
                margin-bottom: 0;
              }
              .mission-vision {
                display: none;
              }
              .mission-content {
                font-size: 15px;
              }
              .one-core {
                font-size: 15px;
                margin-right: 30px;
                margin-left: 8px;
              }
              .one-core>img {
                margin-right: 18px;
              }
              .expertise {
                height: auto;
                padding-bottom: 50px;
              }
              .expertise-header {
                padding-top: 60px;
              }
              .expertise-main {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 40px;
              }
              .one-expertise-content {
                max-width: 900px;
                margin: auto;
                height: 100%;
                padding: 0 26px;
                box-sizing: border-box;
              }
              .img-expertise {
                width: 54px;
                height: 54px;
                top: 15px;
                left: 30px;
              }
              .img-expertise>img {
                width: 100%;
                height: 100%;
              }
              .system-header {
                padding-top: 30px;
                width: 70%;
                font-size: 20px;
                text-align: left;
                margin-left: 75px;
                max-width: 1024px;
              }
              .one {
                margin-bottom: 33px;
              }
              .system-content {
                padding-bottom: 20px;
              }
            }
            @media screen and (max-width: 768px) {
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
              .about-us-bg {
                background: linear-gradient(180deg,rgba(43,42,42,0)45%,#236b99 77%);
                max-width: 900px;
                width: auto;
                height: auto;
                object-fit: cover;
              }
              .about-us {
                border-radius: 0px;
                background: linear-gradient(180deg, rgba(5, 63, 117, 0.65) 0%, rgba(47, 47, 47, 0.5005) 50%), url("../IMG_0799.webp");
                background-size: contain;
                background-repeat: no-repeat;
                max-width: 900px;
                min-width: 0;
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
                padding: 0 12px;
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
                margin-bottom: 15px;
                margin-top: 28px;
              }
              .mission-header {
                margin-bottom: 0;
              }
              .mission-vision {
                display: none;
              }
              .mission-content {
                font-size: 15px;
              }
              .one-core {
                font-size: 15px;
                margin-right: 30px;
                margin-left: 8px;
              }
              .one-core>img {
                margin-right: 18px;
              }

              //----------------------------------
              .expertise {
                height: auto;
                padding-bottom: 50px;
              }
              .expertise-header {
                padding-top: 60px;
              }
              .expertise-main {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 40px;
              }
              .one-expertise-content {
                max-width: 900px;
                margin: auto;
                height: 100%;
                box-sizing: border-box;
              }
              .img-expertise {
                width: 54px;
                height: 54px;
                top: 15px;
                left: 26px;
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
                width: 80%;
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
              .services-text {
                max-width: 155px;
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
              .services-column {
                flex-direction: column;
                margin-bottom: 0;
              }
              .services-two {
                width: 100%;
                font-size: 0.938rem;
                margin-bottom: 20px;
              }

             //-----------------------------------------
             .target {
              padding: 0;
             }
             .target-container {
              padding: 0;
              }
              .about-us-bg {
                max-width: 600px;
                width: 100%;
                height: 810px;
              }
              .about-us {
                max-width: 600px;
                min-width: 0;
                margin-top: 0;
                height: 810px;
              }

              .introduce-header {
                font-size: 1rem;
                padding: 0 40px;
              }
              .introduce-content {
                padding: 0 24px;
                font-size: 14px;
              }
              .system-header {
                padding-top: 20px;
                width: 70%;
                font-size: 20px;
                text-align: left;
                margin-left: 75px;
                margin-bottom: 15px;
                max-width: 230px;
              }
              .one {
                padding-top: 30px;
                margin-bottom: 25px;
              }
              .expertise {
                margin-top: 80px;
              }
            }
          `}
        </style>
      </div>
    </>
  )
}

export default Index
