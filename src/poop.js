import React from 'react'

const isStateless = component => !(component.prototype && component.prototype.isReactComponent)

const createClass = component => React.createClass({
  render() {
    return component(this.props)
  },
})

const wrap = component => {
  const originalRender = component.prototype.render

  component.prototype.render = function render(...args) {
    try {
      return originalRender.apply(this, args)
    } catch (error) {
      return <div title={error}>💩</div>
    }
  }

  return component
}

export default component => {
  const Poop = isStateless(component) ? createClass(component) : component

  return wrap(Poop)
}
