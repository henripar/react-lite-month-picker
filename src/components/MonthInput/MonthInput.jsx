import React, { useEffect } from 'react';
import styles from './MonthInput.module.css';

export function MonthInput(props) {
  useEffect(() => {
    const r = document.querySelector(':root');
    if (props.bgColor) {
      r.style.setProperty('--input-bg-color', props.bgColor);
    }
    if (props.bgColorHover) {
      r.style.setProperty('--input-hover-bg-color', props.bgColorHover);
    }
    if (props.textColor) {
      r.style.setProperty('--input-text-color', props.textColor);
    }
    if (props.size == 'small') {
      r.style.setProperty('--month-input-font-size', '16px');
      r.style.setProperty('--month-input-width', '200px');
      r.style.setProperty('--month-input-padding', '0.5rem');
    }
  }, []);

  return (
    <button
      className={styles.monthInputField}
      onClick={() => props.setShowMonthPicker(!props.showMonthPicker)}
    >
      {props.selected.monthName ??
        new Date().toLocaleString(props.lang, { month: 'long' })}{' '}
      {props.selected.year}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={props.size == 'small' ? 16 : 24}
        height={props.size == 'small' ? 16 : 24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='lucide lucide-calendar'
      >
        <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
        <line x1='16' x2='16' y1='2' y2='6' />
        <line x1='8' x2='8' y1='2' y2='6' />
        <line x1='3' x2='21' y1='10' y2='10' />
      </svg>
    </button>
  );
}

MonthInput.defaultProps = {
  lang: 'en-US',
  size: 'large',
};
