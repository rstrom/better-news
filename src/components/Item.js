import React from "react";
import Story from "./Story";
import Comment from "./Comment";
import Loading from "./Loading";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.load(this.props.id);
  }

  render() {
    const { item, index } = this.props;
    if (!item) return null;
    switch (item.type) {
      case "story":
        return <Story item={item} index={index} />;
      case "ask":
        return <Story item={item} index={index} />;
      case "job":
        return <Story item={item} index={index} />;
      case "comment":
        return <Comment item={item} />;
      case "LOADING":
        return <Loading />;
      case "ERROR":
        return <div>{item.code}</div>;
      default:
        return null;
    }
  }
}
