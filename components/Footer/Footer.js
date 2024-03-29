import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="contact">
          <div className="logo-footer">
            <img src="/Asset.svg" alt="Axalize" title="Axalize" width="361" height="62" />
          </div>
          <div className="contact-row">
            <img className="footer-img" src="/Email_small.svg" alt="email" title="email" width="18" height="15" />
            <label>Email: contact@axalize.vn</label>
          </div>
          <div className="contact-row">
            <img className="footer-img" src="/Phone_small.svg" alt="phone" title="phone" width="17" height="17" />
            <label>Phone: (+84) 248-585-8389 </label>
          </div>
          <div className="contact-row">
            <img className="footer-img" src="/Location_small.svg" alt="location" title="location" width="12" height="18" />
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
        <div className="footer-map">
          <div className="footer-title2">Map</div>
          <div className="map">
            <iframe id="iframe" title="Map" width="392" height="215" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.61841445547!2d105.79924371488266!3d21.007927793865214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad96649ce017%3A0xef6e87a5d984287c!2zQ2h1bmcgQ8awIDI5VDEgSG_DoG5nIMSQ4bqhbyBUaMO6eQ!5e0!3m2!1sen!2s!4v1680578412970!5m2!1sen!2s" ></iframe>
          </div>

        </div>
      </div>
      <div className="hr"></div>
      <div className="copyright">COPYRIGHT © AXALIZE INCORPORATED ALL RIGHTS RESERVED</div>
      <style jsx>
        {`
          .footer {
            background: url("../footer.svg"),#131031;
            color: #FFFFFF;
            height: auto;
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            box-sizing: border-box;
          }
          .footer-main {
            display: flex;
            margin: auto;
            max-width: 1320px;
            width: 100%;
            height: auto;
            padding: 0 30px;
            margin-top: 36px;
            margin-bottom: 61px;
            text-align: left;
            justify-content: space-between;
            gap: 1%;
          }
          .contact {
            width: 36%;
          }
          .logo-footer {
            margin-bottom: 38px;
            width: 90%;
          }
          .logo-footer>img {
            width: 100%;
            max-width: 361px;
          }
          .footer-service {
            width: 28%;
            min-width: 300px;
          }
          .footer-title1,.footer-title2 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 21px;
          }
          .footer-title2 {
            margin-bottom: 13px;
          }
          .ul-service>li {
            margin-left: 20px;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            margin-bottom: 8px;
          }
          .footer-map {
            width: 31%;
          }
          .map {
            width: 100%;
          }
          .map>iframe {
            width: 100%;
          }
          .contact-row {
            display: flex;
            align-items: flex-start;
            width: 90%;
            margin-bottom: 15px;
          }
          .footer-img {
            margin-right: 11px;
            width: auto;
          }
          .hr {
            height: 5px;
            background: #FFF0DE;
            box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.25);
          }
          .copyright {
            font-size: 15px;
            font-weight: 600;
            margin-top: 16px;
            margin-bottom: 15px;
          }
          @media screen and (max-width: 1024px) {
            .footer-main {
              flex-wrap: wrap;
              margin-bottom: 20px;
            }
            .contact {
              width: 56%;
            }
            .footer-service {
              width: 40%;
              min-width: 0;
            }
            .footer-map {
              width: 100%;
            }
            .map {
              width: 100%;
              height: auto;
              aspect-ratio: 2;
    	        object-fit: cover;
              margin-bottom: 20px;
            }
            .map>iframe {
              width: 100%;
              height: 100%;
            }
          }
          @media screen and (max-width: 768px) {
            .footer {
              height: auto;
              width: 100%;
            }
            .footer-main {
              flex-direction: column;
              margin: auto;
              padding: 0 20px;
            }
            .logo-footer {
              padding-bottom: 32px;
            }
            .contact {
              width: auto;
            }
            .contact-row {
              width: 100%;
            }
            .footer-map {
              width: 100%;
              margin: 0;
              margin-bottom: 30px;
            }
            .map {
              width: 100%;
              height: auto;
              aspect-ratio: 1.6;
    	        object-fit: cover;
              margin-bottom: 20px;
            }
            .map>iframe {
              width: 100%;
              height: 100%;
            }
            .logo-footer {
              width: 75%;
              padding-top: 20px;
              margin: auto;
            }
            .logo-footer>img {
              width: 100%;
            }
            .footer-service {
              width: auto;
              margin: 0;
              margin-top: 35px;
              margin-bottom: 25px;
            }
            .copyright {
              font-size: 11px;
            }
          }
        `}
      </style>
    </footer>
  )
}

export default Footer
