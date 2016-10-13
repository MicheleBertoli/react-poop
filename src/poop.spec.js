import assert from 'assert'
import { shallow } from 'enzyme'
import React from 'react'

import poop from './poop'

describe('poop', () => {
  const Handler = () => <div />

  describe('class', () => {
    let NiceClass
    let EvilClass

    beforeEach(() => {
      NiceClass = React.createClass({
        render() {
          return <div>Dummy</div>
        },
      })

      EvilClass = React.createClass({
        render() {
          return <div>{this.does.not.exist}</div>
        },
      })
    })

    it('renders the component when everything is fine', () => {
      const Dummy = poop()(NiceClass)
      const wrapper = shallow(<Dummy />)

      assert(wrapper.contains('Dummy'))
    })

    it('renders the handler when something goes wrong', () => {
      const Dummy = poop(Handler)(EvilClass)
      const wrapper = shallow(<Dummy />)

      assert.equal(wrapper.first().find('Handler').length, 1)
    })

    it('renders the poop when something goes wrong', () => {
      const Dummy = poop()(EvilClass)
      const wrapper = shallow(<Dummy />)

      assert.equal(wrapper.first().find('Poop').length, 1)
    })
  })

  describe('stateless', () => {
    let NiceStateless
    let EvilStateless

    beforeEach(() => {
      NiceStateless = () => <div>Dummy</div>

      EvilStateless = () => <div>{this.does.not.exist}</div>
    })

    it('renders the component when everything is fine', () => {
      const Dummy = poop()(NiceStateless)
      const wrapper = shallow(<Dummy />)

      assert(wrapper.contains('Dummy'))
    })

    it('renders the handler when something goes wrong', () => {
      const Dummy = poop(Handler)(EvilStateless)
      const wrapper = shallow(<Dummy />)

      assert.equal(wrapper.first().find('Handler').length, 1)
    })

    it('renders the poop when something goes wrong', () => {
      const Dummy = poop()(EvilStateless)
      const wrapper = shallow(<Dummy />)

      assert.equal(wrapper.first().find('Poop').length, 1)
    })
  })
})
