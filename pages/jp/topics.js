import React from 'react';

const Topics = () => {
  return (
    <div className="topics">
      <p>トップ &gt; お知らせ</p>
      <div className="topics-main">
        <div className="topics-left">
          <button>
            <p>Category</p>
          </button>
          <hr></hr>
          <div className="one-category">
            <p>すべて</p>
            <span>&gt;</span>
          </div>
          <hr></hr>
          <div className="one-category">
            <p>お知らせ</p>
            <span>&gt;</span>
          </div>
          <hr></hr>
          <div className="one-category">
            <p>プレスリリース</p>
            <span>&gt;</span>
          </div>
          <hr></hr>
          <div className="one-category">
            <p>採用ニュース</p>
            <span>&gt;</span>
          </div>
          <hr></hr>
          <div className="one-category">
            <p>その他</p>
            <span>&gt;</span>
          </div>
          <hr></hr>
        </div>
        <div className="topics-right">
          <div className="topics-notice">
            <p>2023.01.26</p>
            <label>お知らせ</label>
          </div>
          <h1>独自のブリッジエンジニア育成プログラムを○○社と共同構築</h1>
          <div className="img-topics">
            <img src="/bg_reason.webp" alt="img_topics" title="img_topics" width="760" height="445" />
          </div>
          <p>Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text,Sample Text, </p>
          <p className="link">https://wwww.Sample.com</p>
        </div>
      </div>
      <style jsx>
        {`
          .topics {
            width: 100%;
            background: #FFFFFF;
            font-family: Meiryo, sans-serif;
          }
          .topics>p {
            width: 100%;
            max-width: 1110px;
            margin: auto;
            padding: 25px 0;
          }
          .topics-main {
            max-width: 1110px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            gap: 34px;
          }
          .topics-left {
            width: 29%;
            max-width: 318px;
            border: 1px solid #707070;
            border-radius: 25px;
            padding: 30px;
          }
          button {
            background: #0FA5EF;
            color: #FFFFFF;
            height: 39px;
            width: 100%;
            border: none;
            outline: none;
            border-radius: 5px;
            margin-bottom: 27px;
          }
          .one-category {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 7px;
          }
          .one-category>p {
            color: #888888;
            font-weight: bold;
            padding: 7px 0;
          }
          span {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            background: #A5A5A5;
          }
          .topics-right {
            max-width: 760px;
          }
          h1 {
            font-size: 30px;
            margin-bottom: 62px;
            line-height: 45px;
          }
          .topics-notice {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }
          .topics-notice>p {
            padding-right: 11px;
            margin-right: 16px;
            border-right: 2px solid #D6D6D6;
          }
          .img-topics {
            margin-bottom: 52px;
          }
          .link {
            margin-top: 20px;
            color: #0FA5EF;
            font-weight: bold;
            margin-bottom: 40px;
          }
        `}
      </style>
    </div>
  )
}
export default Topics;
