import React, { useState } from 'react';
import { AppBar, Divider, Drawer as MUIDrawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import HomeIcon from '@mui/icons-material/Home';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './Footer';
import { AccountCircle } from '@mui/icons-material';
const useStyles = makeStyles({
    drawer: {
        width: '300px',
    }
})

const Drawer = (props) => {
    const [open, setOpen] = useState(false);
    const [matches, setmatches] = useState(useMediaQuery('(min-width:600px)'))

    // Animation slider in drawer

    const handleDrawerOpen = () => {
        setmatches(false)
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setmatches(true)
    };

    const { history } = props;
    const classes = useStyles();
    const itemList = [
        {
            id: 1,
            text: 'Home',
            icon: <HomeIcon />,
            onClick: () => history.push("/")
        },
        {
            id: 2,
            text: 'Ncert',
            icon: <FolderOpenIcon />,
            onClick: () => history.push("/ncert")
        },
        {
            id: 3,
            text: 'RD Sharma',
            icon: <FolderOpenIcon />,
            onClick: () => history.push("/rdsharma")
        },
        {
            id: 4,
            text: 'Question Paper',
            icon: <FolderOpenIcon />,
            onClick: () => history.push("/questionpaper")
        },
        {
            id: 5,
            text: 'Books',
            icon: <FolderOpenIcon />,
            onClick: () => { history.push("/books") }
        }
    ]

    return (
        <>
            
                <AppBar position="fixed">
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                        <IconButton color="inherit" aria-label="menu" onClick={handleDrawerOpen} >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="h4" color="inherit" component="div"  >
                            NIMCET SPACE
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>



                <MUIDrawer open={open} variant="temporary">

                    <IconButton onClick={handleDrawerClose} color="inherit"  >
                        <CloseIcon fontSize="large" />
                    </IconButton>

                    <Divider />
                    <List>
                        {itemList.map((item, index) => {
                            const { id, text, icon, onClick } = item;
                            return (
                                <ListItem button key={id} onClick={() => { onClick(); handleDrawerClose() }} >
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        })}
                    </List>

                </MUIDrawer>
            
        </>
    )
}

export default withRouter(Drawer);
