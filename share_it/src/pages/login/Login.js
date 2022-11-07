import './login.css'

export default function Login() {
    return (
        <div className="loginPage">
            <h1>Share it</h1>
            <h2>Welcome</h2>
            <div className="container">
                <h3>Login</h3>
                <br/>
                <label>User Id</label> 
                <br/>
                <input type="text" name="name" id="name"/>
                <br/>
                <label>Password</label>
                <br/>
                <input type="text" name="mdp" id="mdp"/>
                <br/>
                <br/>
                <button type="submit" name="login" id="login">Login</button>
                <button type="submit" name="register" id="register">Register</button>
            </div>
        </div>
    );
}