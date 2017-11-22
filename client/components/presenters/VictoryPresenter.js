import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory'
import { getCurrentPrice } from '../../utils'

const VictoryPresenter = ({ data, tickValues }) => (
  <VictoryChart
    theme={VictoryTheme.material}
    domainPadding={20}
  >
    <VictoryAxis
      tickValues={tickValues}
      style={{
        tickLabels: {fontSize: 5}
      }}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={x => `$${x}`}
    />
    <VictoryBar
      data={data}
      x="dayNumber"
      y={day => getCurrentPrice(day.basePrice, day.inStorePrice, day.dayNumber)}
    />
  </VictoryChart>
)


export default VictoryPresenter
