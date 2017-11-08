import React from "react";

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    return (
      <ul>
        {items &&
          items.map((item, i) => (
            <pre key={i}>{JSON.stringify(item, null, 2)}</pre>
          ))}
      </ul>
    );
  }
}
