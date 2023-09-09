import React, { useEffect } from 'react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './MonthPicker.module.css';

export function MonthPicker(props) {
  const [month, setMonth] = useState(
    props.selectedMonth ?? new Date().getMonth()
  );
  const [year, setYear] = useState(
    props.selectedYear ?? new Date().getFullYear()
  );

  var r = document.querySelector(':root');

  // Create a function for getting a variable value
  function myFunction_get(r) {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    // Alert the value of the --blue variable
    alert('The value of --blue is: ' + rs.getPropertyValue('--blue'));
  }

  // Create a function for setting a variable value
  function setActiveMonthBgColor(r, color) {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--month-active-bg-color', color);
  }

  useEffect(() => {
    if (props.bgColorMonthActive) {
      setActiveMonthBgColor(r, props.bgColorMonthActive);
    }
  }, []);
  const changeYear = (year) => {
    setYear(year);
  };

  const changeMonth = (month) => {
    setMonth(month);
    props.setSelectedYear(year);
    props.setIsOpen(false);
    props.setMonthSelected({
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
          <ChevronLeft />
        </button>
        <span className={styles.bold1}>{year}</span>
        <button onClick={(e) => changeYear(year + 1)}>
          <ChevronRight />
        </button>
      </div>
      <div className={styles.monthsContainer}>
        <div
          className={`${styles.month} ${
            month == 0 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(0)}
        >
          Jan
        </div>
        <div
          className={`${styles.month} ${
            month == 1 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(1)}
        >
          Feb
        </div>
        <div
          className={`${styles.month} ${
            month == 2 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(2)}
        >
          Mar
        </div>
        <div
          className={`${styles.month} ${
            month == 3 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(3)}
        >
          Apr
        </div>
        <div
          className={`${styles.month} ${
            month == 4 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(4)}
        >
          May
        </div>
        <div
          className={`${styles.month} ${
            month == 5 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(5)}
        >
          Jun
        </div>
        <div
          className={`${styles.month} ${
            month == 6 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(6)}
        >
          Jul
        </div>
        <div
          className={`${styles.month} ${
            month == 7 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(7)}
        >
          Aug
        </div>
        <div
          className={`${styles.month} ${
            month == 8 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(8)}
        >
          Sep
        </div>
        <div
          className={`${styles.month} ${
            month == 9 && props.selectedYear == year ? styles.active : null
          }`}
          onClick={(e) => changeMonth(9)}
        >
          Oct
        </div>
        <div
          className={`${styles.month} ${
            month == 10 && props.selectedYear == year ? styles.active : null
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
