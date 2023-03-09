import React, { useMemo, useState } from 'react'

import Archivement from '../components/Archivement/Archivement';
import Pagination from '../components/Pagination/Pagination';
import Techniques from '../components/Techniques/Techniques';
import { PageSize } from '../constants';

const Portfolio = () => {
  const listselect = [
    { id: 1, title: "Enterprise management systems" },
    { id: 2, title: " ECommerce & Retail Software development " },
    { id: 3, title: "Customer-enabling services" },
    { id: 4, title: "New business ideas" },
    { id: 5, title: "Others" },
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownApp, setIsDropdownApp] = useState(false);
  const [isSelect, setIsSelect] = useState(listselect[0]);

  const data = [
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration3.svg" },
    { title: "Marcos-StarcatXR", content: "Website", img: "illustration1.webp" },
    { title: "Nistone-Loan", content: "Phone Application", img: "illustration2.svg" },
  ]
 
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleDropdownOnclick = () => {
    setIsDropdownApp(!isDropdownApp);
  }

  return (
    <div className="portfolio">
      <h1 className="h1"> ** Portfolio screen ** </h1>
      {/* Header */}
      <div className="bg-header">
        <div className="img-header-pc">
          <img src="img_header.svg" alt="bg-header" title="bg-header" width="1001" height="557" />
        </div>
        <div className="img-header-mobile">
          <img src="bg_about.webp" alt="bg-header" title="bg-header" width="1001" height="557" />
        </div>
        <div className="portfolio-header">
          <div className="header-title">Our Works</div>
          <div className="header-content">
            <div className="content-left">From Enterprise Management Systems to E-commerce & Retail Management Systems, Customer-enabling Services, and New Business Ideas, our portfolio is a testament to our expertise and the real-world benefits we bring to our clients. Join us on a journey through our problem-solving process, from initial consultation to solution delivery, and see how we bring your vision to life. Let's partner together to create the next breakthrough solution.</div>
            <div className="content-right">
              <img src="Group20.webp" alt="img-header" title="img-header" width="737" height="317" />
            </div>
          </div>
        </div>
      </div>

      <Archivement />

      {/* Aplications */}
      <div className="applications">
        <div className="applications-header">
          <div className="applications-left">
            <label className="item">Aplications</label>
            <div className="crossbar-left-1"></div>
            <div className="crossbar-left-2"></div>
            <div className="applications-list">
              <span>Travel & Hospitality Software Development</span>
              <span>Food and Beverage Software Development</span>
              <span>Health Care Software Development</span>
              <span>Education Software Development</span>
              <span>Social Networking App and Website Development</span>
              <span>eCommerce & Retail Software development</span>
              <span>Others</span>
            </div>
          </div>
          <div className="applications-select">
            <div className="select" onClick={handleDropdownOnclick}>
              <div>{isSelect.title}</div>
              <div>
                <img src="arrow_bottom.svg" alt="arrow-dropdown" title="arrow-dropdown" width="16" height="9"  />
              </div>
            </div>
            {isDropdownApp &&
              <div className="dropdown">
                {listselect.map((list, index) => (
                  <div className={isSelect.id === list.id ? "application_selected" : "one_application"} onClick={() => setIsSelect(list)} key={index}>{list.title}</div>
                ))}
              </div>
            }
          </div>

          <div className="applications-right">
            <div className="applications-row">
              {currentTableData.map((item, index) => {
                return (
                  <div className="illustration" key={index}>
                    <img src={item.img} alt="illustration" title="illustration" width="465" height="244" />
                    <div>{item.title}</div>
                    <label>{item.content}</label>
                  </div>
                );
              })}
            </div>
          </div>
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
      <Techniques />

      <style jsx>
        {`
          .portfolio{
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }
          .h1{
            display:none;
          }
          .bg-header{
            position: relative;
            width:100%;
            overflow: hidden;
          }
          .img-header-pc,.img-header-mobile{
            position:absolute;
            right:0;
            top:118px;
            z-index:1;
          }
          .img-header-mobile{
            display: none;
          }
          .portfolio-header{
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
          .header-title{
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
          .header-content{
            display: flex;
            align-items: center;
            margin-top:35px;
            max-width:1260px;
          }
          .content-left{
            width:36%;
            margin-right:65px;
            margin-bottom:60px;
            font-size: 18px;
            text-align: justify;
            line-height: 26px;
          }
          .content-right{
            width:60%;
          }
          .content-right>img{
            max-width:100%;
          }
          .item{
            color: #1E1E1E;
            font-size: 32px;
            font-weight: 600;
          }
          .crossbar-left-1{
            width: 90px;
            height: 4px;
            background: #FC721E;
            margin: 0;
            margin-top:8px;
            margin-bottom:3px;
          }
          .crossbar-left-2{
            width: 90px;
            height: 2px;
            background: #FC721E;
            margin: 0;
            margin-bottom: 17px;
          }

          //applications-------------------------
          .applications{
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .applications-left{
            display: flex;
            flex-direction: column;
            margin-right: 50px;
          }
          .applications-header{
            display:flex;
            max-width: 1260px;
            margin :auto;
            margin-top: 100px;
            margin-bottom:30px;
          }
          .applications-list{
            display: flex;
            flex-direction: column;
            max-width: 215px;
            height: 555px;
            margin-top: 25px;
            border-left: 1px solid #525252;
            padding-left: 15px;
          }
          .applications-list >span{
            margin-top: 10px;
            margin-bottom: 13px;
            cursor: pointer;
          }
          .applications-right{
            display:flex;
            width:76%;
          }
          .illustration{
            height: auto;
            width:49%;
            background: #F0F0F0;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            overflow: hidden;
          }
          .applications-row{
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
            margin-bottom:50px;
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

          @media screen and (max-width: 900px){
            .img-header-pc{
              display: none;
            }
            .img-header-mobile{
              display: block;
            }
            .portfolio-header{
              height:calc(100vh - 50px);
              margin-top: 50px;
            }
            .img-header-mobile{
              top:0px;
              left: -70%;
              width:200%;
              height: auto;
              aspect-ratio:3;
              object-fit: cover;
            }
            .img-header-mobile>img{
              width: 100%;
              height:100%;
            }
            .portfolio-header{
              justify-content: normal;
            }
            .header-title{
              margin-top:10%;
              background: none;
              width: 100%;
              text-align:center;
            }
            .header-content{
              flex-direction: column-reverse;
              width: 100%;
              margin-top: 25px;
            }
            .content-left{
              width: 80%;
              margin:auto;
              font-size:20px;
              line-height: 30px;
            }
            .content-right{
              width:86%;
              height: auto;
              aspect-ratio: 2.3;
              object-fit: cover;
              margin-top: 5%;
              margin-bottom: 15%;
            }
            .content-right>img{
              width: 100%; 
              height:100%;
            }
            
            .applications-header{
              flex-direction: column;
            }
            .applications-left{
              margin: 0;
              justify-content: center;
              align-items: center;
              margin-bottom: 35px;
            }
            .applications-list{
              display:none;
            }
            .applications-select{
              position: relative;
              font-size: 18px;
            }
            .select{
              display: flex;
              justify-content: space-between;
              align-items: center;
              width:96%;
              height: 50px;
              margin: auto;
              margin-bottom: 20px; 
              background: #F8F8F8;
              border: 1px solid #236B99;
              box-shadow: 1px 1px 5px #D9D9D9;
              border-radius: 5px;
            }
            .select>div{
              margin: 10px;
            }
            .dropdown{
              position: absolute;
              top:45px;
              width: 96%;
              left: 2%;
              background: #F8F8F8;
              border: 1px solid #236B99;
              box-shadow: 1px 1px 5px #D9D9D9;
              border-radius: 5px;
              color: #525252;
            }
            .one_application{
              padding: 12px;
            }
            .application_selected{
              padding: 12px;
              color: #B7B7B7;
            }
           
            .applications-right{
              width:96%; 
              margin: auto;
            }
            .illustration{
              margin-bottom: 10px;
            }
            .illustration>div{
              margin-top: 0;
              font-size: 13px;
            }
            .illustration>label{
              font-size: 12px;
            }
          }
          @media screen and (max-width: 600px){
            .img-header-mobile{           
              width:200%;
              height: auto;
              aspect-ratio:1.7;
              object-fit: cover;
            }
            .content-left{
              width: 90%;
              margin:auto;
              font-size:14px;
              line-height: 20px;
            }
            .select{
              height:36px;
            }
            .applications-select{
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Portfolio
