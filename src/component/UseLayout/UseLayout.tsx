import React from 'react'
import styles from './UseLayout.less';
import { Layout, Menu, Icon } from 'antd';
import LeftNav from '../LeftNav/LeftNav';

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
    return(
      <Layout style={{ height: '100%', width: '100%' }}>
        <Sider trigger={null} collapsible={true} collapsed={collapsed}>
          <div className={styles.useName}> Fan </div>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', zIndex: 1 }}>
            <Icon className={styles.trigger} type={collapsed ? `menu-unfold` : `menu-fold`} onClick={this.toggle}/>
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,}}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}> © 2019 SpairFan@126.com </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default UseLayout
