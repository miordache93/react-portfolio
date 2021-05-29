import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from  '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  },
  background: {
    backgroundImage:url("/assets/background.jpg"),
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: url('/assets/mobileBackground.jpg'),
      backgroundAttachment: 'inherit'
    },
    height: '60em',
    backgroundAttachment: 'fixed'
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0
    },
  }
}));

function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid 
      container 
      alignItems="center"
      direction={matchesSM ? 'column': 'row'}
      className={classes.background} 
      justify={matchesSM ? 'center': 'space-between'}>
      <Grid 
        item 
        style={{marginLeft: matchesSM ? 0: '5em', textAlign: matchesSM ? 'center': 'inherit'}}>
         <Grid container direction="column">
           <Grid item>
             <Typography variant="h2">
               Simple Software. <br /> Revolutionary Results.
             </Typography>
             <Typography variant="subtitle2" style={{fontSize: '1.5rem'}}>
               Take advantage for the 21st Century.
             </Typography>
             <Grid container justify={matchesSM ? 'center': undefined} item>
                  <Button onClick={() => props.setValue(2)} component={Link} to='/revolution' variant="outlined" className={classes.learnButton}>
                    <span style={{marginRight: 5}}>Learn more </span> 
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                  </Button>
                </Grid>
           </Grid>
         </Grid>
      </Grid>
      <Grid item>
        <Button onClick={() => props.setValue(5)}  component={Link} to='/estimate' variant="contained" className={classes.estimateButton}>Free Estimate</Button>
      </Grid>
    </Grid>
  )
}

export default CallToAction
