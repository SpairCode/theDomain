import React from 'react';
import styles from './login.less';
import { Row, Col, Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'dva';

@connect(({ login }) => ({ login }))

class Login extends React.Component {

  componentDidMount () {
    localStorage.clear()
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.username.length !== 6) {
          message.info('用户名长度必须为六位！')
        } else {
          const { dispatch } = this.props
          dispatch({
            type: 'login/saveLoginMsg',
            payload: {
              'usename': values.username,
              'password': values.password
            }
          })
          localStorage.setItem('sessionID', values.username)
          localStorage.setItem('isLogin', true)
        }
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.loginBox}>
        <Row style={{ height: '100%' }}>
          {/* photo area */}
          <Col span={18} style={{ height: '100%' }}>
            <div className={styles.photo}/>
          </Col>
          {/* login area */}
          <Col span={6} style={{ height: '100%' }}>
            <div className={styles.rightBox}>
              <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <Form.Item>
                    <h1 className={styles.title}>LOGIN</h1>
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('username', {rules: [{ required: true, message: 'Please input your username!' }],})(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />,)}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('password', {rules: [{ required: true, message: 'Please input your Password!' }],})(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}type="password" placeholder="Password"/>,)}
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.loginButton}>
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Form.create()(Login)
