# Simple-Bar-Chart-JS

Simple Bar Chart implementation for Javascript.

## Usage

Load SimpleBarChart.js and style.css into the HTML

```html
<link rel="stylesheet" type="text/css" href="css/style.css" />
<script src="SimpleBarChart.js"></script>
```

To initialize the chart, call the function **startChart**

```javascript
startChart(element, data, options)
```

The element is the DOM element where the chart will be injected. The **data** parameter must be a valid JSON with an array of objects that includes:

```javascript
var data = [
  {
    title: 'First Bar Title',
    value: 60,
    logo: 'https://logoipsum.com/logo/logo-12.svg',
    color: '#ccc',
  },
  {
    title: 'Second Bar Title',
    value: 95,
  },
]
```

**title** and **value** are mandatory.

### Options

```javascript
var option = {
  charWidth: 600, // Width in px of the chart
  charHeight: 300, // Heigth in px of the chart
  divisionsLines: 3, // Number of reference lines on backgorund
  maxVal: 100, // Max value of chart
  minVal: 0, // Min value of chart
}
```
