import React, { useState } from "react";
import "./CSS/LoginSignUp.css"

const LoginSignUp = () => {

const[state,setState]=useState("Login");
const[formData, setFormData]= useState({
    username:"",
    password:"",
    email:""
})
const changeHandler =(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
}

const login = async()=>{
console.log("Login Function Executed", formData)
let responseData;
await fetch("http://localhost:4000/login",{
    method: "POST",
    headers:{
        Accept:"application/form-data",
        "Content-Type": "application/json",
    },
    body:JSON.stringify(formData),

}).then((response)=> response.json()).then((data)=>responseData=data)

if(responseData.success){
    localStorage.setItem("auth-token",responseData.token);
    window.location.replace("/");
}
else{
    alert(responseData.errors)
}
}

const signup = async()=>{
    console.log("Signup Function Executed", formData) 
    let responseData;
    await fetch("http://localhost:4000/signup",{
        method: "POST",
        headers:{
            Accept:"application/form-data",
            "Content-Type": "application/json",
        },
        body:JSON.stringify(formData),

    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
        localStorage.setItem("auth-token",responseData.token);
        window.location.replace("/");
    }
    else{
        alert(responseData.errors)
    }
}

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Sign Up"? <input name="username" value={formData.username} onChange={changeHandler} type='text' placeholder="Nume" />:<></> }
                    <input name="email" value={formData.email} onChange={changeHandler} type='email' placeholder="Adresa de email " />
                    <input name="password" value={formData.password} onChange={changeHandler} type='password' placeholder="Alege o parola" />
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}> Continuă</button>
                {state==="Sign Up"?  <p className="loginsignup-login"> Dacă deja ai un cont <span onClick={()=>{setState("Login")}}>Autentifică-te!</span> </p>
                : <p className="loginsignup-login"> Vrei să creezi un cont? <span onClick={()=>{setState("Sign Up")}}>Click aici!</span> </p> }
               
               
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p> Sunt de acord cu termeni și condițiile stabilite.</p>

                </div>
            </div>
        </div>

    )
}

export default LoginSignUp