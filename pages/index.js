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
                <div className="introduce_content">Axalize is a top-ranked provider of offshore software development services, offering a wide range of solutions to meet the unique needs of businesses worldwide. With a focus on quality, collaboration, and innovation, our team of dedicated professionals leverages deep expertise and technical prowess to deliver results that drive real business value. From enterprise management systems to mobile app development and everything in between, we are committed to helping our clients succeed in the digital age.</div>
                <div className="introduce_content">We take a customer-centered approach to business, ensuring that our clients' goals and values are always at the forefront of everything we do. With a track record of success on over 50 offshore outsourcing software development projects, our clients trust us to deliver quality outcomes, on-time and on-budget.
                </div>
              </div>
            </div>
            <div className="mission_vision">
              <div className="target_row">
                <img src="icons8.svg" alt="mission" title="mission" width="61" height="61" />
                <div className="mission">
                  <label className="mission_header">Misson</label>
                  <label className="mission_content">Utilizing cutting-edge technology, we will realize the optimal "Axia (value)" for each individual by the best means.</label>
                </div>
              </div>
              <div className="target_row">
                <img src="icons8-financial.svg" alt="vision" title="vision" width="61" height="61" />
                <div className="mission">
                  <label className="mission_header">Vision</label>
                  <label className="mission_content">We will become a leading company that creates unique value and innovation on the earth while putting the "happiness" of all Axalize members first.</label>
                </div>
              </div>
              <div className="target_row">
                <img src="icons8-tree.svg" alt="core_value" title="core_value" width="61" height="61" />
                <div className="mission">
                  <label className="mission_header">Core value</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> To pursue the mission thoroughly.</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> Have the ability to take action for change.</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> Respect each person's individuality.</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> The team should share values and aim for the same goals.</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> A deep understanding of customer value.</label>
                  <label><img src="Vector.svg" alt="check" title="check" width="16" height="12" /> Never be bound by boundaries.</label>
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
                <img src="mongodb.svg" alt="mongodb" title="mongodb" />
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

          {/* Information - Request */}
          <div className="infor_request_bg">
            <div className="infor_request">
              <div className="information">
                <div className="information_header">
                  <label className="item">Information</label>
                  <div className="crossbar_left_1"></div>
                  <div className="crossbar_left_2"></div>
                </div>
                <div className="information_content">We welcome friends, partners, and clients to  have conversations with Axalize. Please call us on the phone or drop us an email. We are happy to meet you at our office as well. You are most welcome!</div>
                <div className="infor_address">Ha Noi City - Development Center</div>
                <label className="address_detail">2nd Floor, 25T2 Budding, Hoang Dao Thuy, Nguyen Thi Thap, Trung Hoa, Cau Giay, Ha Noi </label>
                <div className="gmail">
                  <img src="gmail.svg" alt="gmail" title="gmail" width="74" height="54" />
                  <label>contact@axalize.vn</label>
                </div>
                <div className="phone">
                  <img src="phone.svg" alt="phone" title="phone" width="74" height="54" />
                  <label>(+84) 248-585-8389 </label>
                </div>
              </div>
              <div className="request">
                <div className="information_header">
                  <label className="item">Quote request</label>
                  <div className="crossbar_left_1"></div>
                  <div className="crossbar_left_2"></div>
                </div>
                <div className="request_form">
                  <div className="request_header">Your imformation:</div>
                  <div className="request_input">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                  </div>
                  <div className="request_input">
                    <input type="text" placeholder="Phone number" />
                    <input type="text" placeholder="Your email" />
                  </div>
                  <input className="request_input1" type="text" placeholder="Your company" />
                  <div className="service_budget">
                    <div>
                      <div>Service:</div>
                      <div className="service">
                        <input id="check" type="checkbox" className="checkbox" />
                        <label htmlFor="check" className="span"></label>
                        <label htmlFor="check" className="service_content">Mobile App</label>
                      </div>
                      <div className="service">
                        <input id="check1" type="checkbox" className="checkbox" />
                        <label htmlFor="check1" className="span"></label>
                        <label htmlFor="check1" className="service_content">Web App</label>
                      </div>
                      <div className="service">
                        <input id="check2" type="checkbox" className="checkbox" />
                        <label htmlFor="check2" className="span"></label>
                        <label htmlFor="check2" className="service_content">UI/UX Design</label>
                      </div>
                      <div className="service">
                        <input id="check3" type="checkbox" className="checkbox" />
                        <label htmlFor="check3" className="span"></label>
                        <label htmlFor="check3" className="service_content">VAPT (Vulnerability Assessment and Penetration)</label>
                      </div>
                      <div className="service">
                        <input id="check4" type="checkbox" className="checkbox" />
                        <label htmlFor="check4" className="span"></label>
                        <label htmlFor="check4" className="service_content">VAPT (Vulnerability Assessment and Penetration)</label>
                      </div>
                      <div className="service">
                        <input id="check5" type="checkbox" className="checkbox" />
                        <label htmlFor="check5" className="span"></label>
                        <label htmlFor="check5" className="service_content"><u className="other">Other (please specify)</u></label>
                      </div>
                    </div>
                    <div className="hr_dahed"></div>
                    <div>
                      <div>Budget</div>
                      <label className="budget">Below 25k
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="budget">25k - 50k
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="budget">50k - 100k
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="budget">100k - 200k
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="budget">200k - 300k
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="budget">300k - 400k
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="budget">Sky’s the limit
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                      <label className="budget"><u className="other">Other (please specify)</u>
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div className="tell_us">
                    <div>Tell us about your project</div>
                    <textarea className="tell_input" type="text" placeholder="Please write here..." />
                  </div>
                  <button className="upload">
                    <img src="upload.svg" alt="upload" title="upload" width="19" height="19" />
                    <label>Upload files</label>
                  </button>
                  <button className="btn_request">Request a Quote</button>
                </div>
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
      .home__header{
          height: calc(100vh - 118px);
          margin-top: 118px;
          display:flex;
          color: #FFFFFF;
          background-image: url("../imgheader.png");
          background-position: center;
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
        height: 690px;
        background: url("../Axalize.svg");
        background-repeat: no-repeat;
        
      }
      .about_us{
        background: url("../IMG_0799.svg");
        max-width:531px;
        height:673px;
        overflow: hidden;
        margin-top: 70px;
      }
      .about_us_bg{
        background: rgba(0, 0, 0, 0.7);
        max-width:532px;
        height:849px; 
        
      }
      .about_us_header{
        color: #FFFFFF;
        font-size: 32px;
        font-weight: 500;
        text-align: center;
        padding-top: 38px;
        
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
        text-align: justify;
      }
      .target_row{
        display:flex;
        margin-bottom:38px;
        margin-left: 55px;
        align-items: flex-start;
      }
      .mission_vision{
        margin-top: 70px;
      }
      .mission{
        display:flex;
        flex-direction: column;
        margin-left: 29px;
      }
      .mission_header{
        font-size:32px;
        font-weight: 500;
        color: #454545;
        margin-bottom: 6px;
      }
      .mission_content{
        width: 566px;
        font-size: 16px;
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

      //--------------------------------------------
      .infor_request_bg{
        background: url("../ceo_bg.svg");
        background-position: center;
        height:1250px;
      }
      .infor_request{
        display: flex;
        justify-content: center;
      }
      .information{
        max-width: 445px;
        margin-right: 72px;
      }
      .information_header{
        padding-top:65px;
        margin-bottom: 40px;
      }

      .information_content{
        font-size: 17px;           
        margin-bottom: 43px;
      }
      .infor_address{
        font-size:24px;
        margin-bottom :10px
      }
      .address_detail{
        font-weight: 400;
        font-size: 16px;  
        color: #5F5F5F;  
      }
      .gmail,.phone{
        display: flex;
        align-items: center;
        color:#FC721E;
        font-size:19px;
      }
      .gmail{
        margin-top: 34px;
        margin-bottom: 14px;
      }
      .gmail>img,.phone>img{
        margin-right: 28px;
      }

      .request_form{
        max-width: 740px;
        width:100%;
        height: 1030px;
        background: #FFFFFF;
        border-radius: 10px;
        padding: 0 35px;
        
      }
      .request_header{
        font-size:18px;
        padding-top: 35px;
        margin-bottom: 20px;
      }
      .request_input{
        display:flex;
        justify-content: space-between;
        gap:2%;
      }
      .request_input>input,.request_input1,.tell_input {
        background: #F3F3F3;
        border-radius: 5px; 
        width: 48%;
        height: 46px;
        margin-bottom: 21px; 
        border: none;
        outline: none;
        padding-left: 20px;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
      }
      .request_input1{
        width: calc(100% - 22px);
        margin-bottom: 37px;
      }
      .request_input>input::placeholder, .request_input1::placeholder, .tell_input::placeholder{
        color:#8E8E8E;
      }

      .service_budget{
        display:flex;
      }
      .hr_dahed{
        width:0px;
        height: 320px;
        margin:35px 20px 0px 55px ;
        border: 1px dashed #6D6D6D;
      }
      .service{
        display: flex;
        align-items: left;
        cursor: pointer;
        background-color: #FFFFFF;
        margin-top: 21px;
        margin-left: 17px;
      }
      .checkbox{
        display: none;
        width: 20px;
        height: 20px;
        border-color: #D9D9D9 !important;
        border-width: 1px;
        border-style: solid;
        border-radius: 2px;
        background: #FFFFFF;
        margin-right: 10px;
      }
      .checkbox:checked~ .span {
        background-repeat: no-repeat, repeat;
        background-image: url("../Checkbox.svg");
        background-position: center;
      }

      .span {
        margin-bottom: 0px;
        margin-right: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-color: #cdd6dd;
        border-width: 1px;
        border-style: solid;
        border-radius: 2px;
        background-color: #D9D9D9;
      }
      .service_content{
        margin-left: 5px;
        max-width:220px;
      }

      //custom radio-----------------------------------
      .budget {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-top: 23px;
        margin-left:10px;
        cursor: pointer;
        font-size: 16px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .budget>input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
      }
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 17px;
        width: 17px;
        background-color: #eee;
        border-radius: 50%;
      }
      .budget>input:checked ~ .checkmark {
        background-color: #FC721E;
      }
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
      .budget>input:checked ~ .checkmark:after {
        display: block;	
        height:11px;
        width:11px;
      }
      .budget .checkmark:after {
        top: 3px;
        left: 3px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
     }
     .other{
        color: #A6A6A6
     }
     .tell_us{
        margin-top: 37px;
        font-size: 16px;
     }
     .tell_input{
        margin-top: 16px;
        margin-bottom: 25px;
        width: calc(100% - 22px);
        height: 100px;
        padding-top: 17px;
        display: flex;
        align-items: flex-start;
     }
    
      .upload{
        width:100%;
        height:45px;
        display:flex;
        align-items: center;
        text-align: left;
        border-radius: 5px;
        border:none;
        cursor:pointer;
      }
      .upload>img{
        margin-left:25px;
        margin-right:9px;
      }
      .btn_request{
        color: #FFFFFF;
        background: #FC721E;
        width: 100%;
        height:45px; 
        margin-top: 30px;
        border-radius: 5px;
        border:none;
        cursor:pointer;
      }
      `}
        </style>
      </div>
    </>
  )
}

export default Index
