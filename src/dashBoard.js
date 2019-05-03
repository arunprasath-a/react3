import React, { Component } from 'react';
import "./dashBoard.css";
import { Container, Row, Col } from 'reactstrap';
import { FaCheckSquare } from "react-icons/fa";
import { FaGripLinesVertical } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import DonutChart from 'react-donut-chart';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Chart from 'react-google-charts';
import { Spinner } from 'reactstrap';
import { FaWindowClose } from "react-icons/fa";





class DashBoardContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleString(),

        }


    }

    mouseEnter() {

    }

    mouseLeave() {

    }

    test() {
        alert();

    };

    removecontainer() {
        alert();
    }

    render() {
        return (

            <React.Fragment>

                <Container className="dashBoardContainer col-12">
                    <Row>
                        <Col xs="6" className="left">
                            <div className="leftContent">
                                <p>Dashboard Business Critical Insights</p>
                            </div>
                        </Col>
                        <Col xs="6" className="right">
                            <div className="rightContent rC" >

                                <div className="checkIcon rC">
                                    <FaCheckSquare />
                                </div>

                                <div className="readiness rC">
                                    <p>Report Readiness</p>
                                </div>

                                <div className='lineIcon rC'>
                                    <FaGripLinesVertical />
                                </div>
                                <div className="dateVal rC">
                                    Last Updated On {this.state.date}
                                </div>
                                <div className='lineIcon rC'>
                                    <FaGripLinesVertical />
                                </div>
                                <div className="circleIcon rC">
                                    <FaQuestionCircle />
                                </div>
                                <div className="plusIcon rC">
                                    <FaPlusSquare onClick={this.test} />
                                </div>
                            </div>

                        </Col>

                    </Row>
                    <div>
                        <hr className="horizonLine"></hr>
                    </div>
                    <Row>
                        <div className="test">
                            <Col xs="12" className="tabsMainDiv">
                                <div className="dashTabsDiv">

                                    <Tabs>
                                        <TabList>
                                            <Tab>Data Readiness</Tab>
                                            <Tab>Summary</Tab>
                                            <Tab>Network Element Summary</Tab>
                                            <Tab>Hardware</Tab>
                                        </TabList>
                                        <TabPanel>


                                            <Container className="chartContainerDiv col-12">
                                                <div className="containerWrapDiv">
                                                    <Row>
                                                        <Col xs="6" className="leftcolDiv">
                                                            <div className="closeIconDiv">
                                                                <FaWindowClose className="closeIcon" onClick={this.removecontainer} />
                                                            </div>
                                                            <Chart
                                                                width={this.props.properties.width}
                                                                height={this.props.properties.height}
                                                                chartType={this.props.properties.chartType}
                                                                data={[
                                                                    [this.props.properties.dataheaderOne, this.props.properties.dataheaderTwo],
                                                                    [this.props.properties.labelonename, this.props.properties.labeloneval],
                                                                    [this.props.properties.labeltwoname, this.props.properties.labeltwoval],

                                                                ]}
                                                                options={{
                                                                    title: `${this.props.properties.title}`,
                                                                    // Just add this option
                                                                    pieHole: `${this.props.properties.pieHole}`,
                                                                }}
                                                                rootProps={{ 'data-testid': '3' }}
                                                            />
                                                        </Col>
                                                        <Col xs="6" className="rightcolDiv">
                                                            <div className="closeIconDiv">
                                                                <FaWindowClose className="closeIcon" onClick={this.removecontainer} />
                                                            </div>
                                                            <Chart
                                                                width={this.props.properties.width}
                                                                height={this.props.properties.height}
                                                                chartType={this.props.properties.chartType}
                                                                data={[
                                                                    [this.props.properties.dataheaderOne, this.props.properties.dataheaderTwo],
                                                                    [this.props.properties.labelonename, this.props.properties.labeloneval],
                                                                    [this.props.properties.labeltwoname, this.props.properties.labeltwoval],

                                                                ]}
                                                                options={{
                                                                    title: `${this.props.properties.title}`,
                                                                    // Just add this option
                                                                    pieHole: `${this.props.properties.pieHole}`,
                                                                }}
                                                                rootProps={{ 'data-testid': '3' }}
                                                            />
                                                        </Col>
                                                        <Col xs="6" className="rightcolDiv">
                                                            <div className="closeIconDiv">
                                                                <FaWindowClose className="closeIcon" onClick={this.removecontainer} />
                                                            </div>
                                                            <Chart
                                                                width={this.props.properties.width}
                                                                height={this.props.properties.height}
                                                                chartType={this.props.properties.chartType}
                                                                data={[
                                                                    [this.props.properties.dataheaderOne, this.props.properties.dataheaderTwo],
                                                                    [this.props.properties.labelonename, this.props.properties.labeloneval],
                                                                    [this.props.properties.labeltwoname, this.props.properties.labeltwoval],

                                                                ]}
                                                                options={{
                                                                    title: `${this.props.properties.title}`,
                                                                    // Just add this option
                                                                    pieHole: `${this.props.properties.pieHole}`,
                                                                }}
                                                                rootProps={{ 'data-testid': '3' }}
                                                            />
                                                        </Col>

                                                        <Col xs="6" className="rightcolDiv">
                                                            <div className="closeIconDiv">
                                                                <FaWindowClose className="closeIcon" onClick={this.removecontainer} />
                                                            </div>
                                                            <Chart
                                                                width={this.props.properties.width}
                                                                height={this.props.properties.height}
                                                                chartType={this.props.properties.chartType}
                                                                data={[
                                                                    [this.props.properties.dataheaderOne, this.props.properties.dataheaderTwo],
                                                                    [this.props.properties.labelonename, this.props.properties.labeloneval],
                                                                    [this.props.properties.labeltwoname, this.props.properties.labeltwoval],

                                                                ]}
                                                                options={{
                                                                    title: `${this.props.properties.title}`,
                                                                    // Just add this option
                                                                    pieHole: `${this.props.properties.pieHole}`,
                                                                }}
                                                                rootProps={{ 'data-testid': '3' }}
                                                            />
                                                        </Col>
                                                        <Col xs="6" className="rightcolDiv">
                                                            <div className="closeIconDiv">
                                                                <FaWindowClose className="closeIcon" onClick={this.removecontainer} />
                                                            </div>
                                                            <Chart
                                                                width={this.props.properties.width}
                                                                height={this.props.properties.height}
                                                                chartType={this.props.properties.chartType}
                                                                data={[
                                                                    [this.props.properties.dataheaderOne, this.props.properties.dataheaderTwo],
                                                                    [this.props.properties.labelonename, this.props.properties.labeloneval],
                                                                    [this.props.properties.labeltwoname, this.props.properties.labeltwoval],

                                                                ]}
                                                                options={{
                                                                    title: `${this.props.properties.title}`,
                                                                    // Just add this option
                                                                    pieHole: `${this.props.properties.pieHole}`,
                                                                }}
                                                                rootProps={{ 'data-testid': '3' }}
                                                            />
                                                        </Col>
                                                        
                                                    </Row>
                                                </div>


                                            </Container>

                                        </TabPanel>
                                        <TabPanel>
                                            <Row>
                                                <Col xs="12">
                                                    <div>
                                                        <h4>Page under construction Please visit later !</h4>
                                                        <Spinner type="grow" color="primary" />
                                                        <Spinner type="grow" color="secondary" />
                                                        <Spinner type="grow" color="success" />
                                                        <Spinner type="grow" color="danger" />
                                                        <Spinner type="grow" color="warning" />
                                                        <Spinner type="grow" color="info" />
                                                        <Spinner type="grow" color="dark" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPanel>
                                        <TabPanel>
                                            <Row>
                                                <Col xs="12">
                                                    <div>
                                                        <h4>Page under construction Please visit later !</h4>
                                                        <Spinner type="grow" color="primary" />
                                                        <Spinner type="grow" color="secondary" />
                                                        <Spinner type="grow" color="success" />
                                                        <Spinner type="grow" color="danger" />
                                                        <Spinner type="grow" color="warning" />
                                                        <Spinner type="grow" color="info" />
                                                        <Spinner type="grow" color="dark" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPanel>
                                        <TabPanel>
                                            <Row>
                                                <Col xs="12">
                                                    <div>
                                                        <h4>Page under construction Please visit later !</h4>
                                                        <Spinner type="grow" color="primary" />
                                                        <Spinner type="grow" color="secondary" />
                                                        <Spinner type="grow" color="success" />
                                                        <Spinner type="grow" color="danger" />
                                                        <Spinner type="grow" color="warning" />
                                                        <Spinner type="grow" color="info" />
                                                        <Spinner type="grow" color="dark" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </TabPanel>


                                        {/* 
                                <TabPanel>
                                    <h2>Any content 1</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel> */}
                                    </Tabs>
                                </div>
                            </Col>
                        </div>
                    </Row>



                </Container>

            </React.Fragment>


        )
    }
}

export default DashBoardContent;