import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchShipsReqest } from "../redux/actions";
import { CircularProgress } from "@material-ui/core";
import ShipCard from '../components/ShipCard'


const Ship = props => {
  
  useEffect(() => {
    props.fetchShipsReqest({
      search: props.match.params.title
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [props.location.key]);

  let ship = [];
  if (props.content.results) {
    ship = props.content.results[0];
  }
  
  return (
    <Fragment>
      {props.loading ? (
        <CircularProgress className="loading"></CircularProgress>
      ) : ship ? (
        <ShipCard ship={ship}></ShipCard>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    content: state.content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchShipsReqest: params => dispatch(fetchShipsReqest(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ship);
