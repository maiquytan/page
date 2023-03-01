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
          <div className="home__header">
            <div className="header_container">
              <div className="title1">Feel your pleasure, find your treasure</div>
              <div className="title2">Realize system development with "value".</div>
              <div className="title3">
                We provide services that satisfy "high quality," "low cost," and "high
                speed," and realize system development that is "value" for our customers.
                Please feel free to contact us regarding requests .
              </div>
              <div className="header_btn">
                <button className="btn_contact">Contact us</button>
                <button className="btn_learn">Learn more ...</button>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="our_services">
            <div className="services_header">
              <label className="item_first">Our services</label>
              <div className="crossbar1"></div>
              <div className="crossbar2"></div>
            </div>
            <div className="services_main">
              <div className="services_column">
                <div className="services_one">
                  <img src="services1.svg" className="img_services" alt="logo" title="logo" width="116" height="113" />
                  <div className="services_text">Web application development</div>
                </div>
                <div className="services_one">
                  <img src="services2.svg" className="img_services" alt="logo" title="logo" width="116" height="113" />
                  <div className="services_text">Mobile app development</div>
                </div>
                <div className="services_one">
                  <img src="services3.svg" className="img_services" alt="logo" title="logo" width="116" height="113" />
                  <div className="services_text">RPA development</div>
                </div>
                <div className="services_one">
                  <img src="services4.svg" className="img_services" alt="logo" title="logo" width="116" height="113" />
                  <div className="services_text">Dedicated development teams</div>
                </div>
              </div>
              <div className="services_column">
                <div className="services_one">
                  <img src="services5.svg" className="img_services" alt="logo" title="logo" width="116" height="113" />
                  <div className="services_text">Offshore development center</div>
                </div>
                <div className="services_one">
                  <img src="services6.svg" className="img_services" alt="logo" title="logo" width="116" height="113" />
                  <div className="services_text">Lifecycle maintenance</div>
                </div>
                <div className="services_one">
                  <img src="services7.svg" className="img_services" alt="logo" title="logo" width="116" height="113" />
                  <div className="services_text">DevOps development and operations</div>
                </div>
                <div className="services_one">
                  <img src="services8.svg" className="img_services" alt="logo" title="logo" width="116" height="113" />
                  <div className="services_text">UI/UX Design</div>
                </div>
              </div>

            </div>
          </div>

          {/* Archivement */}
          <div className="archivement">
            <div className="archivement_container">
              <div className="archivement_content">
                <label className="item">Archivement</label>
                <div className="crossbar_left_1"></div>
                <div className="crossbar_left_2"></div>
                <img src="medal.svg" alt="logo" title="logo" width="47px" height="47" />
              </div>
              <div className="archivement_column">
                <label className="archivement_number">50+</label>
                <label>Successful projects</label>
              </div>
              <div className="archivement_column">
                <label className="archivement_number">100+</label>
                <label>Customers around the world</label>
              </div>
              <div className="archivement_column">
                <label className="archivement_number">99%</label>
                <label>Repeat rate</label>
              </div>
            </div>
          </div>

          {/* Target */}
          <div className="target">
            <div className="about_us">
              <div className="about_us_bg">
                <div className="about_us_header">About us</div>
                <div className="crossbar1"></div>
                <div className="crossbar2"></div>
                <div className="introduce_header">Origin of <label className="text_color">Axalize</label>: A coined word combining <label className="text_color">Axia</label> (value) + <label className="text_color">Actualize</label> (realize)</div>
                <div className="introduce_content">Welcome to Axalize Incorporated, a provider of top-notch IT outsourcing and offshore services. Our team of experts is dedicated to delivering high-quality solutions through collaboration and close partnerships with our clients.</div>
                <div className="introduce_content">We understand that outsourcing IT requires a tailored approach. That's why we listen to your needs and goals, and work with you every step of the way to ensure success. From software development to digital transformation, trust us to support your business.
                </div>
                <div className="introduce_content">Our goal is to deliver exceptional value and outstanding services. Let us show you how collaboration and quality can make a difference for your business.
                </div>
                <div className="introduce_content">
                  <Link href="/about"><a className="contact">Contact us </a></Link>
                  <label>today to learn more!</label>
                </div>
                
              </div>
            </div>
            <div className="mission_vision">
              <div className="target_row">
                <img src="icons8.svg" alt="mission" title="mission" width="61" height="61" />
                <div className="mission">
                  <div className="mission_header">Mission</div>
                  <label className="mission_content">To provide world-class IT outsourcing and offshore services that deliver measurable business value to our clients.</label>
                </div>
              </div>
              <div className="target_row">
                <img src="icons8-financial.svg" alt="vision" title="vision" width="61" height="61" />
                <div className="mission">
                  <div className="mission_header">Vision</div>
                  <label className="mission_content">Elevating the recognition of Vietnamese tech capabilities and delivering impactful IT solutions for a better future.</label>
                </div>
              </div>
              <div className="target_row">
                <img src="icons8-tree.svg" alt="core_value" title="core_value" width="61" height="61" />
                <div className="mission">
                  <div className="mission_header">Core value</div>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> Quality: We are committed to delivering high-quality solutions that meet the needs of our clients.</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> Collaboration: We work closely with our clients to understand their unique needs and develop solutions that meet their goals.</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> Innovation: We are dedicated to staying at the forefront of technology and continuously finding new ways to deliver value to our clients.</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> Integrity: We conduct all of our business with honesty and transparency, always acting in the best interest of our clients.</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> Respect: We value and respect our clients, employees, and partners, and foster an inclusive and supportive workplace culture.</label>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="expertise">
            <div className="expertise_header">
              <label className="item">Expertise</label>
              <div className="crossbar1"></div>
              <div className="crossbar2"></div>
            </div>
            <div className="expertise_main">
              <div className="one_expertise">
                <img src="Expertise1.svg" alt="expertise" title="expertise" className="img_expertise" width="100" height="100" />
                <div className="one_expertise_content">
                  <label className="system_header">Enterprise management systems</label>
                  <label className="system_content">Lorem Ipsum is simply dummy text of the printing and typesetting indusd Lorem Ipsum is simply dummy text of the printing and typesetting indusd....</label>
                  <button className="system_button">See more</button>
                </div>
              </div>
              <div className="one_expertise">
                <img src="Expertise2.svg" alt="expertise" title="expertise" className="img_expertise" width="100" height="100" />
                <div className="one_expertise_content">
                  <label className="system_header">Ecommerce & Retail management systems</label>
                  <label className="system_content">Lorem Ipsum is simply dummy text of the printing and typesetting indusd Lorem Ipsum is simply dummy text of the printing and typesetting indusd....</label>
                  <button className="system_button">See more</button>
                </div>
              </div>
              <div className="one_expertise">
                <img src="Expertise3.svg" alt="expertise" title="expertise" className="img_expertise" width="100" height="100" />
                <div className="one_expertise_content">
                  <label className="system_header">Customer-enabling services</label>
                  <label className="system_content">Lorem Ipsum is simply dummy text of the printing and typesetting indusd Lorem Ipsum is simply dummy text of the printing and typesetting indusd....</label>
                  <button className="system_button">See more</button>
                </div>
              </div>
              <div className="one_expertise">
                <img src="Expertise4.svg" alt="expertise" title="expertise" className="img_expertise" width="100" height="100" />
                <div className="one_expertise_content">
                  <label className="system_header1">New business ideas</label>
                  <label className="system_content">Lorem Ipsum is simply dummy text of the printing and typesetting indusd Lorem Ipsum is simply dummy text of the printing and typesetting indusd....</label>
                  <button className="system_button">See more</button>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>

          {/* Techniques */}
          <div className="techniques">
            <div className="techniques_header">
              <label className="item">Techniques</label>
              <div className="crossbar1"></div>
              <div className="crossbar2"></div>
            </div>
            <div className="techniques_main">
              <div className="techniques_column">
                <img src="androidStudio.svg" alt="android" title="android" width="86" height="55" />
                <img src="angular.svg" alt="angular" title="angular" width="120" height="55" />
                <img src="reactjs.svg" alt="reactjs" title="reactjs" width="124" height="50" />
                <img src="vuejs.svg" alt="vuejs" title="vuejs" width="117" height="55" />
                <img src="reactive-native.svg" alt="reactive-native" title="reactive-native" width="163" height="55" />
                <div className="html_css">
                  <img src="js.svg" alt="js" title="js" width="39" height="39" />
                  <img src="html.svg" alt="html" title="html" width="39" height="39" />
                  <img src="css.svg" alt="css" title="css" width="39" height="39" />
                </div>

                <img src="mongodb.svg" alt="mongodb" title="mongodb" width="124" height="37" />

              </div>
              <div className="techniques_column">
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
            }
            .h1{
              display:none;
            }
            .home__header{
              height: calc(100vh - 118px);
              margin-top: 118px;
              display:flex;
              color: #FFFFFF;
              background-image: url("../imgheader.webp");
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
            .title1{
              font-size: 42px;
              font-weight: 600;
              margin-left:50px;
              margin-bottom: 35px; 
            }
            .title2{
              font-size: 28px;
              font-weight:500;
              margin-left:50px;
              margin-bottom: 30px;   
            }
            .title3{
              font-size:20px;
              margin-left:50px;
              margin-bottom: 50px;
              width:50%;
              text-align: justify;
            }
            .header_container{
              max-width: 1274px;
              margin:auto;
              margin-top:205px;
            }
            .header_btn{
              display:flex;
              margin-left:50px;
            }
            .header_btn>button{
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
            .btn_contact{
              background: #BA4F13;
              margin-right:18px;
              border: 1px solid #BA4F13;        
            }
            .btn_learn{
              background: #051024;
              border: 1px solid #051024;
            }

            //our_services----------------------------

            .our_services{
              margin-bottom: 45px
            }
            .services_header{
              display:flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
              margin-top:72px;
              margin-bottom: 10px;
            }
            .item,.item_first{
              color: #1E1E1E;
              font-size: 32px;
              font-weight: 500;
            }
            .item_first{
              font-weight: 600;
            }
            .crossbar1,.crossbar_left_1{
              width: 90px;
              height: 4px;
              background: #FC721E;
              margin: auto;
              margin-bottom:3px;
              margin-top: 10px;
            }
            .crossbar2,.crossbar_left_2{
              width: 90px;
              height: 2px;
              background: #FC721E;
              margin: auto;
              margin-bottom: 55px;
            }
            .services_main{
              max-width: 66%;
              margin : auto;
            }
            .services_column{
              display: flex;
              justify-content: space-between;
              margin-bottom: 65px;
            }
            .services_one{
              width: 25%;
            }
            .img_services{
              display: flex;
              flex-direction: column;
              margin:auto
            }
            .services_text{
              max-width: 200px;
              margin:auto;
              text-align: center;  
              font-size:18px; 
              font-weight:600;
              color: #236B99;
            }

            //archivement---------------------------

            .archivement{
              height: 278px;
              background: url("../service_bg.svg"),#A1ACBB;
              background-size: cover;
              margin-top: 50px;
            }
            .archivement_container{
              max-width:66%;
              height:100%;
              margin: auto;
              display: flex;
              justify-content: center;
            }
            .archivement_column,.archivement_content{
              display: flex;
              flex-direction: column;
              width: 25%;
              text-align: center;
              align-items:center;
              margin-top: 57px;
            }
            .archivement_column{
              font-size:17px;
              font-family: 'Lexend', sans-serif;
              // margin-bottom: 100px;
            }
            .archivement_column>label{
              max-width:205px;
            }
            .archivement_content{
              align-items:flex-start;
              margin-top:67px;
              margin-left:30px;
              width:20%;
              padding-left:5%;
            }
            .crossbar_left_1{
              margin: 0;
              margin-top:8px;
            }
            .crossbar_left_2{
              margin: 0;
              margin-top:4px;
              margin-bottom: 17px;
            }
            .archivement_number{
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
            .about_us{
              background: url("../IMG_0799.webp");
              background-size: cover;
              max-width:531px;
              height:673px;
              overflow: hidden;
              margin-top: 70px;
              border-radius: 5px;
            }
            .about_us_bg{
              background: rgba(0, 0, 0, 0.7);
              max-width:532px;
              height:849px; 
              border-radius: 5px;
            }
            .about_us_header{
              color: #FFFFFF;
              font-size: 32px;
              font-weight: 500;
              text-align: center;
              padding-top: 38px;
              
            }
            .contact{
              color: rgba(66, 172, 232, 1);
              text-decoration:none;
              margin :0;
            }
            .text_color{
              color: rgba(252, 114, 30, 1);
            }
            .introduce_header{
              color: #FFFFFF;
              margin-left: 42px;
              margin-right: 34px;
              margin-bottom: 50px;
              font-size: 22px;
              text-align: center;
            }
            .introduce_content{
              color: #DCDCDC;
              margin-left: 42px;
              margin-right: 34px;
              margin-bottom: 18px;
              font-family: 'Inconsolata', monospace;
            }
            .target_row{
              display:flex;
              margin-bottom:38px;
              margin-left: 55px;
              align-items: flex-start;
            }
            .mission_vision{
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
            .mission_header{
              font-size:32px;
              font-weight: 500;
              color: #454545;
              margin-bottom: 16px;
            }
            .mission>label{
              margin-bottom: 8px;
            }
            
            
            //----------------------------------
            
            .expertise{
              background: url("../service_bg.svg"),#A1ACBB;
              height: 850px;
              margin-top: 120px;
            }
            .expertise_header{
              text-align: center;
              padding-top: 80px;
            }

            .expertise_main{
              display: flex;
              justify-content: center;
              margin-top: 100px;
              gap:35px;
            }
            .one_expertise{
              position: relative;
            }
            .one_expertise_content{
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
            .img_expertise{
              z-index: 2;
              position:relative;
              left: 32%;
            }
            .system_header,.system_header1{
              padding-top: 100px;
              width: 220px;
              font-size: 18px;
              font-weight: 500;
              text-align: center;
              margin:auto;
              margin-top:0; 
              margin-bottom: 33px;
            }
            .system_header1{
              margin-bottom: 54px;
            }
            .system_content{
              margin:0 30px; 
              margin-bottom: 46px;
              color: #808080;
              font-weight: 400;
              font-size: 15px;
              line-height: 18px;
            }
            .system_button{
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
              margin-top:10px;
            }
            .techniques_header{
              text-align: center;
            }
            .techniques_main{
              max-width: 1280px;
              margin:auto;
            }
            .techniques_column{
              display: flex;
              justify-content: center;
              margin-bottom:26px;
              gap:1.5%;
            }
            .techniques_column>img,.html_css{
              width:13%;
              height: 55px;
              border:1px solid #CCCCCC;
              border-radius: 3px;
              gap:1.5%;
            }
            .html_css{
              display: flex;
              justify-content: space-evenly;
              align-items: center;
            }
   
        `}
        </style>
      </div>
    </>
  )
}

export default Index
