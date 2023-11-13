import React from 'react';
import gif from './20cat.gif';
import './App.css';
import Tabs from "./Components/TabComponent/Tabs";
import CircleButton from "./Components/TaskVisComponents/accounticon"; 
import TaskView from './Components/Pages/TasksViewPage';
import Dashboard from "./Components/Pages/DashboardPage";
import Navbar from './Components/NavBar/';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './Components/Pages/';
import About from './Components/Pages/about';
import Blogs from './Components/Pages/blogs';
import SignUp from './Components/Pages/signup';
import Contact from './Components/Pages/contact';
import Google from "./Components/Login/LoginAPI";
import { GoogleOAuthProvider } from '@react-oauth/google';



// For the cat  <img src={gif} className="App-logo" alt="gif" />


function App() {



  return (
    <div className="App">
      <header className="App-header"> 
        <GoogleOAuthProvider clientId="599824373793-o5aoosfc8ndecst0jq232s9qjqdhmr83.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>

        <CircleButton />
        <img src={gif} className="App-logo" alt="gif" />
      </header>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>

      <Tabs />
    </div>
  );
}

export default App;



// For the cat  <img src={gif} className="App-logo" alt="gif" />


