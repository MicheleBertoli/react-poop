[![Build Status](https://travis-ci.org/MicheleBertoli/react-poop.svg?branch=master)](https://travis-ci.org/MicheleBertoli/react-poop)

# react-poop

`react-poop` wraps your stateless functions and the render method of your components into a try/catch block.

When something goes wrong, it shows a 💩 (or the custom handler you provided) so that the tree can still be rendered.

## Installation

```bash
npm i react-poop --save
```

## Usage

```javascript
import React from 'react'
import { render } from 'react-dom'
import poop from 'react-poop'

// default

const App = poop()(() => <div>Hello react-poop</div>)

// or
// with a custom handler

const Handler = ({ error: { message } }) => <div>{message}</div>
const App = poop(Handler)(() => <div>Hello react-poop</div>)

render(<App />, document.getElementById('app'))
```

## Test

```bash
npm test
```
