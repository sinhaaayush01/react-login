import React, {useState} from 'react';
import '../css/signup-login.css';
import { useHistory } from "react-router-dom";

function Signup() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  const handleSubmit = (e) => {
    console.log(email, password, fname, lname);
    e.preventDefault();
    if (validateEmail(email, password, fname, lname)) {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      // API Call
      fetch('http://localhost:8082/addUser', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
          name: `${fname} ${lname}`,
          email: email,
          password: password
        })
      }).then((res) => res.json())
      .then((data) => {
        alert('Successfully registered, Please proceed to login');
        history.push('/login');
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
      <form onSubmit={handleSubmit} method="POST" className="form-className">
        <div className="form-labels">
          <label>First Name :</label>
          <input type="text" value={fname} onChange={e => setFname(e.target.value)} id="fname" placeholder="First Name" />
        </div>
        <div className="form-labels">
          <label>Last Name :</label>
          <input type="text" value={lname} onChange={e => setLname(e.target.value)} id="lname" placeholder="Last Name" />
        </div>
        <div className="form-labels">
          <label>Email Address :</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" placeholder="Email Address" />
        </div>
        <div className="form-labels">
          <label>Password :</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
  );
}

export default Signup;
