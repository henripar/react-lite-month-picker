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
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

function Example() {
  const [selecedMonthData, setSelectedMonthData] = useState({
    month: 9,
    year: 2023,
  });
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <>
      <div>
        <MonthInput
          selected={selecedMonthData}
          setShowMonthPicker={setIsPickerOpen}
          showMonthPicker={isPickerOpen}
        />
        {isPickerOpen ? (
          <MonthPicker
            setIsOpen={setIsPickerOpen}
            selected={selecedMonthData}
            onChange={setSelectedMonthData}
          ></MonthPicker>
        ) : null}
      </div>
    </>
  );
}

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
