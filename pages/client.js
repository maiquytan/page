import React from 'react'

const Client = () => {
  return (
    <div className="client">
      <h1 className="h1">** Our Clients screen **</h1>

      {/* Header */}
      <div className="bg_header">
        <img className="img_header" src="bg_about.webp" alt="bg_header" title="bg_header" width="1920" height="637" />
        <div className="about_header">
          <div className="header_title">Our Clients</div>
          <div className="header_content">
            <div className="header_left">Unlocking your growth potential with dedication and responsiveness</div>
            <div className="header_right">
              <img src="img_client.webp" alt="img_header" title="img_header" width="644" height="644" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile, Web */}
      <div className="bg_mobile_web">
        <div className="mobile_web">
          <div className="mobile_web_header">Customized Software Solutions for Web and Mobile: Axalize's Commitment to Innovation and Versatility</div>
          <div className="mobile_web_content">At Axalize, we are dedicated to providing customized software solutions that meet the unique needs of each client. With a focus on web and mobile application development, we leverage our extensive experience to deliver high-quality results. Our portfolio showcases the diverse range of industries and businesses we have served, demonstrating our versatility and commitment to delivering innovative solutions. By working with Axalize, clients can trust that their project is in capable hands and that they will receive a tailored solution designed to drive business success.</div>
        </div>
      </div>

      {/* Reason */}
      <div className="bg_reason">
        <div className="reason">
          <div className="reason_header">What sets Axalize apart in the eyes of our clients</div>
          <div className="reason_content">
            <div className="one_reason">
              <img src="img_reason1.svg" alt="img_reason" title="img_reason" width="110" height="110" />
              <p>We prioritize a customer-centric approach, always working closely with our clients to understand their unique needs and deliver tailored solutions</p>
            </div>
            <div className="one_reason">
              <img src="img_reason2.svg" alt="img_reason" title="img_reason" width="110" height="110" />
              <p>Our deep expertise in offshore software development allows us to deliver cutting-edge results that drive real business value.</p>
            </div>
            <div className="one_reason">
              <img src="img_reason3.svg" alt="img_reason" title="img_reason" width="110" height="110" />
              <p>Our focus on quality and attention to detail sets us apart, ensuring that every project is delivered on time and within budget.</p>
            </div>
            <div className="one_reason">
              <img src="img_reason4.svg" alt="img_reason" title="img_reason" width="110" height="110" />
              <p>Our team is comprised of highly skilled and knowledgeable professionals who are passionate about delivering innovative solutions that drive success for our clients.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expert */}
      <div className="expert">
        <div className="expert_left">
          <div className="expert_header">Expert software solutions driving business success.</div>
          <div className="bar1"></div>
          <p className="expert_content">With deep expertise in over 50 projects, Axalize operates under a quality-driven model. We leverage innovative technical knowledge to deliver cutting-edge, timely, and valuable solutions. At Axalize, we prioritize a customer-centric approach, ensuring that our core values align with those of our clients to deliver results that truly drive business success.</p>
        </div>
        <div className="expert_right">
          <img src="Group23.webp" alt="img_expert" title="img_expert" width="605" height="663" />
        </div>
      </div>

      <div className="bg_feedback">
        <div className="bg_feedback2">
          <div className="feedback">
            <div className="feedback_header">
              <div>Success and Satisfaction with Axalize</div>
              <p>At Axalize, client satisfaction is at the heart of everything we do. Our commitment to delivering exceptional software development solutions has earned us a reputation as a trusted partner for businesses looking to drive success and growth.</p>
            </div>
            <div className="bar2"></div>
            <div className="what_say">What do our customers say?</div>
          </div>
          <div className="feedback_content">
            <div className="one_feedback">
              <img src="img_feedback1.webp" className="img_feedback" alt="img_feedback" title="img_feedback" width="210" height="210" />
              <p>U là trời, quá tuyệt vời! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div>~ Client Name ~</div>
              <label>Conpany Name</label>
            </div>
            <div className="one_feedback">
              <img src="img_feedback2.webp" className="img_feedback" alt="img_feedback" title="img_feedback" width="210" height="210" />
              <p>U là trời, quá tuyệt vời! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div>~ Client Name ~</div>
              <label>Conpany Name</label>
            </div>
            <div className="one_feedback">
              <img src="img_feedback3.webp" className="img_feedback" alt="img_feedback" title="img_feedback" width="210" height="210" />
              <p>U là trời, quá tuyệt vời! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div>~ Client Name ~</div>
              <label>Conpany Name</label>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .client{
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }
          .h1{
            display:none;
          }
          .bg_header{
            position: relative;
            width:100%;
            overflow: hidden;
          }
          .img_header{
            position:absolute;
            right:0;
            top:118px;
            z-index:1;
          }
          .about_header{
            position:relative;
            height:calc(100vh - 118px);
            max-width: 1260px;
            margin:auto;
            margin-top: 118px;
            display:flex;
            flex-direction:column;
            align-items: flex-start;
            z-index:2;
          }
          .header_title{
            background-image: url("../Ellipse.svg");
            background-size:cover;
            background-repeat: no-repeat;
            width: 28%;
            height: 103px;
            font-size: 43px;
            display: flex;
            justify-content: center;
            align-items: center;
            position:relative;
            top:165px;
            font-family: 'Lexend', sans-serif;
            color: #DEDEDE;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
          }
          .header_content{
            display: flex;
            justify-content:space-between;
            align-items: center;
            margin-bottom: 40px;
            max-width:1260px;
          }
          .header_left{
            width:29%;
            font-size: 23px;
            line-height: 33px;
            color: #FFFFFF;
            margin-bottom: 100px; 
          }
          .header_right{
            max-width:60%;
          }
          .header_right>img{
            max-width:100%;
          } 

          //---------------------------------
          .bg_mobile_web{
            background: url("../61769.webp");
            background-size:cover;
            background-repeat: no-repeat;
            width: 66%;
            height:490px;
            margin:auto;
            border-radius: 15px;
            margin-bottom: 90px;
          }
          .mobile_web{
            height:513px;
          }
          .mobile_web_header{
            margin-left: 11%;
            padding-top: 60px;
            margin-bottom:40px;
            font-size:32px;
            font-weight: 600;
            color: #1365B1;
          }
          .mobile_web_content{
            margin-left: 11%;
            width: 40%;
            font-size: 16px;
            line-height: 23px;
          }
          
          //Reason------------------------
          .bg_reason{
            background-image: url("../bg_reason.webp");
            background-size:cover;
            background-repeat: no-repeat;
            height: 1024px;
          }
          .reason{
            display:flex;
            flex-direction: column;
            justify-content:center;
            text-align: center;
            max-width:1260px;
            margin:auto;
          }
          .reason_header{
            font-size: 36px;
            color: #E2ECF5;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
            margin-top: 300px;
            margin-bottom: 100px;
          }
          .reason_content{
            display: flex;
            gap:1%;
          }
          .one_reason{
            diplay:flex;
            flex-direction: column;
            justify-content: center;
            text-align:center;
            width: 24%;
            height:410px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          .one_reason>img{
            margin-top: 58px;
            margin-bottom: 35px;
          }
          .one_reason>p{
            width: 74.5%;
            margin:auto;
            font-size: 17px;
            line-height: 21px;
          }

          //Expert-------------------------
          .expert{
            display:flex;
            justify-content: space-between;
            max-width:1260px;
            margin:auto;
            margin-top: 100px;
            margin-bottom:100px;
          }
          .expert_left{
            margin-left:25px;
          }
          .expert_header{
            width: 30%;
            font-weight: 500;
            font-size: 42px;
            line-height: 57px;
            letter-spacing: 0.08em;
          }
          .bar1,.bar2{
            width:15px;
            height:80px;
            background: #1466B1;
            margin-bottom:15px;
          }
          .expert_content{
            width:75%;
            font-weight: 300;
            font-size: 18px;
            line-height: 23px;
            letter-spacing: 0.03em;
            color: #525252;
          }
          .expert_right{
            margin-right:25px;
          }
          
          //Feedback---------------------
          .bg_feedback{
            height: 1100px;
            background: #FFFFFF;
          }
          .bg_feedback2{
            background:#1466B1;
            height:650px;
          }
          .feedback{
            max-width:1260px;
            margin:auto;
            color: #FFFFFF;
          }
          .feedback_header{
            padding-top:60px;
            max-width: 1260px;
            display:flex;
            justify-content:space-between;
          }
          .feedback_header>div{
            width:42%;
            font-weight: 600;
            font-size: 42px;
            line-height: 51px;
          }
          .feedback_header>p{
            width:47%;
            margin-top:8px;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.04em;
          }
          .bar2{
            background-color: #FFFFFF;
          }
          .what_say{
            font-weight: 600;
            font-size: 42px;
            line-height: 51px;
            margin-bottom: 30px;
            color: #E2ECF5;
            text-shadow: 1px 4px 4px rgba(26, 75, 120, 0.62);
          }
          .feedback_content{
            display: flex;
            gap:15px;
            max-width: 1260px;
            height:600px;
            margin:auto;
          }
          .one_feedback{
            width:33%;
            display:flex;
            flex-direction: column;
            align-items:center;
            background: #F8F8F8;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
          }
          .img_feedback{
            border-radius:50%;
            margin-top: 40px;
            margin-bottom: 32px;
          }
          .one_feedback>p {
            width:68%;
            margin:auto;
            margin-top:0;
            margin-bottom: 35px;
            color: #424040;
            font-size: 16px;
            line-height: 22px;
            font-style: italic;
          }
          .one_feedback>div {
            font-size: 20px;
            line-height: 22px;
            font-weight: 500;
          }
          .one_feedback>label{
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            color:#1466B1;
          }
        `}
      </style>
    </div>
  )
}

export default Client
