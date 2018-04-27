import React from 'react'
import { shallow } from 'enzyme'
import Body from './../../src/components/body'

test('body defaults space name to development', () => {
  const body = shallow(<Body />)
  expect(body.html().includes('development')).toBe(true)
})

test('body defaults company name to Pivotal', () => {
  const body = shallow(<Body />)
  expect(body.html().includes('Pivotal</span> is giving you')).toBe(true)
})

test('body defaults org count to 0', () => {
  const body = shallow(<Body />)
  expect(body.html().includes('0 are already using PCF!')).toBe(true)
})

test('body renders space name when present', () => {
  const info = {
    CompanyName: 'Maximus',
    ExperimentationSpaceName: 'prod'
  }
  const body = shallow(<Body info={info} />)
  expect(body.html().includes('prod')).toBe(true)
})

test('body renders company name when present', () => {
  const info = {
    CompanyName: 'Maximus',
    ExperimentationSpaceName: 'prod'
  }
  const body = shallow(<Body info={info} />)
  expect(body.html().includes('Maximus')).toBe(true)
})

test('body renders ignition org count when present', () => {
  const info = {
    CompanyName: 'Maximus',
    ExperimentationSpaceName: 'prod',
    IgnitionOrgCount: 42
  }
  const body = shallow(<Body info={info} />)
  expect(body.html().includes('42 are already using PCF!')).toBe(true)
})
