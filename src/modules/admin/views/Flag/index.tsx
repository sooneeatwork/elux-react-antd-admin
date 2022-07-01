import Logo from '@elux-admin-antd/stage/assets/imgs/logo-icon.svg';
import {AdminHomeUrl} from '@elux-admin-antd/stage/utils/const';
import {Link} from '@elux/react-web';
import React from 'react';
import styles from './index.module.less';

const Component: React.FC = () => {
  return (
    <div className={styles.root}>
      <Link to={AdminHomeUrl} action="relaunch" className="wrap">
        <img className="logo" width="40" src={Logo} />
        <div className="title">后台管理系统</div>
        <span className="ver">V1.0.0</span>
      </Link>
    </div>
  );
};

export default React.memo(Component);
