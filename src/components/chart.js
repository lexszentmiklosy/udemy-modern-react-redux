import React from  'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data) {
  return _.round( _.sum(data) / data.length);
}
function Chart ({ data, color, unit}) {
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(data)}{unit}</div>
    </div>
  )
}

export default Chart;
