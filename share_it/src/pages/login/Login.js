import React, {Component} from 'react';
import { Navigate } from 'react-router-dom';
import {PostData} from '../../services/services';
import { useNavigate } from 'react-router-dom';



 











class Login extends Component {

  constructor(){
    super();
   
    this.state = {
     username: '',
     password: '',
     redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  login() {
    if(this.state.username && this.state.password){
      PostData('login',this.state).then((result) => {
       let responseJson = result;
       if(responseJson.userData){         
         sessionStorage.setItem('userData',JSON.stringify(responseJson));
         this.setState({redirectToReferrer: true});
       }
       
      });
    }
    
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }


  render() {
    
    
     if (this.state.redirectToReferrer) {
      return (<Navigate to={'Home'}/>)
    }
   
    if(sessionStorage.getItem('userData')){
      return (<Navigate to={'Home'}/>)
    }

     return (       
            <div className="loginPage">
                <h1>Share it</h1>
                <h2>Welcome</h2>
                <div className="container">
                    <form id="postLogin" action="Home">
                        <h3>Login</h3>
                        <br />
                        <label>User Id</label>
                        <br />
                        <input type="text" name="name" id="name" placeholder="User Id" onChange={this.onChange} />
                        <br />
                        <label>Password</label>
                        <br />
                        <input type="password" name="mdp" id="mdp" placeholder="Password" onChange={this.onChange} />
                        <br />
                        <br />
                        <button type="submit" name="login" id="login" onClick={this.login}>Login</button>
                        <button name="register" id="register" onClick={<Navigate to={'Register'}/>}>Register</button>
                    </form>
                </div>
            </div>
    );
  }
}

export default Login;