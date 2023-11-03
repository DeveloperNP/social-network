import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.svg';

let Preloader = (props) => {
  return (
    <div className={s.preloaderBlock}>
      <img src={preloader} />
    </div>
  );
}

export default Preloader;