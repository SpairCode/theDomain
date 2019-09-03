import React from 'react';
import { connect } from 'dva';
import styles from './List.less';

@connect(({ list }) => ({ list }))

class List extends React.Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'list/queryList'
    })
  }

  showList = (listData) => {
    if (typeof listData !== 'function') {
      return listData.map(item => <li className={`${ item.key >= 5 ? `${styles.error}` : `${styles.shadow}` } ${ true ? `${styles.info}` : `${styles.success}` }`} key={item.key}> {item.text} </li>)
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
