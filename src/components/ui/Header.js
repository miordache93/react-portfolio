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

import logo from '../../assets/logo.svg';

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
        marginBottom: '3em'
    },
    logo: {
        height: '6em'
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
        ...theme.typography.estimate
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
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    };

    const menuOptions = [
        { name: 'Services', link: '/services' },
        { name: 'Custom Software', link: '/custom-software' },
        { name: 'Mobile App Development', link: '/mobileapps' },
        { name: 'Websited Development', link: '/websites' }
    ];

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpen(false);
        setSelectedIndex(i);
    };

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3);
        } else if (window.location.pathname === '/contact' && value !== 4) {
            setValue(4);
        } else if (window.location.pathname === '/estimate' && value !== 5) {
            setValue(5);
        }

        switch (window.location.pathname) {
            case '/':
                if (value !== 0) {
                    setValue(0);
                }
                break;
            case '/services':
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(0);
                }
                break;
            case '/custom-software':
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(1);
                }
                break;
            case '/mobileapps':
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;
            case '/websites':
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(3);
                }
                break;
            case '/revolution':
                if (value !== 2) {
                    setValue(2);
                }
                break;
            case '/about':
                if (value !== 3) {
                    setValue(3);
                }
                break;
            case '/contact':
                if (value !== 4) {
                    setValue(4);
                }
                break;
            case '/estimate':
                if (value !== 5) {
                    setValue(5);
                }
                break;
            default:
                break;
        }
    }, [value]);

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar 
                    position="fixed" 
                    color="primary">
                    <Toolbar disableGutters>
                        <Button
                            disableRipple
                            onClick={() => setValue(0)}
                            className={classes.logoContainer}
                            component={Link} to="/">
                            <img className={classes.logo} src={logo} alt="Business logo" />
                        </Button>
                        <Tabs
                            indicatorColor="primary"
                            value={value}
                            onChange={handleChange}
                            className={classes.tabContainer}>
                            <Tab className={classes.tab} component={Link} label="Home" to="/"></Tab>
                            <Tab
                                aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? true : undefined}
                                className={classes.tab}
                                component={Link}
                                onMouseOver={event => handleClick(event)}
                                label="Services"
                                to="/services"></Tab>
                            <Tab 
                                className={classes.tab} 
                                component={Link} 
                                label="The Revolution" 
                                to="/revolution"></Tab>
                            <Tab 
                                className={classes.tab} 
                                component={Link} 
                                label="About Us" 
                                to="/about"></Tab>
                            <Tab 
                                className={classes.tab} 
                                component={Link} 
                                label="Contact Us" 
                                to="/contact"></Tab>
                        </Tabs>
                        <Button 
                            className={classes.button} 
                            variant="contained" 
                            color="secondary">
                            Free Estimate
                        </Button>
                        <Menu
                            id="simple-menu"
                            classes={{ paper: classes.menu }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                            elevation={0}>
                            {
                                menuOptions.map((option, index) => (
                                    <MenuItem
                                        key={option.name}
                                        classes={{ root: classes.menuItem }}
                                        component={Link}
                                        to={option.link}
                                        onClick={(event) => {
                                            handleMenuItemClick(event, index);
                                            setValue(1);
                                            handleClose()
                                        }}
                                        selected={index === selectedIndex && value === 1}>
                                        {option.name}
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

export default Header