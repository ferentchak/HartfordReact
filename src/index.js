import React from "react";
import { render } from "react-dom";
import 'tui-chart/dist/tui-chart.css'
import { ColumnChart, LineChart } from '@toast-ui/react-chart'

var data = {
  categories: ['June, 2015', 'July, 2015', 'August, 2015', 'September, 2015', 'October, 2015', 'November, 2015', 'December, 2015'],
  series: [
    {
      name: 'Budget',
      data: [5000, 3000, 5000, 7000, 6000, 4000, 1000]
    },
    
  ]
};
var options = {
  chart: {
    width: 1160,
    height: 650,
    title: 'Monthly Revenue',
    format: '1,000'
  },
  yAxis: {
    title: 'Amount',
    min: 0,
    max: 9000
  },
  xAxis: {
    title: 'Month'
  },
  legend: {
    align: 'top'
  }
};


class MyComponent extends React.Component {
  chartRef = React.createRef();
  debugger;
  handleClickButton = () => {
    console.log('type:', this.chartRef.current.getInstance().getType());
  }

  render() {
    return (
      <>
        <ColumnChart
          ref={this.chartRef}
          data={data}
          options={options}
        />
        <button onClick={this.handleClickButton}>getType</button>
      </>
    );
  }
}

const App = () => (
  <div>
    <MyComponent
    />
  </div>
);

render(<App />, document.getElementById("root"));
