import React from 'react';

const AchievementJp = () => {
  return (
    <div className="achievement">
      <p className="achievement-title">開発実績</p>
      <div className="achievement-subTitle">Our Achievements</div>
      <div className="achievement-container">
        <div className="achievement-img">
          <img
            src="/jp/achievementJp.webp"
            alt="achievement"
            title="achievement"
            width="445"
            height="304"
          />
        </div>
        <div className="achievement-right">
          <p className="achievement-text">
            様々なエンジニアを擁するAxalizeではWebアプリ・モバイルアプリをメインに、Webサイトや多くの開発案件を手がけています。
            最近ではRPA(Robotic Process
            Automation)の開発にも力を入れております。
          </p>
          <div className="achievement-bottom">
            <button className="primary-btn">Read More</button>
            <div className="achievement-wrapper">
              <div className="achievement-column">
                <p className="achievement-number">47+</p>
                <p className="achievement-text ">完了したプロジェクト</p>
              </div>
              <div className="achievement-column">
                <p className="achievement-number">14+</p>
                <p className="achievement-text ">世界中のお客様</p>
              </div>
              <div className="achievement-column">
                <p className="achievement-number">100</p>
                <p className="achievement-text ">リピート率</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .achievement {
            max-width: 1260px;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .achievement-subTitle {
            font-size: 18px;
            margin-top: 9px;
            font-weight: bold;
            color: #cccccc;
          }
          .achievement-title {
            margin-top: 87px;
            font-size: 30px;
            font-weight: bold;
            width: fit-content;
            border-bottom: 3px solid #0fa5ef;
          }
          .achievement-container {
            margin-top: 24px;
            gap: 38px;
            display: flex;
          }
          .achievement-text {
            font-size: 16px;
          }
          .achievement-img {
            width: 100%;
          }
          .achievement-img img {
            width: 445px;
            height: 100%;
            margin: auto;
            object-fit: cover;
          }
          .achievement-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .primary-btn {
            background-color: #0fa5ef;
            color: #fff;
            width: 270px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
          }
          .achievement-bottom {
            display: flex;
            flex-direction: column;
            gap: 33px;
          }
          .achievement-wrapper {
            display: flex;
            gap: 30px;
          }
          .achievement-column {
            display: flex;
            flex-direction: column;
            gap: 3px;
            color: #2d2d2d;
          }
          .achievement-column:last-child {
            margin-left: 50px;
          }
          @media screen and (max-width: 900px) {
            .achievement {
              padding: 0 13px 82px 13px;
              align-items: flex-start;
              background-color: #fafdf9;
            }
            .achievement-container {
              flex-wrap: wrap;
            }
            .achievement-img img {
              width: 100%;
            }
            .achievement-title {
              margin-top: 92px;
            }
            .achievement-container {
              gap: 32px;
            }
            .achievement-wrapper {
              margin-top: 3px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AchievementJp;
