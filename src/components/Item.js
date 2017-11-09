import React from "react";
import styled from "styled-components";
import Story from "./Story";
import Comment from "./Comment";

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
      case "comment":
        return <Comment item={item} />;
      default:
        return null;
    }
  }
}
