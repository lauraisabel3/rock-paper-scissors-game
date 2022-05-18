import React from "react";
import { Component  } from "react";
import ReactDOM from "react-dom";
import * as styles from '../Modal/style.module.css'
import { BsArrowRepeat } from 'react-icons/bs'
import { ImSad } from 'react-icons/im'
import { BiHappyBeaming } from 'react-icons/bi'
import { FaHandsHelping } from 'react-icons/fa'

const modalRoot = typeof document != 'undefined' ? document.getElementById('portal') : null

export default class Modal extends Component{
  constructor(props) {
    super(props);
    this.el = typeof document !== 'undefined' ? document.createElement('div') : null
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
      modalRoot.removeChild(this.el)
  }

  

  render() {
    
    if(this.el){
      return ReactDOM.createPortal(
        <div className={styles.container__main}>
          <div className={styles.container__result}>
          {this.props.result === 'lose' &&
            <p>
              PERDISTE
              <ImSad
              className={styles.result__icon}
              />
            </p>
          }
          {this.props.result ==='win' &&  
            <p>
              ¡GANASTE!
              <BiHappyBeaming
                className={styles.result__icon}
              />
            </p>
          }
          {this.props.result === 'tie' &&
            <p>
              ¡ES UN EMPATE!
              <FaHandsHelping 
                className={styles.result__icon}
              />
            </p>
          }
        </div>
        <button
        className={styles.button}
        onClick = {this.props.handleDisplay}
        >
          Re try
          <BsArrowRepeat className={styles.button__icon} />
        </button>
        </div>,
        this.el
      )
    } else {
      return null
    }
  }
}