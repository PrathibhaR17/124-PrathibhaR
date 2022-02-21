import React from "react";
import { Link } from "react-router-dom";


// export default function UserPage(){
//     return(
//         <div>
//             <h1>Home Page</h1>
//             <p>
//                 <Link to="/itasworkshop">itasworkshop</Link> on GitHub.
//             </p>
//         </div>
//     );
// }

export default function UserPage(props) {

    const[email,setemail] = useState("");
    const[pwd,setpwd] = useState("");
   
    const changeHandler =(event) =>{
      var val=event.target.value;
        if (event.target.name=="email")
        {
          setemail(val);
        }
        else if (event.target.name=="pwd"){
            setpwd(val);
        }
   }
   const handleSubmit = () =>{
      if(email==="abcdef@gmail.com" && pwd==="pass12"){
        alert("login successfull")
    }else{
      alert("invalid credentials")
    }
    }
               return (<div className="App auth-wrapper auth-inner">
          
           
              <form onSubmit={handleSubmit} >
                  <h3>Login Up</h3>
                  
                 
                  <div className="form-group">
                      <label>Email address</label>
                      <input name="email" type="email"  onChange={changeHandler} className="form-control" placeholder="Enter email"  />
                  </div>             
  
                  <div className="form-group">
                      <label>Password</label>
                      <input name="pwd" type="password"  onChange={changeHandler} className="form-control" placeholder="Enter password"   />
                  </div>
  
                 
  
                  <button type="submit" className="btn btn-primary btn-block pad ">Login</button>
                  <p className="forgot-password text-right">
                      New to site <a href="hook_signup.js">sign up?</a>
                  </p>
              </form></div>
          );
      
  }