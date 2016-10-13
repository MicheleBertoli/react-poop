import React from 'react'

const isStateless = Component => !(Component.prototype && Component.prototype.isReactComponent)

const createClass = component => React.createClass({
  render() {
    return component(this.props)
  },
})

const wrap = (Component, Handler) => {
  const originalRender = Component.prototype.render

  Component.prototype.render = function render(...args) {
    try {
      return originalRender.apply(this, args)
    } catch (error) {
      return <Handler error={error} />
    }
  }

  return Component
}

const Poop = error => <div title={error}>💩</div>

export default Handler => Component => {
  const Target = isStateless(Component) ? createClass(Component) : Component

  return wrap(Target, Handler || Poop)
}
