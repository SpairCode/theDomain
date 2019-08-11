import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import LeftNav from '../LeftNav/LeftNav';

const {Header, Sider, Content } = Layout;

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
    return(
      <Layout style={{ height: '100%', width: '100%' }}>
        <Sider trigger={null} collapsible={true} collapsed={collapsed}>
          <div className="logo" />
          <LeftNav/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', lineHeight: '64px', textAlign: 'left', fontSize: '26px' }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,}}>
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default UseLayout
