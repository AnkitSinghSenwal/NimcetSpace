import React from 'react'
import Header from '../Components/Header'
import { makeStyles } from '@mui/styles'
import Footer from '../Components/Footer';

const useStyles = makeStyles({
    container:{
        width:"100%",
    }
})
function RdSharma() {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <Header title="RD sharma" />
            jsdvdvsdv
            <Footer />
        </div>
    )
}

export default RdSharma
