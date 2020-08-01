import React from "react";
import Style from "./Homepage.module.scss";
import Pic from "../../Assets/Images/food4.jpg";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from "@material-ui/core/InputBase";
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
// import { Normal } from "./Layout";
import { Grid } from "@material-ui/core";
import Typical from "react-typical";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Homepage() {
  const classes = useStyles();
  return (
    <div
      className={Style.maincontainer}
      style={{
        height: "46em",
        backgroundSize: "cover",
        opacity: 6,
        backgroundImage: `url(${Pic})`,
        backgroundRepeat: "no-repeat",
      }}
    >

    
      <div className={Style.advertisement}>
        <Typical
          loop={Infinity}
          wrapper="h2"
          steps={[
            "Welcome to _Food4Foodie_😍",
            3000,
            " Hungry ✋???",
            2000,
            "UnExpected Guests 👪???",
            2000,
            "Cooking Gone Wrong 🍚???",
            2000,
            "Party Night 🎉???",
            2000,
            "Late Night at Office 🏤???",
            2000,
            "Watching Movie 🎥???",
            2000,
            "Need Diet Food 💪 ???",
            2000,
            "Want to Eat Chinese 🍲???",
            2000,
            " Craving something 🌭???",
            2000,
          ]}
        />
      </div>
      <div>
        {/* <Normal> */}
        <Grid
          style={{ height: "30rem" }}
          container
          alignItems="center"
          justify="center"
        >
          <Grid item>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Search"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
        </IconButton>
        </Paper>
            <h1
              className={Style.tag}
            >
              Order from restaurants near you
            </h1>
            {/* <SelectLocations /> */}
            {/* If your location is unavailable please select your nearest city */}
          </Grid>
        </Grid>
        {/* </Normal> */}
      </div>
    
    </div>
    
  );
}

export default Homepage;
