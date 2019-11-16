import React from "react";

// Higher order component
export default function withBorder(Component, customStyle) {
  class WithBorder extends React.Component {
    render() {
      const style = {
        border: this.props.customStyle
          ? this.props.customStyle.border
          : "3px solid teal"
      };
      return <Component style={style} {...this.props} />;
    }
  }

  return WithBorder;
}
