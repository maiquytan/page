// import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link';

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
      <div className="container">
        <div className="home">
          <h1 className="h1"> ** HomePage screen ** </h1>
          {/* Header */}
          <div className="home--header">
            <div className="header-container">
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
          <div className="our-services">
            <div className="services-header">
              <label className="item-first">Our services</label>
              <div className="crossbar1"></div>
              <div className="crossbar2"></div>
            </div>
            <div className="services-main">
              <div className="services-column">
                <div className="services-two">
                  <div className="services-one">
                    <img src="services1.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Web application development</div>
                  </div>
                  <div className="services-one">
                    <img src="services2.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Mobile app development</div>
                  </div>
                </div>
                <div className="services-two">
                  <div className="services-one">
                    <img src="services3.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">RPA development</div>
                  </div>
                  <div className="services-one">
                    <img src="services4.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Dedicated development teams</div>
                  </div>
                </div>
              </div>
              <div className="services-column">
                <div className="services-two">
                  <div className="services-one">
                    <img src="services5.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Offshore development center</div>
                  </div>
                  <div className="services-one">
                    <img src="services6.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">Lifecycle maintenance</div>
                  </div>
                </div>
                <div className="services-two">
                  <div className="services-one">
                    <img src="services7.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">DevOps development and operations</div>
                  </div>
                  <div className="services-one">
                    <img src="services8.svg" className="img-services" alt="logo" title="logo" width="116" height="113" />
                    <div className="services-text">UI/UX Design</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Archivement */}
          <div className="archivement">
            <div className="archivement-container">
              <div className="archivement-content">
                <label className="item">Archivement</label>
                <div className="crossbar-left-1"></div>
                <div className="crossbar-left-2"></div>
                <img src="medal.svg" alt="logo" title="logo" width="47px" height="47" />
              </div>
              <div className="archivement-column">
                <label className="archivement-number">50+</label>
                <label>Successful projects</label>
              </div>
              <div className="archivement-column">
                <label className="archivement-number">100+</label>
                <label>Customers around the world</label>
              </div>
              <div className="archivement-column">
                <label className="archivement-number">99%</label>
                <label>Repeat rate</label>
              </div>
            </div>
          </div>

          {/* Archivement Mobile*/}
          <div className="archivement-mobile">
            <div className="archivement-container">
              <div className="archivement-content-moblie">
                <label className="item">Archivement</label>
                <div className="crossbar1"></div>
                <div className="crossbar2"></div>
                <img src="medal.svg" alt="logo" title="logo" width="47px" height="47" />
              </div>
              <div className="archivement-row">
                <div className="archivement-column">
                  <label className="archivement-number">50+</label>
                  <label>Successful projects</label>
                </div>
                <div className="archivement-column">
                  <label className="archivement-number">100+</label>
                  <label>Customers around the world</label>
                </div>
              </div>
              <div className="archivement-column">
                <label className="archivement-number">99%</label>
                <label>Repeat rate</label>
              </div>
            </div>
          </div>

          {/* Target */}
          <div className="target">
            <div className="about-us">
              <div className="about-us-bg">
                <div className="about-us-header">About us</div>
                <div className="crossbar1"></div>
                <div className="crossbar2"></div>
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
            <div className="mission-vision">
              <div className="target-row">
                <img src="icons8.svg" alt="mission" title="mission" width="61" height="61" />
                <div className="mission">
                  <div className="mission-header">Mission</div>
                  <label className="mission-content">To provide world-class IT outsourcing and offshore services that deliver measurable business value to our clients.</label>
                </div>
              </div>
              <div className="target-row">
                <img src="icons8-financial.svg" alt="vision" title="vision" width="61" height="61" />
                <div className="mission">
                  <div className="mission-header">Vision</div>
                  <label className="mission-content">Elevating the recognition of Vietnamese tech capabilities and delivering impactful IT solutions for a better future.</label>
                </div>
              </div>
              <div className="target-row">
                <img src="icons8-tree.svg" alt="core-value" title="core-value" width="61" height="61" />
                <div className="mission">
                  <div className="mission-header">Core value</div>
                  <div className="one-core">
                    <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                    <p> Quality: We are committed to delivering high-quality solutions that meet the needs of our clients.</p>
                  </div>
                  <div className="one-core">
                    <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                    <label> Collaboration: We work closely with our clients to understand their unique needs and develop solutions that meet their goals.</label>
                  </div>
                  <div className="one-core">
                    <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                    <label> Innovation: We are dedicated to staying at the forefront of technology and continuously finding new ways to deliver value to our clients.</label>
                  </div>
                  <div className="one-core">
                    <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                    <label> Integrity: We conduct all of our business with honesty and transparency, always acting in the best interest of our clients.</label>
                  </div>
                  <div className="one-core">
                    <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                    <label> Respect: We value and respect our clients, employees, and partners, and foster an inclusive and supportive workplace culture.</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-vision-mobile">
              <div className="target-row">
                <div className="mission-mobile">
                  <img src="icons8.svg" alt="mission" title="mission" width="61" height="61" />
                  <div className="mission-header">Mission</div>
                </div>
                <label className="mission-content">To provide world-class IT outsourcing and offshore services that deliver measurable business value to our clients.</label>
              </div>
              <div className="target-row">
                <div className="mission-mobile">
                  <img src="icons8-financial.svg" alt="vision" title="vision" width="61" height="61" />
                  <div className="mission-header">Vision</div>
                </div>
                <label className="mission-content">Elevating the recognition of Vietnamese tech capabilities and delivering impactful IT solutions for a better future.</label>
              </div>
              <div className="target-row">
                <div className="mission-mobile">
                  <img src="icons8-tree.svg" alt="core-value" title="core-value" width="61" height="61" />

                  <div className="mission-header">Core value</div>
                </div>
                <div className="one-core">
                  <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                  <p> Quality: We are committed to delivering high-quality solutions that meet the needs of our clients.</p>
                </div>
                <div className="one-core">
                  <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                  <label> Collaboration: We work closely with our clients to understand their unique needs and develop solutions that meet their goals.</label>
                </div>
                <div className="one-core">
                  <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                  <label> Innovation: We are dedicated to staying at the forefront of technology and continuously finding new ways to deliver value to our clients.</label>
                </div>
                <div className="one-core">
                  <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                  <label> Integrity: We conduct all of our business with honesty and transparency, always acting in the best interest of our clients.</label>
                </div>
                <div className="one-core">
                  <img src="Vector.svg" alt="check" title="check" width="16" height="12" />
                  <label> Respect: We value and respect our clients, employees, and partners, and foster an inclusive and supportive workplace culture.</label>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="expertise">
            <div className="expertise-header">
              <label className="item">Expertise</label>
              <div className="crossbar1"></div>
              <div className="crossbar2"></div>
            </div>
            <div className="expertise-main">
              <div className="one-expertise">
                <div className="img-expertise">
                  <img src="Expertise1.svg" alt="expertise" title="expertise" width="100" height="100" />
                </div>
                <div className="one-expertise-content">
                  <label className="system-header">Enterprise management systems</label>
                  <label className="system-content">Our expertise in enterprise management systems allows us to help organizations to optimize their operations and improve their overall efficiency. Our team can provide the solutions and support you need to streamline your processes, automate tasks, and make better use of your data.</label>
                </div>
              </div>
              <div className="one-expertise">
                <div className="img-expertise">
                  <img src="Expertise2.svg" alt="expertise" title="expertise" width="100" height="100" />
                </div>
                <div className="one-expertise-content">
                  <label className="system-header">Ecommerce & Retail management systems</label>
                  <label className="system-content">Our expertise in e-commerce and retail management systems helps organizations to grow their online businesses and improve the customer experience. Our team can provide the solutions and support you need to manage your inventory, process orders, and handle customer data securely.</label>
                </div>
              </div>
              <div className="one-expertise">
                <div className="img-expertise">
                  <img src="Expertise3.svg" alt="expertise" title="expertise" width="100" height="100" />
                </div>
                <div className="one-expertise-content">
                  <label className="system-header">Customer-enabling services</label>
                  <label className="system-content">Our customer-enabling services are designed to help organizations to improve the way they interact with their customers. Our team can provide the solutions and support you need to handle customer inquiries, manage customer data, and deliver the best possible customer experience.</label>
                </div>
              </div>
              <div className="one-expertise">
                <div className="img-expertise">
                  <img src="Expertise4.svg" alt="expertise" title="expertise" width="100" height="100" />
                </div>
                <div className="one-expertise-content">
                  <label className="system-header1">New business ideas</label>
                  <label className="system-content">Our expertise in new business ideas allows us to help organizations to create and implement innovative solutions that drive business growth. Our team of experts can work with you to identify new opportunities, develop new products and services, and bring new ideas to market.</label>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>

          {/* Techniques */}
          <div className="techniques">
            <div className="techniques-header">
              <label className="item">Techniques</label>
              <div className="crossbar1"></div>
              <div className="crossbar2"></div>
            </div>
            <div className="techniques-main">
              <div className="techniques-column">
                <img src="androidStudio.svg" alt="android" title="android" width="86" height="55" />
                <img src="angular.svg" alt="angular" title="angular" width="120" height="55" />
                <img src="reactjs.svg" alt="reactjs" title="reactjs" width="124" height="50" />
                <img src="vuejs.svg" alt="vuejs" title="vuejs" width="117" height="55" />
                <img src="reactive-native.svg" alt="reactive-native" title="reactive-native" width="163" height="55" />
                <div className="html-css">
                  <img src="js.svg" alt="js" title="js" width="39" height="39" />
                  <img src="html.svg" alt="html" title="html" width="39" height="39" />
                  <img src="css.svg" alt="css" title="css" width="39" height="39" />
                </div>

                <img src="mongodb.svg" alt="mongodb" title="mongodb" width="124" height="37" />

              </div>
              <div className="techniques-column">
                <img src="php.svg" alt="php" title="php" width="89" height="44" />
                <img src="django.svg" alt="django" title="django" width="98" height="55" />
                <img src="nodejs.svg" alt="nodejs" title="nodejs" width="81" height="49" />
                <img src="mysql.svg" alt="mysql" title="mysql" width="99" height="51" />
                <img src="postgres.svg" alt="postgres" title="postgres" width="123" height="55" />
                <img src="laravel.svg" alt="laravel" title="laravel" width="147" height="54" />
                <img src="magento.svg" alt="magento" title="magento" width="122" height="44" />
              </div>
            </div>
          </div>
        </div>

        {/* CSS */}
        <style jsx>
          {`
            .container {
              width: 100%;
            }
            .home{
              background: #FFFFFF;
              font-family: 'Inter', sans-serif;
            }
            .h1{
              display:none;
            }
            .home--header{
              height: calc(100vh - 118px);
              margin-top: 118px;
              display:flex;
              justify-content: center;
              color: #FFFFFF;
              background-image: url("../imgheader.webp");
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
            .title1{
              font-size: 42px;
              font-weight: 600;
              margin-bottom: 35px; 
            }
            .title2{
              font-size: 28px;
              font-weight:500;
              margin-bottom: 30px;   
            }
            .title3{
              font-size:20px;
              margin-bottom: 50px;
              width:50%;
              text-align: justify;
            }
            .header-container{
              max-width: 1274px;
              margin-left:100px;
              margin-top:205px;
            }
            .header-btn{
              display:flex;
            }
            .header-btn>button{
              border-radius: 5px;
              height: 46px;
              width: 188px;
              display: flex;
              justify-content:center;
              align-items: center;
              outline:none;
              color: #FFFFFF;
              font-size: 1.25rem;
            }
            .btn-contact{
              background: #BA4F13;
              margin-right:18px;
              border: 1px solid #BA4F13;        
            }
            .btn-learn{
              background: #051024;
              border: 1px solid #051024;
            }

            //our-services----------------------------

            .our-services{
              margin-bottom: 45px
            }
            .services-header{
              display:flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
              margin-top:72px;
              margin-bottom: 10px;
            }
            .item,.item-first{
              color: #1E1E1E;
              font-size: 32px;
              font-weight: 600;
            }
            .crossbar1,.crossbar-left-1{
              width: 90px;
              height: 4px;
              background: #FC721E;
              margin: auto;
              margin-bottom:3px;
              margin-top: 10px;
            }
            .crossbar2,.crossbar-left-2{
              width: 90px;
              height: 2px;
              background: #FC721E;
              margin: auto;
              margin-bottom: 55px;
            }
            .services-main{
              max-width: 1260px;
              width:100%;
              margin : auto;
            }
            .services-column{
              display: flex;
              margin-bottom: 65px;
              width:100%;
            }
            .services-two{
              width:50%;
              display: flex;
              font-size:18px;
            }
            .services-one{
              width: 50%;
            }
            .img-services{
              display: flex;
              flex-direction: column;
              margin:auto
            }
            .services-text{
              max-width: 200px;
              margin:auto;
              text-align: center;   
              font-weight:600;
              color: #236B99;
            }

            //Archivement---------------------------

            .archivement,.archivement-mobile{
              height: 278px;
              background: url("../service_bg.svg"),#A1ACBB;
              background-size: cover;
              background-repeat: no-repeat;
              margin-top: 50px;
            }
            .archivement-container{
              max-width:1260px;
              width:100%;
              height:100%;
              margin: auto;
              display: flex;
              justify-content: center;
            }
            .archivement-column,.archivement-content{
              display: flex;
              flex-direction: column;
              width: 25%;
              text-align: center;
              align-items:center;
              margin-top: 57px;
            }
            .archivement-column{
              font-size:17px;
              font-family: 'Lexend', sans-serif;
              // margin-bottom: 100px;
            }
            .archivement-column>label{
              max-width:205px;
            }
            .archivement-content{
              align-items:flex-start;
              margin-top:67px;
              margin-left:30px;
              width:20%;
              padding-left:5%;
            }
            .crossbar-left-1{
              margin: 0;
              margin-top:8px;
            }
            .crossbar-left-2{
              margin: 0;
              margin-top:4px;
              margin-bottom: 17px;
            }
            .archivement-number{
              font-size:70px;
              color: #FFFFFF;
              text-shadow: 2px 0 #2F2D77, -2px 0 #2F2D77, 0 2px #2F2D77, 0 -2px #2F2D77,
              1px 1px #2F2D77, -1px -1px #2F2D77, 1px -1px #2F2D77, -1px 1px #2F2D77;
            }

            //------------------------------

            .target{
              display: flex;
              justify-content: center;
              height: 730px;
              background: url("../Axalize.webp");
              background-size: contain;
              background-repeat: no-repeat;
            }
            .about-us{
              background: url("../IMG_0799.webp");
              background-size: contain;
              background-repeat: no-repeat;
              max-width:521px;
              height:auto;
              overflow: hidden;
              margin-top: 70px;
              border-radius: 5px;
            }
            .about-us-bg{
              background: rgba(0, 0, 0, 0.7);
              max-width:532px;
              height:849px; 
              border-radius: 5px;
            }
            .about-us-header{
              color: #FFFFFF;
              font-size: 32px;
              font-weight: 600;
              text-align: center;
              padding-top: 38px;
              
            }
            .contact{
              color: rgba(66, 172, 232, 1);
              text-decoration:none;
              margin :0;
            }
            .text-color{
              color: rgba(252, 114, 30, 1);
            }
            .introduce-header{
              color: #FFFFFF;
              margin-left: 42px;
              margin-right: 34px;
              margin-bottom: 50px;
              font-size: 22px;
              text-align: center;
            }
            .introduce-content{
              color: #DCDCDC;
              margin-left: 42px;
              margin-right: 34px;
              margin-bottom: 18px;
              font-family: 'Inconsolata', monospace;
            }
            .target-row{
              display:flex;
              margin-bottom:38px;
              margin-left: 55px;
              align-items: flex-start;
            }
            .mission-vision{
              margin-top: 100px;
            }
            .mission{
              display:flex;
              flex-direction: column;
              margin-left: 29px;
              max-width: 566px;
              font-size: 16px;
              line-height: 19px;
            }
            .mission-header{
              font-size:32px;
              font-weight: 500;
              color: #454545;
              margin-bottom: 16px;
            }
            .mission>label{
              margin-bottom: 8px;
            }
            .one-core{
              display:flex;
              font-weight:500;
              font-size: 16px;
              line-height: 19px;
              margin-bottom: 5px;
            }
            .one-core>img{
              margin-right: 8px;
              margin-top: 4px;
            }
            
            
            //----------------------------------
            
            .expertise{
              background: url("../service_bg.svg"),#A1ACBB;
              height: 850px;
              margin-top: 120px;
            }
            .expertise-header{
              text-align: center;
              padding-top: 80px;
            }

            .expertise-main{
              display: flex;
              justify-content: center;
              margin-top: 100px;
              gap:35px;
            }
            .one-expertise{
              position: relative;
            }
            .one-expertise-content{
              position: relative;
              top:-50px;
              max-width:280px;
              height:400px;
              background: #ffffff;
              box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.17);
              border-radius: 10px;
              z-index: 1;
              display:flex;
              flex-direction: column;
            }
            .img-expertise{
              z-index: 2;
              position:relative;
              display: flex;
              justify-content: center;
            }
            .system-header,.system-header1{
              padding-top: 100px;
              width: 220px;
              font-size: 18px;
              font-weight: 500;
              text-align: center;
              margin:auto;
              margin-top:0; 
              margin-bottom: 33px;
            }
            .system-header1{
              margin-bottom: 54px;
            }
            .system-content{
              margin:0 30px; 
              margin-bottom: 46px;
              color: #808080;
              font-weight: 400;
              font-size: 15px;
              line-height: 18px;
            }
            .system-button{
              border: none;
              color:#1667B2; 
              background: #FFFFFF;
              cursor: pointer;
              font-size: 18px;
              outline:none;
            }

            //----------------------
            .techniques{
              height: 400px;
              margin-top:40px;
            }
            .techniques-header{
              text-align: center;
            }
            .techniques-main{
              max-width: 1280px;
              margin:auto;
            }
            .techniques-column{
              display: flex;
              justify-content: center;
              margin-bottom:26px;
              gap:1.5%;
            }
            .techniques-column>img,.html-css{
              width:13%;
              height: 55px;
              border:1px solid #CCCCCC;
              border-radius: 3px;
              gap:1.5%;
            }
            .html-css{
              display: flex;
              justify-content: space-evenly;
              align-items: center;
            }
            @media screen and (min-width: 600px){
              .archivement-mobile{
                display: none;
              }
              .mission-vision-mobile{
                display:none;
              }
            }
            @media screen and (max-width: 600px){
              .home--header{
                margin-top: 50px;
                height: calc(100vh - 50px);
              }
              .header-container{
                margin-top:100px;
                width: 90%;
                margin-left: 0;
                position: relative;
              }
              .title1{
                font-size: 35px;
                margin-bottom: 60px;
              }
              .title2{
                font-size: 21px;
                margin-bottom: 60px;
                width: 80%;
                line-height: 25px;
              }
              .title3{
                width: 95%;
                font-size: 17px;
                line-height: 21px;
              }
              .header-btn{
                flex-direction: column;
                align-items: center;
                position: absolute;
                bottom: 20px; 
                width: 100%;
              }
              .header-btn>button{
                width: 94%;
              }
              .btn-contact{
                margin-right: 0;
                margin-bottom: 10px;
              }
              //our-services----------------------------
              .services-header{
                margin-top:32px; 
                margin-bottom: 40px;
              }
              .crossbar2{
                margin-bottom: 8px;
              }
              .services-column{
                flex-direction: column;
                margin-bottom: 0;
              }
              .services-two{
                width: 90%;
                font-size:15px;
                margin: auto;
                margin-bottom: 20px;
              }
              
              .services-text{
                max-width: 155px;
              }

              //Archivement---------------------------
              .archivement{
                display: none;
              }
              .archivement-mobile{
                height: 470px;
              }
              .archivement-container{
                flex-direction: column;
                align-items: center;
              }
              .archivement-content-moblie{
                display:flex;
                flex-direction:column;
                align-items: center;
                padding-top:25px;
              }
              .archivement-row{
                display:flex;
                justify-content: center;
              }
              .archivement-column{
                width: 50%;
                margin-top: 30px;
              }
              .archivement-number{
                font-size:53px;
              }

              //Target------------------------------
              .target{
                flex-direction: column;
                height: auto;
                background: #FFFFFF;
              }
              .about-us-bg{
                background: linear-gradient(180deg,rgba(43,42,42,0)45%,#236b99 77%);
                height: 780px;
              }
              .about-us{
                background:linear-gradient(180deg, rgba(5, 63, 117, 0.65) 0%, rgba(47, 47, 47, 0.5005) 50%), url("../IMG_0799.webp");
                background-size: contain;
                background-repeat: no-repeat;
                margin-top:0;
              }
              .introduce-header{
                margin-top: 270px;
                font-size: 16px;
                margin-bottom: 40px;
              }
              .introduce-content{
                font-size: 14px;
                margin-left: 25px;
                margin-right: 14px;
              }
              .contact{
                color: rgba(252, 114, 30, 1);
              }
              .target-row{
                margin-left: 12px;
                margin-bottom: 0;
                flex-direction: column;
              }
              .mission-mobile{
                display: flex;
                max-width: 294px;
                font-size:15px;
                align-items: center;
                margin-bottom: 15px;
                margin-top: 28px;
              }
              .mission-header{
                margin-bottom: 0;
              }
              .mission-vision{
                display:none;
              }
              .mission-content{
                margin-right: 20px;
                margin-left:8px;
                font-size: 15px;
              }
              .one-core{
                font-size: 15px;
                margin-right: 30px;
                margin-left: 8px;
              }
              .one-core>img{
                margin-right: 18px;
              }

              //----------------------------------
              .expertise{
                height: 1300px;
              }
              .expertise-header{
                padding-top: 60px;
              }
              .expertise-main{
                display: flex;
                flex-direction: column;
                gap:15px;
                margin-top: 40px;
              }
              .one-expertise{
                max-height:260px ;
              }
              .img-expertise{
                width:54px;
                height: 54px;
                left: 32px;
                top: 20px;
              }
              .one-expertise-content{
                max-width: 370px;
                width:94%;
                max-height:260px ;
                margin:auto;
                height: auto;
              }
              .img-expertise>img{
                width: 100%;
                height:100%;
              }
              .system-header,.system-header1{
                padding-top:20px;
                width: 65%;
                font-size: 20px;
                text-align: left;
                margin-left: 88px;
                margin-bottom: 20px;
              }
              .system-header1{
                margin-bottom: 45px;
              }

              //----------------------
              .techniques{
                height: auto;
                padding-bottom: 60px;
              }
              .techniques-main{
                display: flex;
                justify-content: center;
                gap:12px;
              }
              .techniques-column{
                flex-direction: column;
                margin-top: 50px;
              }
              .techniques-column>img,.html-css{
                min-width: 170px;
                max-width:175px;
                width:100%;
                margin: auto;
                margin-top: 16px;
              }
            }
          `}
        </style>
      </div>
    </>
  )
}

export default Index
