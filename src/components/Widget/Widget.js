import React, { Component } from 'react'
// import PropTypes from 'prop-types'


import './Widget.css'
import closeIcon from '../../icons/error.svg'
import maximazeIcon from '../../icons/maximaze.svg'
import collapseIcon from '../../icons/collapse.svg'


export default class Widget extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount(){

  }

  async get(url) {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const resData = await response.json();
    return resData;
  }

  clickEventHandler(event){
    switch(event){
      case 'close': console.log('close');
      break;
      case 'maximaze': console.log('maximaze');
      break;
      case 'collapse': console.log('collapse');
      break;
      default: console.log(undefined);
    }
  }

  render() {
    return (
      <div className="widget">
        <div className="toolbar">
          <div onClick={() => this.clickEventHandler('close')} className="close">
            <img src={closeIcon} alt="#"/>
          </div>
          <div onClick={() => this.clickEventHandler('maximaze')} className="maximaze">
            <img src={maximazeIcon} alt="#"/>          
          </div>
          <div onClick={() => this.clickEventHandler('collapse', this.props.id)} className="collapse">
          <img src={collapseIcon} alt="#"/>
          </div>     
        </div>
        <div id={this.props.id} className="content">
  
        </div>
      </div>
    )
  }
}

