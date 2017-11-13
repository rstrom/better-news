import React from "react";
import Loading from "./Loading";
import FrontPage from "../containers/FrontPage";
import Item from "../containers/Item";

export default ({ id, items }) => {
  const item = items[id];
  if (item && item.title) {
    document.title = item.title;
  }
  switch (true) {
    case id === null:
      return <Loading />;
    case id === "top":
      return <FrontPage />;
    default:
      return <Item id={id} key={id} />;
  }
};
