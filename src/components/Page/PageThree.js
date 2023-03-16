import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import './PageThree.css';

function PageThree() {
   
    const navigate = useNavigate()
    const signin = ()=>
    {
        alert('Password changed succesfully')
        navigate('/signin')
    }
    return (
        <div>
            Enter Details Again

            <div className='newpass' >
                <div className='newpassone'>

                    <div className='passtwo'>

                        <div className='passthree'>
                            <span className='idone' >New password</span>
                            <TextField size='small' variant="outlined" 

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                        </div>
                        <div className='passfour'>
                            <span className='idtwo' >confirm new password</span>
                            <TextField size='small' variant="outlined" 

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                        </div>
                        <button onClick={signin}  className='sign'>Signin</button>



                    </div>



                </div>
            </div>
        </div>
    );
}

export default PageThree;