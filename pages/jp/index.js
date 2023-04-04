import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import AchievementJp from '../../components/AchievementJp/AchievementJp';
import { listClientJP, listFeature } from '../../constants';

const Index = () => {
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
        <link data-n-head="ssr" data-hid="i18n-can" rel="canonical" href="" />
      </Head>
      <div className="container">
        <div className="home">
          {/* Header */}
          <div className="home-header">
            <h1 className="header-title">
              FEEL YOUR PLEASURE, FIND YOUR TREASURE
            </h1>
            <p className="header-slogan">
              システム開発を通じ、それぞれにとっての「価値」を実現する
            </p>
            <div className="service-btn">
              <button>Axalizeのサービス</button>
            </div>
            <div className="banner-wrapper">
              <div className="banner-img">
                <img
                  src="/jp/banner.webp"
                  alt="banner"
                  width="957"
                  height="497"
                  title="banner"
                />
              </div>
            </div>
          </div>
          {/* about us */}
          <div className="about">
            <div className="about-inner">
              <p className="about-title">Axalizeについて</p>
              <p className="about-subTitle">Our Feature.</p>
              <ul className="about-detail">
                <li>
                  AxaLize = Axia(価値) +
                  Actualize(実現する)は、日本人CEOを中心に設立されたベトナム拠点のICT企業です。
                </li>
                <li>
                  人それぞれにとっての「価値」を実現するシステム開発を「高品質」「ハイスピード」且つ、日本国内では実現が難しい「低コスト」で提供します。
                </li>
                <li>
                  お客様の専属の開発チームをベトナム弊社内に作り、ブリッジSEや日本人営業を通したやり取りを行いながら開発を行います。
                </li>
              </ul>
              <div className="ability-wrapper">
                <div className="ability">
                  <div className="ability-number">01</div>
                  <div className="ability-img">
                    <img
                      src="/jp/ability1.svg"
                      alt="ability"
                      width="41"
                      height="42"
                      title="ability"
                    />
                  </div>
                  <p className="ability-title">ラボ型開発</p>
                  <div className="ability-content">
                    成果物ではなく、エンジニアの人数と期間をベースにした開発を提供します。要件を固めずに契約が行えるため、柔軟に対応可能な形態で、明確なゴールのない業務（継続的な保守やメンテナンス等）向けの契約形態となります。
                  </div>
                  <Link href="/">
                    <a className="readMore-btn active">Read more</a>
                  </Link>
                </div>
                <div className="ability">
                  <div className="ability-number">02</div>
                  <div className="ability-img">
                    <img
                      src="/jp/ability2.svg"
                      alt="ability"
                      width="41"
                      height="42"
                      title="ability"
                    />
                  </div>
                  <p className="ability-title">請負・受託型開発</p>
                  <div className="ability-content">
                    <p>定義した要件に基づき、期日までに成果物の完成を請け負います。</p>
                    請負開発は契約の通りに開発が進むため、要件が決まっており途中での要件追加や仕様変更が発生しない案件向きの形態です。
                  </div>
                  <Link href="/">
                    <a className="readMore-btn">Read more</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* FEATURE */}
          <div className="feature default-block">
            <p className="default-title">Axalizeについて</p>
            <p className="default-subTitle">Our Feature.</p>
            <div className="feature-wrapper">
              {listFeature.map((feature, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-img">
                    <img src={feature.img} alt="feature" title="feature" width="141" height="141" />
                  </div>
                  <div className="feature-content">
                    <p className="feature-header">{feature.title}</p>
                    <p className="feature-text">{feature.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Achievement */}
          <AchievementJp />
          {/* out clients said */}
          <div className="review center-block">
            <p className="default-title review-title">お客様の声</p>
            <p className="default-subTitle">What Our Clients Say</p>
            <p className="review-rex">
              弊社をご利用いただいたお客様からいただいたお声を一部紹介させていただきます。
            </p>
            <div className="review-wrapper">
              {listClientJP.map((client, index) => (
                <div className="review-col" key={index}>
                  <div className="img-client">
                    <img src="/jp/img-client.svg" alt="avatar" title="avatar" width="43" height="30" />
                  </div>
                  <div className="review-header">
                    <div className="avatar">
                      <img
                        src="/jp/feature4.svg"
                        alt="avatar"
                        title="avatar"
                        width="60"
                        height="60"
                      />
                    </div>
                    <div className="client-info">
                      <p className="client-name">{client.title}</p>
                      <p className="client-company">{client.content}</p>
                    </div>
                  </div>
                  <p className="review-content">{client.text}</p>
                </div>
              ))}
            </div>
            <div className="small-navigate">
              <span className="active"></span>
              <span></span>
            </div>
          </div>
          <div className="news center-block">
            <p className="default-title">新着情報</p>
            <p className="default-subTitle">Latest News</p>
            <div className="news-container">
              <div className="news-item">
                <div className="news-img">
                  <img
                    src="/jp/achievementJp.webp"
                    alt="news"
                    title="news"
                    width="350"
                    height="250"
                  />
                </div>
                <div className="article-info">
                  <p className="article-date">2023.01.26</p>
                  <p className="article-tag">お知らせ</p>
                </div>
                <p className="article-name">
                  独自のブリッジエンジニア育成プログラムを○○社と共同構築
                </p>
                <Link href="/">
                  <a className="readMore-btn active">Read more</a>
                </Link>
              </div>
              <div className="news-item">
                <div className="news-img">
                  <img
                    src="/jp/achievementJp.webp"
                    alt="news"
                    title="news"
                    width="350"
                    height="250"
                  />
                </div>
                <div className="article-info">
                  <p className="article-date">2023.01.20</p>
                  <p className="article-tag">お知らせ</p>
                </div>
                <p className="article-name">サイトリニューアルのお知らせ</p>
                <Link href="/">
                  <a className="readMore-btn active">Read more</a>
                </Link>
              </div>
              <div className="news-item">
                <div className="news-img">
                  <img
                    src="/jp/achievementJp.webp"
                    alt="news"
                    title="news"
                    width="350"
                    height="250"
                  />
                </div>
                <div className="article-info">
                  <p className="article-date">2023.01.20</p>
                  <p className="article-tag">お知らせ</p>
                </div>
                <p className="article-name">
                  当サイトのサイトURL（ドメイン）変更のお知らせ
                </p>
                <Link href="/">
                  <a className="readMore-btn active">Read more</a>
                </Link>
              </div>
            </div>
            <div className="more-btn">
              <button className="primary-btn">More</button>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            button,
            a {
              cursor: pointer;
            }
            .container {
              width: 100%;
              background: #ffffff;
            }
            .home {
              width: 100%;
              overflow: hidden;
              font-family: Meiryo;
            }
            .home-header {
              display: flex;
              flex-direction: column;
              align-items: center;
              color: #000000;
              max-width: 1431px;
              margin: auto;
              background-image: url("jp//bgJp.webp");
              background-position: top;
              background-repeat: no-repeat;
              background-size: contain;
            }
            .header-title {
              margin-top: 22px;
              font-size: 45px;
              font-weight: bold;
              text-align: center;
              width: 558px;
            }
            .header-slogan {
              font-family: Meiryo;
              margin-top: 30px;
              font-size: 20px;
              text-align: center;
            }
            .primary-btn {
              background-color: #0fa5ef;
              color: #fff;
              width: 270px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
              font-size: 15px;
              font-weight: bold;
            }
            .service-btn {
              margin-top: 43px;
            }
            .service-btn button {
              width: 217px;
              height: 57px;
              background-color: #0fa5ef;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
              border-radius: 5px;
              font-size: 15px;
            }
            .banner-wrapper {
              margin-top: 64px;
              width: 957px;
              height: fit-content;
            }
            .banner-img img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .default-subTitle {
              font-size: 18px;
              margin-top: 9px;
              font-weight: bold;
              color: #cccccc;
            }
            .default-title {
              margin-top: 100px;
              font-size: 30px;
              font-weight: bold;
              width: fit-content;
              border-bottom: 3px solid #0fa5ef;
            }
            .default-block {
              max-width: 1170px;
              margin: auto;
              padding: 0 30px;
            }
            .center-block {
              max-width: 1170px;
              padding: 0 30px;
              margin: auto;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .about {
              width: 100%;
              background-color: #0fa5ef;
              position: relative;
              overflow: hidden;
              padding: 0 30px;
              padding-bottom: 78px;
            }
            .about::before {
              position: absolute;
              left: 0;
              right: 0;
              content: "";
              border-left: calc(50vw - 10px) solid transparent;
              border-right: calc(50vw - 10px) solid transparent;
              border-top: 70px solid #fff;
            }
            .about-inner {
              max-width: 1110px;
              margin: auto;
              color: #fff;
            }
            .about-subTitle {
              font-size: 18px;
              margin-top: 9px;
              font-weight: bold;
            }
            .about-title {
              margin-top: 180px;
              font-size: 30px;
              font-weight: bold;
              width: fit-content;
              border-bottom: 3px solid #fff;
            }
            .about-detail {
              margin-top: 15px;
              width: 100%;
              list-style: none;
            }
            .ability-wrapper {
              margin-top: 35px;
              display: flex;
              gap: 20px;
            }
            .ability {
              flex: 1;
              background-color: #fff;
              padding: 45px 40px;
              color: #000;
              border-radius: 5px;
              position: relative;
            }
            .ability-number {
              top: 33px;
              right: 39px;
              color: #e2f5ff;
              font-size: 30px;
              font-weight: bold;
              position: absolute;
            }
            .ability-img {
              width: 42px;
              height: 43px;
            }
            .ability-img img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .ability-title {
              margin-top: 25px;
              font-size: 20px;
              line-height: 30px;
              font-weight: bold;
            }
            .ability-content {
              font-size: 16px;
              margin-top: 15px;
              margin-bottom: 14px;
            }
            .readMore-btn {
              font-family: Meiryo;
              font-weight: bold;
              font-size: 15px;
              text-decoration: none;
              color: #000;
            }
            .readMore-btn.active {
              color: #0fa5ef;
            }
            .feature-wrapper {
              display: flex;
              width: 100%;
              flex-wrap: wrap;
              gap: 2%;
              margin-top: 17px;
              margin-bottom: 49px;
            }
            .feature-item {
              margin-top: 30px;
              width: 49%;
              display: flex;
              gap: 30px;
              align-items: center;
              color: #000;
            }
            .feature-img img {
              width: 141px;
              height: 100%;
              object-fit: cover;
            }
            .feature-header {
              font-size: 24px;
              font-weight: bold;
            }
            .feature-text {
              margin-top: 13px;
              font-size: 16px;
            }
            .review {
              padding: 0 30px;
            }
            .review-title {
              margin-top: 89px;
            }
            .review-rex {
              padding-top: 24px;
            }
            .review-text {
              margin-top: 24px;
              color: #000;
            }
            .review-col {
              flex: 1;
              padding: 63px 42px 70px 61px;
              position: relative;
              border: 1px solid #cccccc;
              border-radius: 5px;
            }
            .review-col span {
              top: 0;
              position: absolute;
              font-size: 25px;
              color: #0fa5ef;
            }
            .review-wrapper {
              margin-top: 52px;
              display: flex;
              gap: 30px;
              width: 100%;
            }
            .review-header {
              width: 100%;
              display: flex;
              gap: 20px;
            }
            .avatar img {
              width: 70px;
              min-width: 70px;
              height: 70px;
              border-radius: 50%;
              background-color: #0fa5ef;
            }
            .client-info {
              display: flex;
              flex-direction: column;
            }
            .img-client {
              position: absolute;
              top: 20px;
              right: 20px;
            }
            .client-name {
              font-size: 24px;
              line-height: 30px;
              font-weight: bold;
              height: 72px;
            }
            .review-content {
              font-size: 16px;
              color: #000;
              margin-top: 15px;
            }
            .small-navigate {
              margin-top: 30px;
              width: 100%;
              display: flex;
              justify-content: center;
              align-item: center;
              gap: 15px;
            }
            .small-navigate span {
              width: 30px;
              background-color: #2d2d2d;
              height: 3px;
            }
            .small-navigate span.active {
              background-color: #0fa5ef;
            }
            .news-container {
              margin-top: 51px;
              display: flex;
              flex-direction: row;
              gap: 30px;
              width: 100%;
            }
            .news-item {
              flex: 1;
              display: flex;
              flex-direction: column;
              width: 100%;
            }
            .news-img img {
              width: 100%;
              min-height: 250px;
              height: 250px;
              vertical-align: top;
              object-fit: cover;
            }
            .article-info {
              margin-top: 20px;
              display: flex;
              font-size: 16px;
              color: #000;
              display: flex;
              align-items: center;
            }
            .news-item a {
              margin-top: 8px;
            }
            .article-name {
              margin-top: 29px;
              height: 67px;
              font-size: 20px;
              font-weight: bold;
            }
            .article-date {
              text-align: center;
            }
            .more-btn {
              margin-top: 70px;
              width: 100%;
              display: flex;
              justify-content: center;
            }
            .article-date {
              height: fit-content;
              border-right: 2px solid #d6d6d6;
              padding-right: 8px;
            }
            .article-tag {
              margin-left: 17px;
            }

            @media screen and (max-width: 1024px) {
              .home-header,
              .about,
              .feature,
              .review,
              .news {
                padding: 0 30px;
              }
              .default-title {
                margin-top: 94px;
              }
              .default-subTitle {
                margin-top: 13px;
              }
              .header-title {
                width: unset;
              }
              .banner-wrapper {
                width: 100%;
              }
              .header-slogan {
                font-size: 14px;
              }
              .about-title {
                font-size: 25px;
              }
              .about::before {
                border-top: 60px solid #fff;
              }
              .about-subTitle {
                font-size: 16px;
              }
              .ability-wrapper {
                flex-direction: column;
                margin-bottom: 112px;
                margin-top: 56px;
              }
              .feature-wrapper {
                margin-top: 47px;
                gap: 57px;
                flex-direction: column;
              }
              .feature-item {
                width: 100%;
                flex-direction: column;
                gap: 15px;
                margin-top: 0;
              }
              .feature-header {
                text-align: center;
              }
              .center-block {
                align-items: flex-start;
              }
              .review-wrapper {
                overflow-x: scroll;
                overflow-y: hidden;
                display: -webkit-box;
              }
              .news-img img{
                height: auto;
              }
              .review-wrapper::-webkit-scrollbar {
                display: none;
              }
              .review-col {
                flex: unset;
                width: 100%;
                padding: 67px 17px 46px 17px;
              }
              .news-container {
                flex-direction: column;
                margin-top: 39px;
              }
              .article-info {
                margin-top: 24px;
              }
            }
            @media screen and (max-width: 768px) {
              .home-header,
              .about,
              .feature,
              .review,
              .news {
                padding: 0 20px;
              }
              .about::before {
                border-top: 50px solid #fff;
              }
              .about-title {
                margin-top: 100px;
              }
              .ability {
                padding: 45px 30px;
              }
              .header-title {
                font-size: 32px;
                margin-top: 100px;
              }
              .feature-header {
                text-align: left;
                font-size: 20px;
              }
              .achievement-container {
                flex-direction: column;
              }
              .feature-item {
                padding-left: 30px;
              }
            }
            @media screen and (max-width: 480px) {
              .home-header,
              .about,
              .feature,
              .review,
              .news {
                padding: 0 15px;
              }
              .about::before {
                border-top: 15px solid #fff;
              }
              .about-title {
                margin-top: 65px;
              }
              .ability {
                padding: 45px 16px;
              }
              .banner-wrapper {
                margin-bottom: 74px;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Index;
