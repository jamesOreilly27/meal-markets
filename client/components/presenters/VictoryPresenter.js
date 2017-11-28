import React from 'react'
import { VictoryChart, VictoryLabel, VictoryBar, VictoryAxis, VictoryTheme } from 'victory'
import { getCurrentPrice } from '../../utils'

const VictoryPresenter = ({ data, meal }) => {
  return (
    <div className="victory-chart">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryLabel
          text={meal.name}
        />
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
        <VictoryBar
          data={data}
          x="dayNumber"
          y={day => getCurrentPrice(day.basePrice, day.inStorePrice, day.dayNumber)}
        />
      </VictoryChart>
    </div>
  )
}

export default VictoryPresenter
