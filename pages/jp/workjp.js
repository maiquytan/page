import React from 'react';

import { listWork } from '../../constants';

const Workjp = () => {
  return (
    <div className="work">
      <div className="caption">
        <h1 className="caption-main">開発実績</h1>
        <span></span>
        <p className="caption-title">Our Achivements</p>
        <div>
          <p>Axalizeの開発実績の一部をご紹介します。 </p>
          各分野ごとにメンバーのチームを編成、「価値」提供に繋がるプロダクトを開発します。
        </div>
      </div>
      <div className="work-main">
        {listWork.map((li, index) => (
          <div key={index} className="one-work">
            <div className="img-work">
              <img src={li.img} title="img_service" alt="img_service" width="300" height="194" />
            </div>
            <div className="work-category">{li.category}</div>
            <h1>{li.title}</h1>
            <span>{li.language}</span>
            <p>{li.content}</p>
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .work {
            width: 100%;
            background: #FFFFFF;
            font-family: Meiryo;
          }
          .caption {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding-top: 90px;
            padding-bottom: 90px;
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
          .work-main {
            max-width: 1110px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            padding: 0 30px;
          }
          .one-work {
            width: 31%;
            height: auto;
            display: flex;
            flex-direction: column;
            background: #F7F7F7;
            padding: 25px;
          }
          .img-work>img {
            width: 100%;
            height: auto;
            object-fit: cover;
            vertical-align: top;
          }
          .work-category {
            width: 135px;
            background: #0FA5EF;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-weight: bold;
            color: #FFFFFF;
            margin-top: 22px;
            margin-bottom: 27px;
            padding: 4px 0;
          }
          .one-work>h1 {
            font-size: 24px;
            font-weight: bold;
            line-height: 36px;
            height: 72px;
            margin-bottom: 10px;
          }
          .one-work>span {
            font-size: 15px;
            margin-bottom: 20px;
          }
          .one-work>p {
            word-wrap: break-word;
          }
          @media screen and (max-width: 1024px) {
            .work-main {
              gap: 2%;
              padding: 0 20px;
            }
            .one-work {
              width: 49%;
              margin-bottom: 20px;
            }
          }
          @media screen and (max-width: 768px) {
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
            .work-main {
              padding: 0 30px;
              margin-top: 30px;
            }
            .one-work {
              width: 100%;
            }
            .work-category {
              font-size: 17px;
              margin-top: 25px;
              margin-bottom: 39px;
            }
            .one-work>h1 {
              height: 30px;
              margin-bottom: 30px;
            }
          }
          @media screen and (max-width: 480px) {
            .caption {
              padding: 30px 15px;
            }
            .work-main {
              padding: 0 15px;
            }
            .one-work>h1 {
              font-size: 20px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Workjp;
