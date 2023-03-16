import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Signup from '../Signup';
import Signin from '../Signin';
import './PageTwo.css';
import { useNavigate } from 'react-router-dom';

function PageTwo() {
    const [toggleone, setToggleOne] = useState(false)

    const listenToSignIn = () => {
        setToggleOne(true)
    }


    const listenToSignUp = () => {
        setToggleOne(false)
    }
    const navigate = useNavigate()
    const newwindow = () =>
    {
        navigate('/newpage')


    }
   

    return (
        <div>
             
             {
                toggleone ?  <Signup listenToSignUp={listenToSignUp} /> : <Signin listenToSigniIn={listenToSignIn} /> 
            }
            
            <div className='boxfive' >
                <div className='boxsix'>

                    <div className='boxseven'>

                        <div className='boxemail'>
                            <span className='id' >EmailId</span>
                            <TextField size='small' variant="outlined" 

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                        </div>
                        <div className='boxeight'>
                            <span className='id' >otp sent to email</span>
                            <TextField size='small' variant="outlined" 

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                        </div>
                        <button onClick={newwindow}>submit</button>



                    </div>



                </div>
            </div>
        </div>
    );
}

export default PageTwo;