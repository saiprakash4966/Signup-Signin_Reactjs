import React from 'react';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function Homepage() {
    const navigate=useNavigate()
    const job = () =>
    {
        navigate ('/jobdetails')

    }
    const hire = () =>
    {
        navigate('/hiredetails')

    }
    return (
        <div>
            
           Why are you here
           <FormControlLabel control={<Checkbox />} label="Looking for job"  onClick={job}/>
           <FormControlLabel control={<Checkbox />} label="Looking to hire" onClick={hire}/>

        </div>
    );
}

export default Homepage;