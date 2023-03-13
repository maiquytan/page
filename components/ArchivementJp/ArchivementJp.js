import React from 'react'

const ArchivementJp = () => {
  return (
    <div className="achivement">
      <div className="achivement-title">開発実績</div>
      <div className="achivement-subTitle">Our Achivements</div>
      <div className="achivemnet-container">
        <img src="/achivementJp.png" className="achivemnet-img"/>
        <div className="achivemnet-right">
          <p className="achivement-text">様々なエンジニアを擁するAxalizeではWebアプリ・モバイルアプリをメインに、Webサイトや多くの開発案件を手がけています。 最近ではRPA(Robotic Process Automation)の開発にも力を入れております。</p>
          <div className="achivement-bottom">
            <button className="primary-btn">Read More</button>
            <div className="achivemnet-wrapper">
              <div className="achivemnet-column">
                <h1 className="achivemnet-number">47+</h1>
                <p className="achivement-text ">完了したプロジェクト</p>
              </div>
              <div className="achivemnet-column">
                <h1 className="achivemnet-number">14+</h1>
                <p className="achivement-text ">世界中のお客様</p>
              </div>
              <div className="achivemnet-column">
                <h1 className="achivemnet-number">100</h1>
                <p className="achivement-text ">リピート率</p>
              </div>
          </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .achivement {
            max-width: 1260px;
            margin : auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .achivement-subTitle {
            font-size: 18px;
            margin-top: 9px;
            font-weight: bold;
            color: #CCCCCC;
          }        
          .achivement-title {
            margin-top: 87px;
            font-size: 30px;
            font-weight: bold;
            width: fit-content;
            border-bottom: 3px solid #0FA5EF;
          }
          .achivemnet-container {
            margin-top: 24px;
            gap: 38px;
            display: flex;
          }
          .achivement-text {
            font-size: 16px;
          }
          .achivemnet-img {
            width: 445px;
            object-fit: cover;
          }
          .achivemnet-right {
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
          }
          .achivement-bottom {
            display: flex;
            flex-direction: column;
            gap: 33px;
          }
          .achivemnet-wrapper {
            display: flex;
            gap: 30px;
          }
          .achivemnet-column {
            display: flex;
            flex-direction: column;
            gap: 3px;
            color: #2D2D2D;
          }
          .achivemnet-column:Last-child {
            margin-left: 50px;
          }
        `}
      </style>
    </div>
  )
}

export default ArchivementJp