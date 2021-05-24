import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'
import './login.css';

const Login = () => {
    const history= useHistory();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
   

    const signIn= e=>{
        e.preventDefault()// to stop refresh

        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/');
        })
        .catch(error=>alert(error.message))

    }

    
    const register= e=>{
        e.preventDefault()// to stop refresh
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            
            if (auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
    

    return (
        <div className='login-page'>

        <div className="information-pad">

            <Link to="/">
                <h1 className="logo-lg">
                    SIMPLETONES&trade;
                </h1>
            </Link>

            <form action="">                    
              
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email}
                    onChange={e=>setemail(e.target.value)} required/>
                </div>

                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={e=>setpassword(e.target.value)}/>
                </div>
            </form>

            <div className="buttons-lg1">
                <button type="submit" onClick={signIn}>Sign In</button>
            </div>
            <button>Log in with Google</button>

            <p className="some-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis, similique voluptates accusamus suscipit magni temporibus ipsam asperiores dolorem quas voluptatem voluptas! Laborum nostrum, nemo iste dolor qui repudiandae quos!
               
            </p>

            <p className="t-c">I agree to these terms and conditions <input type="checkbox" name="" id=""/></p>

            <div className="buttons-lg">
                <button type='submit' onClick={register} >Create Account</button>
            </div>
        </div>
    </div>
    )
}

export default Login
