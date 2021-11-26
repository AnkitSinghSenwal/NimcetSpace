import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alighItems: "center"
    },
    link: {
        color: "inherit",
        padding: "5px"
    },
    footer: {
        width: "100%",
        marginTop: "40px"
    }

})
function Footer() {

    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <AppBar position="static" >
                <Toolbar variant="regular" className={classes.container} >
                    <Typography variant="h6" color="inherit" component="div">
                        NIMCET SPACE
                    </Typography>
                    <div>Copyright © 2014-2021 NimcetSpace.in . All Rights Reserved.
                        <Link className={classes.link} to="">Privacy Policy</Link> |
                        <Link className={classes.link} to="">Terms of Use</Link>  |
                        <Link className={classes.link} to="">About Us</Link>  |
                        <Link className={classes.link} to="">Contact Us</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer
