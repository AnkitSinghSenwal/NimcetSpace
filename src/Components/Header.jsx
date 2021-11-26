import React from 'react'
import { Toolbar, Typography, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '100%',
        marginTop: "70px"
    },
    nav: {
        display: "flex",
        justifyContent:"space-between"
    },
    link: {
        color: "inherit",
        margin:"10px"
    }
})
function Header({ title }) {

    const classes = useStyles();
    return (

        <Paper elevation={2} className={classes.container} >
            <Toolbar className={classes.nav}>
                <Typography variant="h6" color="inherit" component="div">
                    {title}
                </Typography>
                <div>
                    <Link className={classes.link} to="">DU</Link>
                    <Link className={classes.link} to="">JNU</Link>
                    <Link className={classes.link} to="">BHU</Link>

                </div>
            </Toolbar>
        </Paper>

    )
}

export default Header
