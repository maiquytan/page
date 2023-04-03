import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isDropdownMenuAction, setIsDropdownMenuAction] = useState(false);
  const [isDropdownCompanyAction, setIsDropdownCompanyAction] = useState(false);
  const router = useRouter();

  const handleDropDownMenuAction = () => {
    setIsDropdownMenuAction(!isDropdownMenuAction);
  };

  const handleDropDownCompanyAction = () => {
    setIsDropdownCompanyAction(!isDropdownCompanyAction);
  };

  useEffect(() => {
    setIsDropdownMenuAction(false);
  }, [router]);

  return (
    <div className="header">
      <div className="menu">
        <div className="menu-main">
          <Link href="/">
            <a className="logo">
              <img
                src="/jp/logoJp.webp"
                className="img-logo"
                alt="logo"
                title="logo"
                width="282"
                height="64"
              />
            </a>
          </Link>
          <div className="menu-content">
            <Link href="/jp">
              <a className="default">
                <p>Top</p>
                <span>会社情報</span>
              </a>
            </Link>
            <Link href="/jp/companyjp">
              <a>
                <p>Company</p>
                <span>会社情報</span>
              </a>
            </Link>
            <Link href="/jp/servicejp">
              <a>
                <p>Service</p>
                <span>サービス概要</span>
              </a>
            </Link>
            <Link href="/jp/workjp">
              <a>
                <p>Work</p>
                <span>開発実績</span>
              </a>
            </Link>
            <Link href="/jp/contactjp">
              <a className="active">
                <p>Contact</p>
                <span>問い合わせ</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-mobile">
        <img
          src="/jp/logoJp.webp"
          className="img-logo"
          alt="logo"
          title="logo"
          width="271"
          height="64"
        />
        <div className="btn-menu" onClick={handleDropDownMenuAction}>
          <img src="/jp/img_menu.svg" alt="menu" title="menu" width="61" height="51" />
        </div>
        {isDropdownMenuAction &&
          <div className="mobile-menu-down">
            <div className="btn_cancle" onClick={handleDropDownMenuAction}>×</div>
            <div>
              <ul>
                <li><Link href="/jp"><a>トップ</a></Link></li>
                <li><Link href="/jp/companyjp"><a>会社概要</a></Link></li>
                <li><Link href="/jp/servicejp"><a>サービス</a></Link></li>
                <li><Link href="/jp/workjp"><a>開発実績</a></Link></li>
                <li><Link href="/jp/contactjp"><a>お問い合わせ</a></Link></li>
              </ul>
            </div>
            <div className="menu-footer">
              <div>
                <img src="/logo1.svg" className="footer-logo" alt="logo" title="logo" width="226" height="38" />
              </div>
              <div className="social-media-wrapper">
                <div className="social-media-icon">
                  <img src="/jp/line.svg" alt="icon" title="icon" width="46" height="46" />
                </div>
                <div className="social-media-icon">
                  <img src="/jp/facebook.svg" alt="icon" title="icon" width="46" height="46" />
                </div>
                <div className="social-media-icon">
                  <img src="/jp/twitter.svg" alt="icon" title="icon" width="46" height="46"
                  />
                </div>
              </div>
            <div className="license">
              <p>COPYRIGHT © AXALIZE INCORPORATED ALL RIGHTS RESERVED</p>
            </div>
            </div>
          </div>
        }
      </div>
      <style jsx>
        {`
          .header {
            width: 100%;
            z-index: 10;
            background: #ffffff;
            font-family: Meiryo;
          }
          .menu {
            background: #ffffff;
          }
          .menu-main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1150px;
            margin: auto;
          }
          .menu-content {
            height: 100%;
            display: flex;
          }
          .menu-content span {
            font-size: 10px;
            padding: 4px 0;
            text-align: center;
          }
          a {
            color: #000000;
            text-decoration: none;
            cursor: pointer;
            font-size: 15px;
            outline: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-item: center;
            padding: 22px;
          }
          a.active {
            background-color: #0fa5ef;
            color: #fff;
          }
          a p {
            padding: 4px;
          }
          a.default p {
            border-bottom: 1px solid #0fa5ef;
          }
          a.default {
            color: #0fa5ef;
          }
          .logo {
            padding: 0;
          }
          .menu-mobile {
            background: #ffffff;
            height: 80px;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            position: relative;
            display: none;
          }
          .mobile-menu-down {
            position: absolute;
            top: 0;
            flex-direction: column;
            width: 100%;
            height: 100vh;
            float: right;
            background-color: #000;
            padding-left: 0px;
            display: block;
            list-style: none;
            z-index: 3;
          }
          ul {
            margin-top: 112px;
          }
          li {
            margin: 20px;
          }
          .btn-menu {
            width: 61px;
            height: 51px;
            margin-right: 14px;
            border-radius: 5px;
            background-color: #0fa5ef;
          }
          .btn_cancle {
            display: flex;
            justify-content: flex-end;
            width: fit-content;
            padding: 1px 18px;
            color: #FFFFFF;
            font-size: 40px;
            font-weight: bold;
            border: 1px solid #FFFFFF;
            border-radius: 10px;
            float: right;
            margin-top: 17px;
            margin-right: 14px;
          }
          .menu-footer{
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 0 14px;
          }
          .social-media-wrapper {
            display: flex;
            gap: 14px;
            margin-top: 23px;
            margin-bottom: 44px;
            list-style: none;
          }
          .social-media-icon {
            width: 46px;
          }
          .license {
            width: 100%;
            margin: auto;
            border-top: 1px solid #fff;
            font-size: 10px;
            color: #fff;
            padding-top: 30px;
            padding-bottom: 26px;
            display: flex;
            justify-content: center;
          }

          @media screen and (max-width: 1024px) {
            .menu {
              display: none;
            }
            .menu-mobile {
              display: flex;
            }
            .header {
              width: 100%;
            }
            li {
              margin: 20px 0;
              margin-left: 30px;
            }
            a {
              color: #FFFFFF;
              font-weight: bold;
              padding: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Header;
