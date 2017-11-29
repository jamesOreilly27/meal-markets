import React from 'react'
import { VictoryChart, VictoryLabel, VictoryBar, VictoryLine, VictoryAxis, VictoryTheme, VictoryScatter } from 'victory'
import { getCurrentPrice } from '../../utils'

const VictoryTraderPresenter = ({ data, meal }) => {
  return (
    <div className="victory-chart">
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryLabel
          text={meal.name}
          x={25}
          y={25}
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
        <VictoryLine
          data={data}
          x="dayNumber"
          y={day => getCurrentPrice(day.basePrice, day.inStorePrice, day.dayNumber)}
        />
        <VictoryScatter
          style={{ data: { fill: 'green' }}}
          size={5}
          data={[
            { x: 10, y: 1000 },
            { x: 12, y: 1100 },
            { x: 18, y: 990 },
            { x: 23, y: 1050 }
          ]}
        />
      </VictoryChart>
    </div>
  )
}

export default VictoryTraderPresenter
