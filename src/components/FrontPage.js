import React from "react";

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    return <ul>{items.map(item => <li>{item.name}</li>)}</ul>;
  }
}
