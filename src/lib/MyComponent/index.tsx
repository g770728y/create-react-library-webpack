import * as React from 'react';
import './style.scss';
import styles from './style.module.scss';

export interface Props {
  id: number;
}
const MyComponent: React.FC<Props> = ({ id }) => {
  return (
    <div style={{ margin: 'auto', width: 100 }}>
      <div>收到props: {id}</div>
      <div>验证在storybook中, 全局的scss与模块化scss均生效</div>
      <div>
        以下是普通scss: <div className="common-style" />
      </div>
      <div>
        以下是模块化scss:{' '}
        <div className={styles['module-style']}>{styles['module-style']}</div>
      </div>
    </div>
  );
};

export default MyComponent;
