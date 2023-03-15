import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import AchievementJp from '../../components/ArchievementJp/ArchievementJp';

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
        <link data-n-head="ssr" data-hid="i18n-can" rel="canonical" href="" ></link>
      </Head>
      <div className="container">
        <div className="home">
          {/* Header */}
          <div className="home-header">
            <h1 className="header-title">FEEL YOUR PLEASURE, FIND YOUR TREASURE</h1>
            <p className="header-slogan">システム開発を通じ、それぞれにとっての「価値」を実現する</p>
            <div className="service-btn">
              <button>Axalizeのサービス</button>
            </div>
            <div className="banner-wrapper">
              <div className="banner-img">
                <img src="/jp/banner.webp" alt="banner" width="957" height="497" title="banner"/>
              </div>
            </div>
          </div>
          {/* about us */}
          <div className="about">
            <div className="about-inner">
              <p className="about-title">Axalizeについて</p>
              <p className="about-subTitle">Our Feature.</p>
              <ul className="about-detail">
                <li className="default-text">AxaLize = Axia(価値) + Actualize(実現する)は、日本人CEOを中心に設立されたベトナム拠点のICT企業です。</li>
                <li className="default-text">人それぞれにとっての「価値」を実現するシステム開発を「高品質」「ハイスピード」且つ、日本国内では実現が難しい「低コスト」で提供します。</li>
                <li className="default-text">お客様の専属の開発チームをベトナム弊社内に作り、ブリッジSEや日本人営業を通したやり取りを行いながら開発を行います。</li>
              </ul>
              <div className="ability-wrapper">
                <div className="ability">
                  <div className="ability-number">01</div>
                  <div className="ability-img">
                    <img src="/jp/ability1.svg"  alt="ability" width="41" height="42" title="ability"/>
                  </div>
                  <p className="ability-title">ラボ型開発</p>
                  <p className="ability-content">成果物ではなく、エンジニアの人数と期間をベースにした開発を提供します。要件を固めずに契約が行えるため、柔軟に対応可能な形態で、明確なゴールのない業務（継続的な保守やメンテナンス等）向けの契約形態となります。</p>
                  <Link href="/">
                    <a className="readMore-btn active">Read more</a>
                  </Link>
                </div>
                <div className="ability">
                  <div className="ability-number">02</div>
                  <div className="ability-img">
                    <img src="/jp/ability2.svg"  alt="ability" width="41" height="42" title="ability"/>
                  </div>
                  <p className="ability-title">請負・受託型開発</p>
                  <p className="ability-content">定義した要件に基づき、期日までに成果物の完成を請け負います。 請負開発は契約の通りに開発が進むため、要件が決まっており途中での要件追加や仕様変更が発生しない案件向きの形態です。</p>
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
              <div className="feature-item">
                <div className="feature-img">
                 <img src="/jp/feature1.svg" alt="feature" title ="feature" width="141" height="141"/>
                </div>
                <div className="feature-content">
                  <p className="feature-header">日本人CEOと少数精鋭の高品質</p>
                  <p className="feature-text">日本人CEOや、日本語や日本のマナーの教育に加えて実際に日本で職務経験を積んだメンバーが在籍しており、意思疎通の失敗を防ぐことが可能です。</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-img">
                 <img src="/jp/feature2.svg" alt="feature" title ="feature" width="141" height="141"/>
                </div>
                <div className="feature-content">
                  <p className="feature-header">短期間での開発</p>
                  <p className="feature-text">若くて能力の高いIT技術者で溢れているベトナムでオフショア開発を行うで「高品質」に加え、日本では実現しずらい「低コスト」と「スピード」の全てを満たす開発が実現可能となっております。</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-img">
                 <img src="/jp/feature3.svg" alt="feature" title ="feature" width="141" height="141"/>
                </div>
                <div className="feature-content">
                  <p className="feature-header">柔軟な対応・契約形態</p>
                  <p className="feature-text">ベトナムではアジャイルでの開発が主流となっており、仕様の見直し・変更等が発生した際でも、スピーディーかつ柔軟に対応できます。 また契約面でも1ヶ月1名からといった細かい単位でのご契約が可能です。</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-img">
                 <img src="/jp/feature4.svg" alt="feature" title ="feature" width="141" height="141"/>
                </div>
                <div className="feature-content">
                  <p className="feature-header">日本提携会社との連携</p>
                  <p className="feature-text">弊社では日本のシステム開発会社と業務提携を結んでおり、案件の管理等を委託することも可能ですので、初めてのオフショア開発に不安を感じるお客様でもご安心してご利用いただけます。</p>
                </div>
              </div>
            </div>
          </div>
          {/* Achievement */}
          <AchievementJp/>
          {/* out clients said */}
          <div className="review center-block">
            <p className="default-title review-title">お客様の声</p>
            <p className="default-subTitle">What Our Clients Say</p>
            <p className="review-rex default-text">弊社をご利用いただいたお客様からいただいたお声を一部紹介させていただきます。</p>
            <div className="review-wrapper">
              <div className="review-col">
                <span>,,</span>
                <div className="review-header">
                  <div className="avatar">
                    <img src="/jp/" alt="avatar" title="avatar" width="60" height="60"/>
                  </div>
                  <div className="client-info">
                    <p className="client-name">優秀な開発チームとフレキシブ ルなリソース調整</p>
                    <p className="client-company">株式会社シー・コネクト / 嶽本 泰伸 様</p>
                  </div>
                </div>
                <p className="review-content">非常に不具合の少ない開発をしていただけているので、バグ修正なども従来のシステム開発より少なくなりました。また忙しい時期にアサインメンバーを増やして頂いたり、とても柔軟にリソース調整にご対応頂けるので大変助かっております。</p>
              </div>
              <div className="review-col">
                <span>,,</span>
                <div className="review-header">
                  <div className="avatar">
                    <img src="/jp/" alt="avatar" title="avatar" width="60" height="60"/>
                  </div>
                  <div className="client-info">
                    <p className="client-name">クオリティが高い！</p>
                    <p className="client-company">エンザントレイズ株式会社 / 鍋嶋 正孝 様</p>
                  </div>
                </div>
                <p className="review-content">バグも少ないし仕様通りに開発してくれる正確さが素晴らしいです。ベトナム人エンジニアも日本語担当で安心感がありますが、さらに困った時は現地にいる日本人社長兼エンジニアがサポートしてくれるため、仕様のズレもないし品質が高いです。本当に助かっています！</p>
              </div>
            </div>
            <div className="small-navigate">
              <span className="active"></span>
              <span></span>
            </div>
          </div>
          <div className="news center-block">
            <p className="default-title">新着情報</p>
            <p className="default-subTitle">Latest News</p>
            <div className="news-container" >
              <div className="news-item">
                <div className="news-img">
                  <img src="/jp/" alt="news" title="news" width="350" height="250"/>
                </div>
                <div className="article-info">
                  <p className="article-date">2023.01.26</p>
                  <p className="article-tag">お知らせ</p>
                </div>
                <p className="article-name">独自のブリッジエンジニア育成プログラムを○○社と共同構築</p>
                <Link href="/">
                  <a className="readMore-btn active">Read more</a>
                </Link>
              </div>
              <div className="news-item">
                <div className="news-img">
                  <img src="/jp/" alt="news" title="news" width="350" height="250"/>
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
                  <img src="/jp/" alt="news" title="news" width="350" height="250"/>
                </div>
                <div className="article-info">
                  <p className="article-date">2023.01.20</p>
                  <p className="article-tag">お知らせ</p>
                </div>
                <p className="article-name">当サイトのサイトURL（ドメイン）変更のお知らせ</p>
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
            button, a {
              cursor: pointer;
            }
            .container  {
              width: 100%;
              background: #FFFFFF;
            }
            .home {
              margin-top: 93px;
              width: 100%;
              overflow: hidden;
              font-family: 'Inter', sans-serif;
            }
            .default-text {
              font-size: 16px;
              color: #fff;
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
            }
            .primary-btn{
              background-color:  #0FA5EF;
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
              background-color:  #0FA5EF;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              border: none;
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
              color: #CCCCCC;
            }        
            .default-title {
              margin-top: 180px;
              font-size: 30px;
              font-weight: bold;
              width: fit-content;
              border-bottom: 3px solid #0FA5EF;
            }
            .default-block {
              max-width: 1274px;
              margin: auto;
            }
            .center-block {
              max-width: 1274px;
              margin: auto;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .about {
              width: 100%;
              background-color: #0FA5EF;
              position: relative;
              overflow: hidden;
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
              max-width: 1274px;
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
              gap: 20px
            }
            .ability {
              flex: 1;
              background-color: #fff;
              padding: 45px 30px;
              color: #000;
              border-radius: 5px;
              position: relative;
            }
            .ability-number {
              top: 33px;
              right: 39px;
              color: #E2F5FF;
              font-size: 30px;
              font-weight: bold;
              position: absolute
            }
            .ability-img img {
              width: 41px;
              height: 100%;
              object-fit: cover;
            }
            .ability-title {
              margin-top: 25px;
              font-size: 20px;
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
            .readMore-btn.active{
              color: #0FA5EF;
            }
            .feature-wrapper {
              display: flex;
              width: 100%;
              flex-wrap: wrap;
              gap: 20px;
              margin-top: 17px;
              margin-bottom: 49px;
            }
            .feature-item {
              margin-top: 30px;
              flex-basis: 45%;
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
            .review-title {
              margin-top: 89px;
            }
            .review-text {
              margin-top: 24px;
              color: #000;
            }
            .review-col {
              flex: 1;
              padding: 63px 42px 70px 61px;
              position: relative;
              border: 1px solid #CCCCCC;
              border-radius: 5px;
            }
            .review-col span {
              top: 0;
              position: absolute;
              font-size: 25px;
              color: #0FA5EF;
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
              background-color: #0FA5EF;
            }
            .client-info {
              display: flex;
              flex-direction: column;
            }
            .client-name {
              font-size: 24px;
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
              background-color: #2D2D2D;
              height: 3px;
            }
            .small-navigate span.active {
              background-color: #0FA5EF;
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
            .news-img img{
              width: 100%;
              min-height: 250px;
              height: 250px;
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
            }
            .article-date {;
              height: fit-content;
              border-right: 2px solid #D6D6D6;
              padding-right: 8px;
            }
            .article-tag {
              margin-left: 17px;
            }
            @media screen and (min-width:901px ) {
              .menu-mobile {
                display: none;
              }
            }
  
            @media screen and (max-width: 900px) {
              .home-header,
              .about,
              .feature,
              .review,
              .news  {
                padding: 0 13px;
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
              .about-subTitle {
                font-size: 16px;
              }
              .ability-wrapper {
                flex-direction: column;
                margin-bottom: 112px;
                margin-top: 56px;
              }
              .feature-wrapper {
                gap: 57px;
                flex-direction: column;
              }
              .feature-item {
                flex-direction: column;
                gap: 15px;
                margin-top: 0;
              }
              .center-block {
                align-items: flex-start;
              }
              .review-wrapper{
                overflow-x: scroll;
                overflow-y: hidden;
                display: -webkit-box;
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
              .news-item {
                padding-bottom: 60px;
              }
              .article-info {
                margin-top: 24px;
              }
            }
          `}
        </style>
      </div>
    </>  
  )
}

export default Index