import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';

import { Layout, Menu, Row, Col } from 'antd';
import MapBranch from './components/MapBranch';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout className="layout">
        <HeaderBar />
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row gutter={16}>
              <Col span={12}>
                <MapBranch />
              </Col>
              <Col span={12}>Chart</Col>
            </Row>

          </div>
        </Content>
        <Footer>React Redux Workshop ©2012-2019 Created by Nextflow.in.th</Footer>
      </Layout>
    </div>
  );
}

export default App;
