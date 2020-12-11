// 活动弹窗

import React from 'react';
import "./popupBox.scss";


const PopupBox = (props) => {
  return (<div className={props.className ? "popup-box " + props.className : "popup-box"}>
    <div className="title-box">{ props.title }<i className="close-but" onClick={props.closeBut}><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="110303"><path d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z" p-id="110304"></path></svg></i></div>
    <div className="popup-content-box" onTouchMove={(e) => {e.stopPropagation()}}>
      { props.children }
    </div>
  </div>)
}

export default PopupBox;