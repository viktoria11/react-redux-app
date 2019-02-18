import React from 'react';
import { Layout, Menu } from 'antd';

import './Header.css';

const { Header } = Layout;

export default () => (
  <Header className="header">
    <div className="logo">
     Todos App
    </div>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['home']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="home">Home</Menu.Item>
    </Menu>
  </Header>
);
