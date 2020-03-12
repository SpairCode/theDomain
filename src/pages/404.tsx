import React from 'react'
import styles from './404.less'
import { Transition } from 'react-spring/renderprops'

class errorPage extends React.Component {
  
  render () {
    const items = [{
      key: '5',
      text: '404'
    }]
    return (
      <div className={styles.errorBox}> 
        <div>
          <Transition
            items={items} keys={item => item.key}
            from={{ transform: 'translate3d(0,-40px,0)' }}
            enter={{ transform: 'translate3d(0,0px,0)' }}
            leave={{ transform: 'translate3d(0,-40px,0)' }}>
            {item => props => <div style={props}>{item.text}</div>}
          </Transition>
        </div>
      </div>
    )
  }
}

export default errorPage
