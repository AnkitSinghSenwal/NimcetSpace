import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container:{
        width:"100%",
    }
})
function Books() {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <Header title="Books" />
            
           <Footer />
        </div>
    )
}

export default Books
