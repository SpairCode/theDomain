import React from 'react'
import menuList from '../../../config/menu';
import { Menu, Icon } from 'antd';
import styles from './LeftNav.less';
import { withRouter } from "react-router";
const { SubMenu } = Menu;
import router from 'umi/router'

class LeftNav extends React.Component {

  renderLeft = (menuLists) => {
    if (typeof menuList !== 'function') {
      let path = this.props.location.pathname
      return menuLists.map(item => {
        if (item.children) {
          const cItem = item.children.find(items => path.indexOf(items.url) === 0)
          if (cItem) {
            this.openKeys = item.url
            this.path = cItem.url
          }
          return <SubMenu key={item.url} title={<span> <Icon type={item.icon} /> <span> {item.title} </span> </span>}>{this.renderLeft(item.children)}</SubMenu>
        } else {
          if (item.icon) {
            return <Menu.Item onClick={this.url.bind(this, item.url)} key={item.url}> <Icon type={item.icon} /> <span> {item.title} </span> </Menu.Item>
          } else {
            return <Menu.Item onClick={this.url.bind(this, item.url)} key={item.url}> <span> {item.title} </span> </Menu.Item>
          }
        }
      })
    }
  }

  url = (path) => {
    router.push({
      pathname: path
    })
  }

  render () {
    const menuLists = this.renderLeft(menuList)
    return (
      <div className={styles.leftNav}>
        <Menu
          selectedKeys={[this.path]}
          defaultOpenKeys={[this.openKeys]}
          mode="inline"
          theme="light"
        >
          {menuLists}
        </Menu>
      </div>
    )
  }
}

export default withRouter(LeftNav)
