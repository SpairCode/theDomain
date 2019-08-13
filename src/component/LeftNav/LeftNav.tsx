import React from 'react'
import { connect } from 'dva';
import menuList from '../../../config/menu.js';
import { Menu, Icon } from 'antd';
import styles from './LeftNav.less';
import { withRouter } from "react-router";
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
    const path = this.props.location.pathname
    return menuLists.map(item => {
      if (item.children) {
        const cItem = item.children.find(item => item.url === path)
        if (cItem) {
          this.openKeys = item.url
        }
        return <SubMenu key={item.id} title={<span> <Icon type={item.icon} /> <span> {item.name} </span> </span>}>{this.renderLeft(item.children)}</SubMenu>
      } else {
        return <Menu.Item key={item.url}> <Icon type={item.icon} /> <span> {item.name} </span> </Menu.Item>
      }
    })
  }

  render () {
    const menuNode = this.renderLeft(this.props.routes.menu)
    const path = this.props.location.pathname
    const openkeys = this.openKeys
    const { menu } = this.props.routes
    return (
      <div className={styles.leftNav}>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openkeys]}
          mode="inline"
          theme="light"
          // inlineCollapsed={collapsed}
        >
          {menuNode}
        </Menu>
      </div>
    )
  }
}

export default withRouter(LeftNav)
