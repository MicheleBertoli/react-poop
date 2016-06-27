import assert from 'assert'
import { shallow } from 'enzyme'
import React from 'react'

import poop from './poop'

describe('poop', () => {
  describe('class', () => {
    it('renders the component when everything is fine', () => {
      const Dummy = poop(React.createClass({
        render() {
          return <div>Dummy</div>
        },
      }))
      const wrapper = shallow(<Dummy />)
      assert(wrapper.contains('Dummy'))
    })

    it('renders the poop when something goes wrong', () => {
      const Dummy = poop(React.createClass({
        render() {
          return <div>{this.does.not.exist}</div>
        },
      }))
      const wrapper = shallow(<Dummy />)
      assert(wrapper.contains('💩'))
    })
  })

  describe('stateless', () => {
    it('renders the component when everything is fine', () => {
      const Dummy = poop(() => <div>Dummy</div>)
      const wrapper = shallow(<Dummy />)
      assert(wrapper.contains('Dummy'))
    })

    it('renders the poop when something goes wrong', () => {
      const Dummy = poop(() => <div>{this.does.not.exist}</div>)
      const wrapper = shallow(<Dummy />)
      assert(wrapper.contains('💩'))
    })
  })
})
