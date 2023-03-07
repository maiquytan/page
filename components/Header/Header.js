import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isDropdownAction, SetIsDropdownAction] = useState(false);
  const [isDropdownAction1, SetIsDropdownAction1] = useState(false);
  const handleDropDownAction = () => {
    SetIsDropdownAction(!isDropdownAction)
  }
  const handleDropDownAction1 = () => {
    SetIsDropdownAction1(!isDropdownAction1)
  }
  return (
    <div className="header">
      <div className="address">
        <div className="address_content">
          <img src="location_orange.svg" alt="location" title="location" width="15" height="21" />
          <label>2nd Floor, 25T2 Budding, Hoang Dao Thuy, Nguyen Thi Thap, Trung Hoa, Cau Giay, Ha Noi  </label>
          <img src="phone_orange.svg" alt="phone" title="phone" width="18" height="19" />
          <label className="phone">1239081239</label>
        </div>
      </div>
      <div className="menu">
        <div className="menu_main">
          <Link href="/"><a className="logo">
            <img src="logo1.svg" className="img_logo" alt="logo" title="logo" width={323} height={55} />
          </a></Link>
          <div className="menu_content">
            <Link href="/e"><a>Company <img src="arrow_menu.svg" alt="arrow" title="arrow" width="11" height="8" /></a></Link>
            <Link href="/service"><a>Service</a></Link>
            <Link href="/b"><a>Expertise</a></Link>
            <Link href="/portfolio"><a>Portfolio</a></Link>
            <Link href="/d"><a>Contact</a></Link>
          </div>
        </div>
      </div>
      <div className="menu_mobile">
        <div className="logo_mobile">
          <img src="logo1.svg" alt="logo" title="logo" width={176} height={30} />
        </div>
        <div className="btn_menu" onClick={handleDropDownAction}>
          <img src="menu_mobile.svg" alt="menu" title="menu" width={24} height={24} />
        </div>
        {isDropdownAction &&
          <ul className="mobile_menu_down">
            <li>
              <div>
                <Link href="/e"><a>Company </a></Link>
                <img src="arrow_mobile_menu.svg" onClick={handleDropDownAction1} className="arrow_menu" alt="arrow" title="arrow" width="11" height="8" />
              </div>
              {isDropdownAction1 &&
                <ul className="setting_signout">
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
          .header{
            position:fixed;
            top: 0;
            width: 100%;
            z-index:3;
            background: #FFFFFF;
          }
          .address{
            width:100%;
            background: #FFFFFF;
          }
          .address_content{
            color:#FC721E;
            max-width: 1274px;
            height:40px;
            display: flex;
            align-items: center;
            justify-content:flex-end;
            margin:auto;
          }
          label{
            font-size:14px;
            margin-left: 7px;
            margin-right: 22px;
          }
          .phone{
            margin-right: 60px; 
          }
          .im_location{
            width: 13px;
            height: 21px;
          }
          .menu{
            background: rgba(23, 23, 31, 0.95);
            height: 78px;
          }
          .menu_main{
            display:flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1274px;
            margin:auto;
          }
          .menu_content{
            margin-right: 50px;
          }
          a{
            color:#FFFFFF;
            text-decoration:none;
            margin: 0 10px;
            cursor: pointer;
            font-size: 20px;
            outline:none;
          }
          .img_logo{
            margin-left: 50px;
          }
          .logo{
            margin-bottom: 10px
          }
          .menu_mobile{
            background: rgba(23, 23, 31, 0.85);
            height: 50px;
            width: 100%;
            display:flex;
            justify-content:center;
            align-items: center;
            position:relative;
          }
          .btn_menu{
            position:absolute;
            right: 15px;
          }
          .mobile_menu_down {
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
          li{
            margin :20px;
          }
          hr{
            margin: 0 10px;
            color: #F4F4F4;
          }
        
          @media screen and (min-width:600px ){
            .menu_mobile{
              display: none;
            }
          }

          @media screen and (max-width: 600px){
            .menu,.address{
              display: none;
            }
            .header{
              width:100%;
            }
            a{
              color: #6E6E73;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Header
