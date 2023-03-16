import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';

function HireDetails() {
    const initialValue = {
        location: 'Select Location',
        industry: 'Select Industry',
        functionalarea: 'Select One',
        title: 'Select Title',
        skills: 'Select Skills'
    }
    const [formValue, setForm] = useState(initialValue);
    const changeValue = async (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }
    const navigate = useNavigate()
    const dashBoard = () => {
        alert('user registered succesfully')
        navigate('/dashboard')
    }

    return (
        <div>
            <h4>Enter hiring details here</h4>
            <div className='job' >
                <div className='jobone'>

                    <div className='jobtwo'>

                        <div className='jobthree'>
                            <span className='joball' >Location</span>
                            {/* <TextField size='small' variant="outlined"

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} /> */}
                            <select name='' id='' value={formValue.location} onChange={changeValue}>

                                <option value="">Select Location</option>
                                <option value="Andhrapradesh">Andhrapradesh</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Hyderabad">Hyderabad</option>
                            </select>

                        </div>
                        <div className='jobfour'>
                            <span className='joball' >Industry</span>
                            {/* <TextField size='small' variant="outlined"

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} /> */}
                            <select name='' id='' value={formValue.industry} onChange={changeValue}>

                                <option value="">Select Industry</option>
                                <option value="IT support">IT support</option>
                                <option value="Non-IT">Non-IT</option>
                                <option value="Software">Software</option>
                                <option value="Hardware">Hardware</option>

                            </select>

                        </div>
                        <div className='jobfive'>
                            <span className='joball' >Functional area</span>
                            {/* <TextField size='small' variant="outlined"

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} /> */}
                            <select name='' id='' value={formValue.functionalarea} onChange={changeValue}>
                                <option value="">Select area</option>
                                <option value="Development">Development</option>
                                <option value="Testing">Testing</option>
                                <option value="QA">QA</option>
                                <option value="Other">Other</option>
                            </select>

                        </div>
                        <div className='jobsix'>
                            <span className='joball' >Title/Designation</span>
                            {/* <TextField size='small' variant="outlined"

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} /> */}
                            <select name='' id='' value={formValue.title} onChange={changeValue}>
                                <option value="">Select Designation</option>
                                <option value=" Software Developer">Software Developer</option>
                                <option value="Tester">Tester</option>
                                <option value="Quality Assurance">Quality Auurance</option>
                                <option value="Production Engineer">Production Engineer</option>
                            </select>

                        </div>
                        <div>
                            <FormControlLabel control={<Checkbox />} label="fresher" />
                            <FormControlLabel control={<Checkbox />} label="experience" />
                            <FormControlLabel control={<Checkbox />} label="both" />

                        </div>


                        <div className='jobseven'>
                            <span className='jobs' >Skills</span>
                            {/* <TextField size='small' variant="outlined"

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} /> */}
                            <select name='' id='' value={formValue.skills} onChange={changeValue}>
                                <option value="">Select Skills</option>
                                <option value=" Java">Java</option>
                                <option value=".Net">.Net</option>
                                <option value="Reactjs">Reactjs</option>
                                <option value="Angularjs">Angularjs</option>
                            </select>

                        </div>
                        <div className='jobeight'>
                            <span className='jobs' >About your hiring plan</span>
                            <TextField size='small' variant="outlined"

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                        </div>
                        <button onClick={dashBoard} className='sub'>submit</button>


                    </div>
                </div>
            </div>        </div>
    );
}

export default HireDetails;