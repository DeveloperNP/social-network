import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogs}>
        <div className={`${s.dialog} ${s.active}`}>
          Nickolai
        </div>
        <div className={s.dialog}>
          Andrey
        </div>
        <div className={s.dialog}>
          Kristina
        </div>
        <div className={s.dialog}>
          Lyonya
        </div>
        <div className={s.dialog}>
          Irina
        </div>
        <div className={s.dialog}>
          Tatiana
        </div>
        <div className={s.dialog}>
          Julia
        </div>
        <div className={s.dialog}>
          Diana
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi, how are you?</div>
        <div className={s.message}>I'm bored :c</div>
        <div className={s.message}>The weather is cloudy today</div>
        <div className={s.message}>Let's play together!!!</div>
      </div>
    </div>
  );
}

export default Dialogs;