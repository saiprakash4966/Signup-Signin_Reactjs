import { TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Signin from '../Signin';
import Signup from '../Signup';
import './Page.css';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { onetimepass } from '../../services/UserService';


const otpRegex = /^([6-9]{1}[0-9]{9})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function Page() {
    const [toggle, setToggle] = useState(false)
    const [otpobj, setOtpObj] = React.useState({ otp: "", password: "" })
    const [regexObj, setregexObj] = React.useState({
        otpBorder: false, otpHelper: "", passwordBorder: false, passwordHelper: "", confimBorder: false, confirmHelper: ""
    })
    const takeOtp = (event) => {
        console.log(event.target.value)
        setOtpObj((prevState) => ({ ...prevState, otp: event.target.value }))
    }

    const takePassword = (event) => {
        setOtpObj((prevState) => ({ ...prevState, password: event.target.value }))

    }
    const takeConfirm = (event) => {
        setOtpObj((prevState) => ({ ...prevState, password: event.target.value }))

    }


    const listenToSignIn = () => {
        setToggle(false)
    }


    const listenToSignUp = () => {
        setToggle(true)
    }
    const navigate = useNavigate()
    const newpage = () => {
        let otpText = otpRegex.test(otpobj.otp)
        let passwordText = passwordRegex.test(otpobj.password)
        let confirmText = passwordRegex.test(otpobj.password)

        if (otpText === false) {
            setregexObj((prevState) => ({ ...prevState, otpBorder: true, otpHelper: "Enter correct otp" }))
        }
        else if (otpText === true) {
            setregexObj((prevState) => ({ ...prevState, otpBorder: false, otpHelper: "" }))
        }

        if (passwordText === false) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct password" }))
        }
        else if (passwordText === true) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }
        if (confirmText === false) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct password" }))
        }
        else if (confirmText === true) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }

        if (otpText === true && passwordText === true && confirmText === true) {
            onetimepass(otpobj).then((response) => {
                console.log(response.data.id);
                navigate('/homepage')
            })

                .catch((error) => { console.log(error) })
        }


    }
    const resend = () => {

    }
    return (
        <div>

            {
                toggle ? <Signin listenToSigniIn={listenToSignIn} /> : <Signup listenToSignUp={listenToSignUp} />
            }
            <div className='box' >
                <div className='boxone'>

                    <div className='boxall'>

                        <div className='boxotp'>
                            <span className='all' >OTP</span>
                            <TextField size='small' variant="outlined" onChange={takeOtp}
                                error={regexObj.otpBorder} helperText={regexObj.otpHelper}

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />
                            <button onClick={resend} className='resend'>resend otp</button>

                        </div>
                        <div className='boxpassword'>
                            <span className='all' >Password</span>
                            <TextField size='small' variant="outlined" onChange={takePassword}
                                error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                        </div>
                        <div className='confirm'>
                            <span className='all' >Confirm-password</span>
                            <TextField size='small' variant="outlined" onChange={takeConfirm}
                                error={regexObj.confirmBorder} helperText={regexObj.confirmHelper}

                                sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                        </div>



                    </div>
                    {/* <div className='final'>
                        <FormControlLabel control={<Checkbox />} label="Terms & conditions" />
                        <button onClick={newpage}>submit</button>

                    </div> */}
                    <div className='final'>
                        <FormControlLabel control={<Checkbox />} label="Terms & conditions" />
                        <button onClick={newpage}>submit</button>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Page;