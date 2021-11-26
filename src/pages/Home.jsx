import React from 'react'
import { makeStyles } from '@mui/styles'
import Header from '../Components/Header';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const useStyles = makeStyles({

    title: {
        marginTop: '10px',
    },
    spacing: {
        marginLeft: '10%',
        marginRight: '10%'
    },
    detail: {
        display: "flex",
        marginTop: '5%',
    },
    para: {
        marginLeft: '10px',
    },
    grid: {
        width: "100%",
        display: "flex",
        flexDirection: "column",

    },
    link: {
        fontSize: "20px"

    }

})

function createData(events, dates) {
    return { events, dates };
}

const rows = [
    createData('Notification Release', 'Last week of February 2022'),
    createData('Release of Online Application', '1st week of March 2022'),
    createData('Last date to fill online application', '4th week of April 2022'),
    createData('Correction in exam centre', 'Last week of April 2022'),
    createData('Availability of Admit Card', '1st week of May 2022'),
    createData('NIMCET 2022 Exam', '3rd week of May 2022'),
    createData('Release of Answer key', '4th week of May 2022'),
    createData('Announcement of results', '1st  week of June 2022'),
    createData('Starting of counselling process', '4th week of June 2022'),
];

function Home() {
    const classes = useStyles();
    return (

        <div>
            <Header title="Home" />

            <div className={classes.spacing}>
                <div className={classes.title}>
                    <h1>NIMCET 2022: Application Form, Exam Dates, Pattern, Syllabus</h1>
                </div>

                <div className={classes.detail}>
                    <img src="./img/NIMCET.jpg" alt="Nimcet" height="100px" />
                    <p className={classes.para} >NIMCET 2022 Application Form will be released through online mode only.NIT MCA Common Entrance Test (NIMCET) is a national level entrance exam conducted by the National Institute of Technology (NIT) for admission in there MCA programme.Qualified candidates of this examination will get admission in one of eleven NITs at Agartala, Allahabad, Bhopal, Calicut, Jamshedpur, Kurukshetra, Patna, Raipur, Surathkal, Tiruchirappalli (Trichy), and Warangal.Here through this article, we have mentioned the complete details candidates needs to know about the NIMCET 2022 exam.</p>
                </div>

                <h3>NIMCET 2022 Exam Dates </h3>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Events</TableCell>
                                <TableCell>Dates</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.events}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.events}
                                    </TableCell>
                                    <TableCell >{row.dates}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <h3>NIMCET 2022 Application Form </h3>

                <p>Following are the complete details with some key instruction regarding the NIMCET Application form 2022: </p>
                <ul style={{ listStyleType: "square" }}>
                    <li >The registration process for NIMCET Application form will be regulated through online mode.</li>
                    <li>Candidates will be able to submit the application form from the 1st week of March 2022.</li>
                    <li>The application form will be made available for eligible candidates only, so candidates are advised to check the complete eligibility norms before applying for it.</li>
                    <li>The details filled by candidates in the application form should be correct and authentic as any alteration can cause rejection of application form.</li>
                    <li>The Application form will remain available till the 4th week of April 2022.</li>
                    <li>Candidates must fill the application form before the last date of submission as no candidates will be allowed to submit the application form after it.</li>
                    <li>Candidates should keep the printout of filled application form and fee receipt for future references.</li>
                </ul>
                <h3>Application Fee: </h3>
                <p>NIMCET Application form fee can be submitted through online mode only.Candidates can use Credit Card, Debit Card and Net-Banking Payment gateways for transaction of application fee.</p>

                <p>The Application fee for NIMCET 2022 Application Form will be as follows: </p>


                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell>Application Fee</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell >GEN/OPEN-EWS/OBC</TableCell>
                            <TableCell >&#8377; 2500/-</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell >SC/ST/PwD</TableCell>
                            <TableCell >&#8377; 1250/-</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <h3>NIMCET Eligibility Criteria </h3>
                <p>Following are the complete eligibility norms to apply for NIMCET 2022: </p>

                <ul style={{ listStyleType: "square" }}>
                    <li>Nationality: Candidates must be the Citizen of India.</li>
                    <li>Qualification: Applying candidates must have either B.Sc., B.Sc.(Hons.), B.Tech, B.E., BIT, B.Voc., BBA or BCA degree from any recognized institution.</li>
                    <li>Marks Criteria: Candidates must have obtained at least 60% or 6.5 CGPA (55% or 6.0 CGPA for SC/ ST) in their qualifying examinations.</li>
                    <li>Subjects: Candidates must have mathematics/ statistics  as mandatory subjects in qualifying examination.</li>
                    <li>Appearing: Appearing candidates can also apply for NIMCET but they will have to submit the proof of satisfying the eligibility before counselling.</li>
                    <li>Distance Education: Candidates those have passed their graduation from open university can also apply for this exam.</li>
                </ul>
                <p>Following are the complete section wise NIMCET 2022 question pattern: </p>
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Subjects</TableCell>
                                <TableCell>Total Questions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell >Mathematics</TableCell>
                                <TableCell >50</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Analytic ability and logical reasoning</TableCell>
                                <TableCell >40</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >General English</TableCell>
                                <TableCell >20</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell >Computer awareness</TableCell>
                                <TableCell >10</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <h3>NIMCET 2022 Syllabus </h3>
                <p>Following are the complete subject wise Syllabus <Link to="/syllabus">Download</Link> for NIMCET 2022 Examination: </p>

                {/* when download button is clicked syllabus start downloading  */}
                <div>
                    <h5> MATHEMATICS: </h5>
                    <p>Set Theory, Probability and Statistics, Algebra, Calculus, Coordinate Geometry, Vectors and Trigonometry.</p>

                    <h5>ANALYTICAL ABILITY & LOGICAL REASONING: </h5>
                    <p>The section will be consisting of logic questions from the given passages in the question paper.</p>

                    <h5>COMPUTER AWARENESS: </h5>
                    <p>Computer Basics, Organization of a computer, Central Processing Unit (CPU), structure of instructions in CPU, input/output devices, computer memory, Data Representation, Integers and Fractions, Binary and Hexadecimal Representations, Binary Arithmetic.</p>

                </div>

            </div>

            <Footer />
        </div>

    )
}

export default Home
