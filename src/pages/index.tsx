import React from 'react';
import styles from './index.less';
import { Row, Col } from 'antd';


class Home extends React.Component {

  state = {
    index: 0
  }
  activeIndex = (e, index) => {
    this.setState({
      index: e
    })
  }

  render () {
    return (
      <div className={styles.homeBox}>
        {/* Header Box */}
        <div className={styles.headerBox}>
        <Row>
          {/* Logo */}
          <Col span={3}>
            <div className={styles.logoText}> Fans </div>
          </Col>
          {/* Header Link */}
          <Col span={18} offset={3}>
            <div className={styles.headerLink}>
              <Row type="flex" justify="space-around">
                <Col span={6}>How it Work</Col>
                <Col span={4}>Find Job</Col>
                <Col span={4}>Login</Col>
                <Col span={4}>Sign Up</Col>
              </Row>
            </div>
          </Col>
        </Row>
        </div>
        <div className={styles.contentBox}>
          <Row>
            <Col span={12}/>>
            <Col className={styles.imagesBox} span={12}>
              <img className={styles.images} src={require('../assets/WechatIMG2.png')}/>>
            </Col>
          </Row>
        </div>
        {/* Fooetr */}
        <div className={styles.footerBox}>
        <Row className={styles.rows} gutter={0}>
          <Col onClick={this.activeIndex.bind(this, 0)} className={this.state.index === 0 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}>
              <i className="iconfont">&#xe6d5;</i> <span>All Categorides</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 1)} className={this.state.index === 1 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}> 
              <i className="iconfont">&#xe64a;</i> <span>Home</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 2)} className={this.state.index === 2 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}>
              <i className="iconfont">&#xe82e;</i> <span>Business</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 3)} className={this.state.index === 3 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}>
              <i className="iconfont">&#xe684;</i> <span>Photography</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 4)} className={this.state.index === 4 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}>
            <i className="iconfont">&#xe632;</i> <span>Lessons</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 5)} className={this.state.index === 5 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}>
              <i className="iconfont">&#xe627;</i> <span>Other</span>
            </div>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default Home
