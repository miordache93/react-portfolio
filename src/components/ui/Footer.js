import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  },
  icon: {
    height: '3em',
    width: '3em',
    [theme.breakpoints.down('xs')]: {
      height: '2em',
      width: '2em'
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-4.5em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6',
      marginTop: '-5em'
    }
  }
}));

function Footer(props) {
  const classes = useStyles();


  return (
    <footer className={classes.footer}>
      <Hidden smDown>
        <Grid
          container
          justify="center"
          className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                item
                className={classes.link}>Home</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/services"
                onClick={() => { props.setValue(1); props.setSelectedIndex(0) }}
                item
                className={classes.link}>
                Services
            </Grid>
              <Grid component={Link} to="/custom-software" onClick={() => { props.setValue(1); props.setSelectedIndex(1) }} item className={classes.link}>Custom Software Development</Grid>
              <Grid component={Link} to="/mobileapps" item onClick={() => { props.setValue(1); props.setSelectedIndex(2) }} className={classes.link}>iOS/Android Development</Grid>
              <Grid component={Link} to="/websites" item onClick={() => { props.setValue(1); props.setSelectedIndex(3) }} className={classes.link}>Website Development</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid component={Link} to="/revolution" onClick={() => props.setValue(2)} item className={classes.link}>
                The Revolution
            </Grid>
              <Grid component={Link} to="/revolution" onClick={() => props.setValue(2)} item className={classes.link}>
                Vision
            </Grid>
              <Grid component={Link} to="/revolution" onClick={() => props.setValue(2)} item className={classes.link}>
                Technology
            </Grid>
              <Grid component={Link} to="/revolution" onClick={() => props.setValue(2)} item className={classes.link}>
                Process
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid component={Link} to="/about" onClick={() => props.setValue(3)} item className={classes.link}>
                About Us
            </Grid>
              <Grid component={Link} to="/about" onClick={() => props.setValue(4)} item className={classes.link}>
                History
            </Grid>
              <Grid component={Link} to="/about" onClick={() => props.setValue(4)} item className={classes.link}>
                Team
            </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid component={Link} to="/contact" onClick={() => props.setValue(5)} item className={classes.link}>
                Contact Us
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        src={footerAdornment}
        alt="black decorative slash"
      />
      <Grid 
        container 
        justify="flex-end" 
        spacing={2} 
        className={classes.socialContainer}>
        <Grid item component={"a"} href="http://facebook.com" rel="noopener noreferrer" target="_blank">
          <img className={classes.icon} alt="facebook logo" src={facebook}></img>
        </Grid>
        <Grid item component={"a"} href="http://twitter.com" rel="noopener noreferrer" target="_blank">
          <img className={classes.icon} alt="twitter logo" src={twitter}></img>
        </Grid>
        <Grid item component={"a"} href="http://instagram.com" rel="noopener noreferrer" target="_blank">
          <img className={classes.icon} alt="instagram logo" src={instagram}></img>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
