[![Build Status](https://travis-ci.org/MicheleBertoli/react-poop.svg?branch=master)](https://travis-ci.org/MicheleBertoli/react-poop)

# react-poop

react-poop wraps your stateless functions and the render method of your components
into a try/catch block and renders a 💩 when something goes wrong.

## Installation

```bash
npm i react-poop --save
```

## Usage

```jsx
import React from 'react'
import { render } from 'react-dom'
import poop from 'react-poop'

const App = poop(() => <div>Hello react-poop</div>)

render(<App />, document.getElementById('app'))
```

## Test

```bash
npm test
```
