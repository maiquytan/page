import React, { useState } from 'react';
import Head from 'next/head';

import Archivement from '../components/Archivement/Archivement';
import Pagination from '../components/Pagination/Pagination';
import Techniques from '../components/Techniques/Techniques';
import { pageSize, dataApplication, listSelectApplication, HOME_URL } from '../constants';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownApp, setIsDropdownApp] = useState(false);
  const [isSelect, setIsSelect] = useState(listSelectApplication[0]);
  const firstPageIndex = (currentPage - 1) * pageSize;
  const lastPageIndex = firstPageIndex + pageSize;

  const filterData = dataApplication.filter(x => x.category === isSelect.title);

  const handleDropdownOnclick = () => {
    setIsDropdownApp(!isDropdownApp);
  }

  return (
    <>
      <Head>
        <title>Axalize Incorporated Expertise | Providing innovative and effective IT solutions to meet the needs of modern businesses.</title>
        <meta data-n-head="ssr" data-hid="title" name="title"
          content="Axalize Incorporated Expertise | Providing innovative and effective IT solutions to meet the needs of modern businesses." />
        <meta data-n-head="ssr" data-hid="og:title" name="og:title"
          content="Axalize Incorporated Expertise | Providing innovative and effective IT solutions to meet the needs of modern businesses." />
        <meta data-n-head="ssr" data-hid="description" name="description" content="Join us on a journey through our problem-solving process, from initial consultation to solution delivery, and see how we bring your vision to life. Let's partner together to create the next breakthrough solution." />
        <meta data-n-head="ssr" data-hid="og:description" name="og:description" content="Join us on a journey through our problem-solving process, from initial consultation to solution delivery, and see how we bring your vision to life. Let's partner together to create the next breakthrough solution." />
        <meta data-n-head="ssr" data-hid="og:url" name="og:url"
          content={HOME_URL + '/portfolio'} />
        <meta data-n-head="ssr" name="keywords"
          content="" />
        <meta data-n-head="ssr" data-hid="og:image" property="og:image"
          content={HOME_URL + '/logo1.svg'} />
        <meta data-n-head="ssr" data-hid="robots" name="robots" content="index,follow" />
        <meta data-n-head="ssr" data-hid="googlebot" name="googlebot" content="index,follow" />
        <link data-n-head="ssr" data-hid="i18n-can" rel="canonical" href={HOME_URL + '/portfolio'} ></link>
      </Head>

      <div className="portfolio">
        <h1 className="h1">A testament to our expertise and the real-world benefits we bring to our clients.</h1>
        {/* Header */}
        <div className="bg-header session">
          <div className="img-header-pc">
            <img src="/img_header.svg" alt="bg-header" title="bg-header" width="1001" height="557" />
          </div>
          <div className="img-header-mobile">
            <img src="/bg_about.webp" alt="bg-header" title="bg-header" width="1001" height="557" />
          </div>
          <div className="portfolio-header">
            <div className="header-title">Our Works</div>
            <div className="header-content">
              <div className="content-left">From Enterprise Management Systems to E-commerce & Retail Management Systems, Customer-enabling Services, and New Business Ideas, our portfolio is a testament to our expertise and the real-world benefits we bring to our clients. Join us on a journey through our problem-solving process, from initial consultation to solution delivery, and see how we bring your vision to life. Let's partner together to create the next breakthrough solution.</div>
              <div className="content-right">
                <img src="/Group20.webp" alt="img-header" title="img-header" width="737" height="317" />
              </div>
            </div>
          </div>
        </div>

        <Archivement />

        {/* Aplications */}
        <div className="applications session">
          <div className="applications-header">
            <div className="applications-left">
              <label className="item">Aplications</label>
              <div className="crossbar-left-1"></div>
              <div className="crossbar-left-2"></div>
              <div className="applications-list">
                {listSelectApplication.map((list, index) => (
                  <p className={isSelect.id === list.id ? 'application_selected' : 'one_application'} onClick={() => setIsSelect(list)} key={index}> {list.title}</p>
                ))}
              </div>
            </div>
            <div className="applications-select">
              <div className="select" onClick={handleDropdownOnclick}>
                <div> {isSelect.title}</div>
                <div>
                  <img src="/arrow_bottom.svg" alt="arrow-dropdown" title="arrow-dropdown" width="16" height="9" />
                </div>
              </div>
              {isDropdownApp &&
                <div className="dropdown" onClick={handleDropdownOnclick}>
                  {listSelectApplication.map((list, index) => (
                    <div className={isSelect.id === list.id ? 'application_selected' : 'one_application'} onClick={() => setIsSelect(list)} key={index}> {list.title}</div>
                  ))}
                </div>
              }
            </div>

            <div className="applications-right">
              <div className="applications-row">
                {filterData.slice(firstPageIndex, lastPageIndex).map((item, index) => {
                  return (
                    <div className="illustration" key={index}>
                      <img src={item.img} alt="illustration" title="illustration" width="465" height="244" />
                      <div> {item.title}</div>
                      <p> {item.content}</p>
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
              totalCount={filterData.length}
              pageSize={pageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </div>

        {/* Techniques */}
        <Techniques />

        <style jsx>
          {`
          .portfolio {
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
          .applications-select {
            display: none;
          }
          .portfolio-header {
            position: relative;
            height: calc(100vh - 78px);
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
            background-image: url("../Ellipse.svg");
            width: 350px;
            height: 103px;
            font-size: 43px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            font-family: 'Lexend', sans-serif;
            color: #DEDEDE;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
          }
          .header-content {
            display: flex;
            margin-top: 35px;
            max-width: 1260px;
          }
          .content-left {
            width: 36%;
            margin-right: 65px;
            font-size: 18px;
            text-align: justify;
            line-height: 26px;
          }
          .content-right {
            width: 60%;
            height: auto;
          }
          .content-right>img {
            aspect-ratio: 2.4;
            object-fit: contain;
            width: 100%;
            height: auto;
          }
          .item {
            color: #1E1E1E;
            font-size: 32px;
            font-weight: 600;
          }
          .crossbar-left-1 {
            width: 90px;
            height: 4px;
            background: #FC721E;
            margin: 0;
            margin-top: 8px;
            margin-bottom: 3px;
          }
          .crossbar-left-2 {
            width: 90px;
            height: 2px;
            background: #FC721E;
            margin: 0;
            margin-bottom: 17px;
          }

          //applications-------------------------
          .applications {
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .applications-left {
            display: flex;
            flex-direction: column;
            margin-right: 50px;
          }
          .applications-header {
            display: flex;
            max-width: 1260px;
            margin: auto;
            margin-top: 100px;
            margin-bottom: 30px;
          }
          .applications-list {
            display: flex;
            flex-direction: column;
            max-width: 215px;
            height: auto;
            margin-top: 25px;
            border-left: 1px solid #525252;
            padding-left: 15px;
          }
          .applications-list >p {
            margin-top: 10px;
            margin-bottom: 13px;
            cursor: pointer;
            font-size: 18px;
          }
          .application_selected {
            color: #323232;
            font-weight: 600;
            padding: 12px;
          }
          .applications-right {
            width: 76%;
          }
          .illustration {
            width: 49%;
            height: auto;
            background: #F0F0F0;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 30px;
          }
          .applications-row {
            display: flex;
            flex-wrap: wrap;
            gap: 2%;
            width: 100%;
          }
          .illustration>img {
            width: 100%;
            height: auto;
            vertical-align: top;
          }
          .illustration>div {
            font-weight: 500;
            font-size: 20px;
            color: #1667B2;
            margin-left: 11px;
            margin-top: 10px;
          }
          .illustration>p {
            font-size: 14px;
            color: #636363;
            padding-top: 3px;
            padding-left: 11px;
            margin-bottom: 15px;
          }
          .paging {
            display: flex;
            justify-content: center;
            margin-top: 50px;
            margin-bottom: 50px;
          }
          .paging>button {
            width: 32px;
            height: 32px;
            margin-right: 8px;
            background: #FFFFFF;
            border: 1px solid #DFE3E8;
            border-radius: 4px;
            cursor: pointer;
          }
          @media screen and (max-width: 1024px) {
            .session {
              padding: 0 20px;
            }
            .img-header-pc {
              display: none;
            }
            .img-header-mobile {
              display: block;
            }
            .portfolio-header {
              height: auto;
              margin-top: 50px;
              margin-bottom: 50px;
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
            .portfolio-header {
              justify-content: normal;
            }
            .header-title {
              margin-top: 10%;
              background: none;
              width: 100%;
              text-align: center;
            }
            .header-content {
              flex-direction: column-reverse;
              width: 100%;
              margin-top: 25px;
            }
            .content-left {
              width: auto;
              margin: 0;
              padding: 0 20px;
              font-size: 20px;
              line-height: 30px;
            }
            .content-right {
              width: 86%;
              margin: auto;
              margin-top: 5%;
              margin-bottom: 10%;
            }
            .applications-header {
              flex-direction: column;
            }
            .applications-left {
              margin: 0;
              justify-content: center;
              align-items: center;
              margin-bottom: 35px;
            }
            .applications-list {
              display: none;
            }
            .applications-select {
              position: relative;
              font-size: 18px;
              display: block;
              width: auto;
              box-sizing: border-box;
            }
            .select {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 50px;
              margin-bottom: 20px;
              background: #F8F8F8;
              border: 1px solid #236B99;
              box-shadow: 1px 1px 5px #D9D9D9;
              border-radius: 5px;
            }
            .select>div {
              margin: 10px;
            }
            .dropdown {
              position: absolute;
              top: 60px;
              width: 100%;
              background: #F8F8F8;
              border: 1px solid #236B99;
              box-shadow: 1px 1px 5px #D9D9D9;
              border-radius: 5px;
              color: #525252;
              box-sizing: border-box;
            }
            .one_application {
              padding: 12px;
            }
            .applications-right {
              width: auto;
            }
            .illustration {
              margin-bottom: 10px;
            }
          }
          @media screen and (max-width: 768px) {
            .illustration>div {
              font-size: 16px;
            }
            .illustration>p {
              font-size: 15px;
            }
            .img-header-mobile {
              width: 200%;
              height: auto;
              aspect-ratio: 2.1;
              object-fit: cover;
            }
            .content-left {
              font-size: 16px;
              line-height: 25px;
            }
          }
          @media screen and (max-width: 480px) {
            .session {
              padding: 0 12px;
            }
            .header-title {
              font-size: 30px;
            }
            .header-content {
              margin-top: 0;
            }
            .content-right {
              width: 94%;
            }
            .content-left {
              width: auto;
              padding: 0 8px;
              font-size: 14px;
              line-height: 20px;
            }
            .applications-header {
              margin-top: 37px;
            }
            .illustration {
              border-radius: 3px;
            }
            .illustration>div {
              font-size: 13px;
              margin-top: 5px;
            }
            .illustration>p {
              font-size: 12px;
              margin-bottom: 8px;
            }
            .select {
              height: 36px;
            }
            .applications-select {
              font-size: 14px;
            }
            .dropdown {
              top: 45px;
            }
          }
        `}
        </style>
      </div>
    </>
  )
}

export default Portfolio
