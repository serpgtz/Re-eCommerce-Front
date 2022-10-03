import React from 'react'
import icon_alert from '../../image/alerta.png'
import style from './Alert.module.css'
const Alert = ({msg}) => {
  return (
    <div className={style.alert}>
      <img src={icon_alert} alt='alerta'></img>
      <p><strong>Error </strong>{msg}</p>
    </div>
  )
}

export default Alert
