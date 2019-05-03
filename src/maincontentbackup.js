import React, { Component } from "react";
import "./mainContent.css";
import { Container, Row, Col } from 'reactstrap';
import DonutChart from 'react-donut-chart';
import { FaWindowClose } from 'react-icons/fa';


export default class MainContent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.sampleDummyData)
    }

    closebtn(){
        alert();
    }

    render() {


        return (
            <React.Fragment>

                <Container className="mainContainerDiv col-12">
                    <Row>
                        <Col xs="6" className="leftCol">
                            <div className="leftChartContent">
                            {/* <FaWindowClose className="leftcloseDiv" onClick="closebtn()"/> */}
                                <DonutChart data={[{
                                    label: `${this.props.sampleDummyData.label}`,
                                    value: `${this.props.sampleDummyData.value}`
                                }]}>
                                </DonutChart>
                            </div>
                        </Col>
                        {/* 
                        <Col xs="6" className="leftCol">
                            <div className="leftChartContent">
                                <DonutChart
                                    data={[{
                                        // label: `${this.props.properties.label}`,
                                        // value: `${this.props.properties.value}`
                                    },
                                ]} />
                            </div>
                        </Col> */}


                        {/* <Col xs="6" className="rightCol">
                            <div className="rightChartContent">
                                <DonutChart
                                    data={[{
                                        label: 'Give you up',
                                        value: 25
                                    },
                                    {
                                        label: '',
                                        value: 75,
                                        isEmpty: true
                                    }]} />
                            </div>
                        </Col> */}

                        <Col xs="6" className="rightCol">
                            <div className="leftChartContent">
                                <DonutChart data={[{
                                    label: `${this.props.sampleDummyData.label}`,
                                    value: `${this.props.sampleDummyData.value}`
                                }]}>
                                </DonutChart>
                                {/* <DonutChart data={this.props.sampleDummyData}></DonutChart> */}
                            </div>
                        </Col>

                    </Row>
                </Container>



            </React.Fragment>
        );
    }
}