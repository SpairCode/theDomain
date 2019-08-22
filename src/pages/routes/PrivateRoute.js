import React from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';

@connect(({ login }) => ({ login }))

class PrivateRoute extends React.Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'login/verifyUse'
    })
  }

  privateRoute = (isLogin) => {
    if (isLogin) {
      return (
        <div style={{ width: '100%', height: '100%' }}>
          { this.props.children }
        </div>
      )
    } else {
      return (
        <Redirect to="/"/>
      )
    }
  }

  render () {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        { this.privateRoute(this.props.login) }
      </div>
    )
  }
}

export default PrivateRoute