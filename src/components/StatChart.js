import React, { Component } from 'react'
import { Card } from "antd";
import Chart from 'react-google-charts';

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
                    <Card title="Chart" style={{
                    width: '100%'
                }}>
                    <Chart
                        width={'100%'}
                        height={'400px'}
                        chartType="Line"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['x', 'dogs'],
                            [0, 0],
                            [1, 10],
                            [2, 23],
                            [3, 17],
                            [4, 18],
                            [5, 9],
                            [6, 11],
                            [7, 27],
                            [8, 33],
                            [9, 40],
                            [10, 32],
                            [11, 35],
                        ]}
                        
                        rootProps={{ 'data-testid': '1' }}
                    />
                </Card>
                </Card>
            </div>
        )
    }
}
