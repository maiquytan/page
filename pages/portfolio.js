import React, { useMemo, useState } from 'react'
import Pagination from '../components/Pagination/Pagination';
import { PageSize } from '../components/constants/constants';

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    { title: "MAX", content: "1" },
    { title: "MAX", content: "2" },
    { title: "MAX", content: "3" },
    { title: "MAX", content: "4" },
    { title: "MAX", content: "5" },
    { title: "MAX", content: "6" },
    { title: "MAX", content: "7" },
    { title: "MAX", content: "8" },
    { title: "MAX", content: "9" },
    { title: "MAX", content: "10" },
    { title: "MAX", content: "11" },
    { title: "MAX", content: "12" },
    { title: "MAX", content: "13" },
    { title: "MAX", content: "14" },
    { title: "MAX", content: "15" },
    { title: "MAX", content: "16" },
    { title: "MAX", content: "17" },
    { title: "MAX", content: "18" },
    { title: "MAX", content: "19" },
    { title: "MAX", content: "20" },
    { title: "MAX", content: "21" },
    { title: "MAX", content: "22" },
    { title: "MAX", content: "23" },
    { title: "MAX", content: "24" },
    { title: "MAX", content: "25" },
    { title: "MAX", content: "26" },
    { title: "MAX", content: "27" },
    { title: "MAX", content: "28" },
    { title: "MAX", content: "29" },
    { title: "MAX", content: "30" },
    { title: "MAX", content: "31" },
    { title: "MAX", content: "32" },
    { title: "MAX", content: "33" },
    { title: "MAX", content: "34" },
    { title: "MAX", content: "35" },
    { title: "MAX", content: "36" },
  ]
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="portfolio">

      {/* Header */}
      <div className="bg_header">
        <img className="img_header" src="img_header.svg" alt="bg_header" title="bg_header" width="1001" height="557" />
        <div className="portfolio_header">
          <div className="header_title">Our Works</div>
          <div className="header_content">
            <div className="content_left">From Enterprise Management Systems to E-commerce & Retail Management Systems, Customer-enabling Services, and New Business Ideas, our portfolio is a testament to our expertise and the real-world benefits we bring to our clients. Join us on a journey through our problem-solving process, from initial consultation to solution delivery, and see how we bring your vision to life. Let's partner together to create the next breakthrough solution.</div>
            <div className="content_right">
              <img src="Group20.png" alt="img_header" title="img_header" width="761" height="444" />
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

      {/* Aplications */}
      <div className="applications">
        <div className="applications_header">
          <div className="applications_left">
            <label className="item">Aplications</label>
            <div className="crossbar_left_1"></div>
            <div className="crossbar_left_2"></div>
            <div className="applications_list">
              <span>Travel & Hospitality Software Development</span>
              <span>Food and Beverage Software Development</span>
              <span>Health Care Software Development</span>
              <span>Education Software Development</span>
              <span>Social Networking App and Website Development</span>
              <span>eCommerce & Retail Software development</span>
              <span>Others</span>
            </div>
          </div>
          <div className="applications_right">
            <div className="applications_row">
              {currentTableData.map(item => {
                return (
                  <div className="illustration">
                    <img src="illustration1.svg" alt="illustration" title="illustration" width="465" height="244" />
                    <div>{item.title}</div>
                    <label>{item.content}</label>
                  </div>

                );
              })}
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="paging">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
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

      <style jsx>
        {`
          .portfolio{
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }
          .bg_header{
            position: relative;
            width:100%;
            overflow: hidden;
          }
          .img_header{
            position:absolute;
            right:0;
            top:118px;
            z-index:1;
          }
          .portfolio_header{
            position:relative;
            height:calc(100vh - 118px);
            max-width: 1260px;
            margin:auto;
            margin-top: 118px;
            display:flex;
            flex-direction:column;
            align-items: flex-start;
            justify-content: center;
            z-index:2;
          }
          .header_title{
            background-image: url("../Ellipse.svg");
            width: 350px;
            height: 103px;
            font-size: 43px;
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;
            top:55px;
            left: 20px;
            font-family: 'Lexend', sans-serif;
            color: #DEDEDE;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
            
          }
          .header_content{
            display: flex;
            align-items: center;
            margin-top:35px;
            max-width:1260px;
          }
          .content_left{
            max-width:36%;
            margin-right:35px;
            margin-bottom:60px;
            margin-left: 20px;
            font-size: 18px;
            text-align: justify;
            line-height: 26px;
          }
          .content_right{
            max-width:60%;
          }
          .content_right>img{
            max-width:100%;
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
          .item{
            color: #1E1E1E;
            font-size: 32px;
            font-weight: 500;
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


          //applications-------------------------
          .applications{
            height: 980px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .applications_left{
            margin-right: 50px;
          }
          .applications_header{
            display:flex;
            justify-content: center;
          }
          .applications_list{
            display: flex;
            flex-direction: column;
            max-width: 215px;
            height: 555px;
            margin-top: 45px;
            border-left: 1px solid #525252;
            padding-left: 15px;
          }
          .applications_list >span{
            margin-top: 10px;
            margin-bottom: 13px;
            cursor: pointer;
          }
          .applications_right{
            display:flex;
            max-width:960px;
          }
          .illustration{
            height: 310px;
            background: #F0F0F0;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            overflow: hidden;
          }
          .applications_row{
            display:flex;
            flex-wrap:wrap;
            margin-bottom:44px;
            gap: 27px;
            width:100%;
          }
          .illustration>img{
            max-width: 100%;
            max-height: 100%;
          }
          .illustration>div{
            font-weight: 500;
            font-size: 20px;
            color: #1667B2;
            margin-left:11px;
            margin-top:10px;
          }
          .illustration>label{
            font-size: 14px;
            color: #636363;
            margin-left: 11px;
          }
          .paging{
            display:flex;
            justify-content: center;
            margin-top:50px;
          }
          .paging>button{ 
            width: 32px;
            height: 32px;
            margin-right: 8px;
            background: #FFFFFF;
            border: 1px solid #DFE3E8;
            border-radius: 4px;
            cursor: pointer;
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
            width:100%;
          }
          .infor_request{
            display: flex;
            justify-content: center;
            max-width: 1260px;
            margin: auto;
            gap: 7%;
          }
          .information{
            max-width: 35%;
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
          .request{
            max-width:58%;
          }
          .request_form{
            max-width: 100%;
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
  )
}

export default Portfolio
