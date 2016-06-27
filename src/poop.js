import React from 'react'

const isStateless = component => !component.render && !component.prototype.render

const createClass = component => React.createClass({
  render() {
    return component(this.props)
  },
})

const wrap = component => {
  const originalRender = component.prototype.render

  component.prototype.render = function render() {
    try {
      return originalRender.apply(this, arguments)
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
