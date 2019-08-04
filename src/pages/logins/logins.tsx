import React from 'react'
import styles from './index.less'
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Row, Col } from 'antd'

class Login extends React.Component {

  static defaultProps = {
    verifyCode: String
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
      }
    })
  }

  componentDidMount () {
    this.barCode()
  }

  // make barcode func
  barCode = (e) => {
    let strArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z']
    let canvas = document.getElementById('verifyCode')
    let ctx = canvas.getContext('2d')
    ctx.setTransform(1, 0, 0, 1, 0, 0) // set x y translate distance
    ctx.clearRect(0, 0, 200, 200) // clear canvas number value
    ctx.font = "24px cursive" // set font size, family
    let codeNum = '' // set verify code
    this.setState({
      verifyCode: codeNum
    })
    for (let i = 1; i <= 4; i++) {
      codeNum += strArr[parseInt(0 + (strArr.length - 0) * Math.random())]
    }
    for (let index = 1; index <= 4; index++) {
      ctx.fillStyle = '#' + Math.floor(Math.random()*0xffffff).toString(16) // setting font color
      ctx.translate((index - 1) * 3, 0) // setting translate distance
      ctx.rotate(Math.PI*2/(parseInt(60 + (120 - 60) * (Math.random())))) // among 60 deg or 120 deg
      ctx.fillText(codeNum[index - 1], 10 * (index - 1) + 5 + (index - 1) * 3, 26 - index * 5) // draw verify text
      ctx.translate(0, 0)
    }
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const { verifyCode } = this.props
    return (
      <div className={styles.login} style={{ backgroundImage: 'linear-gradient(' + Math.atan( document.body.clientHeight / document.body.clientWidth) * 180 / Math.PI + 'deg  , #5c8cf0, #5c8cf0 50%, #6d98f1 50%, #6d98f1 100%)' }}>
      <div className={styles.loginBox}>
        {/* <div className={styles.banner}/> */}
        <div className={styles.loginForm}>
          <Form onSubmit={this.handleSubmit} className={styles.loginForms}>
            <Form.Item>
              <h2> Login In </h2>
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('username', { rules: [{ required: true, message: '请输入您的用户名!' }],})  (<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.8)' }} />}   placeholder="用户名" autoComplete="text"/>, )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', { rules: [{ required: true, message: '请输入您的密码!' }],})(   <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.8)' }} />} type="password"   placeholder="密码" autoComplete="password" />, )}
            </Form.Item>
            <Form.Item>
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('verify', { rules: [{ required: true, message: '请输入您的验证码!' }],})(   <Input prefix={<Icon type="barcode" style={{ color: 'rgba(0,0,0,.8)' }} />} type="text" placeholder="验证码" autoComplete="验证码" />, )}
                </Col>
                <Col span={12}>
                  <canvas onClick={this.barCode}  id="verifyCode" style={{ backgroundColor: '#fff' ,margin: '3px 0px' }} width="100px" height="32px" />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', { valuePropName: 'checked', initialValue: true, })}
              <Button type="primary" htmlType="submit" className={styles.loginButton}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
    )
  }
}

export default Form.create()(Login)
