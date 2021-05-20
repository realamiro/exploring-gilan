import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
import PublicIcon from '@material-ui/icons/Public';
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
  console.log(cards);
  const classes = useStyles();
  return (
    <div className="cards">
      <Grid container spacing={3}>
        {cards.length === 0
          ? "there no card"
          : cards.map((card) => {
              return (
                <Grid item xs={4}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={card.img.path}
                        title={card.img.alt}
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
                          {card.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Grid container>
                        <Grid item xs={12}>
                          <div className="cards-button-wrapper">
                            <Button endIcon={<PublicIcon />} size="big">
                              بازدید
                            </Button>
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
