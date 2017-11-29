import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { VictoryChart, VictoryLabel, VictoryBar, VictoryLine, VictoryAxis, VictoryTheme, VictoryScatter } from 'victory'
import { getCurrentPrice } from '../../utils'

const axisStyle = {
  axis: { stroke: '#FDF7F7' },
  ticks: { stroke: '#FDF7F7' },
  tickLabels: { fill: '#FDF7F7' },
  axisLabel: { padding: 30, fill: '#FDF7F7'}
}

const VictoryTraderPresenter = ({ data, meal, sellableOrders }) => {
  return (
    <div className="victory-chart">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        animate={{duration: 500}}
      >
        <VictoryLabel
          text={meal.name}
          x={25}
          y={25}
        />
        <VictoryAxis
          label="Days (# of Days From Today)"
          tickValues={data.map(el => el.dayNumber)}
          tickFormat={x => 29 - x}
          fixLabelOverlap={true}
          style={axisStyle}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={x => `$${x / 100}`}
          style={axisStyle}
        />
        <VictoryLine
          data={data}
          x="dayNumber"
          y={day => getCurrentPrice(day.basePrice, day.inStorePrice, day.dayNumber)}
          style={{ data: { stroke: "#FDF7F7", strokeLinecap: "round" } }}
        />
        <VictoryScatter
          style={{ data: { fill: 'green' }}}
          size={5}
          data={sellableOrders.map(order => {
            let today = new Date().getTime()
            let pickupDate = new Date(order.pickupDate).getTime()
            if (today < pickupDate && order.mealId === meal.id) {
              return {
                x: Math.floor(((pickupDate - today) / 86400000)),
                y: order.listPrice
              }
            } else {
              return {
                x: Math.floor(((pickupDate - today) / 86400000)),
                y: order.listPrice, opacity: 0
              }
            }
          })}
        />
      </VictoryChart>
    </div>
  )
}

const mapState = state => ({
  sellableOrders: state.sellableOrders
})

const VictoryTradeContainer = withRouter(connect(mapState)(VictoryTraderPresenter))
export default VictoryTradeContainer
