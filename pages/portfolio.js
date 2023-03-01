import React, { useMemo, useState } from 'react'
import Pagination from '../components/Pagination/Pagination';
import { PageSize } from '../constants';

const Portfolio = () => {
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
      <h1 className="h1"> ** Portfolio screen ** </h1>
      {/* Header */}
      <div className="bg_header">
        <img className="img_header" src="img_header.svg" alt="bg_header" title="bg_header" width="1001" height="557" />
        <div className="portfolio_header">
          <div className="header_title">Our Works</div>
          <div className="header_content">
            <div className="content_left">From Enterprise Management Systems to E-commerce & Retail Management Systems, Customer-enabling Services, and New Business Ideas, our portfolio is a testament to our expertise and the real-world benefits we bring to our clients. Join us on a journey through our problem-solving process, from initial consultation to solution delivery, and see how we bring your vision to life. Let's partner together to create the next breakthrough solution.</div>
            <div className="content_right">
              <img src="Group20.webp" alt="img_header" title="img_header" width="737" height="317" />
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
                    <img src="illustration1.webp" alt="illustration" title="illustration" width="465" height="244" />
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



      <style jsx>
        {`
          .portfolio{
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }
          .h1{
            display:none;
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
            margin-right:65px;
            margin-bottom:60px;
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
            width: 1260px;
            margin :auto;
            margin-bottom:30px;
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
            width:76%;
          }
          .illustration{
            height: 310px;
            width:49%;
            background: #F0F0F0;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            overflow: hidden;
          }
          .applications_row{
            display:flex;
            flex-wrap:wrap;
            gap: 2%;
            width:100%;
          }
          .illustration>img{
            width: 100%;
            height: auto;
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

          //----------------------
          .techniques{
            height: 400px;
            margin-top:150px;
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
  )
}

export default Portfolio
