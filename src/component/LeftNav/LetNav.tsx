import React from 'react'
import menuList from './../../../config/menu.js';
import { Menu, Icon } from 'antd';
import styles from './LeftNav.less'


const { SubMenu } = Menu;

class LeftNavSlider extends React.Component {

  renderLeft = (menuLists) => {
    return menuLists.map(item => {
      if (item.children) {
        return <SubMenu key={item.index} title={<span> <Icon type={item.icon} /> <span> {item.title} </span> </span>}>{this.renderLeft(item.children)}</SubMenu>
      } else {
        return <Menu.Item key={item.index}> <Icon type={item.icon} /> <span> {item.title} </span> </Menu.Item>
      }
    })
  }

  render () {
    return (
      <div className={styles.leftNav}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          // inlineCollapsed={this.state.collapsed}
        >
          {this.renderLeft(menuList)}
        </Menu>
      </div>
    )
  }
}

export default LeftNavSlider
