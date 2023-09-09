# React Lite Month Picker

Simple, modern and customizable month picker component for ReactJS.

![React Lite Month Picker](./src/assets/cover.png)

## Installation

Using npm:

```bash
npm install react-lite-month-picker --save
```

## Usage

```jsx
import { useState } from 'react';
import { MonthPicker } from 'react-lite-month-picker';

const Example = () => {
  const [year, setYear] = useState(2023);
  const [selectionData, setSelectionData] = useState({});
  const [pickerIsOpen, setPickerIsOpen] = useState(false);

  return (
    <>
      <div
        className='selectedMonth'
        onClick={(e) => setPickerIsOpen(!pickerIsOpen)}
      >
        <div className='monthName'>
          {selectionData.monthName} {year}
        </div>
      </div>
      {pickerIsOpen && (
        <MonthPicker
          setSelectedYear={setYear}
          selectedYear={year}
          selectedMonth={
            selectionData.month
              ? selectionData.month - 1
              : new Date().getMonth()
          }
          setIsOpen={setPickerIsOpen}
          setMonthSelected={setSelectionData}
        />
      )}
    </>
  );
};

export default Example;
```

## Customization

You can customize the component styles by passing props to it.

| Prop name            | Description                                   | Default value |
| -------------------- | --------------------------------------------- | ------------- |
| `bgColorMonthActive` | Background color of the active month.         | `#4ea3983e`   |
| `bgColorMonthHover`  | Background color of the month on mouse hover. | `#f4f4f4`     |
| `borderRadiusMonth`  | Border radius of the moth element.            | `7px`         |
| `bgColorPicker `     | Background color of the picker element.       | `#fff`        |
| `textColor`          | Color of the text.                            | `#000`        |
