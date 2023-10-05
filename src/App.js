import './App.css';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';  
import AdminPage from "../src/Layouts/AdminPage/AdminPage"
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path="/app/*" element={<AdminPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
