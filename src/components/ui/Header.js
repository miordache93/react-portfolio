import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.svg';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '1.5em'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1em'
        }
    },
    logo: {
        height: '7em',
        [theme.breakpoints.down('md')]: {
            height: '6em'
        },
        [theme.breakpoints.down('xs')]: {
            height: '5em'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button: {
        borderRadius: '50px',
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
        ...theme.typography.estimate,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
          }
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
        borderRadius: 0
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1,
        }
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: '50px',
        width: '50px'
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        '& .MuiListItemText-root': {
            opacity: 1
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}))

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matched = useMediaQuery(theme.breakpoints.down('md'));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = (e, newValue) => {
        props.setValue(newValue);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const menuOptions = [
        { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
        { name: 'Custom Software', link: '/custom-software', activeIndex: 1, selectedIndex: 1 },
        { name: 'iOS/Android App Development', link: '/mobileapps', activeIndex: 1, selectedIndex: 2 },
        { name: 'Websited Development', link: '/websites', activeIndex: 1, selectedIndex: 3 }
    ];

    const routes = [
        { name: 'Home', link: '/', activeIndex: 0 },
        {
            name: 'Services', link: '/services', activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? true : undefined,
            mouseOver: event => handleClick(event)
        },
        { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
        { name: 'About Us', link: '/about', activeIndex: 3 },
        { name: 'Contact Us', link: '/contact', activeIndex: 4 }
    ];

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    };

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                        if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
                            props.setSelectedIndex(route.selectedIndex);
                        }
                    }
                    break;
                case '/estimate': 
                    props.setValue(5);
                    break;
                default:
                    break;
            }
        });

    }, [props.value, menuOptions, props.selectedIndex, routes, props]);

    const tabs = (
        <React.Fragment>
            <Tabs
                indicatorColor="primary"
                value={props.value}
                onChange={handleChange}
                className={classes.tabContainer}>
                {
                    routes.map((route, index) => (
                        <Tab
                            key={`${route.name}-${index}`}
                            className={classes.tab}
                            component={Link}
                            to={route.link}
                            label={route.name}
                            aria-owns={route.ariaOwns}
                            aria-haspopup={route.ariaPopup}
                            onMouseOver={route.mouseOver}
                        />
                    ))
                }
            </Tabs>
            <Button
                component={Link}
                to="/estimate"
                onClick={() => props.setValue(5)}
                className={classes.button}
                variant="contained"
                color="secondary">
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                classes={{ paper: classes.menu }}
                anchorEl={anchorEl}
                open={openMenu}
                style={{zIndex: 1302 }}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                keepMounted
                elevation={0}>
                {
                    menuOptions.map((option, index) => (
                        <MenuItem
                            key={`${option}${index}`}
                            classes={{ root: classes.menuItem }}
                            component={Link}
                            to={option.link}
                            onClick={(event) => {
                                handleMenuItemClick(event, index);
                                props.setValue(1);
                                handleClose()
                            }}
                            selected={index === props.selectedIndex && props.value === 1}>
                            {option.name}
                        </MenuItem>
                    ))
                }
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                classes={{ paper: classes.drawer }}
                open={openDrawer}
                onClose={() =>
                    setOpenDrawer(false)
                }
                onOpen={() => setOpenDrawer(true)}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}>
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {
                        routes.map((route, index) => (
                            <ListItem
                                key={index}
                                divider
                                button
                                component={Link}
                                to={route.link}
                                selected={props.value === route.activeIndex}
                                classes={{selected: classes.drawerItemSelected}}
                                onClick={() => {
                                    setOpenDrawer(false);
                                    props.setValue(route.activeIndex);
                                }}>
                                <ListItemText 
                                    className={classes.drawerItem}
                                    disableTypography>{route.name}</ListItemText>
                            </ListItem>
                        ))
                    }
                    <ListItem
                        classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
                        divider
                        button
                        to="/estimate"
                        selected={props.value === 5}
                        onClick={() => {
                            setOpenDrawer(false);
                            props.setValue(5);
                        }}
                        component={Link}>
                        <ListItemText
                            className={classes.drawerItem}
                            disableTypography>Free estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                disableRipple
                onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar
                    className={classes.appbar}
                    position="fixed"
                    color="primary">
                    <Toolbar disableGutters>
                        <Button
                            disableRipple
                            onClick={() => props.setValue(0)}
                            className={classes.logoContainer}
                            component={Link} to="/">
                            <img className={classes.logo} src={logo} alt="Business logo" />
                        </Button>
                        {/* If screen is below or equal to md don't render tabs */}
                        {matched ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

export default Header
