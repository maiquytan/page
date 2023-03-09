import React from 'react'

const Techniques = () => {
  return (
    <div className="techniques">
      <div className="techniques-header">
        <label className="item">Techniques</label>
        <div className="crossbar1"></div>
        <div className="crossbar2"></div>
      </div>
      <div className="techniques-main">
        <div className="techniques-column">
          <img src="/androidStudio.svg" alt="android" title="android" width="86" height="55" />
          <img src="/angular.svg" alt="angular" title="angular" width="120" height="55" />
          <img src="/reactjs.svg" alt="reactjs" title="reactjs" width="124" height="50" />
          <img src="/vuejs.svg" alt="vuejs" title="vuejs" width="117" height="55" />
          <img src="/reactive-native.svg" alt="reactive-native" title="reactive-native" width="163" height="55" />
          <div className="html-css">
            <img src="/js.svg" alt="js" title="js" width="39" height="39" />
            <img src="/html.svg" alt="html" title="html" width="39" height="39" />
            <img src="/css.svg" alt="css" title="css" width="39" height="39" />
          </div>
          <img src="/mongodb.svg" alt="mongodb" title="mongodb" width="124" height="37" />
        </div>
        <div className="techniques-column">
          <img src="/php.svg" alt="php" title="php" width="89" height="44" />
          <img src="/django.svg" alt="django" title="django" width="98" height="55" />
          <img src="/nodejs.svg" alt="nodejs" title="nodejs" width="81" height="49" />
          <img src="/mysql.svg" alt="mysql" title="mysql" width="99" height="51" />
          <img src="/postgres.svg" alt="postgres" title="postgres" width="123" height="55" />
          <img src="/laravel.svg" alt="laravel" title="laravel" width="147" height="54" />
          <img src="/magento.svg" alt="magento" title="magento" width="122" height="44" />
        </div>
      </div>
      <style jsx>
        {` 
          .techniques {
            height: 400px;
            margin-top: 40px;
          }
          .techniques-header {
            text-align: center;
          }
          .techniques-main {
            max-width: 1280px;
            margin: auto;
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
          .techniques-column {
            display: flex;
            justify-content: center;
            margin-bottom: 26px;
            gap: 1.5%;
          }
          .techniques-column>img,.html-css {
            width: 13%;
            
            height: 55px;
            border: 1px solid #CCCCCC;
            border-radius: 3px;
            gap: 1.5%;
          }
          .html-css {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }
          @media screen and (max-width: 900px) {
            .techniques {
              height: auto;
              padding-bottom: 60px;
            }
            .techniques-main {
              display: flex;
              justify-content: center;  
            }
            .techniques-column {
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
            }
            .techniques-column>img,.html-css {                
              width: 94%;
              margin-top: 16px;
            }
          }
       `}
      </style>
    </div>
  )
}

export default Techniques
