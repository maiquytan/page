import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { listMenuVN } from '../../constants';

const Header = () => {
  const [isDropdownMenuAction, setIsDropdownMenuAction] = useState(false);
  const [isDropdownCompanyAction, setIsDropdownCompanyAction] = useState(false);

  const router = useRouter();

  const handleDropDownMenuAction = () => {
    setIsDropdownMenuAction(!isDropdownMenuAction);
  }

  const handleDropDownCompanyAction = () => {
    setIsDropdownCompanyAction(!isDropdownCompanyAction);
  }

  useEffect(() => {
    setIsDropdownMenuAction(false);
  }, [router]);

  return (
    <header className="header">
      <div className="menu">
        <div className="menu-main container">
          <Link href="/"><a className="logo">
            <img src="/logo1.svg" className="img-logo" alt="logo" title="logo" width="323" height="55" />
          </a></Link>
          <div className="menu-content">
            <div className="company-pc"><p>Company</p> <img src="/arrow_menu.svg" className="arrow-menu" alt="arrow" title="arrow" width="11" height="8" />
                <div className="dropdown">
                  <ul>
                    <li><Link href="/service"><a>Service</a></Link></li>
                    <li><Link href="/expertise"><a>Expertise</a></Link></li>
                    <li><Link href="/client"><a>Client</a></Link></li>
                    <li><Link href="/team"><a>Team</a></Link></li>
                  </ul>
                </div>
            </div>
            {listMenuVN.map((vn, index) => (
              <Link href={vn.href} key={index}>
                <a className={router.pathname === vn.href ? 'selected' : 'normal'} >{vn.title}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="menu-mobile">
        <Link href="/"><a className="logo-mobile">
          <img src="/logo1.svg" alt="logo" title="logo" width="176" height="30" />
        </a></Link>
        <div className="btn-menu" onClick={handleDropDownMenuAction}>
          <img src="/menu_mobile.svg" alt="menu" title="menu" width="24" height="24" />
        </div>
        {isDropdownMenuAction &&
          <ul className="mobile-menu-down">
            <li>
              <div className="company-mobile" onClick={handleDropDownCompanyAction}><p>Company</p> <img src="/arrow_menu.svg" className="arrow-menu" alt="arrow" title="arrow" width="11" height="8" /></div>
              {isDropdownCompanyAction &&
                <ul className="dropdown-mobile">
                  <hr></hr>
                  <li><Link href="/service"><a>Service</a></Link></li>
                  <hr></hr>
                  <li><Link href="/client"><a>Client</a></Link></li>
                  <hr></hr>
                  <li><Link href="/team"><a>Team</a></Link></li>
                </ul>
              }
            </li>
            <hr></hr>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
          </ul>
        }
      </div>
      <style jsx>
        {`
          .header {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 3;
            background: #FFFFFF;
          }
          .menu {
            background: rgba(23, 23, 31, 0.95);
            height: 78px;
            padding: 0 30px;
          }
          .menu-main {
            align-items: center;
            justify-content: space-between;
            height: 100%;
          }
          .menu-content {
            display: flex;
            height: 100%;
            align-items: center;
          }
          .container {
            display: flex;
            max-width: 1260px;
            margin: auto;
          }
          .company-pc {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 10px;
            position: relative;
            cursor: pointer;
          }
          .company-pc:hover p{
            color: #fc721e !important;
          }
          .company-pc:hover .dropdown{
            display: block;
          }
          .dropdown {
            display: none;
            position: absolute;
            flex-direction: column;
            width: 100%;
            min-width: 263px;
            left: -18px;
            height: auto;
            top: calc(100% - 19px);
            background-color: #23232a;
            padding-left: 0px;
            z-index: 3;
            transition: .2s ease-in-out;
            border-radius: 4px;
          }
          .dropdown::after {
            display: none;
            transform: rotate(45deg) translateX(-45%);
            transition: .2s ease-in-out;
          }
          ul {
            list-style: none;
            padding: 19px 0px 19px 0px;
          }
          .company-pc p {
            font-size: 20px;
            color: #FFFFFF;
            padding-right: 8px;
          }
          a {
            display: flex;
            text-decoration: none;
            padding: 0 10px;
            cursor: pointer;
            font-size: 20px;
            outline: none;
          }
          .menu-mobile {
            background: rgba(23, 23, 31, 0.85);
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            display: none;
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
            transition: .3s;
          }
          li a {
            padding: 12px 28px;
            color: #dee2e6;
          }
          li a:hover {
            color: #FFFFFF;
            background: rgba(255,255,255,.15);
          }
          hr {
            margin: 0 10px;
            color: #F4F4F4;
          }
          .selected {
            color: #FC721E;
            font-weight: 600;
          }
          .normal {
            color: #FFFFFF;
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
            .company-mobile {
              display: flex;
              align-items: center;
              color: #6E6E73;
              height: fit-content;
              justify-content: space-between;
            }
            .company-mobile p {
              font-size: 20px;
              padding: 10px;
            }
            .company-mobile img {
              background: #6e6e73;
              margin-right: 30px;
            }
            li a {
              color: #6E6E73;
            }
            a>img {
              margin: auto;
            }
            .btn-menu>img {
              display: flex;
            }
          }
        `}
      </style>
    </header>
  )
}

export default Header
