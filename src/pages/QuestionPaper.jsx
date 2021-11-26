import React from 'react'
import Header from '../Components/Header'
import { makeStyles } from '@mui/styles'
import Footer from '../Components/Footer';

const useStyles = makeStyles({
    container: {
        width: "100%",
    }
})
function QuestionPaper() {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <Header title="Question Paper" />
            <Footer />
        </div>
    )
}

export default QuestionPaper
