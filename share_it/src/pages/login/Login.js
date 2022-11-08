import './login.css'

export default function Login() {
    return (
        <div className="loginPage">
            <h1>Share it</h1>
            <h2>Welcome</h2>
            <div className="container">
                <form id="postLogin" action="Home" method="">
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
                </form>
                <form id="postRegister" action="Register" method="POST">
                    <button type="submit" name="register" id="register">Register</button>
                </form>
            </div>
        </div>
    );
}