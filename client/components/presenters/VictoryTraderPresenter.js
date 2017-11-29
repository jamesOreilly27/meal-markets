import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { VictoryChart, VictoryLabel, VictoryBar, VictoryLine, VictoryAxis, VictoryTheme, VictoryScatter } from 'victory'
import { getCurrentPrice } from '../../utils'

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
          tickValues={data.map(el => el.dayNumber)}
          fixLabelOverlap={true}
          // style={{
          //   tickLabels: {fontSize: 20}
          // }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={x => `$${x / 100}`}
        />
        <VictoryLine
          data={data}
          x="dayNumber"
          y={day => getCurrentPrice(day.basePrice, day.inStorePrice, day.dayNumber)}
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
              return {x: null, y: null}
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
