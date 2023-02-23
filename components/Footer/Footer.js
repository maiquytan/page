import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="footer_main">
          <div className="contact">
            <img src="Asset.svg" alt="Axalize" title="Axalize" width="361" height="62"/>
            <div>
              <img className="footer_img" src="Email_small.svg" alt="email" title="email" width="18" height="15"/>
              <label>Email: contact@axalize.vn</label>
            </div>
            <div>
              <img className="footer_img" src="Phone_small.svg" alt="phone" title="phone" width="17" height="17"/>
              <label>Phone: (+84) 248-585-8389 </label>
            </div>
            <div className="contact_row">
              <img className="footer_img" src="Location_small.svg" alt="location" title="location" width="12" height="18"/>
              <label>Location: 2F, 25T2 Building, Nguyen Thi Thap St., Trung Hoa W., Cau Giay Dist., Hanoi </label>
            </div>
          </div>
          <div className="footer_service">
            <div className="footer_title1">Service</div>
            <ul className="ul_service">
              <li>Web application development</li>
              <li>Mobile app development</li>
              <li>RPA development</li>
              <li>Dedicated development teams</li>
              <li>Offshore development center</li>
              <li>Lifecycle maintenance</li>
              <li>DevOps development and operations</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div>
            <div className="footer_title2">Map</div>
            <img src="map.svg" alt="map" title="map" width="392" height="215"/>
          </div>
        </div>
        <div className="hr"></div>
        <div className="copyright">COPYRIGHT © AXALIZE INCORPORATED ALL RIGHTS RESERVED</div>
        <style>
            {`
             .footer{
               background: url("../footer.svg"),#131031;
               color: #FFFFFF;
               height: 410px;
               width:100%;
               display: flex;
               flex-direction: column;
               text-align: center;
             }
             .footer_main{
               display:flex;
               margin-top:36px;
               margin-bottom: 61px;
               text-align: left;
               justify-content: center;
             }
             .footer_service{
               margin-right:30px;
             }
             .footer_title1,.footer_title2{
               font-size:20px;
               font-weight: 600;
               margin-bottom: 21px;
             }
             .footer_title2{
               margin-bottom: 13px;
             }
             .ul_service>li{
               font-weight: 400;
               font-size: 16px;
               line-height: 19px;
               margin-bottom: 8px;
             }
             .contact{
               width: 361px;
               margin-right: 88px;
             }
             .contact>img{
               margin-bottom: 38px;
             }
             .contact>div{
               margin-bottom :15px;
             }
             .contact_row{
               display:flex;
               align-items: flex-start; 
             }
             .footer_img{
               margin-right:11px;
             }
             .hr{
               height: 5px;
               background: #FFF0DE;
               box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.25);
             }
             .copyright{
               font-size:15px;
               margin-top: 16px;
             }
            `}
        </style>
      </div>
  )
}

export default Footer