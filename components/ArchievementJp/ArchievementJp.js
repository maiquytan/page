import React from 'react'

const AchievementJp = () => {
  return (
    <div className="achievement">
      <div className="achievement-title">開発実績</div>
      <div className="achievement-subTitle">Our Achievements</div>
      <div className="achievement-container">
        <img src="/achievementJp.png" className="achievement-img"/>
        <div className="achievement-right">
          <p className="achievement-text">様々なエンジニアを擁するAxalizeではWebアプリ・モバイルアプリをメインに、Webサイトや多くの開発案件を手がけています。 最近ではRPA(Robotic Process Automation)の開発にも力を入れております。</p>
          <div className="achievement-bottom">
            <button className="primary-btn">Read More</button>
            <div className="achievement-wrapper">
              <div className="achievement-column">
                <h1 className="achievement-number">47+</h1>
                <p className="achievement-text ">完了したプロジェクト</p>
              </div>
              <div className="achievement-column">
                <h1 className="achievement-number">14+</h1>
                <p className="achievement-text ">世界中のお客様</p>
              </div>
              <div className="achievement-column">
                <h1 className="achievement-number">100</h1>
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
            margin : auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .achievement-subTitle {
            font-size: 18px;
            margin-top: 9px;
            font-weight: bold;
            color: #CCCCCC;
          }        
          .achievement-title {
            margin-top: 87px;
            font-size: 30px;
            font-weight: bold;
            width: fit-content;
            border-bottom: 3px solid #0FA5EF;
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
            width: 445px;
            object-fit: cover;
          }
          .achievement-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .primary-btn{
            background-color:  #0FA5EF;
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
            color: #2D2D2D;
          }
          .achievement-column:Last-child {
            margin-left: 50px;
          }
          @media screen and (max-width: 900px) {
            .achievement  {
              padding: 0 13px 82px 13px;
              align-items: flex-start;
              background-color: #FAFDF9;
            }
            .achievement-container {
              flex-wrap: wrap;
            }
            .achievement-img {
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
  )
}

export default AchievementJp