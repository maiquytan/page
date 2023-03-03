import React from 'react'

const Team = () => {
  const listBoss = [
    {name:"Duong Nguyen", image:"../daicaDuong.webp", icon:"icon_backend.svg", job:"Backend",describe:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    {name:"Tuan Nguyen", image:"../daicaTuan.webp", icon:"icon_fontend.svg", job:"Fontend",describe:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    {name:"Viet Nguyen", image:"../daicaViet.webp", icon:"icon_backend.svg", job:"Backend",describe:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    {name:"Cong Luu", image:"../daicaCong.webp", icon:"icon_backend.svg", job:"Backend",describe:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ]
  return (
    <div className="team">
      <h1 className="h1">** Our Team screen **</h1>

      {/* Header */}
      <div className="bg_header">
        <img className="img_header" src="bg_about.webp" alt="bg_header" title="bg_header" width="1920" height="637" />
        <div className="about_header">
          <div className="header_title">Our Team</div>
          <div className="header_content">
            <div className="header_left">Meet the talented and dedicated individuals behind Axalize's success.</div>
            <div className="header_right">
              <img src="Frame132.webp" alt="img_header" title="img_header" width="644" height="644" />
            </div>
          </div>
        </div>
      </div>

      {/* Introduce */}
      <div className="introduce">
        <div className="introduce_left">
          <div className="one_introduce">
            <img src="icon_introduce.svg" alt="icon_introduce" title="icon_introduce" width="50" height="50" />
            <div className="introduce_content">
              <h2>Our People</h2>
              <p>At Axalize, we believe in hiring top-notch talent and fostering a supportive, collaborative work environment.</p>
            </div>
          </div>
          <div className="one_introduce">
            <img src="icon_introduce.svg" alt="icon_introduce" title="icon_introduce" width="50" height="50" />
            <div className="introduce_content">
              <h2>Our Culture</h2>
              <p>From our values to our approach to work, here's what makes Axalize a unique and dynamic place to work.</p>
            </div>
          </div>
          <div className="one_introduce">
            <img src="icon_introduce.svg" alt="icon_introduce" title="icon_introduce" width="50" height="50" />
            <div className="introduce_content">
              <h2>Our Leadership</h2>
              <p>Leading Axalize forward with vision and expertise, our executive team brings years of experience and a passion for innovation.</p>
            </div>
          </div>
          <div className="one_introduce">
            <img src="icon_introduce.svg" alt="icon_introduce" title="icon_introduce" width="50" height="50" />
            <div className="introduce_content">
              <h2>Our Careers</h2>
              <p>Join our team and be part of a company that values hard work, creativity, and a commitment to excellence.</p>
            </div>
          </div>
        </div>
        <div className="introduce_right">
          <img src="img_introduce.webp" alt="img_introduce" title="img_introduce" width="610" height="628" />
        </div>
      </div>

      {/* Meet */}
      <div className="meet">
        <div className="bar"></div>
        <h2 className="meet_title"><label>MEET</label> THE TEAM</h2>
        <div className="meet_main">
          {listBoss.map((list,index) => (
          <div className="boss" key={index}>
            <div className="img_meet" style={{ backgroundImage: `url('${list.image}');` }} >
              <div className="bg_meet">
                <p>{list.name}</p>
              </div>
            </div>
            <div className="icon_meet" >
              <img src={list.icon} alt="icon_meet" title="icon_meet" width="70" height="70" />
            </div>
            <div className="meet_content">
              <h3>{list.job}</h3>
              <label>{list.describe}</label>
            </div>
          </div>         
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .team{
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
            max-width:1260px;
          }
          .header_left{
            width:40%;
            font-size: 23px;
            line-height: 33px;
            color: #FFFFFF;
            margin-top:200px;
          }
          .header_right{
            max-width:60%;
          }
          .header_right>img{
            max-width:100%;
          } 

          //Introduce--------------------
          .introduce{
            max-width:1260px;
            margin:auto;
            display:flex;
            gap: 2%;
            margin-bottom: 145px;
          }
          .introduce_left{
            width: 49%;
            display:flex;
            flex-direction:column;
            gap:10px;
          }
          .one_introduce{
            display: flex;
            align-items: center; 
            height: 149px;
            background: #F8F8F8;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          .one_introduce>img{
            margin-left:35px;
            margin-right: 22px;
            margin-bottom: 10px;
          }
          .introduce_content{
            width:70%;
          }
          .introduce_content>h2{
            font-weight: 600;
            font-size: 28px;
            line-height: 34px;
            letter-spacing: 0.02em;
            margin-bottom: 10px;
          }
          .introduce_content>p{
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.02em;
            font-weight: 500;
          }

          //Meet----------------------------
          .meet{
            max-width: 1260px;
            margin: auto;
            padding-bottom:95px;
          }
          .bar{
            width:120px;
            height: 10px;
            background: #1667B2;
            margin-bottom: 15px;
          }
          .meet_title{
            font-weight: 600;
            font-size: 34px;
            line-height: 41px;
            color: #000;
            margin-bottom:34px;
          }
          .meet_title>label{
            color: #1667B2;
          }
          .meet_main{
            display:flex;
            gap:1%;
          }
          .boss{
            width:24%;
            height:480px;
            background: #F3F3F3;
            border-radius: 5px;
            overflow: hidden;
          }
          .img_meet{
            background-size:cover;
            background-repeat: no-repeat;
            height: 372px;
            color: #FFFFFF;
            font-weight: 600;
            font-size: 31px;
            line-height: 38px;
          }
          .bg_meet{
            background: rgba(0, 0, 0, 0.43);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .bg_meet > p{
            padding-left: 36px;
            margin-bottom:30px;
            width:40%;
          }
          .icon_meet{
            position: relative;
          }
          .icon_meet>img{
            position: absolute;
            top:-35px;
            right:36px;
          }
          .meet_content{
            width: 90%;
            margin:auto;
          }
          .meet_content>h3{
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            margin-top:16px;
            margin-bottom: 7px;
          }
          .meet_content>label{
            font-size: 13px;
            line-height: 18px;
            color: #525252;
          }

        `}
      </style>
    </div>
  )
}

export default Team
