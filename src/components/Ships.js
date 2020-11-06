import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import { Chip, Fab } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

const Ships = ({ ships, prev, next, pageHandler }) => {
  const [props, set] = useSpring(() => ({
    from: { opacity: 0, marginTop: -25 },
    to: { opacity: 1, marginTop: 0 }
  }));

  const nextPageHandler = action => {
    set({ opacity: 0, marginTop: 20 });
    setTimeout(() => pageHandler(action), 200);
  };

  return (
    <animated.div style={props} className="ships-list">
      {ships.map((ship, key) => (
        <Fragment key={key}>
          <Link to={`/ship/${ship.name}`}>
            <Chip
              icon={<Icon>flight</Icon>}
              label={ship.name}
              clickable
              color="primary"
              className="chips"
            />
          </Link>
        </Fragment>
      ))}

      <div className="pagination">
        <Fab
          color="primary"
          disabled={!prev}
          onClick={() => {
            nextPageHandler(prev);
          }}
        >
          <Icon>keyboard_arrow_left</Icon>
        </Fab>
        <Fab
          color="primary"
          disabled={!next}
          onClick={() => {
            nextPageHandler(next);
          }}
        >
          <Icon>keyboard_arrow_right</Icon>
        </Fab>
      </div>
    </animated.div>
  );
};

export default Ships;
