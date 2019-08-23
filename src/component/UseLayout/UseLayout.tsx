import React from 'react'
import styles from './UseLayout.less';
import { Layout, Icon, Row, Col, Avatar, Dropdown, Menu } from 'antd';
import LeftNav from '../LeftNav/LeftNav';
import Link  from 'umi/link';

const {Header, Sider, Content, Footer } = Layout;

class UseLayout extends React.Component {

  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render () {
    const { collapsed } = this.state
    const menulist = (
      <Menu>
        <Menu.Item>
          <Link to='/user'>
            <Icon type="user" /> 个人中心
          </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Link to='/login'> <Icon type="logout" /> 退出登录 </Link>
        </Menu.Item>
      </Menu>
    )
    return(
      <Layout style={{ height: '100%', width: '100%' }}>
        <Sider trigger={null} collapsible={true} collapsed={collapsed}>
          <div className={styles.useName}> Fan </div>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', zIndex: 1, padding: '0px 15px' }}>
            <Row type="flex" justify="space-between">
              <Col span={4}>
              <Icon className={styles.trigger} type={collapsed ? `menu-unfold` : `menu-fold`} onClick={this.toggle}/>
              </Col>
              <Col span={4}/>
              <Col span={4}/>
              <Col span={4} style={{ textAlign: 'center' }}>
                <Avatar size={50} style={{ marginRight: '20px' }} src="https://avatars3.githubusercontent.com/u/23133465?s=460&v=4" />
                <Dropdown overlay={menulist}>
                  <span>
                    <span style={{ margin: '0px 5px' }}> Fans </span>
                    <Icon type="caret-down"/>
                  </span>
                </Dropdown>
              </Col>
            </Row>
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, overflow: 'auto'}}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}> © 2019 SpairFan@126.com </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default UseLayout
