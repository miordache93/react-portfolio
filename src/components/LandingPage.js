import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../animations/landinganimation/data';

import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';
import CallToAction from './ui/CallToAction';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth:'30em'
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer: {
    marginTop: '1em'
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em'
    }
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: '1em'
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  },
  revolutionBackground: {
    backgroundImage:`url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '8em 0',
      borderRadius: 0,
      width: '100%'
    }
  },
  infoBackground: {
    backgroundImage:`url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
  }
}));

function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid className={classes.mainContainer}  container direction="column">
      <Grid item> 
      {/* Hero Block */}
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">Bringing West Coast Technology <br/> to the Midwest</Typography>
            <Grid container justify="center" className={classes.buttonContainer}>
                <Grid item>
                  <Button onClick={() => props.setValue(5)} component={Link} to='/estimate' className={classes.estimateButton} variant="contained">Free estimate</Button>
                </Grid>
                <Grid item>
                  <Button onClick={() => props.setValue(2)} component={Link} to='/revolution' className={classes.learnButtonHero} variant="outlined">
                    <span style={{marginRight: 10}}>Learn more </span> 
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                  </Button>
                </Grid>
            </Grid>
          </Grid>
          <Grid sm item  className={classes.animation}>
            <Lottie
              options={defaultOptions}
              height={'100%'}
              width={'100%'}>
            </Lottie>
          </Grid>
        </Grid>
      </Grid>
      {/* Custom Software Block */}
      

      {/* Revolution Block */}
      <Grid item>
        <Grid container  style={{height: '100em', marginTop: '12em'}} alignItems="center" justify="center">

          <Card className={classes.revolutionCard}>
            <CardContent>
                <Grid container direction="column" style={{textAlign: 'center'}}>
                    <Grid item>
                      <Typography variant="h3" gutterBottom>
                          The Revolution
                      </Typography>
                    </Grid>
                    <Grid item style={{textAlign: 'center'}}>
                      <Typography variant="subtitle1">
                          Visionary insight coupled with cutting-edge technology is recipe for revolution
                      </Typography>
                      <Button onClick={() => props.setValue(2)} component={Link} to='/revolution' className={classes.learnButtonHero} variant="outlined">
                          <span style={{marginRight: 10}}>Learn more </span> 
                          <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                      </Button>
                    </Grid>
                </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      {/* Information Block */}
      <Grid item>
        <Grid 
          container 
          direction="row"
          className={classes.infoBackground} 
          style={{height: '80em'}} 
          alignItems="center">
          <Grid item container style={{textAlign: matchesXS ? 'center': 'inherit'}} direction={matchesXS ? 'column': 'row'}>
            <Grid item sm style={{marginLeft: matchesXS ? 0 :matchesSM ? '2em':  '5em'}}>
              <Grid container direction="column" style={{marginBottom: matchesXS ? '10em' : 0}}>
                <Typography variant="h2" style={{color: 'white'}}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">
                  Let's get personal.
                </Typography>
                <Grid item>
                  <Button onClick={() => props.setValue(3)} component={Link} to='/about' variant="outlined" style={{color: 'white', borderColor:'white'}} className={classes.learnButton}>
                    <span style={{marginRight: 10}}>Learn more </span> 
                    <ButtonArrow width={10} height={10} fill="white"></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item style={{marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em', textAlign: matchesXS ? 'center': 'right'}}>
              <Grid container direction="column">
                <Typography variant="h2" style={{color: 'white'}}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello! <span role="img" aria-label="waving hand">????</span>
                </Typography>
                <Grid item>
                  <Button onClick={() => props.setValue(4)} component={Link} to='/contact' variant="outlined" style={{color: 'white', borderColor:'white'}} className={classes.learnButton}>
                    <span style={{marginRight: 10}}>Learn more </span> 
                    <ButtonArrow width={10} height={10} fill="white"></ButtonArrow>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>          
        </Grid>
      </Grid>

      {/* Call To Action Blocj */}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>

  )
}

export default LandingPage
