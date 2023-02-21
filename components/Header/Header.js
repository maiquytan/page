import React from 'react'
import { ImLocation2 } from 'react-icons/im'
import { FaPhoneAlt } from 'react-icons/fa'
import {MdArrowDropDown} from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="header">
      <div className="address">
        <ImLocation2 className="im_location" />
        <label>2nd Floor, 25T2 Budding, Hoang Dao Thuy, Nguyen Thi Thap, Trung Hoa, Cau Giay, Ha Noi  </label>
        <FaPhoneAlt className="fa-phone" />
        <label className="phone">1239081239</label>
      </div>
      <div className="menu">
       <Link href="/"><a className="logo"> 
        <img src="logo1.svg" className="img_logo" alt="logo" width={323} height={55}/>
        </a></Link>
        <div>
          <Link href="/e"><a>Company <MdArrowDropDown className="md_arrow"/></a></Link>
          <Link href="/a"><a>Service</a></Link>
          <Link href="/b"><a>Expertise</a></Link>
          <Link href="/c"><a>Portfolio</a></Link>
          <Link href="/d"><a>Contact</a></Link>
        </div>
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
          height:40px;
          display: flex;
          align-items: center;
          justify-content:flex-end;
          background: #FFFFFF;
          color:#FC721E;
          // position:relative;
          // right: 17%;
          
        }
        label{
          font-size:14px;
          margin-left: 7px;
          margin-right: 22px;
        }
        .phone{
          margin-right: 17%; 
        }
        .im_location{
          width: 13px;
          height: 21px;
        }
        .menu{
          background: rgba(23, 23, 31, 0.95);
          height: 78px;
          display:flex;
          align-items: center;
          justify-content: space-between;
          padding-left:18.5%;
          padding-right:17%; 
        }
        // .img_logo{
        //   margin-left:350px;
        // }
        a{
          color:#FFFFFF;
          text-decoration:none;
          margin: 0 10px;
          cursor: pointer;
        }
        .logo{
          margin-right:21%; 
          margin-bottom: 10px
        }
        .md_arrow{
          
        }
      `}
      </style>
    </div>

  )
}

export default Header