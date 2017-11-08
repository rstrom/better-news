import { connect } from "react-redux";
import FrontPage from "../components/FrontPage";

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
