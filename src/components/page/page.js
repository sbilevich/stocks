import { Row, Col } from "react-bootstrap";
import React from 'react'

const Page = ({left, right}) => {
    return (
      <Row className="row mb2">
        <Col className="col-md-6">
          {left}
        </Col>
        <Col className="col-md-6">
          {right}
        </Col>
      </Row>
    )
  }
  export default Page