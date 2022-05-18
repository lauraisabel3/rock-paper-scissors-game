import React, { useState } from "react";
import rockImg from '../../assets/rock.png'
import paperImg from '../../assets/paper.png'
import scirssorsImg from '../../assets/scirssor.png'
import * as styles from '../Main/styles.module.css'
import Modal from "../Modal";

const Main = () => {
  let machineElection;

  const [ userOption, setUserOption] = useState('');
  const [ result, setResult] = useState(undefined);

  const [showModal, setShowModal] = useState(false)
  const range =  (min, max) => {
    let number = Math.floor(Math.random() * (max - min +1) + min);
    return number
  }

  const handleOption = (userElection) => {
    userElection = parseInt(userElection);
    machineElection = range(0,2);
    setUserOption(userElection);
    setShowModal(true)
   
    
    // Las opciones posible son:
    //0 -> Piedra
    //1 -> Papel
    //2 -> Tijera

    if(userOption === 0) {
        if( machineElection === 0) {
            setResult('tie')
          
        }else {
          if(machineElection === 1) {
            setResult('lose')
          }else {
            if(machineElection === 2) {
              setResult('win')
            
            }
          }
        }
    }

    if(userOption === 1) {
      if( machineElection === 0) {
        setResult('win')
      }else {
        if(machineElection === 1) {
          setResult('tie')
        }else {
          if(machineElection === 2) {
            setResult('lose')
          }
        }
      }
    }

    if(userOption === 2) {
      if( machineElection === 0) {
        setResult('lose')
      }else {
        if(machineElection === 1) {
          setResult('win')
        }else {
          if(machineElection === 2) {
            setResult('tie')
          }
        }
      }
    }
  }

   const handleDisplay = () => {
     setShowModal(!showModal)
   }

  return (
    <>
      <div className={styles.container__main}>
        <h1>Juega contra la máquina</h1>
        <div className={styles.container__secondary}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleOption('0')}
            onKeyDown={handleOption}
          >
            <img
            src={rockImg}
            alt="Rock"
            />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleOption('1')}
            onKeyDown={handleOption}
          >
          <img
            src={paperImg}
            alt="Paper"
          />
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => handleOption('2')}
            onKeyDown={handleOption}
          >
          <img
            src={scirssorsImg}
            alt="Sccirsors"
          />
          </div>
          <h3>PIEDRA</h3>
          <h3>PAPEL O</h3>
          <h3>TIJERA</h3>
        </div>
        { showModal && <Modal result={result} handleDisplay={handleDisplay} />}
      </div>
    </>
  )
}

export default Main