# React Lite Month Picker

![https://img.shields.io/npm/dw/react-lite-month-picker](https://img.shields.io/npm/dw/react-lite-month-picker) ![npm](https://img.shields.io/npm/v/react-lite-month-picker) ![GitHub top language](https://img.shields.io/github/languages/top/henripar/react-lite-month-picker) ![GitHub](https://img.shields.io/github/license/henripar/react-lite-month-picker)

Simple, modern and customizable month picker component for ReactJS.

![React Lite Month Picker](https://www.react-lite-month-picker.dev/header-cover.png)

## Features

&#128512; **Simple and easy to use.**  
&#127798; **Tiny**: Minzipped size less than 1kB.  
&#129473; **Highly customizable**: Easily make it fit to your designs.  
&#128197; **Accessible**: Fully accessible with keyboard navigation. Developed according the WCAG 2.1 accesibility guidelines.  
🇫🇮 **41 languages** supported.  
&#128683; **0 Dependencies**: No surprise dependencies included.

## Installation

**Using npm:**

```bash
npm install react-lite-month-picker --save
```

**Using yarn:**

```bash
yarn add react-lite-month-picker
```

**Using bun:**

```bash
bun install react-lite-month-picker
```

## Usage

```jsx
import { useState } from 'react';
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

function Example() {
  const [selectedMonthData, setSelectedMonthData] = useState({
    month: 9,
    year: 2023,
  });
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <>
      <div>
        <MonthInput
          selected={selectedMonthData}
          setShowMonthPicker={setIsPickerOpen}
          showMonthPicker={isPickerOpen}
        />
        {isPickerOpen ? (
          <MonthPicker
            setIsOpen={setIsPickerOpen}
            selected={selectedMonthData}
            onChange={setSelectedMonthData}
          />
        ) : null}
      </div>
    </>
  );
}

export default Example;
```

### Selected month data

Currently selected month data is an object with the following structure:

```js
{
  month: 9,
  year: 2023,
  monthName: 'September',
  monthShort: 'Sep'
}
```

It will get saved on set parent component state with `onChange` event.

## Customization

You can customize the `MonthPicker` component styles by passing props to it.

| Prop name            | Description                                        | Default value |
| -------------------- | -------------------------------------------------- | ------------- |
| `bgColorMonthActive` | Background color of the active month.              | `#4ea3983e`   |
| `bgColorMonthHover`  | Background color of the month on mouse hover.      | `#f4f4f4`     |
| `borderRadiusMonth`  | Border radius of the moth element.                 | `7px`         |
| `bgColorPicker `     | Background color of the picker element.            | `#fff`        |
| `textColor`          | Color of the text.                                 | `#000`        |
| `size`               | Size of the component. Accepts 'small' or 'large'. | `large`       |
| `lang`               | Language. Accepts ISO 639-1 language code.         | `en`          |

\
\
You can customize the `MonthInput` component styles by passing props to it.

| Prop name      | Description                                           | Default value |
| -------------- | ----------------------------------------------------- | ------------- |
| `bgColor`      | Background color of the input element.                | `#fff`        |
| `bgColorHover` | Background color of the input element on mouse hover. | `#fff`        |
| `textColor`    | Color of the text.                                    | `#000`        |
| `size`         | Size of the component. Accepts 'small' or 'large'.    | `large`       |
| `lang`         | Language. Accepts ISO 639-1 language code.            | `en`          |

See full list of supported languages on the [website](https://www.react-lite-month-picker.dev/).

## License

MIT © [henripar](https://github.com/henripar)
