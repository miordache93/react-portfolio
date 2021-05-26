import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import history from '../assets/history.svg';
import Avatar from '@material-ui/core/Avatar';
import profile from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';
import Hidden from '@material-ui/core/Hidden';
import CallToAction from './ui/CallToAction';


const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  },
  missionStatement: {
    fontStyle: 'italic',
    fontSize: '1.5rem',
    fontWeight: 300,
    lineHeight: 1.4,
    maxWidth: '50em'
  },
  avatar: {
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300
    }
  }
}));

function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid item container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: matchesMD ? '1em': '2em' }}>
        <Typography align={matchesMD ? 'center': undefined} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer} style={{ marginTop: '3em' }}>
        <Typography align="center" variant="h4" className={classes.missionStatement}>
          Whether it be person to person, business to consumer, or an individual to their interests,
          technology is meant to bring us closer to what we care about in the best way possible. Arc Development
          will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
        </Typography>
      </Grid>

      <Grid
        item
        style={{ marginTop: '10em', marginBottom: '10em' }}
        justify="space-around"
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        container className={classes.rowContainer} >
        <Grid item>
          <Grid item container direction="column" lg style={{ maxWidth: '35em' }}>
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant="h4" gutterBottom>
                History
            </Typography>
            </Grid>
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph style={{ fontWeidht: 700, fontStyle: 'italic' }}>
                We're the new kid on the block
            </Typography>
              <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
                Founded in 2019, we're ready to get our hands on the world's business problems.
            </Typography>
              <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
                It all started with one question. Why aren't all businesses using available technology?
                There are many different answers to that question economic barriers, social barriers,
                educational barriers, and sometimes institutional barriers.
            </Typography>
              <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
                We aim to be a powerful force in overcoming theste obstacles. Recent developments in software
                engineering and computing power, compunded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been done by hand can now be done
                digitaly and automatically, and completely new methods of interaction are created daily. Taking full
                advantage of these advancements is the name of the game.
            </Typography>
              <Typography align={matchesMD ? 'center' : undefined} variant="body1" paragraph>
                All the change can be a lot to keep up with, and that's where we come in.
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container lg justify="center">
            <img 
              src={history} alt="quill pen sitting on top of book" 
              style={{ maxHeight: matchesMD ? 200 :'22em' }} />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{ marginBottom: '15em' }}
        className={classes.rowContainer}>
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>Team</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Mihai Iordache, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I've started coding 9 years ago.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justify={matchesMD ? 'center' : undefined}>
        <Hidden lgUp>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade, and ever since then
                my passion has solely been set on learning - learning about computers, learning mathemetics and philosophy,
                design, always just learning.
            </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I'm ready to apply everything I've learned, and to help other with the intuition I have developed.
            </Typography>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            alignItems={matchesMD ? 'center' : undefined}
            direction="column"
            style={{marginBottom: matchesMD ? '2.5em': 0}}
            lg>
            <Grid item>
              <img src={yearbook} alt="yearbook page about founder" style={{maxWidth: matchesMD ? 300: undefined}} />
            </Grid>
            <Grid item>
              <Typography variant="caption"> a page from my Sophomore yearbook</Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: '45em', padding: '1.25em' }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade, and ever since then
                my passion has solely been set on learning - learning about computers, learning mathemetics and philosophy,
                design, always just learning.
            </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I'm ready to apply everything I've learned, and to help other with the intuition I have developed.
            </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? 'center' : 'flex-end'}
          >
            <Grid item>
              <img src={puppy} alt="grey spotted puppy" style={{maxWidth: matchesMD ? 300: undefined}} />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dappled dachsund, Sterling
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

export default About
