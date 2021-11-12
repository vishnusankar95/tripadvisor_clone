import React, { useState } from "react"
// import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Tripadvisor_Login_logo from '../../images/navbar/Tripadvisor_Login_logo.svg'
import styles from "./register.module.css"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        firstName: "",
        lastName:"",
        email:"",
        password:"",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { firstName,lastName, email, password } = user
        if( firstName && lastName && email && password ){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (

        <div className={styles.log_container}>
        <div className={styles.log_container_left}>

           <div className={styles.log_container_left_top}>

            <img className={styles.regimg} src={Tripadvisor_Login_logo} alt ="Login"/>

            {console.log("User", user)}

            <h1 className={styles.head_h1}> Join to unlock the best of Tripadvisor </h1>

            <div className={styles.boxes}>

             <div className={styles.inp_boxes}>
            <h3>First Name </h3> 
            <input type="text" name="firstName" value={user.firstName} placeholder="First Name" onChange={ handleChange }></input>
            </div>

            <div className={styles.inp_boxes}>
            <h3>Last Name </h3> 
            <input type="text" name="lastName" value={user.lastName} placeholder="Last Name" onChange={ handleChange }></input> <br/>
            </div>
            
            </div>

            <div className={styles.log_input}>

            <h3>Email address </h3> 
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <h3>Create password </h3> 
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            
            </div>
           
            <div id="regEmailOptIn" class="emailOptIn">
                <input class="fl" type="checkbox" id="regSignUp.emailOptin" checked=""/>
            <label for="regSignUp.emailOptin">Yes, inform me on deals &amp; new features. I can opt out at any time.</label> 
            </div>
           
           <div className={styles.log_button}>
            <button  onClick={register} >Join</button>
            </div>

            <div className={styles.lst_btn} onClick={() => history.push("/login")}>Already a member?</div>
            </div>           
        </div>

        </div>
    )
}

export default Register