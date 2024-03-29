import React, { useState } from 'react';

import { listBudget, listService, uploadFileStatus } from '../../constants';

const Request = () => {
  const [isCheckService, setIsCheckService] = useState(true);
  const [isCheckBudget, setIsCheckBudget] = useState(true);
  const [content, setContent] = useState(uploadFileStatus.default.title);

  const handleCheckService = () => {
    setIsCheckService(!isCheckService);
  }

  const handleOnChange = (e) => {
    setContent(e.target.files[0]?.name || uploadFileStatus.nothing.title);
  }

  return (
    <div className="infor-request-bg">
      <div className="infor-request-layout">
      <div className="infor-request">
        <div className="information">
          <div className="information-header">
            <label className="item">Information</label>
            <div className="crossbar-left-1"></div>
            <div className="crossbar-left-2"></div>
          </div>
          <div className="information-content">We welcome friends, partners, and clients to  have conversations with Axalize. Please call us on the phone or drop us an email. We are happy to meet you at our office as well. You are most welcome!</div>
          <div className="infor-address">Ha Noi City - Development Center</div>
          <label className="address-detail">2nd Floor, 25T2 Budding, Hoang Dao Thuy, Nguyen Thi Thap, Trung Hoa, Cau Giay, Ha Noi </label>
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
          <div className="information-header">
            <label className="item">Quote request</label>
            <div className="crossbar-left-1"></div>
            <div className="crossbar-left-2"></div>
          </div>
          <div className="request-form">
            <div className="request-header">Your imformation: </div>
            <div className="request-input">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
              <input type="text" placeholder="Phone number" />
              <input type="text" placeholder="Your email" />
            </div>
            <input className="input-company" type="text" placeholder="Your company" />
            <div className="service-budget">
              <div className="service-budget-container">
                <div>Service: </div>
                {listService.map((ser, index) => (
                  <div className="service" key={index}>
                    <input id={ser.id} type="checkbox" className="checkbox" />
                    <label htmlFor={ser.id} className="span"></label>
                    <label htmlFor={ser.id} className="service-content">{ser.title}</label>
                  </div>
                ))}
                <div className="service">
                  <input id="check5" type="checkbox" className="checkbox" onClick={handleCheckService} />
                  <label htmlFor="check5" className="span"></label>
                  <label htmlFor="check5" className={isCheckService ? 'service-content' : 'unselected'}><span className="other">Other (please specify)</span></label>
                  <input className={isCheckService ? 'unselected' : 'input-other'} type="text" placeholder="Other (please specify)" />
                </div>
              </div>
              <div className="hr-dahed"></div>
              <div className="service-budget-container">
                <div>Budget</div>
                {listBudget.map((budget, index) => (
                  <label className="budget" key={index}>{budget.title}
                    <input type="radio" name="radio" onClick={() => setIsCheckBudget(true)} />
                    <span className="checkmark"></span>
                  </label>
                ))}
                <label className="budget" >
                  <p className={isCheckBudget ? 'other' : 'unselected'} >Other (please specify)</p>
                  <input type="radio" name="radio" onClick={() => setIsCheckBudget(false)} />
                  <span className="checkmark"></span>
                </label>
                <input className={isCheckBudget ? 'unselected' : 'input-budget'} type="text" placeholder="Other (please specify)" autoFocus />
              </div>
            </div>
            <div className="tell-us">
              <div>Tell us about your project</div>
              <textarea className="tell-input" type="text" placeholder="Please write here..." />
            </div>
            <div className="upload">
              <img src="upload.svg" alt="upload" title="upload" width="19" height="19" />
              <input className="custom-file-input" type="file" onChange={e => handleOnChange(e)} />
            </div>
            <button className="btn-request">Request a Quote</button>
          </div>
        </div>
      </div>
      </div>
      <style jsx>
        {`
          .infor-request-bg {
            background: url("../ceo_bg.webp");
            background-size: cover;
            background-position: center;
            height: auto;
            position: relative;
          }
          .infor-request-layout {
            background-color: #ffffffc9;
          }
          .infor-request {
            display: flex;
            justify-content: space-between;
            max-width: 1260px;
            box-sizing: content-box;
            margin: auto;
            height: auto;
            padding: 0 30px;
            padding-bottom: 70px;
            font-family: 'Inter', sans-serif;
          }
          .item {
            color: #1E1E1E;
            font-size: 32px;
            font-weight: 500;
          }
          .crossbar-left-1 {
            width: 90px;
            height: 4px;
            background: #FC721E;
            margin-bottom: 3px;
            margin-top: 10px;
          }
          .crossbar-left-2 {
            width: 90px;
            height: 2px;
            background: #FC721E;
            margin-bottom: 45px;
          }
          .information {
            width: 35%;
          }
          .information-header {
            padding-top: 65px;
            margin-bottom: 40px;
          }
          .information-content {
            font-size: 17px;
            margin-bottom: 43px;
            line-height: 25px;
          }
          .infor-address {
            font-size: 24px;
            margin-bottom : 10px;
            font-weight: 600;
            min-width: 310px;
          }
          .address-detail {
            font-size: 16px;
            color: #5F5F5F;
            line-height: 22px;
          }
          .gmail,.phone {
            display: flex;
            align-items: center;
            color: #FC721E;
            font-size: 19px;
          }
          .gmail {
            margin-top: 34px;
            margin-bottom: 14px;
          }
          .gmail>img,.phone>img {
            margin-right: 28px;
          }
          .request {
            width: 58%;
          }
          .request-form {
            height: 1030px;
            background: #FFFFFF;
            border-radius: 10px;
            padding: 0 35px;
          }
          .request-header {
            font-size: 18px;
            padding-top: 35px;
            margin-bottom: 20px;
          }
          .request-input {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .request-input>input,.input-company,.tell-input {
            background: #F3F3F3;
            border-radius: 5px;
            width: 49%;
            height: 46px;
            border: none;
            outline: none;
            padding: 0 20px;
            font-size: 16px;
            font-family: 'Inter', sans-serif;
            margin-bottom: 20px;
          }
          .input-company {
            width: -webkit-fill-available;
            margin-bottom: 37px;
          }
          .request-input>input::placeholder, .request-input1::placeholder, .tell-input::placeholder {
            color: #8E8E8E;
          }
          .service-budget-container {
            width: 50%;
          }
          .service-budget {
            display: flex;
          }
          .hr-dahed {
            width: 0px;
            height: 320px;
            margin: 35px 20px 0px 35px ;
            border: 1px dashed #6D6D6D;
          }
          .service {
            display: flex;
            align-items: left;
            cursor: pointer;
            background-color: #FFFFFF;
            margin-top: 21px;
            margin-left: 17px;
          }
          .checkbox {
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
          .checkbox:checked~ .span  {
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
          .service-content {
            margin-left: 5px;
            width: 90%;
            max-width: 220px;
            cursor: pointer;
          }
          .input-other {
            border: none;
            outline: none;
            font-size: 16px;
          }
          .unselected {
            display: none;
          }

          //custom radio-----------------------------------
          .budget {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-top: 23px;
            margin-left: 10px;
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
            height: 11px;
            width: 11px;
          }
          .budget .checkmark:after  {
            top: 3px;
            left: 3px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
          }
          .other {
            color: #A6A6A6;
            text-decoration: underline;
          }
          .tell-us {
            margin-top: 37px;
            font-size: 16px;
          }
          .tell-input {
            margin-top: 16px;
            margin-bottom: 25px;
            width: 100%;
            height: 100px;
            padding-top: 17px;
            display: flex;
            align-items: flex-start;
          }
          .input-budget {
            border: none;
            outline: none;
            font-size: 16px;
            padding-left: 42px;
          }
          .upload {
            width: 100%;
            height: 45px;
            display: flex;
            align-items: center;
            text-align: left;
            border-radius: 5px;
            border: 1px solid #000;
            cursor: pointer;
          }
          .upload>img {
            margin-left: 25px;
            margin-right: 9px;
          }
          .custom-file-input {
            color: #000;
            width: 90%;
          }
          .custom-file-input::-webkit-file-upload-button {
            visibility: hidden;
          }
          .custom-file-input::before {
            content: '${content}';
            width: 100%;
            color: black;
            display: inline-block;
            padding: 5px 8px;
            outline: none;
            white-space: nowrap;
            -webkit-user-select: none;
            cursor: pointer;
            text-shadow: 1px 1px #fff;
            font-size: 17px;
          }
          .btn-request {
            color: #FFFFFF;
            background: #FC721E;
            width: 100%;
            height: 45px;
            font-size: 18px;
            font-weight: 500px;
            margin-top: 30px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
          }
          .btn-request:hover {
            background: #d25f19;
          }
          @media screen and (max-width: 1024px ) {
            .infor-request-bg {
              height: auto;
            }
            .infor-request {
              flex-direction: column;
              height: auto;
            }
            .information,.request {
              margin: 0;
              width: auto;
              height: auto;
            }

            .information-header {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 0;
            }
            .information-content {
              color: #666666;
            }
            .service-budget-container {
              width: 80%;
            }
            .infor-address {
              font-size: 21px;
              width: 70%;
            }
            .request-form {
              padding: 0 4%;
              height: auto;
              margin: auto;
              margin-bottom: 40px;
            }
            .request-input {
              flex-direction: column;
            }
            .request-input>input,.input-company,.tell-input {
              width: -webkit-fill-available;
              margin-bottom: 20px;
            }
            .service-budget {
              flex-direction: column;
            }
            .hr-dahed {
              transform: rotate(180deg);
              width: 218px;
              height: 0;
              margin : 30px 0 30px 20px;
            }
            .service,.budget {
              margin-left: 0;
            }
            .btn-request {
              margin-top: 20px;
              margin-bottom: 30px;
            }
          }
          @media screen and (max-width: 768px ) {
            .infor-request {
              padding: 0 20px;
            }
          }
          @media screen and (max-width: 480px ) {
            .infor-request {
              padding: 0 12px;
            }
            .information-header {
              padding-top: 43px;
            }
            .information-content {
              font-size: 15px;
              margin-bottom: 32px;
            }
            .infor-address {
              font-size: 19px;
            }
            .item {
              font-size: 26px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Request
