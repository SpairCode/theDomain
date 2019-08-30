import React from 'react'
import styles from './UseLayout.less';
import { Layout, Icon, Row, Col, Avatar, Dropdown, Menu } from 'antd';
import LeftNav from '../LeftNav/LeftNav';
import Link  from 'umi/link';
import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import menu from '../../../config//menu';
import Item from 'antd/lib/list/Item';

const {Header, Sider, Content, Footer } = Layout;

@connect(({ login }) => ({ login }))

class UseLayout extends React.Component {

  state = {
    collapsed: false,
    title: ''
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  loginOut = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'login/loginOut',
    })
  }

  componentWillMount () {
    this.queryTitle(this.props.location.pathname)
  }

  queryTitle = (url) => {
    menu.map(item => {
      if (item.url === url) {
        this.title = item.title
      }
      if (item.children) {
        item.children.map(items => {
          if (items.url === url) {
              this.title = items.title
          }
        })
      }
    })
  }

  componentWillUpdate (nextProps) {
    this.queryTitle(nextProps.location.pathname)
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
        <Menu.Item onClick={this.loginOut}>
          <Link to='/login'> <Icon type="logout" /> 退出登录 </Link>
        </Menu.Item>
      </Menu>
    )
    return(
      <Layout style={{ height: '100%', width: '100%' }}>
        <Sider style={{ boxShadow: '2px 0px 6px rgba(0, 0, 0, 0.26)' }} trigger={null} collapsible={true} collapsed={collapsed}>
          <div className={styles.useName}> Fan </div>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header style={{ boxShadow: '2px 0px 6px rgba(0, 0, 0, 0.26)', background: '#fff', zIndex: 1, padding: '0px 15px', overflow: 'auto' }}>
            <Row type="flex" justify="space-between">
              <Col span={4}>
              <Icon className={styles.trigger} type={collapsed ? `menu-unfold` : `menu-fold`} onClick={this.toggle}/>
              </Col>
              <Col span={4}>
                <DocumentTitle title={this.title}/>
              </Col>
              <Col span={4}/>
              <Col span={4} style={{ textAlign: 'center', minWidth: '200px' }}>
                <Avatar size={50} style={{ marginRight: '20px' }} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566820203843&di=cc0554ba5c4d318041aeab626ede99fc&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6dab3bb6cab67b909ff26b2e35390bd50ba94c4dfe3-OQZGZ9_fw658" />
                <Dropdown overlay={menulist}>
                  <span>
                    <span style={{ margin: '0px 5px' }}> Fans </span>
                    <Icon type="caret-down"/>
                  </span>
                </Dropdown>
              </Col>
            </Row>
          </Header>
          <Content style={{margin: 24, paddingTop: 24 ,background: '#fff', minHeight: 280, overflow: 'auto'}}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}> © 2019 SpairFan@126.com </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default UseLayout
