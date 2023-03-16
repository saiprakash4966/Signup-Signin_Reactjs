import React from 'react';
import TextField from '@mui/material/TextField';
import { login, loginApi } from '../services/UserService';
import './Signin.css';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin() {

    const [signInObj, setsignInObj] = React.useState({ email: "", password: "" })
    const [regexObj, setregexObj] = React.useState({
        emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: ""
    })
    const takeEmail = (event) => {
        console.log(event.target.value)
        setsignInObj((prevState) => ({ ...prevState, email: event.target.value }))
    }

    const takePassword = (event) => {
        setsignInObj((prevState) => ({ ...prevState, password: event.target.value }))

    }
    const navigate = useNavigate()
    const openemail = () => {

        navigate('/signinpage')

    }


    const openDashboard = () => {


        let emailText = emailRegex.test(signInObj.email)
        let passwordText = passwordRegex.test(signInObj.password)
        if (emailText === false) {
            setregexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct email" }))
        }
        else if (emailText === true) {
            setregexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }

        if (passwordText === false) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct password" }))
        }
        else if (passwordText === true) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }

        if (emailText === true && passwordText === true) {
            login(signInObj).then((response) => {
                console.log(response.data.id);
                navigate('/dashboard')
            })

                .catch((error) => { console.log(error) })
        }


    }
    return (
        <div className='signin'>
            <div className='details'>
                <div className='email'>
                    <span className='alldetails' >Email</span>
                    <TextField size='small' variant="outlined" onChange={takeEmail}
                        error={regexObj.emailBorder} helperText={regexObj.emailHelper}

                        sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                </div>
                <div className='password'>
                    <span className='alldetails' >Password</span>
                    <TextField size='small' variant="outlined" onChange={takePassword}
                        error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}

                        sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                </div>





            </div>

            <div className='forgot'>
                <FormControlLabel control={<Checkbox />} label="Terms & conditions" />
                <button onClick={openDashboard} >submit</button>
                <button onClick={openemail} className='pass'>Forgot Password</button>



            </div>








        </div>
    );
}

export default Signin;