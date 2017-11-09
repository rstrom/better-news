import { connect } from "react-redux";
import Item from "../components/Item";

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items[ownProps.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: id => {
      dispatch({
        type: "LOAD_ITEM",
        id
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
