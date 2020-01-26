import React from "react"
import { Row, Col } from 'antd'
import PropTypes from "prop-types"
import { blue } from '@ant-design/colors'
class LoginForm extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col span={12} offset={5} style={{ backgroundColor: blue.primary }}>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm
