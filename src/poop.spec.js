import assert from 'assert'
import { shallow } from 'enzyme'
import React from 'react'

import poop from './poop'

describe('poop', () => {
  it('renders the component when everything is fine', () => {
    const Dummy = poop(React.createClass({
      render() {
        return <div>Dummy</div>
      },
    }))
    const wrapper = shallow(<Dummy />)
    assert(wrapper.contains('Dummy'))
  })

  it('renders the poop when something goes wrong (class)', () => {
    const Dummy = poop(React.createClass({
      render() {
        return <div>{this.foo.bar}</div>
      },
    }))
    const wrapper = shallow(<Dummy />)
    assert(wrapper.contains('💩'))
  })

  it('renders the poop when something goes wrong (stateless)', () => {
    const Dummy = poop(() => (
      <div>{this.foo.bar}</div>
    ))
    const wrapper = shallow(<Dummy />)
    assert(wrapper.contains('💩'))
  })
})
