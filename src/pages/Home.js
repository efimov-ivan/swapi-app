import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchShipsReqest } from "../redux/actions";
import Ships from "../components/Ships";
import { Grid, TextField, CircularProgress, Button } from "@material-ui/core";

const Home = props => {
  const [searchValue, setSearchValue] = useState("");
  const { loading, ships, prev, next } = props;

  const changeHandler = e => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      props.fetchShipsReqest();
      if (props.location.search) {
        props.history.push("/");
      }
    }
  };

  const keyDownHandler = (e) => {
    if(e.key === 'Enter' && searchValue !== ''){
      props.fetchShipsReqest({
        search: searchValue
      });
    }
  };

  const submitHandler = () => {
    props.fetchShipsReqest({
      search: searchValue
    });
  };

  const pageHandler = url => {
    const page = url.split("=");
    props.fetchShipsReqest({
      page: page[1]
    });
  };

  useEffect(() => {
    if (props.location.search) {
      let search = props.location.search;
      search = search.split("=");
      setSearchValue(search[1]);
      props.fetchShipsReqest({
        search: search[1]
      });
    } else {
      props.fetchShipsReqest();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.key]);

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item md={10} sm={9}>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            margin="normal"
            variant="filled"
            className="search-field"
            value={searchValue}
            onChange={changeHandler}
            onKeyDown={keyDownHandler}
          />
        </Grid>
        <Grid item md={2} sm={3}>
          <Button
            variant="contained"
            size="large"
            className="search-button"
            onClick={submitHandler}
            disabled={!searchValue}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {loading ? (
        <CircularProgress className="loading"></CircularProgress>
      ) : ships && ships.length > 0 ? (
        <Ships
          ships={ships}
          prev={prev}
          next={next}
          pageHandler={pageHandler}
        ></Ships>
      ) : (
        <div className="ships-list">There is no ships by your criteria.</div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    ships: state.content.results,
    next: state.content.next,
    prev: state.content.previous,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchShipsReqest: params => dispatch(fetchShipsReqest(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
