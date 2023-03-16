import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import HireDetails from '../Homepage/HireDetails';
import Homepage from '../Homepage/Homepage';
import JobDetails from '../Homepage/JobDetails';
import Page from '../Page/Page';
import PageThree from '../Page/PageThree';
import PageTwo from '../Page/PageTwo';
import Signin from '../Signin';
import Signup from '../Signup';


function Rout() {
    return (
        <div>
          <Router>
            <Routes>
                <Route exact path='/signin' element= {<Signin/>}/>
                <Route path='/signup' element ={<Signup/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/signuppage' element={<Page/>}/>
                <Route path='/homepage' element={<Homepage/>}/>
                <Route path='/signinpage' element={<PageTwo/>}/>
                <Route path='/newpage' element={<PageThree/>}/>
                <Route path ='/jobdetails' element={<JobDetails/>}/>
                <Route path = '/hiredetails'element={<HireDetails/>}/>
            </Routes>
            </Router>  
        </div>
    );
}

export default Rout;