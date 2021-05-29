import React from 'react'
import Lottie from 'react-lottie';
import  Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import documentsAnimation from '../src/animations/documentsAnimation/data';
import scaleAnimation from '../src/animations/scaleAnimation/data.json';
import automationAnimation from '../src/animations/automationAnimation/data.json';
import uxAnimation from '../src/animations/uxAnimation/data';
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
  itemContainer: {
    maxWidth: '40em'
  }
}));

function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction="column">
      <Grid 
        item 
        container
        style={{marginTop: matchesXS ? '1em': '2em'}}
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
              href="/services"
              onClick={() => props.setSelectedIndex(0)}
              style={{ backgroundColor: 'transparent' }}>
              <img src="/assets/backArrow.svg" alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
              Using regular comercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you need, and
              ultimely controls the way you work.
              Without using any software at all you risk falling behind
              competitors and missing out on huge savings from increased
              efficiency.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned sotfware that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
              Whe create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              onClick={() => props.setSelectedIndex(2)}
              href="/mobileapps"
              style={{ backgroundColor: 'transparent' }}>
              <img src="/assets/forwardArrow.svg" alt="Forward to iOS/Android App Development Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer} 
        style={{ marginTop: '15em', marginBottom: '20em' }}>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4">
              Save Energy
             </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{
            maxWidth: '40em',
            marginTop: matchesSM ? '10em' : 0,
            marginBottom: matchesSM ? '10em' : 0
          }}>
          <Grid item>
            <Typography variant="h4">
              Save Time
             </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch" alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4">
              Save Money
             </Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer} 
        direction={matchesMD ? 'column' : 'row'}
        justify="space-around"
        alignItems={matchesMD ? 'center' : undefined}>
        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
                Billions are spent annually on the purchasing, printing,
                and distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
                By utilizing digital forms and documents you can remove
                these obsolete expenses, accelerate your communication, and help the
                Earth 🌍
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
              options={documentsOptions} isStopped={false}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          className={classes.itemContainer}
          md>
          <Grid item md>
            <Lottie
              style={{ maxHeight: 260, maxWidth: 280 }}
              options={scaleOptions} isStopped={false}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align="right" variant="h4" align={matchesSM ? 'center' : 'right'}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="right" align={matchesSM ? 'center' : 'right'}>
                Whether you're a large brand, just getting started, or taking
                of right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer} 
        style={{ marginTop: '20em', marginBottom: '20em' }}>
        <Grid
          item
          container
          direction="column"
          alignItems="center">
          <Grid item>
            <img src="/assets/roots.svg" alt="tree with roots extending out"
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'} />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, unerlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all of your business to
              develop a holistic plan for the mos effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer} 
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify="space-around"
        style={{ marginBottom: '20em' }}>
        <Grid
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? 'center' : undefined}>
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
                Why waste time when you don't have to?
              </Typography>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography variant="body1" paragraph align={matchesSM ? 'center' : undefined}>
                Increasing efficiency increases profits, leaving your more time to focus
                on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              style={{ maxHeight: 290, maxWidth: 280 }}
              options={automationOptions} isStopped={false}
            />
          </Grid>
        </Grid>

        <Grid
          item
          direction={matchesSM ? 'column' : 'row'}
          container
          className={classes.itemContainer}
          md>
          <Grid item md>
            <Lottie
              style={{ maxHeight: 310, maxWidth: 155 }}
              options={uxOptions} isStopped={false}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align="right" variant="h4" align={matchesSM ? 'center' : 'right'}>
                User Experience
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="right" align={matchesSM ? 'center' : 'right'}>
                A good design that isn't usable isn't a good design.
              </Typography>
              <Typography variant="body1" paragraph align="right" align={matchesSM ? 'center' : 'right'}>
                So why are so many pieces of software complicated, confusing, and frustrating?
              </Typography>
              <Typography variant="body1" paragraph align="right" align={matchesSM ? 'center' : 'right'}>
                By prioritizing users and the real ways they interact with
                technology we're able to develop unique, personable
                experiences that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid item>
        <CallToAction setValue={props.setValue}/>
      </Grid>
    </Grid>
  )
}

export default CustomSoftware
