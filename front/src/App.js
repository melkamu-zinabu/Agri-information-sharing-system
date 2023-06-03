
import './App.css';
import AddNews from './component/Addnewscomp';
import UpdateNews from './component/Updatenewscomp';
import Aextusercomp from './component/Aextusercomp';
import SeasonalInfoList from './component/Viewnewsfeedcomp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CropSelectionComponent from './component/chart/Cropselectioncomp';
import Login from './component/login/Login';
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
  <Aextusercomp/>
     
  <Login/>
     <AddNews/>
     <SeasonalInfoList/>
     <UpdateNews/>
     <CropSelectionComponent/>
    </div>
  );
}

export default App;
