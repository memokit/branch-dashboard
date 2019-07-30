import React, { Component } from 'react'
import { Card } from "antd";

export default class StatChart extends Component {
    render() {
        return (
            <div>
                <Card 
                    title="Chart"
                    style={{
                        width: '100%'
                    }}    
                >
                    <p>Card Component</p>
                </Card>
            </div>
        )
    }
}
