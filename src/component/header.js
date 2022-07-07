import React from 'react'
import { Col, Row, Divider, Typography } from 'antd';
const { Title } = Typography;

export default () => {


    return (
        <div>
            <Row id='header'>
                <Col>
                    <Title
                        style={{ color: "#fff", fontWeight: "400" }}
                        level={3}>SIMPLE TO-DO APP</Title>
                </Col>
                <Col>
                    <Title
                        style={{ color: "#fff", fontWeight: "300" }}
                        level={5}>USING LOCAL STORAGE</Title>
                </Col>
            </Row>
            <Divider orientation="center">ALGO-BULLS</Divider>
        </div>
    )
};