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
          <div className="achievement-text">
            <p>様々なエンジニアを擁するAxalizeではWebアプリ・モバイルアプリをメインに、Webサイトや多くの開発案件を手がけています。</p>
            <p>最近ではRPA(Robotic Process Automation)の開発にも力を入れております。</p>
          </div>
            <button className="primary-btn">Read More</button>
            <div className="achievement-wrapper">
              <div className="achievement-column">
                <p className="achievement-number">47+</p>
                <label>完了したプロジェクト</label>
              </div>
              <div className="achievement-column">
                <p className="achievement-number">14+</p>
                <label>世界中のお客様</label>
              </div>
              <div className="achievement-column">
                <p className="achievement-number">100</p>
                <label>リピート率</label>
              </div>
            </div>
        </div>
      </div>

      <style jsx>
        {`
          .achievement {
            max-width: 1170px;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 0 30px;
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
            width: 100%;
            gap: 38px;
            box-sizing: border-box;
            display: flex;
          }
          .achievement-text {
            font-size: 16px;
          }
          .achievement-img {
            width: 40%;
            height: auto;
          }
          .achievement-number {
            font-size: 30px;
            font-weight: bold;
          }
          .achievement-img img {
            width: 100%;
            height: 100%;
            margin: auto;
            object-fit: cover;
          }
          .achievement-right {
            width: 56%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .primary-btn {
            background-color: #0fa5ef;
            color: #fff;
            width: 270px;
            height: 40px;
            margin-top: 89px;
            margin-bottom: 33px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
          }
          .achievement-wrapper {
            display: flex;
            gap: 30px;
          }
          .achievement-column {
            display: flex;
            flex-direction: column;
            min-width: 160px;
            gap: 3px;
            color: #2d2d2d;
          }
          .achievement-column:last-child {
            width: auto;
            min-width: 0;
          }

          @media screen and (max-width: 1024px) {
            .achievement {
              padding: 0 30px 82px 30px;
              align-items: flex-start;
              background-color: #fafdf9;
            }
            .achievement-img img {
              width: 100%;
            }
            .achievement-title {
              margin-top: 92px;
            }
            .primary-btn {
              margin: 32px 0;
            }
            .achievement-container {
              gap: 32px;
            }
            .achievement-wrapper {
              margin-top: 3px;
              gap: 20px;
            }
            .achievement-column {
              min-width: 140px;
            }
            .achievement-column>label {
              font-size: 14px;
            }
          }
          @media screen and (max-width: 768px) {
            .achievement {
              padding: 0 20px;
            }
            .achievement-container {
              flex-direction: column;
            }
            .achievement-img {
              width: 100%;
            }
            .achievement-right {
              width: 100%;
            }
          }
          @media screen and (max-width: 480px) {
            .achievement {
              padding: 0 15px;
            }
            .achievement-wrapper {
              justify-content: space-between;
            }
            .achievement-column {
              width: auto;
              min-width: 0;
            }
            .achievement-column>label {
              font-size: 13px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AchievementJp;
