import React, { Component } from 'react'
import { Card } from "antd";
import Chart from 'react-google-charts';
import { connect } from 'react-redux'


class StatChart extends Component {
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
                        data={this.props.chartData}
                        
                        rootProps={{ 'data-testid': '1' }}
                    />
                </Card>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    chartData: state.branchDataInChart
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(StatChart)
