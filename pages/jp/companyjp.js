import React from 'react'

import { listInforCompanyJP, listMember } from '../../constants'

const companyjp = () => {
  return (
    <div className="company">
      <div className="info">
        <div className="info-container">
          <div className="info-inner">
            <h1 className="title-main">会社概要</h1>
            <div className="bar"></div>
            <p className="default-subtitle">About Our Company</p>
            <div className="info-detail flex-column">
              {listInforCompanyJP.map((li, index) => (
                <div className="group" key={index}>
                  <p className="info-label">{li.title}</p>
                  <p className="info-text">{li.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="info-mobile">
        <div className="img-header">
          <img src="/jp/company_bg.webp" title="img_company" alt="img_company" width="428" height="173" />
        </div>
        <div className="info-inner">
          <h1 className="title-main">会社概要</h1>
          <div className="bar"></div>
          <p className="default-subtitle">About Our Company</p>
          <div className="info-detail flex-column">
            {listInforCompanyJP.map((li, index) => (
              <div className="group" key={index}>
                <p className="info-label">{li.title}</p>
                <p className="info-text">{li.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about session">
        <div className="container">
          <p className="about-title flex-center">VISION</p>
          <p className="about-text">
            <p>Axalizeの仲間全ての「幸せ」を第一とすると共に</p> 地球上に独自の価値と革新を生み出すリーディング企業となる。</p>
        </div>
        <div className="container">
          <p className="about-title flex-center">MISSION</p>
          <p className="about-text"><p>最先端のテクノロジーを活用し、</p> 一人一人にとって最適な「Axia(価値)」を最善の手段にて実現する。</p>
        </div>
        <div className="container">
          <p className="about-title flex-center value-title">VALUE</p>
          <ul className="about-text value-list">
            <li className="flex-center value-item">ミッションを徹底的に追及すること。</li>
            <li className="flex-center value-item">変化に対する行動力を持つこと。</li>
            <li className="flex-center value-item">それぞれの個性を大切にすること。</li>
            <li className="flex-center value-item">チームが価値観を共有し、同じ目標を目指すこと。</li>
            <li className="flex-center value-item">お客様にとっての価値を深く理解すること。</li>
            <li className="flex-center value-item">決して枠にとらわれないこと。</li>
          </ul>
        </div>
      </div>
      <div className="CEO flex-center flex-column session" >
        <div className="container">
          <div className="caption flex-center flex-column">
            <h1 className="title-main underlined">代表ご挨拶</h1>
            <p className="default-subtitle">CEO Message</p>
          </div>
          <div className="CEO-info flex-center">
            <div className="CEO-img">
              <img src="/jp/CEO.webp" alt="CEO" title="CEO" width="445" height="365" />
            </div>
            <div className="CEO-text">
              <p>ベトナムから世界へ「新しい価値」を送り出し</p> 世界と共に「進化」し続けます
            </div>
          </div>
          <div>
            <p>2017年にベトナムに移住して以降、ベトナム人の勤勉さ、若さ、明るさそして外国人である私にも常に敬意を払ってくれる姿勢に感銘を受けました。</p>
            <p> 私がベトナムでアクサライズを設立した理由としてこの様なベトナムの仲間たちとこれからも一緒に働きたいと思った事と</p>
            <p>"地球市民"としてより良い社会作りを共に目指したいと思ったからです。</p>
            <p>日本人とベトナム人の融合によって発生する科学反応で、今まで成し得なかった「新しい価値」を世界に送り出すことを約束いたします。</p>
            <p className="separation">私の好きな話である人が妻に「何故、人類はここまで進化をしてこられたと思う？」と問いかけたところ、その妻は「下の人達が、上の人達を常に超えてきたからでしょ？それでなければ人類は退化しちゃうでしょ」と答えたそうです。</p>
            <p>「進化」とは一言で口にすると、とても難しく複雑に聞こえてしまいがちですが、 新しい世代が前の世代を超え続けた結果の「進化」という、実にシンプルなことだという事に気づかされました。</p>
            <p>私たちAxalizeは、先人達の築き上げた物を超え、より良い社会とより良いサービスを実現していくことを使命と感じ、また次の世代を「進化」に導くことが義務であると考えます。まだまだこれからの会社ではありますが、社員一同支えてくださる皆様と共に一つ一つの壁を乗り越えて世界により大きな価値を与えられる企業に「進化」し続ける企業でありたいと思います。</p>
          </div>
          <div className="CEO-footer">
            <label>代表取締役社長</label>
            <p>中尾健悟</p>
          </div>
        </div>
      </div>
      <div className="member">
        <div className="caption flex-center flex-column">
          <h1 className="title-main underlined">メンバー紹介</h1>
          <p className="default-subtitle">Our Members</p>
        </div>
        <div className="member-main">
          {listMember.map((mem, index) => (
            <div className="img-member" key={index}>
              <img src={mem.img} title="img_member" alt="img_member" width="440" height="367" />
            </div>
          ))}
        </div>
      </div>
      <div className="location session">
        <div className="container">
          <div className="caption flex-center flex-column">
            <h1 className="title-main underlined">オフィス所在地</h1>
            <p className="default-subtitle">Office Location</p>
          </div>
          <div className="map">
            <iframe id="iframe" title="Map" width="1110" height="513" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6412536479356!2d105.79909331440697!3d21.00701289389737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca166c91fa7%3A0x216144e51f80907e!2zVG-DoCBuaMOgIDI1VDIsIE5ndXnhu4VuIFRo4buLIFRo4bqtcCwgVHJ1bmcgSG-DoCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWkgMTAwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1581490205830!5m2!1sen!2s" ></iframe>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .company {
            width: 100%;
            background: #FFFFFF;
            font-family: Meiryo;
          }
          .flex-column {
            display: flex;
            flex-direction: column;
          }
          .flex-center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .session {
            padding: 0 30px;
          }
          .container {
            width: 100%;
            max-width: 1110px;
            margin: auto;
          }
          .info {
            width: 100%;
            height: 761px;
            background-image: url("/jp/company_bg.webp");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: right;
            position: relative;
            margin-bottom: 90px;
          }
          .info-mobile {
            display: none;
          }
          .default-subtitle {
            font-size: 18px;
            margin-top: 9px;
            font-weight: bold;
            color: #CCCCCC;
          }
          .title-main {
            font-size: 30px;
            line-height: 45px;
            font-weight: bold;
            width: fit-content;
          }
          .bar {
            width: 234px;
            height: 0;
            border-top: 3px solid #0FA5EF;
          }
          .info-container {
            width: 55%;
            max-width: 1040px;
            min-width: 900px;
            position: absolute;
            background-color: #fff;
            height: 672px;
            left: 0;
            bottom:-60px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            box-shadow: 0px 3px 6px #00000029;
          }
          .info-inner {
            width: 100%;
            display: flex;
            padding-right: 96px;
            flex-direction: column;
            font-size: 15px;
            margin-left: 39%;
          }
          .info-detail {
            margin-top: 42px;
            gap: 7px;
          }
          .group {
            display: flex;
          }
          .info-label {
            min-width: 140px;
          }
          .info-text {
            flex-grow: 1;
            line-height: 23px;
          }
          .about-text {
            padding: 36px 0;
            border: 7px solid #CECECE;
            color: #000000;
            font-weight: bold;
            text-align: center;
          }
          .about-title {
            padding: 30px 0;
            font-size: 20px;
            color: #CECECE;
            font-weight: 500;
          }
          .value-title {
            padding: 61px 0 22px 0;
          }
          .CEO {
            margin-top: 90px;
          }
          .underlined {
            border-bottom: 3px solid #0FA5EF;
          }
          .CEO-info {
            margin-top: 60px;
            margin-bottom: 50px;
            justify-content: space-between;
          }
          .CEO-img>img {
            width: 100%;
            height: auto;
            aspect-ratio: 1.22;
            vertical-align: top;
          }
          .separation {
            padding-top: 20px;
          }
          .CEO-text {
            max-width: 525px;
            font-size: 25px;
            line-height: 38px;
            font-weight: bold;
            padding-right: 42px;
          }
          .CEO-footer {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 50px;
          }
          .CEO-footer>p {
            font-size: 70px;
            padding-left: 28px;
            line-height: 84px;
            font: normal normal normal 70px/84px TA_kouran;
          }
          .CEO-footer>label {
            font-size: 20px;
            font-weight: bold;
          }
          .member {
            padding: 0 80px;
            margin-top: 39px;
          }
          .member-main {
            display: flex;
            flex-wrap: wrap;
            margin-top: 100px;
          }
          .img-member {
            width: 25%;
          }
          .img-member>img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 1.2;
            vertical-align: top;
          }
          .location {
            margin-top: 100px;
          }
          .map {
            margin-top: 40px;
          }
          .map>iframe {
            width: 100%;
            height: auto;
            aspect-ratio: 2.16;
          }
          .img-header {
            width: 100%;
            height: auto;
          }
          .img-header>img {
            width: 100%;
            height: 100%;
            vertical-align: top;
            aspect-ratio: 2.5;
          }
          @media screen and (max-width: 1024px) {
            .session {
              padding: 0 40px;
            }
            .info {
              display: none;
            }
            .info-mobile {
              display: block;
            }
            .info-inner {
              margin: 0;
              padding: 0 40px;
              padding-top: 40px;
            }
            .about-title {
              padding-top: 50px;
              padding-bottom: 11px;
            }
            .about-text {
              padding: 28px 20px;
            }
            .CEO {
              margin-top: 83px;
            }
            .caption {
              align-items: flex-start;
            }
            .CEO-info {
              flex-direction: column;
              align-items: flex-start;
              margin-top: 24px;
              margin-bottom: 34px;
            }
            .CEO-text {
              padding: 0;
              padding-top: 11px;
            }
            .CEO-img {
              width: 100%;
            }
            .CEO-footer>p {
              font-size: 62px;
            }
            .CEO-footer>label {
              font-size: 17px;
            }
            .member {
              margin-top: 147px;
              padding: 0 40px;
            }
            .member-main {
              margin-top: 77px;
            }
            .img-member {
              width: 33.33%;
            }
          }
          @media screen and (max-width: 768px) {
            .session {
              padding: 0 20px;
            }
            .img-member {
              width: 50%;
            }
            .info-label {
              min-width: 110px;
            }
            .map>iframe {
              aspect-ratio: 1.15;
            }
            .info-inner {
              padding: 0 20px;
              padding-top: 40px;
            }
            .about-title {
              font-size: 18px;
            }
            .member {
              padding: 0 20px;
            }
          }
          @media screen and (max-width: 480px) {
            .session,.member,.info-inner {
              padding-left: 15px;
              padding-right: 13px;
            }
            .title-main {
              font-size: 25px;
            }
            .about-title {
              font-size: 16px;
            }
            .about-text {
              padding: 28px 8px;
            }
            .CEO-text {
              font-size: 16px;
            }
            .CEO-footer {
              justify-content: space-between;
            }
            .CEO-footer>p {
              font-size: 50px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default companyjp
