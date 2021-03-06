import React from 'react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory'
import { getCurrentPrice } from '../../utils'

const VictoryEaterPresenter = ({ data }) => {
  return (
    <div className="victory-chart">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={data.map(el => el.dayNumber)}
          style={{
            tickLabels: {fontSize: 5}
          }}
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
      </VictoryChart>
    </div>
  )
}

export default VictoryEaterPresenter
