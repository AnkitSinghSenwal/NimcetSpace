import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ncert from './pages/Ncert';
import RdSharma from './pages/RdSharma';
import QuestionPaper from './pages/QuestionPaper';
import Books from './pages/Books';
import Drawer from './Components/Drawer';
import { makeStyles } from '@mui/styles'
import Syllabus from './pages/Syllabus';


const useStyles = makeStyles({
  container: {
    display: 'flex',
  }
})
function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>

      <Drawer />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact from="/ncert" render={props => <Ncert {...props} />} />
        <Route exact from="/rdsharma" render={props => <RdSharma {...props} />} />
        <Route exact from="/questionpaper" render={props => <QuestionPaper {...props} />} />
        <Route exact from="/books" render={props => <Books {...props} />} />
        <Route exact from="/syllabus" render={props => <Syllabus {...props} />} />
      </Switch>
      
    </div>

  );
}

export default App;
