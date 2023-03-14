import React from 'react'

const Client = () => {
  return (
    <div className="client">
      <h1 className="h1">** Our Clients screen **</h1>

      {/* Header */}
      <div className="bg-header">
        <div className="img-header">
          <img src="/bg_about.webp" alt="bg-header" title="bg-header" width="1920" height="637" />
        </div>
        <div className="about-header">
          <div className="header-title">Our Clients</div>
          <div className="header-content">
            <div className="header-left">Unlocking your growth potential with dedication and responsiveness</div>
            <div className="header-right">
              <img src="/img_client.webp" alt="img-header" title="img-header" width="644" height="644" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile, Web */}
      <div className="bg-mobile-web">
        <div className="mobile-web">
          <div className="mobile-web-header">Customized Software Solutions for Web and Mobile: Axalize's Commitment to Innovation and Versatility</div>
          <div className="mobile-web-content">At Axalize, we are dedicated to providing customized
            software solutions that meet the unique needs of each client. With a focus on web and
            mobile application development, we leverage our extensive experience to deliver high
            -quality results. Our portfolio showcases the diverse range of industries and businesses
            we have served, demonstrating our versatility and commitment to delivering innovative
            solutions. By working with Axalize, clients can trust that their project is in capable
            hands and that they will receive a tailored solution designed to drive business success.
          </div>
        </div>
      </div>

      {/* Reason */}
      <div className="bg-reason">
        <div className="reason">
          <div className="reason-header">What sets Axalize apart in the eyes of our clients</div>
          <div className="reason-content">
            <div className="two-reason">
              <div className="one-reason">
                <img src="/img_reason1.svg" alt="img-reason" title="img-reason" width="110" height="110" />
                <p>We prioritize a customer-centric approach, always working closely with our clients to understand their unique needs and deliver tailored solutions</p>
              </div>
              <div className="one-reason">
                <img src="/img_reason2.svg" alt="img-reason" title="img-reason" width="110" height="110" />
                <p>Our deep expertise in offshore software development allows us to deliver cutting-edge results that drive real business value.</p>
              </div>
            </div>
            <div className="two-reason">
              <div className="one-reason">
                <img src="/img_reason3.svg" alt="img-reason" title="img-reason" width="110" height="110" />
                <p>Our focus on quality and attention to detail sets us apart, ensuring that every project is delivered on time and within budget.</p>
              </div>
              <div className="one-reason">
                <img src="/img_reason4.svg" alt="img-reason" title="img-reason" width="110" height="110" />
                <p>Our team is comprised of highly skilled and knowledgeable professionals who are passionate about delivering innovative solutions that drive success for our clients.</p>
              </div>
            </div>
          </div>
          <div className="img-reason">
            <img src="/Asset.svg" alt="img-reason" title="img-reason" width="200" height="35" />
          </div>
        </div>
      </div>

      {/* Expert */}
      <div className="expert">
        <div className="expert-left">
          <div className="expert-header">Expert software solutions driving business success.</div>
          <div className="bar blue"></div>
          <p className="expert-content">With deep expertise in over 50 projects, Axalize operates
            under a quality-driven model. We leverage innovative technical knowledge to deliver
            cutting-edge, timely, and valuable solutions. At Axalize, we prioritize a customer-centric
            approach, ensuring that our core values align with those of our clients to deliver results
            that truly drive business success.</p>
        </div>
        <div className="expert-right">
          <img src="/Group23.webp" alt="img-expert" title="img-expert" width="605" height="663" />
        </div>
      </div>

      {/* Feedback */}
      <div className="bg-feedback">
        <div className="bg-feedback2">
          <div className="feedback">
            <div className="feedback-header">
              <div>
                <p>Success and Satisfaction with Axalize</p>
                <div className="bar white"></div>
              </div>
              <p>At Axalize, client satisfaction is at the heart of everything we do. Our commitment
                to delivering exceptional software development solutions has earned us a reputation
                as a trusted partner for businesses looking to drive success and growth.</p>
            </div>
            <div className="what-say">What do our customers say?</div>
          </div>
          <div className="feedback-content">
            <div className="one-feedback">
              <img src="/img_feedback1.webp" className="img-feedback" alt="img-feedback" title="img-feedback" width="210" height="210" />
              <div className="evaluate">U là trời, quá tuyệt vời! Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</div>
              <div className="client-name">~ Client Name ~</div>
              <p className="company-name">Conpany Name</p>
            </div>
            <div className="one-feedback">
              <img src="/img_feedback2.webp" className="img-feedback" alt="img-feedback" title="img-feedback" width="210" height="210" />
              <div className="evaluate">U là trời, quá tuyệt vời! Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</div>
              <div className="client-name">~ Client Name ~</div>
              <p className="company-name">Conpany Name</p>
            </div>
            <div className="one-feedback">
              <img src="/img_feedback3.webp" className="img-feedback" alt="img-feedback" title="img-feedback" width="210" height="210" />
              <div className="evaluate">U là trời, quá tuyệt vời! Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</div>
              <div className="client-name">~ Client Name ~</div>
              <p className="company-name">Conpany Name</p>
            </div>
          </div>
          <div className="feedback-content-mobile">
            <div className="one-feedback">
              <div className="feedback-left">
                <img src="/img_feedback1.webp" className="img-feedback" alt="img-feedback" title="img-feedback" width="120" height="120" />
                <div className="client-name">~ Client Name ~</div>
                <p className="company-name">Conpany Name</p>
              </div>
              <div className="evaluate">U là trời, quá tuyệt vời! Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</div>
            </div>
            <div className="one-feedback">
              <div className="feedback-left">
                <img src="/img_feedback2.webp" className="img-feedback" alt="img-feedback" title="img-feedback" width="120" height="120" />
                <div className="client-name">~ Client Name ~</div>
                <p className="company-name">Conpany Name</p>
              </div>
              <div className="evaluate">U là trời, quá tuyệt vời! Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</div>
            </div>
            <div className="one-feedback">
              <div className="feedback-left">
                <img src="/img_feedback3.webp" className="img-feedback" alt="img-feedback" title="img-feedback" width="120" height="120" />
                <div className="client-name">~ Client Name ~</div>
                <p className="company-name">Conpany Name</p>
              </div>
              <div className="evaluate">U là trời, quá tuyệt vời! Lorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .client {
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }
          .h1 {
            display: none;
          }
          .bg-header {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          .img-header {
            position: absolute;
            right: 0;
            top: 118px;
            z-index: 1;
          }
          .about-header {
            position: relative;
            height: calc(100vh - 118px);
            max-width: 1260px;
            margin: auto;
            margin-top: 118px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            z-index: 2;
          }
          .header-title {
            background-image: url("../Ellipse.svg");
            background-size: cover;
            background-repeat: no-repeat;
            width: 28%;
            height: 103px;
            font-size: 43px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            top: 165px;
            font-family: 'Lexend', sans-serif;
            color: #DEDEDE;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
          }
          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;
            max-width: 1260px;
          }
          .header-left {
            width: 29%;
            font-size: 23px;
            line-height: 33px;
            color: #FFFFFF;
            margin-bottom: 100px;
          }
          .header-right {
            max-width: 60%;
          }
          .header-right>img {
            max-width: 100%;
          }

          //---------------------------------
          .bg-mobile-web {
            background: url("../61769.webp");
            background-size: cover;
            background-repeat: no-repeat;
            width: 66%;
            margin: auto;
            border-radius: 15px;
            margin-bottom: 90px;
          }

          .mobile-web-header {
            width: 80%;
            margin: auto;
            padding-top: 60px;
            margin-bottom: 40px;
            font-size: 32px;
            font-weight: 600;
            color: #1365B1;
          }
          .mobile-web-content {
            margin-left: 10%;
            width: 40%;
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 100px;
          }

          //Reason------------------------
          .bg-reason {
            background-image: url("../bg_reason.webp");
            background-size: cover;
            background-repeat: no-repeat;
            background-position-x: center;
            position: relative;
          }
          .img-reason {
            display: block;
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
          }
          .img-reason>img {
            width: 100%;
          }
          .reason {
            display:flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            position: relative;
            z-index: 2;
            margin: auto;
            background: linear-gradient(180deg, rgba(72, 71, 71, 0.05) 60%, #1466B1 91%);
          }
          .reason-header {
            font-size: 36px;
            max-width: 1260px;
            margin: auto;
            color: #E2ECF5;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
            margin-top: 300px;
            margin-bottom: 100px;
          }
          .reason-content {
            display: flex;
            gap: 1%;
            max-width: 1260px;
            margin: auto;
            margin-bottom: 50px;
          }
          .two-reason {
            display: flex;
            gap: 2%;
          }
          .one-reason {
            diplay: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            width: 49%;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          .one-reason>img {
            margin-top: 58px;
            margin-bottom: 35px;
            height: auto;
            aspect-ratio: 1;
            object-fit: cover;
          }
          .one-reason>p {
            width: 74.5%;
            margin: auto;
            font-size: 17px;
            line-height: 21px;
            margin-bottom: 50px;
          }

          //Expert-------------------------
          .expert {
            display: flex;
            justify-content: space-between;
            max-width: 1260px;
            margin: auto;
            margin-top: 100px;
            margin-bottom: 100px;
          }
          .expert-left {
            margin-left: 25px;
          }
          .expert-header {
            width: 30%;
            font-weight: 500;
            font-size: 42px;
            line-height: 57px;
            letter-spacing: 0.08em;
          }
          .bar {
            width: 15px;
            height: 80px;
            margin-bottom: 15px;
          }
          .blue {
            background: #1466B1;
          }
          .white {
            background: #FFFFFF;
          }
          .expert-content {
            width: 75%;
            font-weight: 300;
            font-size: 18px;
            line-height: 23px;
            letter-spacing: 0.03em;
            color: #525252;
          }
          .expert-right {
            margin-right: 25px;
          }

          //Feedback---------------------
          .bg-feedback {
            height: auto;
            background: #FFFFFF;
            padding-bottom: 550px;
          }
          .bg-feedback2 {
            background: #1466B1;
            height: 650px;
          }
          .feedback {
            max-width: 1260px;
            margin: auto;
            color: #FFFFFF;
          }
          .feedback-header {
            padding-top: 60px;
            max-width: 1260px;
            display: flex;
            justify-content: space-between;
          }
          .feedback-header>div {
            width: 42%;
            font-weight: 600;
            font-size: 42px;
            line-height: 51px;
          }
          .feedback-header>p {
            width: 47%;
            margin-top: 8px;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.04em;
          }
          .what-say {
            font-weight: 600;
            font-size: 42px;
            line-height: 51px;
            margin-bottom: 30px;
            color: #E2ECF5;
            text-shadow: 1px 4px 4px rgba(26, 75, 120, 0.62);
          }
          .feedback-content,.feedback-content-mobile {
            display: flex;
            gap: 15px;
            max-width: 1260px;
            height: auto;
            margin: auto;
          }
          .feedback-content-mobile {
            display: none;
          }
          .one-feedback {
            width: 33%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #F8F8F8;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
          }
          .img-feedback {
            border-radius: 50%;
            margin-top: 40px;
            margin-bottom: 32px;
          }
          .client-name {
            font-size: 20px;
            line-height: 22px;
            font-weight: 500;
          }
          .evaluate {
            width: 68%;
            margin: auto;
            margin-top: 0;
            margin-bottom: 35px;
            color: #424040;
            font-size: 16px;
            line-height: 22px;
            font-style: italic;
          }
          .company-name {
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            color: #1466B1;
            margin-bottom: 75px;
          }
          @media screen and (max-width: 900px) {
            .about-header {
              height: auto;
              margin-top: 50px;
              justify-content: normal;
            }
            .img-header {
              top: 0px;
              left: -70%;
              width: 200%;
              height: auto;
              aspect-ratio: 3;
              object-fit: cover;
            }
            .img-header>img {
              width: 100%;
              height: 100%;
            }
            .header-title {
              margin-top: 10%;
              background: none;
              width: 100%;
              height: auto;
              text-align: center;
              top: 0;
              left: 0;
            }
            .header-content {
              flex-direction: column-reverse;
              width: 100%;
            }
            .header-left {
              width: auto;
              padding: 0 24px;
              margin: 0;
              font-size: 18px;
              line-height: 30px;
              color: #494949;
              text-align: center;
            }
            .header-right {
              width: 100%;
              height: auto;
              aspect-ratio: 1;
              object-fit: cover;
              margin: auto;
              margin-top: 5%;
              margin-bottom: 10%;
            }
            .header-right>img {
              width: 100%;
              height: 100%;
            }
            .bg-mobile-web {
              width: 100%;
              margin: 0;
              background-position-x: 40%;
            }
            .mobile-web-header {
              width: auto;
              margin: 0;
              padding: 40px;
            }
            .mobile-web-content {
              width: auto;
              margin: 0;
              padding: 0 40px;
              text-align: justify;
              padding-bottom: 40px;
            }
            .bg-reason {
              background-size: contain;
            }
            .reason {
              background: linear-gradient(180deg, rgba(20, 102, 177, 0) 0%, #1466B1 69.44%);
            }
            .reason-header {
              font-size: 28px;
              margin-top : 250px;
              margin-bottom: 80px;
            }
            .reason-content {
              flex-direction: column;
              padding: 0 20px;
              gap: 2%;
              margin-bottom: 30px;
            }
            .one-reason>img {
              max-width: 33%;
              margin-top: 25px;
              margin-bottom: 15px;
            }
            .two-reason {
              gap: 3%;
              margin-bottom: 20px;
            }
            .expert {
              flex-direction: column;
            }
            .expert-left {
              margin: 0;
              margin-bottom: 20px;
            }
            .expert-header,.expert-content,.expert-right {
              width: auto;
              padding: 0 12px;
              margin: 0;
            }
            .blue {
              margin: 12px;
            }
            .expert-right {
              display: flex;
              justify-content: center;
            }
            //----------------------------
            .bg-feedback {
              background: #1667B2;
            }
            .feedback {
              padding: 0 12px;
            }
            .feedback-header {
              flex-direction: column;
            }
            .feedback-header>div {
              width: auto;
              font-size: 40px;

            }
            .feedback-header>p {
              width: auto;
              margin-bottom: 20px;
            }
            .bar {
              width: 10px;
              height: 60px;
            }
            .what-say {
              width: auto;
              margin-bottom: 30px;
            }
            .feedback-content {
              display: none;
              flex-direction: column;
            }
            .feedback-content-mobile {
              display: block;
              background-color: #1466b1;
              padding: 0 12px;
            }
            .one-feedback {
              width: auto;
              margin-bottom: 12px;
              padding: 24px 0;
              flex-direction: row;
              justify-content: center;
              gap: 3%;
            }
            .feedback-left {
              width: 40%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .img-feedback {
              margin: 0;
              margin-bottom: 20px;
            }
            .evaluate {
              width: 53%;
              margin: 0;
            }
            .company-name {
              margin: 0;
            }
          }
          @media screen and (max-width: 600px) {
            .img-header {
              width: 200%;
              height: auto;
              aspect-ratio: 2.1;
              object-fit: cover;
            }
            .header-left {
              font-size: 14px;
              text-align: left;
            }
            .mobile-web-header {
              font-size: 18px;
              padding: 24px;
              padding-top: 40px;
            }
            .mobile-web-content {
              font-size: 14px;
              padding: 0 24px;
              padding-bottom: 40px;
            }
            .reason-content {
              padding: 0 12px;
            }
            .reason-header {
              font-size: 15px;
              margin-top : 130px;
              margin-bottom: 30px;
            }
            .two-reason {
              margin-bottom: 12px;
            }
            .one-reason>p {
              font-size: 13px;
              line-height: 16px;
              width: 89%;
              margin-bottom: 25px;
            }
            //------------------------
            .expert {
              margin-top: 30px;
            }
            .expert-header {
              font-size: 20px;
              line-height: 24px;
              color: #1365B1;
              font-weight: 600;
              letter-spacing: normal;
            }
            .bar {
              width: 3px;
              height: 35px;
              margin-bottom: 10px;
            }
            .expert-content {
              font-size: 14px;
              color: #383838;
            }
            .expert-right>img {
              width: 100%;
              height: 100%;
            }
            //-----------------------
            .feedback-header {
              padding-top: 35px;
            }
            .feedback-header>div {
              font-size: 19px;
            }
            .feedback-header>p {
              font-size: 14px;
              margin-bottom: 10px;
            }
            .what-say {
              font-size: 18px;
              margin-bottom: 10px;
            }
            .client-name {
              font-size: 15px;
            }
            .evaluate,.company-name {
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Client
