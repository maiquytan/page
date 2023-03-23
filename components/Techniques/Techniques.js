import React, { useEffect, useState } from 'react'

import { listTechniques, settingTechniques } from '../../constants';
import useViewport from '../../hook/useViewPort';

const Techniques = () => {
  const [startX, setStartX] = useState(0);
  const [itemView,setItemView] = useState(settingTechniques.itemPerView)
  const columnQuantity = Math.ceil(settingTechniques.itemListQuantity / settingTechniques.itemRow)
  const listWidth = (columnQuantity / itemView) * 100
  const itemWidth = (1 / columnQuantity) * 100
  const marginX = startX * itemWidth
  const [width] = useViewport();

  useEffect (() => {
    if( width<1024){
      setItemView(settingTechniques.itemPerViewTablet);
    }
    else {
      setItemView(settingTechniques.itemPerView);
    }
  },[width])

  const handleRightClick = () => {
    if (startX >= 0 && startX < (columnQuantity - (itemView))) {
      setStartX(startX + 1)
    }
  }

  const handleLeftClick = () => {
    if (startX > 0) {
      setStartX(startX - 1)
    }
  }
  const itemWidthString = `calc(${itemWidth}% - 11px)`

  return (
    <div className="techniques">
      <div className="techniques-header">
        <label className="item">Techniques</label>
        <div className="crossbar1"></div>
        <div className="crossbar2"></div>
      </div>
      <div className="techniques-main">
        <div onClick={handleLeftClick} className={startX === 0 ? 'undisable left' : 'button'}>
          <svg viewBox="0 0 20 20" color="green" width="50" height="50">
            <path d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path>
          </svg>
        </div>
        <div className="techniques-list">
          <div className="techniques-img">
            {listTechniques.map((list, index) => (
              <div className="language" key={index}>
                <img src={list.title} alt="techniques" title="techniques" width={list.width} height={list.height} />
              </div>
            ))}
          </div>
        </div>
        <div onClick={handleRightClick} className={startX === (columnQuantity - (itemView)) ? 'undisable right' : 'button'}>
          <svg viewBox="0 0 20 20" color="green" width="50" height="50">
            <path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path>
          </svg>
        </div>
      </div>
      <div className="techniques-main-mobile">
        {listTechniques.map((list, index) => (
          <div className="language-mobile" key={index} >
            <img src={list.title} alt="techniques" title="techniques" width={list.width} height={list.height} />
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .techniques {
            height: 400px;
            max-width: 1360px;
            margin: auto;
            margin-top: 40px;
            box-sizing: border-box;
          }
          .techniques-header {
            text-align: center;
          }
          .techniques-main {
            display: flex;
            align-items: center;
            max-width: 1360px;
            height: auto;
            margin: auto;
            padding-bottom: 95px;
          }
          .techniques-list {
            max-width: 1260px;
            margin: auto;
            overflow: hidden;
          }
          .techniques-img {
            transform: translateX(-${marginX}%);
            width: ${listWidth}%;
            flex-wrap: wrap;
            display: flex;
            gap: 12px;
            transition: .4s;
          }
          .button {
            cursor: pointer;
          }
          .left {
            margin-left: 50px;
          }
          .right {
            margin-right: 50px;
          }
          .undisable>svg {
            display: none;
          }
          .language {
            width: ${itemWidthString};
            height: 55px;
            background: #FFF;
            border: 1px solid #CCCCCC;
            border-radius: 3px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .techniques-main-mobile {
            display: none;
          }
          .language-mobile {
            width: 45%;
            background: #FFF;
            border: 1px solid #CCCCCC;
            border-radius: 3px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .item {
            color: #1E1E1E;
            font-size: 32px;
            font-weight: 600;
          }
          .crossbar1 {
            width: 90px;
            height: 4px;
            background: #FC721E;
            margin: auto;
            margin-bottom: 3px;
            margin-top: 10px;
          }
          .crossbar2 {
            width: 90px;
            height: 2px;
            background: #FC721E;
            margin: auto;
            margin-bottom: 45px;
          }
          @media screen and (max-width: 768px) {
            .techniques {
              height: auto;
              padding: 0 12px;
              padding-bottom: 60px;
              gap: 12px;
            }
            .techniques-main {
              display: none;
            }
            .techniques-main-mobile {
              margin: auto;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 15px;
              justify-content: center;
            }
            .techniques-main-mobile>img{
              width: 47%;
            }
          }
       `}
      </style>
    </div>
  )
}

export default Techniques
