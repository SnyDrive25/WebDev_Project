import { useNavigate } from 'react-router-dom';
import {PostData} from "./service/PostData.js"
class Login extends Component {


    constructor(props){
    super(props); 
    this.state={
        username:"",
        password:""
    }
    this.login = this.login.bind(this); 
    this.onChange = this.onChange.bind(this); 
    }

    login(){
        PostData('login, this.state').then((result)=>{
            let responseJson = result;
            if(responseJson.userData){
                sessionStorage.setItem('userDate', responseJson);

            }else{
                console.log("logini error"); 
            }  

        });
    }

    Onchange(e){
        this.setState({[e.target.name]: e.target.value})
    }
}

export default function Login() {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `Register`;
        navigate(path);
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
                    <input type="password" name="mdp" id="mdp" placeholder="Password" />
                    <br />
                    <br />
                    <button type="submit" name="login" id="login">Login</button>
                    <button name="register" id="register" onClick={routeChange}>Register</button>
                </form>
            </div>
        </div>
    );
}
