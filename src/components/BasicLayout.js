import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import Header from './Header';

const { Content, Footer } = Layout;

const BasicLayout = (props) => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: '100vh' }}>
        {props.children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      ©2019 Created by <a href="https://github.com/viktoria11">viktoria11</a>
    </Footer>
  </Layout>
);

export default BasicLayout;
