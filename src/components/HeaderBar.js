import React, { Component } from 'react'
import { Layout, Menu } from "antd";
const { Header } = Layout;


export default class HeaderBar extends Component {
    render() {
        return (
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{
                        lineHeight:"60px"
                    }}
                >
                    <Menu.Item key="1">Dashboard</Menu.Item>
                </Menu>
            </Header>
        )
    }
}
