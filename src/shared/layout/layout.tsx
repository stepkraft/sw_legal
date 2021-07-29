import React, { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.scss';

type LayoutProps = {
  header?: ReactNode,
  footer?: ReactNode,
  children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ header, footer, children }: LayoutProps) => {
  return (
    <div className={styles.App}>
      {header}
      <div className={styles.container}>
        {children}
      </div>
      {footer}
    </div>
  );
}

export default Layout;
