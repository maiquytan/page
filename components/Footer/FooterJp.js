import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-introduce">
        <div className="introduce-inner">
          <div className="introduce-detail">
            <div className="introduce-img">
              <img
                src="/jp/introduce_img.webp"
                alt="introduce"
                title="introduce"
                width="445"
                height="278"
              />
            </div>
            <div className="introduce-content">
              <div className="introduce-header">
                <p className="introduce-title">お見積依頼お待ちしています</p>
                <p className="footer-text">
                  次のようなお客様のお見積りも大歓迎です。お気軽にお問い合わせください。
                </p>
              </div>
              <ul className="services">
                <li className="footer-text">
                  ・既存のサービスと類似のサービスを作りたい
                </li>
                <li className="footer-text">
                  ・具体案はないが、開発コストの超概算を知りたい
                </li>
                <li className="footer-text">
                  ・日本国内開発との相見積もりを行いたい
                </li>
                <li className="footer-text">
                  ・他社に依頼が決まっているが、参考程度に知りた
                </li>
              </ul>
              <button className="contact-btn">Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-content">
          <img
            src="/logo1.svg"
            className="footer-logo"
            alt="logo"
            title="logo"
            width="226"
            height="38"
          />
          <p className="footer-text">
            システム開発を通じて人それぞれにとっての新しい「価値」を実現します
          </p>
          <ul className="social-media-wrapper">
            <li className="social-media-icon">
              <img
                src="/jp/line.svg"
                alt="icon"
                title="icon"
                width="46"
                height="46"
              />
            </li>
            <li className="social-media-icon">
              <img
                src="/jp/facebook.svg"
                alt="icon"
                title="icon"
                width="46"
                height="46"
              />
            </li>
            <li className="social-media-icon">
              <img
                src="/jp/twitter.svg"
                alt="icon"
                title="icon"
                width="46"
                height="46"
              />
            </li>
          </ul>
          <div className="content-group phone-group">
            <label>Tel.</label>
            <p className="footer-text">(+84) 248-585-8389</p>
          </div>
          <div className="content-group address-group">
            <label>Address</label>
            <p className="footer-text">
              2F, 29T1 BUILDING, NGUYEN THI THAP ST., TRUNG HOA W., CAU GIAY
              DIST., HANOI
            </p>
          </div>
          <div className="content-group email-group">
            <label>Email</label>
            <p className="footer-text">contact@axalize.vn</p>
          </div>
        </div>
        <div className="license">
          <p>COPYRIGHT © AXALIZE INCORPORATED ALL RIGHTS RESERVED</p>
        </div>
      </div>
      <style jsx>
        {`
          .footer {
            padding-top: 60px;
            color: #ffffff;
            background-color: #fff;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: fit-content;
            font-family: Meiryo;
          }
          .footer-introduce {
            width: 100%;
            z-index: 3;
            transform: translateY(126px);
          }
          .introduce-content {
            display: flex;
            flex-direction: column;
          }
          .introduce-inner {
            margin: 0 80px;
            background-color: #0fa5ef;
            padding-top: 113px;
            padding-bottom: 106px;
          }
          .introduce-detail {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            max-width: 1110px;
            margin: auto;
            gap: 57px;
            padding: 0 20px;
          }
          .introduce-img img {
            width: 445px;
          }
          .introduce-img>img {
            width: 100%;
            height: 100%;
            aspect-ratio: 1.6;
            object-fit: cover;
          }
          .introduce-title {
            color: #fff;
            font-size: 30px;
            font-weight: bold;
          }
          .footer-text {
            color: #fff;
            font-size: 16px;
          }
          .services {
            margin-top: 28px;
            list-style: none;
          }
          .contact-btn {
            margin-top: 37px;
            background-color: #fff;
            color: #0fa5ef;
            width: 270px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            font-size: 15px;
            font-weight: bold;
          }
          .footer-main {
            background-color: #181b1b;
            width: 100%;
            z-index: 2;
            padding-top: 154px;
          }
          .footer-content {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            max-width: 1110px;
            margin: auto;
            padding-left: 86px;
            padding-bottom: 42px;
          }
          .footer-content p {
            margin-top: 12px;
          }
          .footer-logo {
            width: 226px;
            object-fit: cover;
          }
          .social-media-wrapper {
            display: flex;
            gap: 14px;
            margin-top: 18px;
            list-style: none;
          }
          .social-media-icon {
            width: 46px;
          }
          .content-group {
            display: flex;
            flex-direction: column;
            color: #fff;
            margin-top: 18px;
          }
          .content-group:nth-of-type(1) {
            margin-top: 16px;
          }
          .content-group label {
            font-size: 12px;
          }
          .content-group p {
            margin-top: 0;
          }
          .license {
            width: 100%;
            max-width: 1110px;
            margin: auto;
            border-top: 1px solid #fff;
            font-size: 12px;
            color: #fff;
            padding: 40px 0;
            display: flex;
            justify-content: center;
          }
          @media screen and (max-width: 1024px) {
            .introduce-inner {
              margin: 0 15px;
              padding-top: 24px;
              padding-bottom: 88px;
            }
            .introduce-title {
              font-size: 25px;
            }
            .contact-btn {
              align-self: center;
              margin-left: -15px;
            }
            .introduce-detail {
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 26px;
            }
            .footer-content {
              padding: 0 23px 0 33px;
            }
            .footer-logo {
              width: 227px;
            }
            .social-media-wrapper {
              margin-top: 62px;
            }
            .phone-group {
              margin-top: 26px;
            }
            .address-group {
              margin-top: 23px;
            }
            .email-group {
              margin-top: 30px;
            }
            .license {
              width: calc(100% - 26px);
              margin-top: 54px;
              padding-top: 30px;
              padding-bottom: 43px;
            }
            .introduce-img {
              width: 100%;
              max-width: 600px;
              margin: auto;
            }
          }
          @media screen and (max-width: 480px) {
            .introduce-detail {
              padding: 0 16px;
            }
            .footer {
              padding: 0;
            }
            .license {
              font-size: 10px;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
