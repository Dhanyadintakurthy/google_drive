import './App.css';
import React,{useState} from "react";
import Axios from 'axios'

function App() {
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  
  async function login () {
    // console.warn(email,password);
    // let item = {email,password};
    // let result = await fetch("http://localhost:9000/users")
    // //,{
    // //   method:'POST',
    // //   headers:{
    // //     "Content-Type":"application/json",
    // //     "Accept":'application/json'
    // //   },
    // //   body:JSON.stringify(item)
    // // });
    // // result = await result.json();
    // // localStorage.setItem("user-info",JSON.stringify(result));
    // // //history.push("/add");
    // console.log(JSON.stringify(result));
    const newdata = 
  }
  return (
    <div className="page">
      <div className="left">
        <div className="green"></div>
        <img className="driveicon" src="https://1000logos.net/wp-content/uploads/2020/08/Google-Drive-Logo.jpg" alt="google drive"></img>
        <h1>Google drive</h1>
        <div className="blue"></div>
      </div>
      <div className="right">
        <div className="container">
          <img className="googleicon" src="https://vcet.co/wp-content/uploads/2018/08/GOOGLE.jpg" alt="google"></img>
          <h3 className="signin">Sign in</h3>
          <p>continue to google drive</p>
          <fieldset className="username">
            <legend>
              Email or phone
            </legend>
            ​<label></label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} 
            className="email"></input>
          </fieldset>
          <a className="forgotmail" href="https://google.com"><span>Forgot password?</span></a>
          <fieldset className="password">
            <legend>
              password
            </legend>
            <label></label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}
            className="pass"></input>
          </fieldset>
          <button className="submit" onClick={login}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
