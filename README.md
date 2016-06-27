[![Build Status](https://travis-ci.org/MicheleBertoli/react-poop.svg?branch=master)](https://travis-ci.org/MicheleBertoli/react-poop)

# react-poop

react-poop wraps the render method of your components into a try/catch block and renders a 💩 when something goes wrong.

## Installation

```bash
npm i react-poop --save
```

## Usage

```jsx
const App = React.createClass({
  render() {
    return <div>Hello react-poop</div>
  },
})

poop(App)

render(<App />, document.getElementById('app'))
```

## Test

```bash
npm test
```
