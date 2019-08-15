import React from 'react'
import G2 from '@antv/g2';
import { DatePicker, Radio } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class TheoryLearningStatistics extends React.Component {

  state = {
    size: 'default',
  }

  showChart () {
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 1150 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];
    
    const chart = new G2.Chart({
      container: 'dataBox',
      width: 500,
      height: 500
    });
    
    chart.source(data);
    chart.interval().position('genre*sold').color('genre');
    chart.render();
  }

  componentDidMount () {
    this.showChart()
  }

  render () {
    const { size } = this.state
    return (
      <div>
        <div>
          <RangePicker size={size} />
        </div>
        <div id="dataBox"/>
      </div>
    )
  }
}

export default TheoryLearningStatistics
