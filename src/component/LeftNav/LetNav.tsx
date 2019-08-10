import React from 'react'
import { connect } from 'dva';
import menuList from '../../../config/menu.js';
import { Menu, Icon } from 'antd';
import styles from './LeftNav.less';
const { SubMenu } = Menu;

@connect(({ routes }) => ({ routes }))

class LeftNav extends React.Component {

  state = {
    menu: {}
  }

  componentWillMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'routes/fetch',
      payload: menuList
    })
  }

  componentWillUnmount () {
    this.setState({
      menu: this.renderLeft(this.props.routes.menu)
    })
  }

  renderLeft = (menuLists) => {
    return menuLists.map(item => {
      if (item.children) {
        return <SubMenu key={item.id} title={<span> <Icon type={item.icon} /> <span> {item.name} </span> </span>}>{this.renderLeft(item.children)}</SubMenu>
      } else {
        return <Menu.Item key={item.id}> <Icon type={item.icon} /> <span> {item.name} </span> </Menu.Item>
      }
    })
  }

  render () {
    const { menu } = this.props.routes
    return (
      <div className={styles.leftNav}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          // inlineCollapsed={this.state.collapsed}
        >
          {this.renderLeft(menu)}
        </Menu>
      </div>
    )
  }
}

export default LeftNav
