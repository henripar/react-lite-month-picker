import React from 'react';
import { Calendar } from 'lucide-react';
import styles from './MonthInput.module.css';

export function MonthInput(props) {
  const getMonthName = (month) => {
    switch (month) {
      case 0:
        return 'January';
      case 1:
        return 'Febuary';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
    }
  };

  return (
    <span
      className={styles.monthInputField}
      onClick={() => props.setShowMonthPicker(!props.showMonthPicker)}
    >
      {getMonthName(props.selected.month - 1) ??
        getMonthName(new Date().getMonth())}{' '}
      {props.selected.year}
      <Calendar size={24} />
    </span>
  );
}
