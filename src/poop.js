import React from 'react'

const isStateless = component => !(component.prototype && component.prototype.isReactComponent)

const createClass = component => React.createClass({
  render() {
    return component(this.props)
  },
})

const wrap = (component, ErrorComponent) => {
  const originalRender = component.prototype.render

  component.prototype.render = function render(...args) {
    try {
      return originalRender.apply(this, args)
    } catch (error) {
      if (ErrorComponent) {
        return <ErrorComponent error={error} />
      }
      return <div title={error}>💩</div>
    }
  }

  return component
}

export default errorComponent => component => {
  const componentToWrap = isStateless(component) ? createClass(component) : component

  return wrap(componentToWrap, errorComponent)
}
