import React, { useEffect, useState } from 'react'
import Link from 'next/link'
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
        <div className="menu-main container">
          <Link href="/"><a className="logo">
            <img src="/logo1.svg" className="img-logo" alt="logo" title="logo" width="323" height="55" />
          </a></Link>
          <div className="menu-content">
            <Link href="/e"><a>Company <img src="/arrow_menu.svg" className="arrow-menu" alt="arrow" title="arrow" width="11" height="8" /></a></Link>
            <Link href="/service"><a>Service</a></Link>
            <Link href="/b"><a>Expertise</a></Link>
            <Link href="/portfolio"><a>Portfolio</a></Link>
            <Link href="/d"><a>Contact</a></Link>
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
              <div>
                <Link href="/e"><a>Company <img src="/arrow_mobile_menu.svg" onClick={handleDropDownCompanyAction} className="arrow-menu" alt="arrow" title="arrow" width="11" height="8" /></a></Link>
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
          }
          .menu-main {
            align-items: center;
            justify-content: space-between;
            height: 100%;
            padding: 0 12px;
          }
          .menu-content {
            display: flex;
          }
          .container {
            display: flex;
            max-width: 1260px;
            margin: auto;
          }
          .arrow-menu {
            display: none;
          }
          a {
            display: flex;
            color: #FFFFFF;
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
            margin: 20px;
          }
          hr {
            margin: 0 10px;
            color: #F4F4F4;
          }

          @media screen and (max-width: 1024px) {
            .menu,.address {
              display: none;
            }
            .menu-mobile {
              display: flex;
            }
            .header {
              width: 100%;
            }
            a {
              color: #6E6E73;
              width: 90%;
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
    </div>
  )
}

export default Header
