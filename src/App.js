import React, { Component } from 'react';
import './App.css';
import Icon from './icon.png'


class App extends Component {
  render(){
    return(
     <div className="wrapper image">
       <div className="wrapper-top">
          <div className="wrapper-text">
              <div className="text">
                  <h5>GO</h5>
                  <h5 style={{marginLeft: '5px'}}>GREEN</h5>
              </div>
              <div className="icon">
                  <img src={Icon}
                  />
              </div>
          </div>
          <div className="wrapper-description">
            <div className="description">
              <h1><b>Make it green</b></h1>
              <span>Now more than ever. Our planet is need our</span>
            </div>
          </div>
          <div className="wrapper-button">
              <div className="button">
                Do it Now
              </div>
          </div>
          </div>
       </div>                                                                    
    )                                                                                                                                                                                             
  }
}

export default App;
