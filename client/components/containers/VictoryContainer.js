import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { VictoryBar } from 'victory'

const testData = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
]

class VictoryContainerClass extends Component {
  render() {
    return (
      <VictoryBar
        data={testData}
        x='quarter'
        y='earnings'
      />
    )
  }
}

const VictoryContainer = withRouter(connect(null)(VictoryContainerClass))
export default VictoryContainer
