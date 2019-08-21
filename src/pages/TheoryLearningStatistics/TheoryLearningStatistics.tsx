import React from 'react'
import G2 from '@antv/g2';
import { DatePicker, Radio, Button, Spin, message } from 'antd';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { connect } from 'dva';
import moment from 'moment';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

@connect(({ theorylearn }) => ({ theorylearn }))

class TheoryLearningStatistics extends React.Component {

  state = {
    size: 'default', // Button Size
    chart: '', // G2 Object
    date: moment(new Date()).format('YYYY/MM/DD'),
  }

  componentWillMount () {
    this.queryData()
  }

  queryData = () => {
    if (this.state.date) {
      const { dispatch } = this.props
      dispatch({
        type: 'theorylearn/fetch'
      })
      setTimeout(() => {
        this.showChart(this.props.theorylearn.dataBox)
      }, 1500)
    } else {
      message.error('开始日期或结束日期不能为空！')
    }
  }

  changeDate = (date, dateString) => {
    this.setState({
      date: dateString
    })
  } 

  showChart (datas) {
    let data = datas

    if (!this.state.chart) {
      this.setState({
        chart: new G2.Chart({
          container: 'dataBox',
          width: 800,
          height: 500,
        })
      })
    }
    
    this.state.chart.source(data, {
      name: {
        alias: '姓名'
      },
      score: {
        alias: '分数'
      }
    })

    this.state.chart.axis('name', {
      title: true,
      line: {
        stroke: '#E9E9E9',
        lineDash: [ 3, 3 ]
      }
    })

    this.state.chart.axis('score', {
      title: true,
      line: {
        stroke: '#E9E9E9',
        lineDash: [ 3, 3 ]
      }
    })

    this.state.chart.interval().position('name*score').color('score');
    this.state.chart.render();
  }

  componentDidMount () {
    setTimeout(() => {
      this.showChart(this.props.theorylearn.dataBox)
    }, 1500)
  }

  render () {
    const { size, date } = this.state
    const { loading } = this.props.theorylearn
    const dateFormat = 'YYYY/MM/DD'
    return (
      <div>
        <div>
          <DatePicker defaultValue={moment(date, dateFormat)} format={dateFormat} onChange={this.changeDate} locale={locale} size={size} />
          <Button onClick={this.queryData} style={{ marginLeft: '15px' }} type="primary" icon="search"> Search </Button>
        </div>
        <div>
          <Spin spinning={loading} >
            <div id="dataBox"/>
          </Spin>
        </div>
      </div>
    )
  }
}

export default TheoryLearningStatistics
