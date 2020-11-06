import React from "react";
import { useSpring, animated } from "react-spring";
import image from "../space.jpg";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const ShipCard = ship => {
  const [animation] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 }
  }));

  return (
    <animated.div style={animation}>
      <Card>
        <CardMedia image={image} className="card-media" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {ship.name}
          </Typography>
          <Typography variant="body2" component="p">
            <b>Model</b> {ship.model} <br />
            <b>Manufacturer</b> {ship.manufacturer} <br />
            <b>Cost in credits</b> {ship.cost_in_credits} <br />
            <b>Starship class</b> {ship.starship_class} <br />
            <b>Passengers</b> {ship.passengers}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/">
            <Button size="small" color="primary" variant="contained">
              Back
            </Button>
          </Link>
        </CardActions>
      </Card>
    </animated.div>
  );
};

export default ShipCard;
