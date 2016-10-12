import React from 'react'

const isStateless = component => !(component.prototype && component.prototype.isReactComponent)

const createClass = component => React.createClass({
  render() {
    return component(this.props)
  },
})

const wrap = (Target, Handler) => {
  const originalRender = Target.prototype.render

  Target.prototype.render = function render(...args) {
    try {
      return originalRender.apply(this, args)
    } catch (error) {
      return <Handler error={error} />
    }
  }

  return Target
}

export default handler => component => {
  const Component = isStateless(component) ? createClass(component) : component
  const Poop = error => <div title={error}>💩</div>
  const Handler = handler || Poop

  return wrap(Component, Handler)
}
