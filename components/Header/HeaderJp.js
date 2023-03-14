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
          <Link href="/"><a className="logo">
            <img src="/logoJp.png" className="img-logo" alt="logo" title="logo" width={282} />
          </a></Link>
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
      {/* <div className="menu-mobile">
        <Link href="/"><a className="logo-mobile">
          <img src="/logo1.svg" alt="logo" title="logo" width={176} height={30} />
        </a></Link>
        <div className="btn-menu" onClick={handleDropDownMenuAction}>
          <img src="/menu_mobile.svg" alt="menu" title="menu" width={24} height={24} />
        </div>
        {isDropdownMenuAction &&
          <ul className="mobile-menu-down">
            <li>
              <div>
                <Link href="/e"><a>Company</a></Link>
                <img src="/arrow_mobile_menu.svg" onClick={handleDropDownCompanyAction} className="arrow-menu" alt="arrow" title="arrow" width="11" height="8" />
              </div>
              {isDropdownCompanyAction &&
                <ul className="setting-signout">
                  <li><Link href="/b"><a>X</a></Link></li>
                  <hr></hr>
                  <li><Link href="/b"><a>Y</a></Link></li>
                </ul>
              }
            </li>
            <hr></hr>
            <li><Link href="/service"><a>Service</a></Link></li>
            <hr></hr>
            <li><Link href="/b"><a>Expertise</a></Link></li>
            <hr></hr>
            <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
            <hr></hr>
            <li><Link href="/d"><a>Contact</a></Link></li>
          </ul>
        }
      </div> */}
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
            background: rgba(23, 23, 31, 0.85);
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          .btn-menu {
            position: absolute;
            right: 15px;
          }
          .mobile-menu-down {
            position: absolute;
            flex-direction: column;
            width: 100%;
            height: calc(100vh - 50px);
            float: right;
            top: 50px;
            background-color: #FFFFFF;
            color: red;
            padding-left: 0px;
            display: block;
            list-style: none;
            z-index: 3;
          }
          li {
            margin: 20px;
          }
          hr {
            margin: 0 10px;
            color: #F4F4F4;
          }

          @media screen and (min-width:900px ) {
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
