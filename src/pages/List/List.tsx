import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './List.less';
import Zmage from 'react-zmage';

@connect(({ list }) => ({ list }))

class List extends React.Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'list/queryImageData'
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
    const { listData } = this.props.list
    return (
      <div>
        <ol className={styles.list}>
          {this.showList(listData)}
        </ol>
      </div>
    )
  }
}

export default List
