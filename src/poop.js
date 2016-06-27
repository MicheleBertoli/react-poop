import React from 'react'

export default Component => {
  const rendr = Component.prototype.render

  Component.prototype.render = function render() {
    try {
      return rendr.apply(this, arguments)
    } catch (error) {
      return <div title={error}>💩</div>
    }
  }
}
