import { useNavigate } from 'react-router-dom';

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
                    <input type="text" name="name" id="name" placeholder="User Id" />
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