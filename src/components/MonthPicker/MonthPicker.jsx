import React, { useEffect } from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './MonthPicker.module.css';

export function MonthPicker(props) {
  const [month, setMonth] = useState(
    props.selected.month ? props.selected.month - 1 : new Date().getMonth()
  );
  const [year, setYear] = useState(
    props.selected.year ?? new Date().getFullYear()
  );

  const setActiveMonthBgColor = (r, color) => {
    r.style.setProperty('--month-active-bg-color', color);
  };

  useEffect(() => {
    const r = document.querySelector(':root');
    if (props.bgColorMonthActive) {
      setActiveMonthBgColor(r, props.bgColorMonthActive);
    }
    if (props.bgColorMonthHover) {
      r.style.setProperty('--month-hover-bg-color', props.bgColorMonthHover);
    }
    if (props.borderRadiusMonth) {
      r.style.setProperty('--month-border-radius', props.borderRadiusMonth);
    }
    if (props.bgColorPicker) {
      r.style.setProperty('--picker-bg-color', props.bgColorPicker);
    }
    if (props.textColor) {
      r.style.setProperty('--text-color', props.textColor);
    }
  }, []);

  const changeYear = (year) => {
    setYear(year);
  };

  const changeMonth = (month) => {
    setMonth(month);
    props.setIsOpen(false);
    props.onChange({
      month: month + 1,
      year: year,
      monthName: new Date(year, month).toLocaleString('default', {
        month: 'long',
      }),
      monthShortName: new Date(year, month).toLocaleString('default', {
        month: 'short',
      }),
    });
  };

  return (
    <div className={styles.pickerContainer}>
      <div className={styles.yearContainer}>
        <button onClick={(e) => changeYear(year - 1)}>
          <ChevronLeft color={props.textColor ? props.textColor : '#000'} />
        </button>
        <span className={styles.bold1}>{year}</span>
        <button onClick={(e) => changeYear(year + 1)}>
          <ChevronRight color={props.textColor ? props.textColor : '#000'} />
        </button>
      </div>
      <div className={styles.monthsContainer}>
        <div
          className={`${styles.month} ${
            month == 0 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(0)}
        >
          Jan
        </div>
        <div
          className={`${styles.month} ${
            month == 1 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(1)}
        >
          Feb
        </div>
        <div
          className={`${styles.month} ${
            month == 2 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(2)}
        >
          Mar
        </div>
        <div
          className={`${styles.month} ${
            month == 3 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(3)}
        >
          Apr
        </div>
        <div
          className={`${styles.month} ${
            month == 4 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(4)}
        >
          May
        </div>
        <div
          className={`${styles.month} ${
            month == 5 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(5)}
        >
          Jun
        </div>
        <div
          className={`${styles.month} ${
            month == 6 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(6)}
        >
          Jul
        </div>
        <div
          className={`${styles.month} ${
            month == 7 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(7)}
        >
          Aug
        </div>
        <div
          className={`${styles.month} ${
            month == 8 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(8)}
        >
          Sep
        </div>
        <div
          className={`${styles.month} ${
            month == 9 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(9)}
        >
          Oct
        </div>
        <div
          className={`${styles.month} ${
            month == 10 && props.selected.year == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(10)}
        >
          Nov
        </div>
        <div
          className={`${styles.month} ${
            month == 11 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(11)}
        >
          Dec
        </div>
      </div>
    </div>
  );
}
