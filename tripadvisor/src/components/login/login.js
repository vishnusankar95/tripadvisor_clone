import React, {useState} from "react"
import styles from './login.module.css'
import axios from "axios"
import { useHistory,Link} from "react-router-dom"
import Tripadvisor_Login_logo from '../../images/navbar/Tripadvisor_Login_logo.svg'


const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/home")
        })
    }

    return (
        <div className={styles.log_container}>
            <div className={styles.log_container_left}>

               <div className={styles.log_container_left_top}>
               <img src={Tripadvisor_Login_logo} alt ="Login"/>
                 
               <div >
                 <h3>Email Address</h3>
                   <input className={styles.log_input_login} type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email"></input>

                 <h3>Password</h3>
                   <input className={styles.log_input_login} type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Password" ></input>
                </div>

                <div className={styles.forget_password}>
                    <h4>Forget password?</h4>
                </div>

                <div className={styles.log_button}>
                  <Link className={styles.log_button} to="/home">
                <button  onClick={login}>Login</button>
                  </Link>
                </div>

            </div>  

            <div className={styles.log_container_left_bottom}>

               <div className={styles.liner}><span>Not a member?</span></div>

               
               <div className={styles.create_account}>
               <p> <span  onClick={() => history.push("/register")}><span className={styles.create_link}>Join</span> to unlock the best of Tripadvisor</span></p>
               </div>

               <div className={styles.terms}>
                <p > By proceeding, you agree to our Terms of Use and confirm <br/> you have read our Privacy and Cookie Statement.</p>              
               </div>

               <div className={styles.policy}>
               <p>This site is protected by reCAPTCHA and the Google Privacy Policy and <br/> Terms of Service apply.</p>
               </div>

            </div>
    
            
        </div>
        </div>
    )
}

export default Login