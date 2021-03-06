import React from 'react'
import { connect } from 'dva';
import { Spin } from 'antd';
import G2 from '@antv/g2';

@connect(({ grade }) => ({ grade }))

class GradeDistribution extends React.Component {

  state = {
    chart: '', // G2 Object
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'grade/queryGradeData'
    }).then(() => {
      if (!this.loginOut) {
        this.showChart(this.props.grade.gradeData)
      }
    })
  }

  showChart (datas) {
    // data typeof undeundefined
    if (datas) {
    
      let data = datas
  
      if (!this.state.chart) {
        this.setState({
          chart: new G2.Chart({
            id: 'dataBox',
            width: 800,
            height: window.innerHeight - 300,
            forceFit: true
          })
        })
      }
  
      this.state.chart.clear() // clear before data
      
      this.state.chart.source(data)
  
      this.state.chart.coord('theta', {
        startAngle: Math.PI, // 起始角度
        endAngle: Math.PI * (3) // 结束角度
      });
  
      this.state.chart.intervalStack().position('value').color('title').label('title');
  
      this.state.chart.render();

    }
  }

  componentWillUnmount() {
    // Component destruction, chart function carry outb render data, lead to error
    this.loginOut = true
  }

  render () {
    const { loading } = this.props.grade
    return (
      <div>
        <div>
          <Spin spinning={loading} >
            <div id="dataBox"/>
          </Spin>
        </div>
      </div>
    )
  }
}

export default GradeDistribution
