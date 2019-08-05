import React from 'react';
import styles from './index.less';
import { Row, Col, Input, Tooltip, Icon, Button } from 'antd';

const { Search } = Input;

class Home extends React.Component {

  state = {
    size: 'large',
    index: 0
  }
  activeIndex = (e, index) => {
    this.setState({
      index: e
    })
  }

  render () {
    const { size, index } = this.state;
    return (
      <div className={styles.homeBox}>
        {/* Header Box */}
        <div className={styles.headerBox}>
        <Row>
          {/* Logo */}
          <Col span={3}>
            <div className={styles.logoText}>
              <div className={styles.text}> Fans </div>
            </div>
          </Col>
          {/* Header Link */}
          <Col span={18} offset={3}>
            <div className={styles.headerLink}>
              <Row type="flex" justify="space-around">
                <Col span={6}>How it Work</Col>
                <Col span={4}>Find Job</Col>
                <Col span={4}>
                  <a href="./login"> Login </a>
                </Col>
                <Col span={4}>Sign Up</Col>
              </Row>
            </div>
          </Col>
        </Row>
        </div>
        <div className={styles.contentBox}>
          <Row>
            <Col span={12}>
              <div className={styles.contentText}>
                Find Reliable & Verified Home Service Providees.
              </div>
              <div className={styles.searchButton}>
                <Input className={styles.searchInput} placeholder="What service you need" size="large" prefix={<Icon type="home" style={{ color: 'rgba(114,118,125,1)' }} />} suffix={<Tooltip> <Icon type="environment" style={{ color: 'rgba(114,118,125,1)' }} /></Tooltip>} />
                <Button className={styles.btn} type="primary"> Search </Button>
              </div>
            </Col>
            <Col className={styles.imagesBox} span={12}>
              <img className={styles.images} src={require('../assets/WechatIMG2.png')}/>>
            </Col>
          </Row>
        </div>
        {/* Fooetr */}
        <div className={styles.footerBox}>
        <Row className={styles.rows} gutter={0}>
          <Col onClick={this.activeIndex.bind(this, 0)} className={index === 0 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}>
              <i className="iconfont">&#xe6d5;</i> <span>All Categorides</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 1)} className={index === 1 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}> 
              <i className="iconfont">&#xe64a;</i> <span>Home</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 2)} className={index === 2 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}>
              <i className="iconfont">&#xe82e;</i> <span>Business</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 3)} className={index === 3 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}>
              <i className="iconfont">&#xe684;</i> <span>Photography</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 4)} className={index === 4 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
            <div className={styles.gutterBox}>
            <i className="iconfont">&#xe632;</i> <span>Lessons</span>
            </div>
          </Col>
          <Col onClick={this.activeIndex.bind(this, 5)} className={index === 5 ? `${styles.gutterRow} ${styles.active}` : `${styles.gutterRow}`} span={4}>
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
