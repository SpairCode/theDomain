import React from 'react';
import { connect } from 'dva';
import { Spin } from 'antd';
import G2 from '@antv/g2';

@connect(({ student }) => ({ student }))

class GradeDistributionStudent extends React.Component {

  state = {
      chart: '', // G2 Object
  }  

  componentDidMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'student/queryStudentScore'
    }).then(() => {
      if (!this.loginOut) {
        this.showChart(this.props.student.studentData)
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
            forceFit: true,
            limitInPlot: true,
            padding: 50,
          })
        })
      }
  
      this.state.chart.clear() // clear before data
      
      this.state.chart.source(data)
  
      this.state.chart.tooltip({
        type: 'mini'
      });
      this.state.chart.point().position('value*number').size(4).shape('circle').opacity(0.65);
      this.state.chart.render();
      this.state.chart.interact('drag', {
        type: 'XY'
      }).interact('zoom', {
        type: 'XY'
      })
    }
  }

  componentWillUnmount() {
    // Component destruction, chart function carry outb render data, lead to error
    this.loginOut = true
  }

  render () {
    const { loading } = this.props.student
    return(
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

export default GradeDistributionStudent
