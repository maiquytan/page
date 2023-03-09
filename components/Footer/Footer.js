import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="contact">
          <div className="logo-footer">
            <img src="Asset.svg" alt="Axalize" title="Axalize" width="361" height="62" />
          </div>
          <div>
            <img className="footer-img" src="Email_small.svg" alt="email" title="email" width="18" height="15" />
            <label>Email: contact@axalize.vn</label>
          </div>
          <div>
            <img className="footer-img" src="Phone_small.svg" alt="phone" title="phone" width="17" height="17" />
            <label>Phone: (+84) 248-585-8389 </label>
          </div>
          <div className="contact-row">
            <img className="footer-img" src="Location_small.svg" alt="location" title="location" width="12" height="18" />
            <label>Location: 2F, 25T2 Building, Nguyen Thi Thap St., Trung Hoa W., Cau Giay Dist., Hanoi </label>
          </div>
        </div>
        <div className="footer-service">
          <div className="footer-title1">Service</div>
          <ul className="ul-service">
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
          <div className="footer-title2">Map</div>
          <div className="map">
            <iframe id="iframe" title="Map" width="392" height="215" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6412536479356!2d105.79909331440697!3d21.00701289389737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca166c91fa7%3A0x216144e51f80907e!2zVG-DoCBuaMOgIDI1VDIsIE5ndXnhu4VuIFRo4buLIFRo4bqtcCwgVHJ1bmcgSG-DoCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWkgMTAwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1581490205830!5m2!1sen!2s" ></iframe>
          </div>

        </div>
      </div>
      <div className="hr"></div>
      <div className="copyright">COPYRIGHT © AXALIZE INCORPORATED ALL RIGHTS RESERVED</div>
      <style jsx>
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
          .footer-main{
            display:flex;
            margin-top:36px;
            margin-bottom: 61px;
            text-align: left;
            justify-content: center;
          }
          .footer-service{
            margin-right:30px;
          }
          .footer-title1,.footer-title2{
            font-size:20px;
            font-weight: 600;
            margin-bottom: 21px;
          }
          .footer-title2{
            margin-bottom: 13px;
          }
          .ul-service>li{
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
          .contact-row{
            display:flex;
            align-items: flex-start; 
          }
          .footer-img{
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
            margin-bottom: 15px;
          }
          @media screen and (max-width: 900px){
            .footer{
              height: auto;
              width:100%;
            }
            .footer-main{
              flex-direction: column;
              width: 90%;
              margin: auto;
            }
            .map{
              width:100%;
              max-width: 370px;
              margin-bottom: 20px;
            }
            .map>iframe{
              width: 100%;
            }
            .logo-footer{
              width:75%;
              padding-top:20px; 
              margin: auto;
            }
            .logo-footer>img{
              width: 100%;
            }
            .footer-service{
              margin-top:35px;
              margin-bottom:25px;
            }
            .ul-service{
              margin-left: 17px;
            }
            .copyright{
              font-size: 11px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Footer
