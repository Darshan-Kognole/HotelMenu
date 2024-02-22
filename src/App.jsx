import './App.css';
import LandingPage from './Component/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserLogin from './Component/UserLogin';
import AdminLogin from './Component/AdminLogin';
import AdminSignUp from './Component/AdminSignUp';
import UserSignUp from './Component/UserSignUp'
import AdminHomepage from './Component/AdminHomePage'
import ErrorPage1 from './Component/ErrorPage1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/*' element={<ErrorPage1/>} />
          <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/user" element={<UserLogin/>} />
          <Route path="/adminsignup" element={<AdminSignUp/>}/>
          <Route path="/usersignup" element={<UserSignUp/>}/> 
          <Route path="/adminhomepage/*" element={<AdminHomepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
