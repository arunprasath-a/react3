import React, { Component } from "react";
import "./mainContent.css";
import { Container, Row, Col } from 'reactstrap';
import DonutChart from 'react-donut-chart';
import { FaWindowClose } from 'react-icons/fa';
//import { ProgressCircle }  from 'react-native-svg-charts'


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
                                test
                            </div>
                        </Col>
                        

                        <Col xs="6" className="rightCol">
                            <div className="leftChartContent">
                                test
                            </div>
                        </Col>

                    </Row>
                </Container>



            </React.Fragment>
        );
    }
}