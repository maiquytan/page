import React from 'react'

const Request = () => {
  return (
    <div className="infor_request_bg">
      <div className="infor_request">
        <div className="information">
          <div className="information_header">
            <label className="item">Information</label>
            <div className="crossbar_left_1"></div>
            <div className="crossbar_left_2"></div>
          </div>
          <div className="information_content">We welcome friends, partners, and clients to  have conversations with Axalize. Please call us on the phone or drop us an email. We are happy to meet you at our office as well. You are most welcome!</div>
          <div className="infor_address">Ha Noi City - Development Center</div>
          <label className="address_detail">2nd Floor, 25T2 Budding, Hoang Dao Thuy, Nguyen Thi Thap, Trung Hoa, Cau Giay, Ha Noi </label>
          <div className="gmail">
            <img src="gmail.svg" alt="gmail" title="gmail" width="74" height="54" />
            <label>contact@axalize.vn</label>
          </div>
          <div className="phone">
            <img src="phone.svg" alt="phone" title="phone" width="74" height="54" />
            <label>(+84) 248-585-8389 </label>
          </div>
        </div>
        <div className="request">
          <div className="information_header">
            <label className="item">Quote request</label>
            <div className="crossbar_left_1"></div>
            <div className="crossbar_left_2"></div>
          </div>
          <div className="request_form">
            <div className="request_header">Your imformation:</div>
            <div className="request_input">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="request_input">
              <input type="text" placeholder="Phone number" />
              <input type="text" placeholder="Your email" />
            </div>
            <input className="request_input1" type="text" placeholder="Your company" />
            <div className="service_budget">
              <div>
                <div>Service:</div>
                <div className="service">
                  <input id="check" type="checkbox" className="checkbox" />
                  <label htmlFor="check" className="span"></label>
                  <label htmlFor="check" className="service_content">Mobile App</label>
                </div>
                <div className="service">
                  <input id="check1" type="checkbox" className="checkbox" />
                  <label htmlFor="check1" className="span"></label>
                  <label htmlFor="check1" className="service_content">Web App</label>
                </div>
                <div className="service">
                  <input id="check2" type="checkbox" className="checkbox" />
                  <label htmlFor="check2" className="span"></label>
                  <label htmlFor="check2" className="service_content">UI/UX Design</label>
                </div>
                <div className="service">
                  <input id="check3" type="checkbox" className="checkbox" />
                  <label htmlFor="check3" className="span"></label>
                  <label htmlFor="check3" className="service_content">VAPT (Vulnerability Assessment and Penetration)</label>
                </div>
                <div className="service">
                  <input id="check4" type="checkbox" className="checkbox" />
                  <label htmlFor="check4" className="span"></label>
                  <label htmlFor="check4" className="service_content">VAPT (Vulnerability Assessment and Penetration)</label>
                </div>
                <div className="service">
                  <input id="check5" type="checkbox" className="checkbox" />
                  <label htmlFor="check5" className="span"></label>
                  <label htmlFor="check5" className="service_content"><u className="other">Other (please specify)</u></label>
                </div>
              </div>
              <div className="hr_dahed"></div>
              <div>
                <div>Budget</div>
                <label className="budget">Below 25k
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="budget">25k - 50k
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="budget">50k - 100k
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="budget">100k - 200k
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="budget">200k - 300k
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="budget">300k - 400k
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="budget">Sky’s the limit
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="budget"><u className="other">Other (please specify)</u>
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="tell_us">
              <div>Tell us about your project</div>
              <textarea className="tell_input" type="text" placeholder="Please write here..." />
            </div>
            <button className="upload">
              <img src="upload.svg" alt="upload" title="upload" width="19" height="19" />
              <label>Upload files</label>
            </button>
            <button className="btn_request">Request a Quote</button>
          </div>
        </div>
      </div>

      <style jsx>
        {` 
          .infor_request_bg{
            background: url("../ceo_bg.webp");
            background-size:cover;
            background-position: center;
            height:1250px;
          }
          .infor_request{
            display: flex;
            justify-content: center;
          }
          .item{
            color: #1E1E1E;
            font-size: 32px;
            font-weight: 500;
          }
          .crossbar_left_1{
            width: 90px;
            height: 4px;
            background: #FC721E;
            margin-bottom:3px;
            margin-top: 10px;
          }
          .crossbar_left_2{
            width: 90px;
            height: 2px;
            background: #FC721E;
            margin-top:4px;
            margin-bottom: 45px;
          }
          .information{
            max-width: 445px;
            margin-right: 72px;
          }
          .information_header{
            padding-top:65px;
            margin-bottom: 40px;
          }

          .information_content{
            font-size: 17px;           
            margin-bottom: 43px;
          }
          .infor_address{
            font-size:24px;
            margin-bottom :10px
          }
          .address_detail{
            font-weight: 400;
            font-size: 16px;  
            color: #5F5F5F;  
          }
          .gmail,.phone{
            display: flex;
            align-items: center;
            color:#FC721E;
            font-size:19px;
          }
          .gmail{
            margin-top: 34px;
            margin-bottom: 14px;
          }
          .gmail>img,.phone>img{
            margin-right: 28px;
          }

          .request_form{
            max-width: 740px;
            width:100%;
            height: 1030px;
            background: #FFFFFF;
            border-radius: 10px;
            padding: 0 35px;
            
          }
          .request_header{
            font-size:18px;
            padding-top: 35px;
            margin-bottom: 20px;
          }
          .request_input{
            display:flex;
            justify-content: space-between;
            gap:2%;
          }
          .request_input>input,.request_input1,.tell_input {
            background: #F3F3F3;
            border-radius: 5px; 
            width: 48%;
            height: 46px;
            margin-bottom: 21px; 
            border: none;
            outline: none;
            padding-left: 20px;
            font-size: 16px;
            font-family: 'Inter', sans-serif;
          }
          .request_input1{
            width: calc(100% - 22px);
            margin-bottom: 37px;
          }
          .request_input>input::placeholder, .request_input1::placeholder, .tell_input::placeholder{
            color:#8E8E8E;
          }

          .service_budget{
            display:flex;
          }
          .hr_dahed{
            width:0px;
            height: 320px;
            margin:35px 20px 0px 55px ;
            border: 1px dashed #6D6D6D;
          }
          .service{
            display: flex;
            align-items: left;
            cursor: pointer;
            background-color: #FFFFFF;
            margin-top: 21px;
            margin-left: 17px;
          }
          .checkbox{
            display: none;
            width: 20px;
            height: 20px;
            border-color: #D9D9D9 !important;
            border-width: 1px;
            border-style: solid;
            border-radius: 2px;
            background: #FFFFFF;
            margin-right: 10px;
          }
          .checkbox:checked~ .span {
            background-repeat: no-repeat, repeat;
            background-image: url("../Checkbox.svg");
            background-position: center;
          }

          .span {
            margin-bottom: 0px;
            margin-right: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            border-color: #cdd6dd;
            border-width: 1px;
            border-style: solid;
            border-radius: 2px;
            background-color: #D9D9D9;
          }
          .service_content{
            margin-left: 5px;
            max-width:220px;
          }

          //custom radio-----------------------------------
          .budget {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-top: 23px;
            margin-left:10px;
            cursor: pointer;
            font-size: 16px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .budget>input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 17px;
            width: 17px;
            background-color: #eee;
            border-radius: 50%;
          }
          .budget>input:checked ~ .checkmark {
            background-color: #FC721E;
          }
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }
          .budget>input:checked ~ .checkmark:after {
            display: block;	
            height:11px;
            width:11px;
          }
          .budget .checkmark:after {
            top: 3px;
            left: 3px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
          }
          .other{
            color: #A6A6A6
          }
          .tell_us{
            margin-top: 37px;
            font-size: 16px;
          }
          .tell_input{
            margin-top: 16px;
            margin-bottom: 25px;
            width: calc(100% - 22px);
            height: 100px;
            padding-top: 17px;
            display: flex;
            align-items: flex-start;
          }
          
          .upload{
            width:100%;
            height:45px;
            display:flex;
            align-items: center;
            text-align: left;
            border-radius: 5px;
            border:none;
            cursor:pointer;
          }
          .upload>img{
            margin-left:25px;              
            margin-right:9px;
          }
          .btn_request{
            color: #FFFFFF;
            background: #FC721E;
            width: 100%;
            height:45px; 
            margin-top: 30px;
            border-radius: 5px;
            border:none;
            cursor:pointer;
          }
        `}
      </style>
    </div>
  )
}

export default Request
