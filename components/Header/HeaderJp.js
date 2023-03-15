import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isDropdownMenuAction, setIsDropdownMenuAction] = useState(false);
  const [isDropdownCompanyAction, setIsDropdownCompanyAction] = useState(false);
  const router = useRouter()

  const handleDropDownMenuAction = () => {
    setIsDropdownMenuAction(!isDropdownMenuAction)
  }

  const handleDropDownCompanyAction = () => {
    setIsDropdownCompanyAction(!isDropdownCompanyAction)
  }

  useEffect(() => {
    setIsDropdownMenuAction(false);
  }, [router])

  return (
    <div className="header">
      <div className="menu">
        <div className="menu-main">
          <Link href="/">
            <a className="logo">
              <img src="/jp/logoJp.webp" className="img-logo" alt="logo" title="logo" width="282" height="64" />
            </a>
          </Link>
          <div className="menu-content">
            <Link href="/e">
              <a className="default">
                <p>Top</p> 
                <span>会社情報</span>
              </a>
            </Link>
            <Link href="/service">
              <a>
                <p>Company</p> 
                <span>会社情報</span>
              </a>
            </Link>
            <Link href="/b">
              <a>
                <p>Service</p> 
                <span>サービス概要</span>
              </a>
            </Link>
            <Link href="/d">
              <a>
                <p>Work</p> 
                <span>開発実績</span>
              </a>
            </Link>
            <Link href="/d">
              <a className="active">
                <p>Contact</p> 
                <span>問い合わせ</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-mobile">
      <Link href="/">
            <a className="logo">
              <img src="/logoJp.webp" className="img-logo" alt="logo" title="logo" width="271" height="64" />
            </a>
          </Link>
        <div className="btn-menu" onClick={handleDropDownMenuAction}>
          <img src="/" alt="menu" title="menu" width="61" height="51" />
        </div>
      </div>
      <style jsx>
        {`
          .header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 10;
            background: #FFFFFF;
            font-family: Meiryo;
          }
          .menu {
            background: #FFFFFF;
          }
          .menu-main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1274px;
            margin: auto;
          }
          .menu-content {
            height: 100%;
            display: flex;        
          }
          .menu-content span {
            font-size: 10px;
            padding: 4px 0;
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
            padding: 22px   ;
          }
          a.active {
            background-color: #0FA5EF;
            color: #fff; 
          }
          a p {
            padding: 4px;
          }
          a.default p {
            border-bottom: 1px solid #0FA5EF;
          }
          a.default{
            color: #0FA5EF;
          }
          .logo {
            padding: 0;
          }
          .menu-mobile {
            background: #FFFFFF;
            height: 80px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .btn-menu {
            width: 61px;
            height: 51px;
            margin-right: 14px;
            border-radius: 5px;
            background-color: #0FA5EF;
          }
          @media screen and (min-width:901px ) {
            .menu-mobile {
              display: none;
            }
          }

          @media screen and (max-width: 900px) {
            .menu,.address {
              display: none;
            }
            .header {
              width: 100%;
            }
            a {
              color: #6E6E73;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Header
