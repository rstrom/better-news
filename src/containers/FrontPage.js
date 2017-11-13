import { connect } from "react-redux";
import FrontPage from "../components/FrontPage";

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: id => {
      dispatch({
        type: "LOAD_TOP"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
