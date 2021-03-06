import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PublicIcon from "@material-ui/icons/Public";
import { textSlicer } from "../utils.js";
import "./Cards.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Cards = ({ cards }) => {
  const classes = useStyles();
  return (
    <div className="cards">
      <Grid container alignItems="center" justify="center" spacing={3}>
        {cards.length === 0
          ? "there no card"
          : cards.map((card) => {
              return (
                <Grid item>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={card.images[0].img.path}
                        title={card.images[0].img.alt}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {textSlicer(card.description)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Grid container>
                        <Grid item xs={12}>
                          <div className="cards-button-wrapper">
                            // link
                            <Link to={"/exploring-gilan/location/" + card.id}>
                              <Button endIcon={<PublicIcon />} size="big">
                                ????????????
                              </Button>
                            </Link>
                          </div>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
};

export default Cards;
