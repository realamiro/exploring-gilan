import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    paddingTop: 60,
  }
}))

const Header = () => {
  const classes = useStyles();
  return (
    <div className="Header">
      <Grid container justify="center" align="">
        <Grid className={classes.title} item xs={7}>
          <Typography className="title" variant="h3">
            گیلان گردی
          </Typography>
          <Typography className="text" variant="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga enim
            tempora praesentium quidem! Rerum qui cumque, molestiae quo numquam
            placeat labore laudantium fugiat impedit sapiente id neque nulla
            quis ipsa.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
