import React from 'react';

const Contactjp = () => {
  return (
    <div className="contact">
      <div className="caption">
        <h1 className="caption-main">お問い合わせ</h1>
        <span></span>
        <p className="caption-title">Contact</p>
        <div>
          <p>弊社ビジネスに関するご質問・案件のご相談からお見積りまで </p>
          どんなことでもお気軽にお問合せください。
        </div>
      </div>
      <div className="contact-main">
        <div className="contact-input">
          <p>お名前</p>
          <input type="text" />
        </div>
        <div className="contact-input">
          <p>カナ</p>
          <input type="text" />
        </div>
        <div className="contact-input">
          <p>メールアドレス</p>
          <input type="text" />
        </div>
        <div className="contact-input">
          <p>お名前</p>
          <input type="text" />
        </div>
        <div className="contact-input">
          <p>連絡先電話番号</p>
          <div className="phone-number">
            <input type="text" />
            <span>-</span>
            <input type="text" />
            <span>-</span>
            <input type="text" />
          </div>
        </div>
        <div className="contact-input">
          <p>お名前</p>
          <label className="checkbox"> 見積り依頼
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox"> ご相談
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox"> 求人について
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox"> その他
            <input type="radio" name="radio" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="contact-input">
          <p>お名前</p>
          <textarea type="text" />
        </div>
        <div className="contact-footer">
          <p className="title-footer">お問い合わせに当たり、当社の個人情報保護方針をご確認下さい</p>
          <p><u>個人情報の取り扱いについて</u></p>
          <button>送信する</button>
        </div>
      </div>
      <style jsx>
        {`
          .contact {
            width: 100%;
            background: #FFFFFF;
            font-family: Meiryo, sans-serif;
            padding-bottom: 30px;
          }
          .caption {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 90px 0;
          }
          .caption>span {
            height: 3px;
            width: 170px;
            background: #0FA5EF;
          }
          .caption>div {
            line-height: 24px;
          }
          .caption-main {
            font-size: 30px;
            line-height: 45px;
            font-weight: bold;
            width: fit-content;
          }
          .caption-title {
            color: #CECECE;
            font-size: 18px;
            font-weight: bold;
            margin-top: 9px;
            margin-bottom: 7px;
          }
          .contact-main {
            width: 100%;
          }
          .contact-input {
            width: 50%;
            min-width: 700px;
            margin: auto;
            margin-bottom: 55px;
          }
          .contact-input>p {
            font-size: 15px;
            font-weight: bold;
            margin-bottom: 13px;
            color: #A5A5A5;
          }
          .contact-input>input,.contact-input>textarea {
            width: 100%;
            height: 68px;
            outline: none;
            padding-left: 20px;
            font-size: 20px;
          }
          .phone-number>input {
            width: 18.5%;
            height: 68px;
            outline: none;
            padding-left: 20px;
            font-size: 20px;
          }
          .phone-number>span {
            padding: 0 22px;
          }
          .contact-input>textarea {
            padding: 10px;
          }
          .checkbox {
            display: block;
            position: relative;
            padding-left: 56px;
            margin-top: 36px;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            outline: none;
          }
          .checkbox>input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 34px;
            width: 34px;
            background-color: #FFFFFF;
            border: 1px solid #707070;
            border-radius: 50%;
          }
          .checkbox>input:checked ~ .checkmark {
            background-color: #FFFFFF;
          }
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }
          .checkbox>input:checked ~ .checkmark:after {
            display: block;
            height: 22px;
            width: 22px;
          }
          .checkbox .checkmark:after  {
            top: 5px;
            left: 5px;
            border-radius: 50%;
            background: #808080;
          }
          .contact-input>textarea {
            height: 258px;
          }
          .contact-footer {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .contact-footer>button {
            color: #FFFFFF;
            width: 23%;
            min-width: 430px;
            background: #33B2F1;
            border-radius: 30px;
            height: 56px;
            margin-top: 52px;
            border: none;
            outline: none;
            cursor: pointer;
          }
          .title-footer {
            margin-bottom: 19px;
          }
          @media screen and (max-width: 1024px) {
            .contact-input>input,.phone-number>input {
              height: 62px;
            }
            .contact-input {
              margin-bottom: 47px;
            }
            .caption {
              padding: 60px 0;
            }
          }
          @media screen and (max-width: 768px) {
            .contact-input>input,.phone-number>input {
              height: 56px;
            }
            .contact-input {
              margin-bottom: 39px;
              min-width: 0;
              width: 100%;
            }
            .caption {
              align-items: flex-start;
              text-align: left;
              padding: 30px;
              border-bottom: 1px solid gray;
            }
            .caption>span {
              width: 234px;
            }
            .caption-main {
              font-size: 25px;
            }
            .caption-title {
              font-size: 16px;
              margin-top: 11px;
              margin-bottom: 19px;
            }
            .contact-main {
              margin-top: 30px;
              padding: 0 30px;
            }
            .phone-number {
              display: flex;
              align-items: center;
              flex-wrap: nowrap;
            }
            .phone-number>input {
              width: 30%;
            }
            .phone-number>span {
              padding: 0 15px;
            }
            .contact-footer>button {
              min-width: 326px;
            }
            .title-footer {
              font-size: 14px;
              text-align: center;
            }
          }
          @media screen and (max-width: 480px) {
            .contact-input>input,.phone-number>input {
              height: 50px;
            }
            .contact-input {
              margin-bottom: 31px;
            }
            .contact-main {
              padding: 0 15px;
            }
            .caption {
              padding: 30px 15px;
            }
            .phone-number>span {
              padding: 0 9px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Contactjp;
