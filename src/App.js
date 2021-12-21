import './App.css';
import Login from './pages/Login';
import {Route,Routes} from "react-router-dom";
import List from './pages/List';

function App() {
  return (
    <Routes>
      <Route path="/lista" element={<List/>}/>
      <Route exact path="/" element={ <Login/> }/>
    </Routes>
  );
}

export default App;
