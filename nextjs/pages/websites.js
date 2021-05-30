import React from 'react'
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: '0.5em'
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  },
  paragraphContainer: {
    maxWidth: '30em'
  }
}));

function Websites(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
        className={classes.rowContainer}
        direction="row"
        justify={matchesMD ? 'center' : undefined}>
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
            <IconButton
              component={Link}
              href="/mobileapps"
              onClick={() => props.setSelectedIndex(2)}
              style={{ backgroundColor: 'transparent' }}>
              <img src="/assets/backArrow.svg" alt="Back to the iOS/Android Development Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
              Having a website is a necessity in today's business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you're the best at it.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              onClick={() => props.setSelectedIndex(0)}
              href="/services"
              style={{ backgroundColor: 'transparent' }}>
              <img src="/assets/forwardArrow.svg" alt="Forward to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction={matchesSM ? 'column' : 'row'}
        style={{ marginTop: '15em' }}
        className={classes.rowContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant="h4" gutterBottom>Analytics</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ marginLeft: '-2.75em' }}
                src="/assets/analytics.svg"
                alt="graph with magnifying glass revealing 1's and 0's" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography align={matchesSM ? 'center' : undefined} variant="body1" paragraph>
            Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal
            hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction={matchesSM ? 'column' : 'row'}
        justify="flex-end"
        style={{ marginBottom: '15em', marginTop: '15em' }}
        className={classes.rowContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>E-Commerce</Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/ecommerce.svg"
                alt="world outlined made of dollar signs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: '1em' }} className={classes.paragraphContainer}>
          <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
            It's no secret that people like to shop online.
          </Typography>
          <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
            In 2017 over $2.3 trillion was spent in e-commerce, and it's time for your
            slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction={matchesSM ? 'column' : 'row'}
        className={classes.rowContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant="h4" gutterBottom>Outreach</Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/outreach.svg"
                alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : '1em' }} className={classes.paragraphContainer}>
          <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
            Draw people in with a dazzling website. Showing off your products online is a great way to help customers
            decide what's right for them before visiting in person.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems="center"
        direction={matchesSM ? 'column' : 'row'}
        justify="flex-end"
        style={{ marginBottom: '15em', marginTop: '15em' }}
        className={classes.rowContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Search Engine <br /> Optimization
                </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/seo.svg"
                alt="website standing on winner's podium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : '1em' }} className={classes.paragraphContainer}>
          <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
            If you're like us, probably never.
          </Typography>
          <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
            Customers don't go there either, so we make sure your website is designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}

export default Websites
