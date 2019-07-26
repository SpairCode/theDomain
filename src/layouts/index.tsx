import React from 'react';
import styles from './index.less';
import 'antd/dist/antd.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.layout}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
