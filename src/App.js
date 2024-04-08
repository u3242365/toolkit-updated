import React from 'react';

import Login from './login/pages/Login';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PrivateRoutes from './action/PrivateRoutes';
import {toast,ToastContainer} from 'react-toastify';

import Dashboard from './dashboard/pages/Dashboard';
import Signup from './signup/pages/Signup';
import UserRubric from './dashboard/pages/UserRubric';
import MainInterface from './interface/pages/MainInterface';
import AboutUs from './interface/pages/AboutUs';
import ContactUs from './interface/pages/ContactUs';

const App = () => {
  return (<Router>
    <Routes>
      
      <Route path="/login" exact element={<Login />}/>

      <Route path="/signup" element = {<Signup/>}/>

      <Route path="/" element = {<MainInterface/>}/>
      <Route path="/about" element = {<AboutUs/>}/>
      <Route path="/contact" element = {<ContactUs/>}/>



      <Route element={<PrivateRoutes/>}>
        <Route path="/dashboard" exact element = {<Dashboard/>}/>
        <Route path="/rubrics" exact element = {<UserRubric/>}/>
      </Route>

    </Routes>

  </Router>
  );

};

export default App;
