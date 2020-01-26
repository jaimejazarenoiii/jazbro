import React from "react"
import { Button } from 'antd'
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
