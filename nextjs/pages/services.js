import React from 'react'
import Link  from '../src/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonArrow from '../src/ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
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
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  }
}));
function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Grid container direction="column">
     {/* iOS/Android Block */}
     <Grid item style={{marginLeft: matchesSM ? 0: '5em', marginTop: matchesSM ? '1em': '2em'}}>
       <Typography 
          variant="h2" 
          gutterBottom 
          align={matchesSM ? 'center': undefined}>
         Services
       </Typography>
     </Grid>
     <Grid item>
        <Grid 
          justify={matchesSM ? 'center': 'flex-end'} 
          container 
          style={{marginTop: matchesSM ? '1em': '5em'}}
          direction="row" 
          className={classes.serviceContainer}>
            <Grid item style={{textAlign:matchesSM ? 'center': undefined, width: matchesSM ? undefined: '35em' }}>
              <Typography variant="h4">
                iOS/Android App Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone
                app {matchesSM ? null: <br/>} with either mobile platform.
                
              </Typography>
              <Button onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} component={Link} href='/mobileapps' variant="outlined" className={classes.learnButton}>
                <span style={{marginRight: 10}}>Learn more </span> 
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
              </Button>
            </Grid>
            <Grid item style={{marginRight: matchesSM ? 0: '5em'}}>
              <img  width="250em" className={classes.icon} alt="mobile phone icon" src="/assets/mobileIcon.svg" />
            </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid justify={matchesSM ? 'center': undefined} container direction="row" className={classes.serviceContainer}>
            <Grid item style={{marginLeft: matchesSM ? 0: '5em', textAlign:matchesSM ? 'center': undefined }}>
              <Typography variant="h4">
                Custom Software Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from insetigation to {" "}
                <span className={classes.specialText}> celebration. </span>
              </Typography>
              <Button onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} component={Link} href='/custom-software' variant="outlined" className={classes.learnButton}>
                <span style={{marginRight: 10}}>Learn more </span> 
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} alt="custom software icon" src="/assets/customSoftware.svg"/>
            </Grid>
        </Grid>
      </Grid>

      {/* Websites block */}
      <Grid item>
        <Grid 
          style={{marginBottom: '10em'}}
          justify={matchesSM ? 'center': 'flex-end'}
          container 
          direction="row" 
          className={classes.serviceContainer}>
            <Grid item style={{textAlign:matchesSM ? 'center': undefined, width: matchesSM ? undefined: '35em' }}>
              <Typography variant="h4">
                Website Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}  component={Link} href='/websites' variant="outlined" className={classes.learnButton}>
                <span style={{marginRight: 10}}>Learn more </span> 
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
              </Button>
            </Grid>
            <Grid item style={{marginRight: matchesSM ? 0 : '5em' }}>
              <img width="250em" className={classes.icon} alt="website icon" src="/assets/websitesIcon.svg" />
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
