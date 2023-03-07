import React from 'react'

const Team = () => {
  const listBoss = [
    {name:"Duong Nguyen", image:"../NguyenDuong.webp", icon:"icon_backend.svg", job:"Backend",describe:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    {name:"Tuan Nguyen", image:"../NguyenTuan.webp", icon:"icon_fontend.svg", job:"Fontend",describe:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    {name:"Viet Nguyen", image:"../NguyenViet.webp", icon:"icon_backend.svg", job:"Backend",describe:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    {name:"Cong Luu", image:"../LuuCong.webp", icon:"icon_backend.svg", job:"Backend",describe:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  ]
  return (
    <div className="team">
      <h1 className="h1">** Our Team screen **</h1>

      {/* Header */}
      <div className="bg-header">
        <img className="img-header" src="bg_about.webp" alt="bg-header" title="bg-header" width="1920" height="637" />
        <div className="about-header">
          <div className="header-title">Our Team</div>
          <div className="header-content">
            <div className="header-left">Meet the talented and dedicated individuals behind Axalize's success.</div>
            <div className="header-right">
              <img src="Frame132.webp" alt="img-header" title="img-header" width="644" height="644" />
            </div>
          </div>
        </div>
      </div>

      {/* Introduce */}
      <div className="introduce">
        <div className="introduce-left">
          <div className="one-introduce">
            <img src="icon-introduce.svg" alt="icon-introduce" title="icon-introduce" width="50" height="50" />
            <div className="introduce-content">
              <h2>Our People</h2>
              <p>At Axalize, we believe in hiring top-notch talent and fostering a supportive, collaborative work environment.</p>
            </div>
          </div>
          <div className="one-introduce">
            <img src="icon_introduce.svg" alt="icon-introduce" title="icon-introduce" width="50" height="50" />
            <div className="introduce-content">
              <h2>Our Culture</h2>
              <p>From our values to our approach to work, here's what makes Axalize a unique and dynamic place to work.</p>
            </div>
          </div>
          <div className="one-introduce">
            <img src="icon_introduce.svg" alt="icon-introduce" title="icon-introduce" width="50" height="50" />
            <div className="introduce-content">
              <h2>Our Leadership</h2>
              <p>Leading Axalize forward with vision and expertise, our executive team brings years of experience and a passion for innovation.</p>
            </div>
          </div>
          <div className="one-introduce">
            <img src="icon_introduce.svg" alt="icon-introduce" title="icon-introduce" width="50" height="50" />
            <div className="introduce-content">
              <h2>Our Careers</h2>
              <p>Join our team and be part of a company that values hard work, creativity, and a commitment to excellence.</p>
            </div>
          </div>
        </div>
        <div className="introduce-right">
          <img src="img_introduce.webp" alt="img-introduce" title="img-introduce" width="610" height="628" />
        </div>
      </div>

      {/* Meet */}
      <div className="meet">
        <div className="bar"></div>
        <h2 className="meet-title"><label>MEET</label> THE TEAM</h2>
        <div className="meet-main">
          {listBoss.map((list,index) => (
          <div className="boss" key={index}>
            <div className="img-meet" style={{ backgroundImage: `url('${list.image}');` }} >
              <div className="bg-meet">
                <p>{list.name}</p>
              </div>
            </div>
            <div className="icon-meet" >
              <img src={list.icon} alt="icon-meet" title="icon-meet" width="70" height="70" />
            </div>
            <div className="meet-content">
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
          .bg-header{
            position: relative;
            width:100%;
            overflow: hidden;
          }
          .img-header{
            position:absolute;
            right:0;
            top:118px;
            z-index:1;
          }
          .about-header{
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
          .header-title{
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
          .header-content{
            display: flex;
            justify-content:space-between;
            max-width:1260px;
          }
          .header-left{
            width:40%;
            font-size: 23px;
            line-height: 33px;
            color: #FFFFFF;
            margin-top:200px;
          }
          .header-right{
            max-width:60%;
          }
          .header-right>img{
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
          .introduce-left{
            width: 49%;
            display:flex;
            flex-direction:column;
            gap:10px;
          }
          .one-introduce{
            display: flex;
            align-items: center; 
            height: 149px;
            background: #F8F8F8;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          .one-introduce>img{
            margin-left:35px;
            margin-right: 22px;
            margin-bottom: 10px;
          }
          .introduce-content{
            width:70%;
          }
          .introduce-content>h2{
            font-weight: 600;
            font-size: 28px;
            line-height: 34px;
            letter-spacing: 0.02em;
            margin-bottom: 10px;
          }
          .introduce-content>p{
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.02em;
            font-weight: 500;
          }
          .introduce-right{
            width:49%;
            max-width:610px;
          }
          .introduce-right>img{
            width: 100%;
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
          .meet-title{
            font-weight: 600;
            font-size: 34px;
            line-height: 41px;
            color: #000;
            margin-bottom:34px;
          }
          .meet-title>label{
            color: #1667B2;
          }
          .meet-main{
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
          .img-meet{
            background-size:cover;
            background-repeat: no-repeat;
            height: 372px;
            color: #FFFFFF;
            font-weight: 600;
            font-size: 31px;
            line-height: 38px;
          }
          .bg-meet{
            background: rgba(0, 0, 0, 0.43);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .bg-meet > p{
            padding-left: 36px;
            margin-bottom:30px;
            width:40%;
          }
          .icon-meet{
            position: relative;
          }
          .icon-meet>img{
            position: absolute;
            top:-35px;
            right:36px;
          }
          .meet-content{
            width: 90%;
            margin:auto;
          }
          .meet-content>h3{
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            margin-top:16px;
            margin-bottom: 7px;
          }
          .meet-content>label{
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
