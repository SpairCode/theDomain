import React from 'react'
import { connect } from 'dva';
import menuList from '../../../config/menu.js';
import { Menu, Icon } from 'antd';
import styles from './LeftNav.less';
import { withRouter } from "react-router";
const { SubMenu } = Menu;
import router from 'umi/router'

@connect(({ routes }) => ({ routes }))

class LeftNav extends React.Component {

  state = {
    path: '',
    openKey: ''
  }

  componentWillMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'routes/fetch',
      payload: menuList
    })
    this.setState({
      menu: this.renderLeft(this.props.routes.menu),
      path: this.props.location.pathname,
      openKey: '/' + this.props.location.pathname.split('/')[1]
    })
  }

  url = (path, id) => {
    router.push({
      pathname: path,
      query: {
        id: id
      }
    })
    this.setState({
      path: path
    })
  }

  renderLeft = (menuLists) => {
    return menuLists.map(item => {
      if (item.children) {
        // const cItem = item.children.find(item => item.url === this.state.path)
        // if (cItem) {
        //   this.openKeys = "'" + item.url + "'" 
        //   console.log('this.openKeys:', this.openKeys)
        // }
        return <SubMenu key={item.url} title={<span> <Icon type={item.icon} /> <span> {item.name} </span> </span>}>{this.renderLeft(item.children)}</SubMenu>
      } else {
        return <Menu.Item onClick={this.url.bind(this, item.url, item.id)} key={item.url}> <Icon type={item.icon} /> <span> {item.name} </span> </Menu.Item>
      }
    })
  }

  render () {
    const menuNode = this.renderLeft(this.props.routes.menu)
    const { path } = this.state
    const openkeys = this.state.openKey
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
