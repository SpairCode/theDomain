import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './TimeComponent.less';
import { Spin, Button } from 'antd';

@connect(({ time }) => ({ time }))

class TimeComponent extends React.Component {

  state = {
    cuttime: ''
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'time/queryTime'
    }).then(() => {
      const { time, alltime } = this.props.time
      this.setTime(time, alltime)
    })
  }

  componentWillUnmount () {
    clearInterval(this.times)
    const { dispatch } = this.props
    dispatch({
      type: 'time/loading'
    })
  }

  jump = () => {
    router.push({
      pathname: '/information/TheoryLearningStatistics'
    })
  }

  setTime = (time, alltime) => {
    clearInterval(this.times)
    let showTime = ''
    if (typeof time !== 'function') {
      this.times = setInterval(() => {
        time++
        if (Math.floor(time / 60) >= 10) {
          if (Math.floor(time % 60) >= 10) {
            showTime = Math.floor(time / 60) + ' : ' + Math.floor(time % 60)
          } else {
            showTime = Math.floor(time / 60) + ' : 0' + Math.floor(time % 60)
          }
        } else {
          if (Math.floor(time % 60) >= 10) {
            showTime = '0' + Math.floor(time / 60) + ' : ' + Math.floor(time % 60)
          } else {
            showTime = '0' + Math.floor(time / 60) + ' : 0' + Math.floor(time % 60)
          }
        }
        if (time >= alltime) {
          clearInterval(this.times)
          showTime = '00 : 00'
        }
        this.setState({
          cuttime: showTime
        })
      }, 1000)
    }
  }

  render () {
    const { cuttime } = this.state
    const { time, alltime, loading } = this.props.time
    return (
      <div className={styles.timeBox}>
        <Spin spinning={loading}> 
          <div> {cuttime} </div>
          <Button type='primary' onClick={this.jump} > Link </Button>
        </Spin>
      </div>
    )
  }
}

export default TimeComponent
