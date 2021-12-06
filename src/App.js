import './App.css';
import signin from './signin';
function App() {
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
          <img className="googleicon" src="https://vcet.co/wp-content/uploads/2018/08/GOOGLE.jpg"></img>
          <h3 className="signin">Sign in</h3>
          <p>continue to google drive</p>
          <fieldset className="username">
            <legend>
              Email or phone
            </legend>
            ​<label for="mail"></label>
            <input type="email" className="email" value=""></input>
          </fieldset>
          <a className="forgotmail" href="https://google.com"><span>Forgot mail?</span></a>
          <fieldset className="password">
            <legend>
              password
            </legend>
            <label for="pass"></label>
            <input type="password" className="pass"></input>
          </fieldset>
          <button className="submit">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
