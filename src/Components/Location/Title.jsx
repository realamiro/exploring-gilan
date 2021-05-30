import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import './Title.css';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    paddingTop: 70,
    paddingBottom: 100,
  },
}));

const Title = ({title, description}) => {
  const classes = useStyles();
  return (
    <div className="title-container">
      <Grid container justify="center" align="">
        <Grid className={classes.title} item xs={7}>
          <Typography className="title" variant="h3">
            {title}
          </Typography>
          <Typography className="text" variant="subtitle">
          {description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Title;
