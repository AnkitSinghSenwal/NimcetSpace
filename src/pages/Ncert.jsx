import React from 'react'
import Header from '../Components/Header'
import { makeStyles } from '@mui/styles'
import Footer from '../Components/Footer';
import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { width } from '@mui/system';

const useStyles = makeStyles({
    main: {
        width: "100%"
    },
    chapter: {
        display: "flex",
        flexDirection: "column",
        margin: "40px"
    },
    title: {
        marginTop: '20px',
    },
    spacing: {
        marginLeft: "10%",
        marginRight: "10%"
    },
    button: {
        "&:hover": {
            color: "white"
        },
        textDecoration: "none",
        color: "white",
        width: "100%",
        marginRight:'20px'
    }

})
function Ncert() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Header title="Ncert" />
            <div className={classes.spacing}>
                <h3 className={classes.title}>NCERT for Class 11 Maths – Download Chapter wise PDF</h3>
                {/* <div className={classes.chapter}>
                    <div >Chapter 1 Sets</div>
                    <div>Chapter 2 Relations and Functions</div>
                    <div >Chapter 3 Trigonometric Functions</div>
                    <div >Chapter 4 Principle of Mathematical Induction</div>
                    <div >Chapter 5 Complex Numbers and Quadratic Equations</div>
                    <div>Chapter 6 Linear Inequalities</div>
                    <div>Chapter 7 Permutations and Combinations</div>
                    <div >Chapter 8 Binomial Theorem</div>
                    <div >Chapter 9 Sequences and Series</div>
                    <div >Chapter 10 Straight lines</div>
                    <div >Chapter 11 Conic Sections</div>
                    <div >Chapter 12 Introduction to Three Dimensional Geometry</div>
                    <div >Chapter 13 Limits and Derivatives</div>
                    <div >Chapter 14 Mathematical Reasoning</div>
                    <div >Chapter 15 Statistics</div>
                    <div>Chapter 16 Probability</div> 
                </div>*/}
                <a className={classes.button} target="_blank" href='https://drive.google.com/file/d/1L4AMb6hPolcIWCKZmuuOozPOYINXLeL6/view?usp=sharing'>
                    <Button variant="contained" startIcon={<FileDownloadIcon />} >
                        Download
                    </Button>
                </a>
            </div>
            <div className={classes.spacing}>
                <h3 className={classes.title}>NCERT for Class 12 Maths – Download Chapter wise PDF</h3>

                <a className={classes.button} target="_blank" href='https://drive.google.com/file/d/1fOUW3W5-iFGP7yUZ9nhnYJhHgH7dUoVb/view?usp=sharing'>
                    <Button variant="contained" startIcon={<FileDownloadIcon />} >
                       Part 1
                    </Button>
                </a>
                <a className={classes.button} target="_blank" href='https://drive.google.com/file/d/1Qsy4BhQB2BHyDiwYkN18ZBMNipQnIxIS/view?usp=sharing'>
                    <Button variant="contained" startIcon={<FileDownloadIcon />} >
                       Part 2
                    </Button>
                </a>



            </div>
            <Footer />
        </div>
    )
}

export default Ncert
