import React, { useState } from 'react'
import c from './SigUp.module.scss'
import logo from "../../Assets/img/texnomart-logo-removebg-preview.png"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import showPwdImg from '../../Assets/img/show__password.svg'
import hidePwdImg from '../../Assets/img/hide__password.svg';
import axios from 'axios'

const SingUp = () => {
    const [userName, createUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const post = { userName: userName,email:email,password:password }
    try {
      const res = await axios.post('http://localhost:4040/upload', post)
      console.log(res)
    } catch (e) {
      alert(e)
    }
  }

    // const formData = new FormData();

    // const submitForm = async (e) => {
    //     e.preventDefault();
    //     const {password}=e.target
    //     formData.append("files", password.files[0]);
    //     console.log(formData)
    //     const res = await axios.post("http://localhost:4040/upload", formData);
    //     console.log(res);
    // }

    return (
        <div className={c.signup__wrapper}>
            <div className={c.signup__logo__wrapper}>
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className={c.signup__form__wrapper}>
                <div className={c.signup__title}>
                    <p>Sign Up for your account</p>
                </div>
                {/* onSubmit={submitForm} */}
                <form onSubmit={onSubmit}  action="" className={c.signup__from}>
                    <input type="email" className={c.signup__form__input__email} name="email" placeholder="type your email" required  onChange={(event) => {
              setEmail(event.target.value)
            }}
            value={email}/>

                    <input type="text" className={c.signup__form__input__email} name="username" placeholder="type your username" required onChange={(event) => {
              createUser(event.target.value)
            }}
            value={userName}/>
                    <div className={c.signup__form__input__password__wrapper}>
                        <input name="password"
                            placeholder="Enter Password"
                            type='password'
                            onChange={(event) => {
                                setPassword(event.target.value)
                              }}
                              value={password}
                        />
                        
                    </div>
                    
                    <button type='submit' className={c.signup__submit__btn}>Sign Up</button>
                    <p className={c.select__signup__form__or}>or</p>
                    <a href="#" className={c.signup__with__google}>
                        <FcGoogle />Sign Up with  Google
                    </a>
                    <a href="#" className={c.signup__with__google}>
                        <FaApple />Sign Up with  Apple
                    </a>
                </form>
            </div>
        </div>
    )
}

export default SingUp