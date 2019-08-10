import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import LeftNav from '../LeftNav/LetNav';

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
    return(
      <Layout style={{ height: '100%', width: '100%' }}>
        <Sider trigger={null} collapsible={true}>
          <div className="logo" />
          <LeftNav/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            {this.state.collapsed}
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
