import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import '../css/signup-login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateEmail(email, password)) {
      const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        // API Call
        fetch('http://localhost:8082/getUser', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.status === true) {
                    console.log("Login Failed");
                    history.push("/failure");
                } else {
                    console.log("Login Passed");
                    history.push("/success");
                }
            }).catch((err) => console.log(err))
    }
  }

  const validateEmail = (email, password, fname, lname) => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (password === '' || email === '' || fname === '' || lname === '') {
          alert("Fields r empty Sir !!");
          return false;
      } else if (!emailPattern.test(email)) {
          alert("Email bekar h !!");
          return false;
      } else {
          return true;
      }
  } 

  return (
    <div className="container">
      <div className="main">
        <form onSubmit={handleSubmit}>
          <div className="form-labels">
            <label>Email :</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="Valid Email" />
          </div>
          <div className="form-labels">
            <label>Password :</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="Password" />
          </div>
          <input type="submit" name="submit_id" id="btn_id" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
