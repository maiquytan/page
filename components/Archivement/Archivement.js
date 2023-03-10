import React from 'react'

const Archivement = () => {
  return (
    <div>
      <div className="archivement">
        <div className="archivement-container">
          <div className="archivement-content">
            <label className="item">Archivement</label>
            <div className="crossbar-left-1"></div>
            <div className="crossbar-left-2"></div>
            <img src="/medal.svg" alt="logo" title="logo" width="47" height="47" />
          </div>
          <div className="archivement-column">
            <label className="archivement-number">50+</label>
            <label>Successful projects</label>
          </div>
          <div className="archivement-column">
            <label className="archivement-number">100+</label>
            <label>Customers around the world</label>
          </div>
          <div className="archivement-column">
            <label className="archivement-number">99%</label>
            <label>Repeat rate</label>
          </div>
        </div>
      </div>

      <div className="archivement-mobile">
        <div className="archivement-container">
          <div className="archivement-content-moblie">
            <label className="item">Archivement</label>
            <div className="crossbar1"></div>
            <div className="crossbar2"></div>
            <img src="/medal.svg" alt="logo" title="logo" width="47" height="47" />
          </div>
          <div className="archivement-row">
            <div className="archivement-column">
              <label className="archivement-number">50+</label>
              <label>Successful projects</label>
            </div>
            <div className="archivement-column">
              <label className="archivement-number">100+</label>
              <label>Customers around the world</label>
            </div>
          </div>
          <div className="archivement-column">
            <label className="archivement-number">99%</label>
            <label>Repeat rate</label>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .archivement,.archivement-mobile {
          height: 278px;
          background-image: url("../service_bg.svg")
          background-color: #A1ACBB;
          background-size: cover;
          background-repeat: no-repeat;
          margin-top: 50px;
        }
        .archivement-container {
          max-width: 1260px;
          width: 100%;
          height: 100%;
          margin: auto;
          display: flex;
          justify-content: center;
        }
        .archivement-column,.archivement-content {
          display: flex;
          flex-direction: column;
          width: 25%;
          text-align: center;
          align-items: center;
          margin-top: 57px;
        }
        .archivement-column {
          font-size: 1.063rem;
          font-family: 'Lexend', sans-serif;
        }
        .archivement-column>label {
          max-width: 205px;
        }
        .archivement-content {
          align-items: flex-start;
          margin-top: 67px;
          margin-left: 30px;
          width: 20%;
          padding-left: 5%;
        }
        .item {
          color: #1E1E1E;
          font-size: 32px;
          font-weight: 600;
        }
        .crossbar1,.crossbar-left-1 {
          width: 90px;
          height: 4px;
          background: #FC721E;
          margin: auto;
          margin-bottom: 3px;
          margin-top: 10px;
        }
        .crossbar2,.crossbar-left-2 {
          width: 90px;
          height: 2px;
          background: #FC721E;
          margin: auto;
          margin-bottom: 15px;
        }
        .crossbar-left-1 {
          margin: 0;
          margin-top: 8px;
        }
        .crossbar-left-2 {
          margin: 0;
          margin-top: 4px;
          margin-bottom: 17px;
        }
        .archivement-number {
          font-size: 4.375rem;
          color: #FFFFFF;
          text-shadow: 2px 0 #2F2D77, -2px 0 #2F2D77, 0 2px #2F2D77, 0 -2px #2F2D77,
          1px 1px #2F2D77, -1px -1px #2F2D77, 1px -1px #2F2D77, -1px 1px #2F2D77;
        }
        @media screen and (min-width: 900px) {
          .archivement-mobile {
            display: none;
          }
        }
        @media screen and (max-width: 900px) {
          .archivement {
            display: none;
          }
          .archivement-mobile {
            height: 470px;
          }
          .archivement-container {
            flex-direction: column;
            align-items: center;
          }
          .archivement-content-moblie {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 25px;
          }
          .archivement-row {
            width: 90%;
            display: flex;
            justify-content: space-between;
          }
          .archivement-column {
            width: 50%;
            margin-top: 30px;
          }
          .archivement-number {
            font-size: 3.25rem;
          }
        `}
      </style>
    </div>
  )
}

export default Archivement
