import React, { useState } from 'react';
import './Signup.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/UserService';


const firstNameRegex = /^([a-z,A-Z]{2,})$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const locationRegex = /^([a-z,A-Z]{2,})$/;
const mobileNoRegex = /^([6-9]{1}[0-9]{9})$/;

function Signup(props) {
    const [signupObj, setSignupObj] = useState({ firstName: "", email: "", location: "", mobileNo: "" })

    const [regexObj, setregexObj] = React.useState({
        firstNameBorder: false, firstNameHelper: "", emailBorder: false, emailHelper: "", locationBorder: false, locationHelper: "", mobileNoBorder: false, mobileNoHelper: ""
    })

    const takeFirstName = (event) => {
        console.log(signupObj)
        setSignupObj((prevstate) => ({ ...prevstate, firstName: event.target.value }))

    }
    const takeEmail = (event) => {
        console.log(signupObj)
        setSignupObj((prevstate) => ({ ...prevstate, email: event.target.value }))

    }
    const takeLocation = (event) => {
        console.log(signupObj)
        setSignupObj((prevstate) => ({ ...prevstate, location: event.target.value }))

    }

    const takeMobile = (event) => {
        console.log(signupObj)
        setSignupObj((prevstate) => ({ ...prevstate, mobileNo: event.target.value }))
    }




    const navigate = useNavigate()
    const openSignin = () => {
        navigate('/signin')

    }


    const verification = () => {
        navigate('/signuppage')
        let firstNameText = firstNameRegex.test(signupObj.firstName)
        let emailText = emailRegex.test(signupObj.email)
        let locationText = locationRegex.test(signupObj.locationName)
        let mobileNoText = mobileNoRegex.test(signupObj.mobileNo)


        if (firstNameText === false) {
            setregexObj((prevState) => ({ ...prevState, firstNameBorder: true, firstNameHelper: "Enter correct name" }))
        }
        else if (firstNameText === true) {
            setregexObj((prevState) => ({ ...prevState, firstNameBorder: false, firstNameHelper: "" }))
        }



        if (emailText === false) {
            setregexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct email" }))
        }
        else if (emailText === true) {
            setregexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        if (locationText === false) {
            setregexObj((prevState) => ({ ...prevState, locationBorder: true, locationHelper: "Enter correct location" }))
        }
        else if (locationText === true) {
            setregexObj((prevState) => ({ ...prevState, locationBorder: false, locationHelper: "" }))
        }

        if (mobileNoText === false) {
            setregexObj((prevState) => ({ ...prevState, mobileNoBorder: true, mobileNoHelper: "Enter correct mobile" }))
        }
        else if (mobileNoText === true) {
            setregexObj((prevState) => ({ ...prevState, mobileNoBorder: false, mobileNoHelper: "" }))
        }


        if (firstNameText === true && locationText === true && emailText === true && mobileNoText === true) {
            signup(signupObj).then((response) => {

                console.log(response.data.id);
                navigate('/signuppage')
            })

                .catch((error) => { console.log(error) })
        }








    }




    return (
        <div className='submit'>


            <div className='main'>
                <div className='register'>
                    <span>Register</span>
                    <button onClick={openSignin}>SignIn</button>


                </div>

                <div className='detail' >

                    <div className='fullname'>
                        <span className='alldetails' >Name</span>
                        <TextField size='small' variant="outlined" onChange={takeFirstName}
                            error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                    </div>
                    <div className='email'>
                        <span className='alldetails' >Email</span>
                        <TextField size='small' variant="outlined" onChange={takeEmail}
                            error={regexObj.emailBorder} helperText={regexObj.emailHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />

                    </div>
                    <div className='password'>
                        <span className='alldetails'>Location</span>
                        <TextField size='small' variant="outlined" onChange={takeLocation}
                            error={regexObj.locationBorder} helperText={regexObj.locationHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />



                    </div>
                    <div className='mobile'>
                        <span className='alldetails'>Mobile No</span>
                        <TextField size='small' variant="outlined" onChange={takeMobile}
                            error={regexObj.mobileNoBorder} helperText={regexObj.mobileNoHelper}

                            sx={{ width: '100%', borderRadius: '2px', height: '22px' }} />




                    </div>

                    <button onClick={verification}>submit</button>

                </div>


            </div>



        </div>

    );
}

export default Signup;