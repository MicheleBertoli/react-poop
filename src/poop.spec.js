import assert from 'assert'
import { shallow } from 'enzyme'
import React from 'react'

import poop from './poop'

describe('poop', () => {
  it('renders the component if everything is fine', () => {
    const Dummy = React.createClass({
      render() {
        return <div>Dummy</div>
      },
    })
    poop(Dummy)
    const wrapper = shallow(<Dummy />)
    assert(wrapper.contains('Dummy'))
  })

  it('renders the poop if something goes wrong', () => {
    const Dummy = React.createClass({
      render() {
        return <div>{this.foo.bar.poop}</div>
      },
    })
    poop(Dummy)
    const wrapper = shallow(<Dummy />)
    assert(wrapper.contains('💩'))
  })
})
