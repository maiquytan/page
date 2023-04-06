import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';

import { listLanguage, listTechnologyJP } from '../../constants';

const Servicejp = () => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [startX, setStartX] = useState(0);
  const listRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX);
    listRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.pageX - startX;
      listRef.current.scrollLeft = scrollPosition - deltaX;
      setIsMoving(true);
    }
  };

  const handleMouseUp = () => {
    setTimeout(() => {
      setIsMoving(false);
    }, 10);
    setIsDragging(false);
    setScrollPosition(listRef.current.scrollLeft);
    listRef.current.style.cursor = 'grab';
  };

  return (
    <div className="service">
      <div className="caption">
        <h1 className="caption-main">サービス概要</h1>
        <span></span>
        <p className="caption-title">Service</p>
        <div>
          <p>Axalizeでは「ラボ型開発」と「請負・受託開発」の契約形態をご提供しております。</p>
          お客様のプロジェクトに合わせてご利用ください。
        </div>
      </div>

      <div className="bg-development">
        <div className="bg-development2"></div>
        <div className="development">
          <div className="development-left">
            <img src="/jp/img_develop.webp" title="img_service" alt="img_service" width="944" height="425" />
          </div>
          <div className="content">
            <div className="content-img">
              <img src="/jp/img_service1.svg" title="img_service" alt="img_service" width="44" height="50" />
              <h2>ラボ型開発</h2>
            </div>
            <p>お客様専属のエンジニアチームをベトナム弊社内に編成し、期間契約を結ぶ開発形態です。契約した期間、編成したエンジニアチームを自社のリソースとして用いていただけます。</p>
            <p> ラボ型開発では、「成果物」ではなくエンジニアの人数と期間に対して契約が結ばれ、報酬が発生します。その性質上、プロジェクトの要件を固めずとも契約が行えるため、保守や運用といったプロジェクトへの対応や、途中での仕様変更等にも対応が可能な柔軟な契約形態です。</p>
            <div className="development-list"
              ref={listRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div className="title-list">
                <div>特徴</div>
                <p>お客様の指示に従い開発</p>
                <p> 変更を前提とした開発</p>
              </div>
              <div className="title-list cost">
                <div>費用</div>
                <p>働いた時間に対しての対価</p>
              </div>
              <div className="title-list">
                <div>案件例</div>
                <p>自社サービス等納期未定の案件</p>
                <p>メンテナンス作業が頻繁に発生</p>
                <p> アジャイル式でデモアプリ作成</p>
              </div>
            </div>
          </div>
        </div>
        <div className="illustration">
          <h2>ラボ型開発のイメージ</h2>
          <div className="illustration-develop">
            <img src="/jp/img_service2.svg" title="img_service" alt="img_service" width="1110" height="388" />
          </div>
          <div className="illustration-develop-mobile">
            <img className="img-country" src="/jp/illustration_develop1.svg" title="img_service" alt="img_service" width="107" height="78" />
            <img className="img-logo" src="/jp/illustration_develop2.svg" title="img_service" alt="img_service" width="51" height="67" />
            <div className="customer">お客様</div>
            <div className="img-arrow">
              <img src="/jp/illustration_develop3.svg" title="img_service" alt="img_service" width="53" height="133" />
              <img src="/jp/illustration_develop4.svg" title="img_service" alt="img_service" width="144" height="55" />
              <img src="/jp/illustration_develop5.svg" title="img_service" alt="img_service" width="53" height="133" />
            </div>
            <div className="illustration-service">
              <img className="img-country" src="/jp/illustration_develop6.svg" title="img_service" alt="img_service" width="107" height="78" />
              <img className="img-logo" src="/jp/illustration_develop7.svg" title="img_service" alt="img_service" width="177" height="177" />
              <img src="/jp/illustration_develop8.svg" title="img_service" alt="img_service" width="53" height="105" />
              <img src="/jp/illustration_develop9.svg" title="img_service" alt="img_service" width="233" height="208" />
            </div>
          </div>
        </div>
      </div>

      <div className="contract-bg">
        <div className="contract">
          <div className="content contract-left">
            <div className="content-img">
              <img src="/jp/img_service3.svg" title="img_service" alt="img_service" width="30" height="43" />
              <h2>請負・受託型開発</h2>
            </div>
            <p>お客様からの依頼に応じてプロジェクトの工数計算を行い、納品時期を決めて契約する形態です。</p>
            <p>ラボ型開発との大きな違いは納品物に対して補修が発生する点です。</p>
            <p> 開発から完成までの工程が最初から明確になっており、リリースまでのスケジュールが決まっているプロジェクト向けの開発形態です。</p>
            <div className="contract-list">
              <div className="title-list">
                <div>特徴</div>
                <p>仕様書・設計書に従い開発  </p>
                <p> (ウォーターフォール)</p>
                <p>変更の際、調整が随時発生</p>
              </div>
              <div className="title-list cost">
                <div>費用</div>
                <p>納品物に対しての対価</p>
              </div>
              <div className="title-list">
                <div>案件例</div>
                <p>納品時期が決まっている</p>
                <p>仕様確定済み</p>
                <p>仕様変更が少ない</p>
                <p> 単発的な案件</p>
              </div>
            </div>
          </div>
          <div className="development-left">
            <img src="/jp/img_contract.webp" title="img_service" alt="img_service" width="942" height="425" />
          </div>
        </div>
        <div className="illustration">
          <h2>請負・受託型開発の流れ</h2>
          <div className="illustration-contract">
            <div className="img-se">
              <img src="/jp/img_service4.svg" title="img_service" alt="img_service" width="542" height="322" />
            </div>
            <div className="img-se">
              <img src="/jp/illustration_contract6.svg" title="img_service" alt="img_service" width="542" height="322" />
              <div className="img-se-content">
                <img className="step02-title" src="/jp/illustration_contract4.svg" title="img_service" alt="img_service" width="57" height="46" />
                <img className="step02-text" src="/jp/illustration_contract5.svg" title="img_service" alt="img_service" width="192" height="72" />
              </div>
            </div>
          </div>
          <div className="illustration-contract-mobile">
            <div className="one-illustration">
              <div className="step">
                <img className="step-title" src="/jp/illustration_contract1.svg" title="img_service" alt="img_service" width="67" height="45" />
                <img className="step-text" src="/jp/illustration_contract2.svg" title="img_service" alt="img_service" width="208" height="48" />
              </div>
              <div className="step-content">
                <img src="/jp/illustration_contract3.svg" title="img_service" alt="img_service" width="399" height="237" />
              </div>
            </div>
            <div className="one-illustration">
              <div className="step">
                <img className="step-title" src="/jp/illustration_contract4.svg" title="img_service" alt="img_service" width="67" height="45" />
                <img className="step-text" src="/jp/illustration_contract5.svg" title="img_service" alt="img_service" width="192" height="72" />
              </div>
              <div className="step-content">
                <img src="/jp/illustration_contract6.svg" title="img_service" alt="img_service" width="399" height="237" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="technology">
        <div className="technology-container">
          <div className="technology-header">
            <h2>技術領域</h2>
            <p>Technology</p>
          </div>
          <div className="technology-list">
            {listTechnologyJP.map((li, index) => (
              <div className="one-technology" key={index}>
                <div className="img-technology">
                  <img src={li.img} title="img_service" alt="img_service" width="97" height="97" />
                </div>
                <div className="technology-title">{li.title}</div>
                <p>{li.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="language"
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {listLanguage.map((lang, index) => (
          <div className="one-language" key={index}>
            <img src={lang.img} title="img_language" alt="img_language" width="120" height="120" />
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .service {
            width: 100%;
            background: #FFFFFF;
            font-family: Meiryo , sans-serif;
            line-height: 24px;
          }
          .caption {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: fix-content;
            padding-top: 90px;
            padding-bottom: 135px;
          }
          .caption>span {
            height: 3px;
            width: 170px;
            background: #0FA5EF;
          }
          .caption>div {
            line-height: 24px;
          }
          .caption-main {
            font-size: 30px;
            line-height: 45px;
            font-weight: bold;
            width: fit-content;
          }
          .caption-title {
            color: #CECECE;
            font-size: 18px;
            font-weight: bold;
            margin-top: 9px;
            margin-bottom: 7px;
          }
          .bg-development {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 1450px;
            overflow: hidden;
          }
          .bg-development2 {
            position: absolute;
            width: 100%;
            height: calc( 100% - 154px);
            z-index: -1;
            margin: 77px;
            background-image: url("/jp/bg_develop.webp");
            background-size:50%;
          }
          .development {
            display: flex;
            gap: 41px;
            padding-right: 20px;
          }
          .development-left {
            width: 60%;
            max-width: 944px;
          }
          .development-left>img {
            width: 100%;
            height: 100%;
            aspect-ratio: 2.22;
            vertical-align: top;
            object-fit: contain;
          }
          .content {
            width: 35%;
            min-width: 450px;
            max-width: 533px;
            position: relative;
          }
          .content-img {
            display: flex;
            align-items: center;
            margin-top: 25px;
            margin-bottom: 15px;
          }
          .content-img>img {
            margin-right: 32px;
          }
          .content-img>h2 {
            font-size: 30px;
          }
          .content>p {
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 24px;
          }
          .development-list {
            position: absolute;
            right: 0;
            top: 300px;
            display: flex;
            padding : 59px 0;
            background: #FAFAFA 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
          }
          .title-list {
            width: 33.3%;
            min-width: 282px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .title-list>div {
            width: 90px;
            padding: 4px 0;
            text-align: center;
            background-color: #4ABBF3;
            border-radius: 20px;
            color: #FFFFFF;
            font-size: 15px;
            font-weight: bold;
            margin-bottom: 21px;
          }
          .title-list>p {
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
          }
          .cost {
            border-left: 3px solid #D2D2D2;
            border-right: 3px solid #D2D2D2;
          }
          .illustration {
            max-width: 1150px;
            margin: auto;
            margin-top: 275px;
            padding: 0 20px;
          }
          .illustration-develop {
            width: 100%;
            margin-top: 89px;
          }
          .illustration-develop>img {
            width: 100%;
            height: auto;
          }
          .illustration-develop-mobile {
            display: none;
          }
          .img-country {
            position: absolute;
            left: 16%;
            top: 26px;
          }
          .img-logo {
            margin-top: 150px;
          }
          .illustration-service {
            background: #C3E7F9;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: 44px;
            gap: 20px;
            padding-bottom: 73px;
            position: relative;
          }
          .img-arrow {
            display: flex;
            gap: 7px;
            align-items: center;
          }
          .customer {
            padding: 13px 61px 6px 61px;
            background: #4ABBF3;
            border-radius: 20px;
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
            margin-top: 61px;
            margin-bottom: 42px;
          }
          .illustration>img {
            width: 100%;
            height: auto;
          }
          .illustration-contract {
            display: flex;
            justify-content: space-between;
            gap: 2%;
            margin-top: 87px;
          }
          .img-se {
            position: relative;
            z-index: 1;
            width: 49%;
          }
          .img-se>img {
            width: 100%;
            height: auto;
          }
          .img-se-content {
            width: 33%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;
          }
          .step02-title {
            width: 33%;
            height: auto;
          }
          .step02-text {
            width: 100%;
            height: auto;
          }
          .illustration-contract-mobile {
            display: none;
          }
          .contract {
            display: flex;
            gap: 42px;
            justify-content: flex-end;
            padding-left: 20px;
          }
          .contract-left>p {
            margin: 0;
          }
          .contract-list {
            position: absolute;
            left: 0;
            top: 270px;
            display: flex;
            padding : 52px 0;
            background: #FAFAFA 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            cursor: context-menu;
          }
          .technology {
            background-color: #0FA5EF;
            margin-top: 173px;
            padding: 0 30px;
          }
          .technology-container {
            max-width: 1110px;
            margin: auto;
            padding-top: 70px;
            padding-bottom: 94px;
          }
          .technology-header {
            font-weight: bold;
            color: #FFFFFF;
            margin-bottom: 64px;
          }
          .technology-header>h2 {
            width: 130px;
            font-size: 30px;
            line-height: 45px;
            border-bottom: 3px solid #FFFFFF;
          }
          .technology-header>p {
            width: 100px;
            text-align: center;
            font-size: 18px;
            line-height: 27px;
          }
          .technology-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          .one-technology {
            background-color: #FFFFFF;
            width: calc(50% - 10px) ;
            border-radius: 5px;
            padding: 30px 39px;
          }
          .technology-title {
            font-size: 20px;
            line-height: 30px;
            font-weight: bold;
            padding-top: 30px;
            padding-bottom: 15px;
          }
          .language {
            display: flex;
            flex-wrap: wrap;
            max-width: 1110px;
            margin: auto;
            margin-top: 98px;
            gap: 1%;
            justify-content: center;
          }
          .one-language {
            width: 19%;
            margin-bottom: 45px;
            display: flex;
            justify-content: center;
          }
          @media screen and (max-width: 1024px) {
            .caption {
              padding: 30px;
            }
            .bg-development {
              padding: 0 30px;
              height: auto;
            }
            .bg-development2 {
              margin: 0;
              margin-top: 60px;
              width: calc( 100% - 30px);
            }
            .development {
              flex-direction: column;
              gap: 18px;
              padding: 0;
            }
            .development-left {
              width: 100%;
              margin-top: 60px;
            }
            .content {
              width: 100%;
              max-width: 1024px;
              min-width: 0;
            }
            .title-list {
              min-width: 0;
            }
            .development-list,.contract-list {
              position: static;
              overflow: auto;
              margin-top: 30px;
            }
            .development-list::-webkit-scrollbar-track {
              display: none;
            }
            .development-list::-webkit-scrollbar {
              display: none;
            }
            .language::-webkit-scrollbar-track {
              display: none;
            }
            .language::-webkit-scrollbar {
              display: none;
            }
            .contract-list::-webkit-scrollbar-track {
              display: none;
            }
            .contract-list::-webkit-scrollbar {
              display: none;
            }
            .illustration {
              margin-top: 63px;
              padding: 0;
            }
            .illustration-develop {
              display: none;
            }
            .illustration-develop-mobile {
              display: flex;
              flex-direction: column;
              align-items: center;
              position: relative;
              margin-top: 25px;
            }
            .contract-bg {
              padding: 0 30px;
            }
            .contract {
              flex-direction: column-reverse;
              padding-left: 0;
            }
            .content-img>h2 {
              font-size: 20px;
            }
            .illustration-contract {
              display: none;
              flex-direction: column;
              margin-top: 87px;
            }
            .illustration-contract>img {
              width: 100%;
            }
            .one-illustration {
              margin-bottom: 60px;
            }
            .one-illustration>div {
              width: 80%;
            }
            .illustration-contract-mobile {
              display: flex;
              flex-direction: column;
              margin-top: 51px;
            }
            .step {
              witdh: 100%;
              display: flex;
              align-items: flex-start;
              margin-bottom: 37px;
            }
            .step-title {
              margin-right: 27px;
            }
            .step-text {
              width: 52%;
              max-width: 208px;
            }
            .step-content>img {
              width: 100%;
              height: auto;
            }
            .technology {
              padding: 0 30px;
              margin: 0;
            }
            .one-technology {
              width: 100%;
              padding: 30px 29px;
            }
            .img-technology {
              max-width: 71px;
            }
            .img-technology>img {
              width: 100%;
              height: auto;
            }
            .technology-title {
              padding-top: 18px;
              padding-bottom: 9px;
            }
          }
          @media screen and (max-width: 768px) {
            .caption {
              align-items: flex-start;
              text-align: left;
              padding: 30px;
              border-bottom: 1px solid gray;
              border-top: 1px solid gray;
            }
            .caption-main {
              font-size: 25px;
            }
            .caption-title {
              font-size: 16px;
              margin-top: 11px;
              margin-bottom: 19px;
            }
            .title-list {
              min-width: 282px;
            }
            .bg-development2 {
              background-size: auto;
            }
            .language {
              flex-wrap: nowrap;
              justify-content: normal;
              max-width: auto;
              overflow: auto;
            }
            .one-language {
              width: 100%;
            }
            .one-illustration>div {
              width: 100%;
            }
          }
          @media screen and (max-width: 480px) {
            .caption {
              padding: 30px 14px;
            }
            .bg-development {
              padding: 0 14px;
            }
            .contract-bg {
              padding: 0 14px;
            }
            .technology {
              padding: 0 15px;
            }
          }
        `}
      </style>
    </div>
  )
}
export default Servicejp;
