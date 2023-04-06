import React from 'react';

const About = () => {
  return (
    <div className="about-us">
      <h1 className="h1">** About Us screen **</h1>

      {/* Header */}
      <div className="bg-header session">
        <div className="img-header">
          <img src="/bg_about.webp" alt="bg-header" title="bg-header" width="1920" height="637" />
        </div>
        <div className="about-header container">
          <div className="header-title">About us</div>
          <div className="header-content">
            <div className="header-left">We take pride in our commitment to delivering innovative and tailored software solutions to meet the unique needs of each of our clients. Discover why we are a leading provider of offshore software development services and how we are driving success for businesses around the world.</div>
            <div className="header-right">
              <img src="/Frame132.webp" alt="img-header" title="img-header" width="644" height="644" />
            </div>
          </div>
        </div>
      </div>

      {/* About Axalize */}
      <div className="about-bg">
        <div className="about-axa">
          <div className="about-left">
            <img src="/Frame133.webp" alt="img-about" title="img-about" width="612" height="612" />
          </div>
          <div className="about-right">
            <div className="about-title">About Axalize</div>
            <div className="about-content">Axalize is a top-ranked provider of offshore software development services, offering a wide range of solutions to meet the unique needs of businesses worldwide. With a focus on quality, collaboration, and innovation, our team of dedicated professionals leverages deep expertise and technical prowess to deliver results that drive real business value. From enterprise management systems to mobile app development and everything in between, we are committed to helping our clients succeed in the digital age.<br></br>
              We take a customer-centered approach to business, ensuring that our clients' goals and values are always at the forefront of everything we do. With a track record of success on over 50 offshore outsourcing software development projects, our clients trust us to deliver quality outcomes, on-time and on-budget.</div>
          </div>
        </div>
      </div>

      {/* Target */}
      <div className="target-about">
        <div className="our-target">
          <div className="target-left">
            <div className="target-title"><p>Our</p> <label>Mission</label> </div>
            <div className="target-content">To provide world-class IT outsourcing and offshore services that deliver measurable business value to our clients.</div>
          </div>
          <div className="target-right">
            <img src="/about_mission.webp" alt="misson" title="mission" width="530" height="533" />
          </div>
        </div>
        <div className="our-target">
          <div className="target-right">
            <img src="/about_vision.webp" alt="vision" title="vision" width="530" height="533" />
          </div>
          <div className="target-left">
            <div className="target-title"><p>Our</p> <label>Vision</label> </div>
            <div className="target-content">Elevating the recognition of Vietnamese tech capabilities and delivering impactful IT solutions for a better future.</div>
          </div>
        </div>
        <div className="target-title core-title-mobile"><p>Our</p> <label>Core Values</label> </div>
        <div className="our-target core">
          <div className="target-left core-mobile">
            <div className="target-title core-title"><p>Our</p> <label>Core Values</label> </div>
            <div className="target-content">1. Quality: We are committed to delivering high-quality solutions that meet the needs of our clients.<br></br>
              2. Collaboration: We work closely with our clients to understand their unique needs and develop solutions that meet their goals.<br></br>
              3. Innovation: We are dedicated to staying at the forefront of technology and continuously finding new ways to deliver value to our clients.<br></br>
              4. Integrity: We conduct all of our business with honesty and transparency, always acting in the best interest of our clients.<br></br>
              5. Respect: We value and respect our clients, employees, and partners, and foster an inclusive and supportive workplace culture.</div>
          </div>
          <div className="target-right core-mobile">
            <img src="/about_core.webp" alt="core" title="core" width="530" height="710" />
          </div>
        </div>

      </div>

      <style jsx>
        {`
          .about-us {
            background: #FFFFFF;
            font-family: 'Inter', sans-serif;
          }
          .h1 {
            display:none;
          }
          .bg-header {
            position: relative;
            width: 100%;
            overflow: hidden;
          }
          .img-header {
            position: absolute;
            right: 0;
            top: 78px;
            z-index: 1;
          }
          .session {
            padding: 0 30px;
            box-sizing: border-box;
          }
          .container {
            max-width: 1260px;
            width: 100%;
            display: flex;
            margin: auto;
          }
          .about-header {
            position: relative;
            height: auto;
            max-width: 1260px;
            margin: auto;
            margin-top: 78px;
            margin-bottom: 110px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            z-index: 2;
          }
          .header-title {
            background-image: url("../Ellipse.svg");
            background-size: cover;
            background-repeat: no-repeat;
            padding: 25px 85px;
            font-size: 43px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            top: 105px;
            left: 20px;
            font-family: 'Lexend', sans-serif;
            color: #DEDEDE;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1), 2px 4px 3px rgba(0, 0, 0, 0.32);
          }
          .header-content {
            display: flex;
            justify-content: space-between;
            max-width: 1260px;
          }
          .header-left {
            width: 40%;
            font-size: 20px;
            line-height: 33px;
            color: #FFFFFF;
            margin-top: 150px;
          }
          .header-right {
            width: 50%;
            height: auto;
          }
          .header-right>img {
            aspect-ratio: 1;
            object-fit: cover;
            width: 100%;
            height: 100%;
            vertical-align: top;
          }

          //------------------------------
          .about-bg {
            background-image: url("../Session.webp");
            height: auto;
            background-position-x: right;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            padding: 150px 20px;
          }
          .about-axa {
            max-width: 1260px;
            display: flex;
            justify-content: space-between;
            gap: 7%;
            margin: auto;
          }
          .about-left {
            width: 49%;
            height: auto;
            aspect-ratio: 1;
          }
          .about-left>img {
            width: 100%;
            height: 100%;
            vertical-align: top;
            object-fit: contain;
          }
          .about-right {
            width: 43%;
          }
          .about-title {
            font-weight: 600;
            font-size: 40px;
            line-height: 48px;
            color: #1365B1;
            margin-top: 26px;
            margin-bottom: 36px;
          }
          .about-content {
            font-size: 19px;
            line-height: 27px;
          }

          //----------------------------------
          .target-about {
            margin-top: 68px;
            padding: 0 20px;
            padding-bottom: 100px;
          }
          .our-target {
            max-width: 1260px;
            display: flex;
            justify-content: space-between;
            margin: auto;
            margin-bottom: 70px;
          }
          .target-left {
            padding-right: 40px;
            margin-left: 20px;
            width: 47%;
          }
          .target-right {
            width: 43%;
            border-radius: 5px;
            height: auto;
          }
          .target-right>img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .target-title {
            margin-top: 57px;
            margin-bottom: 54px;
            font-weight: bold;
            font-size: 60px;
            line-height: 78px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: 'IBM Plex Sans', sans-serif;
          }
          .target-title>p {
            color: #FFFFFF;
            text-shadow: 2px 0 rgba(39, 129, 212, 1), -2px 0 rgba(39, 129, 212, 1), 0 2px rgba(39, 129, 212, 1), 0 -2px rgba(39, 129, 212, 1),
            1px 1px rgba(39, 129, 212, 1), -1px -1px rgba(39, 129, 212, 1), 1px -1px rgba(39, 129, 212, 1), -1px 1px rgba(39, 129, 212, 1);
          }
          .target-title>label {
            color: #236B99;
          }
          .target-content {
            max-width: 550px;
            font-size: 20px;
            line-height: 26px;
          }
          .core-title-mobile {
            display: none;
          }

          @media screen and (max-width: 1024px) {
            .about-header {
              height: auto;
              margin-top: 50px;
              margin-bottom: 50px;
              justify-content: normal;
            }
            .about-bg {
              padding: 0 30px;
            }
            .about-axa {
              flex-direction: column;
            }
            .about-left {
              width: auto;
              margin: 0;
              padding: 0 100px;
              max-height: 800px;
            }
            .about-right {
              padding-bottom: 30px;
              width: 100%;
            }
            .our-target {
              width: auto;
              margin-bottom: 50px;
            }
            .about-title {
              margin-top: 0;
              margin-bottom: 25px;
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
              padding: 0;
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
              margin: 0;
              padding: 0 20px;
              font-size: 18px;
              line-height: 30px;
              color: #494949;
              text-align: justify;
            }
            .header-right {
              width: 60%;
              height: auto;
              margin: auto;
              margin-top: 10%;
              margin-bottom: 10%;
            }
            .header-right>img {
              width: 100%;
              height: 100%;
            }
            .target-title {
              margin-top: 0;
              margin-bottom: 30px;
              font-size: 50px;
              line-height: 60px;
            }
            .target-content {
              font-size: 16px;
              line-height: 21px;
            }
            .target-left {
              padding: 0;
              width: 42%;
            }
            .target-right {
              width: 49%;
              height: fit-content;
            }
          }
          @media screen and (max-width: 768px) {
            .header-left {
              font-size: 16px;
              line-height: 25px;
            }
            .img-header {
              width: 200%;
              height: auto;
              aspect-ratio: 2.1;
              object-fit: cover;
            }
            .header-right {
              width: 75%;
            }
            .about-bg {
              padding: 0 20px;
              background-position-x: right;
            }
            .about-axa {
              flex-direction: column;
            }
            .about-left {
              width: auto;
              padding: 0;
              margin: 0;
              margin-top: 25px;
            }
            .about-right {
              padding-bottom: 30px;
              width: 100%;
            }
            .about-content {
              font-size: 16px;
            }
            .our-target {
              width: auto;
              margin-bottom: 50px;
            }
            //-----------------------
            .target-about {
              padding: 0 20px;
              padding-bottom: 10px;
            }
            .target-title {
              margin: 0;
              margin-bottom: 18px;
              font-size: 50px;
              line-height: 55px;
            }
            .target-left {
              width: 43%;
              padding-right: 0;
              margin-left: 0;
            }
            .target-content {
              font-size: 15px;
              line-height: 21px;
              max-width: 768px;
              margin-top: 20px;
            }
            .core {
              display: flex;
              flex-direction: column-reverse;
            }
            .core-mobile {
              width: 100%;
              margin: auto;
            }
            .core-title {
              display: none;
            }
            .core-title-mobile {
              display: flex;
              margin-top: 10px;
              flex-direction: row;
              justify-content: flex-start;
            }
            .core-title-mobile>p {
              margin-right: 8px;
            }
          }
          @media screen and (max-width: 480px) {
            .session {
              padding: 0 12px;
            }
            .header-title {
              font-size: 30px;
            }
            .header-left {
              font-size: 14px;
              line-height: 20px;
              padding: 0 12px;
            }
            .about-bg {
              padding: 0 24px;
            }
            .about-title {
              font-size: 30px;
              margin-top: 10px;
              margin-bottom: 10px;
            }
            .about-content {
              font-size: 14px;
              line-height: 20px;
              text-align: justify;
              color: #494949;
            }
            .target-about {
              margin-top: 40px;
              padding: 0 24px;
              padding-bottom: 20px;
            }
            .our-target {
              margin-bottom: 25px;
            }
            .target-title {
              font-size: 30px;
              margin-top: 0;
              margin-bottom: 15px;
              line-height: 35px;
            }
            .target-content {
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default About
