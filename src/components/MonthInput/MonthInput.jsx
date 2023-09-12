import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';
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
      <Calendar size={props.size == 'small' ? 16 : 24} />
    </button>
  );
}

MonthInput.defaultProps = {
  lang: 'en-US',
  size: 'large',
};
