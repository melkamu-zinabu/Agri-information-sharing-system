
import './App.css';
import AddNews from './component/Addnewscomp';
import UpdateNews from './component/Updatenewscomp';
import SeasonalInfoList from './component/Viewnewsfeedcomp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* //to work it correctly add in index.js also
      <Router>
      <div>
        <Route exact path="/" component={SeasonalInfoList} />
        <Route path="/update/:id" component={UpdateNews} />
      </div>
    </Router> */}
     
     
  
     <AddNews/>
     <SeasonalInfoList/>
     <UpdateNews/>
    </div>
  );
}

export default App;
