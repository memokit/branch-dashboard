import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Actions from "./redux/actions";

import HeaderBar from './components/HeaderBar';
import MapBranch from './components/MapBranch';
import StatChart from './components/StatChart';
import { connect } from 'react-redux'

import { Layout, Menu, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.initData();
  }

  render() {
    return (
    
      <div>
        <Layout className="layout">
          <HeaderBar />
          <Content style={{
            padding: '0 50px'
          }}>
            <div
              style={{
                background: '#fff',
                padding: 24,
                minHeight: 280
              }}>
              <Row gutter={16}>
                <Col span={12}><MapBranch /></Col>
                <Col span={12}><StatChart/></Col>
              </Row>
  
            </div>
          </Content>
          <Footer style={{
            textAlign: 'center'
          }}>React Redux Workshop ©2012-2019 Created by Nextflow.in.th</Footer>
        </Layout>,
      </div>
      
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => {
  return {
    initData: () => dispatch(Actions.requestInitData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);