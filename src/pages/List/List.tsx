import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './List.less';
import { Spin } from 'antd';
import Zmage from 'react-zmage';

@connect(({ list }) => ({ list }))

class List extends React.Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'list/queryImageData'
    })
  }

  componentWillUnmount () {
    const { dispatch } = this.props
    dispatch({
      type: 'list/closeLoading'
    })
  }

  showList = (imageData) => {
    if (typeof imageData !== 'function') {
      let imageUrl = ''
      let imageArray = []
      imageData.map((item, index) => {
        if (index === 0) {
          imageUrl = item.src
        } else {
          imageArray.push(item)
        }
      })
      return <Zmage src={imageUrl} set={imageArray} />
    }
  }  

  render () {
    const { listData, loading } = this.props.list
    return (
      <div>
        <Spin spinning={loading}>
          <ol className={styles.list}>
            {this.showList(listData)}
          </ol>
        </Spin>
      </div>
    )
  }
}

export default List
