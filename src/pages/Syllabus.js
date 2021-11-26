import React from 'react'
import Header from '../Components/Header'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    container:{
        width:"100%",
    }
})
function Syllabus() {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <Header title="Syllabus" />
           <h3>NIMCET 2021 Syllabus</h3>
           
        </div>
    )
}

export default Syllabus
