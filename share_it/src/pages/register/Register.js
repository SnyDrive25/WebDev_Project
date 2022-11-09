import { useNavigate } from 'react-router-dom';

export default function Register() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/";
        navigate(path);
    }

    return (
        <div className="registerPage">
            <h1>Share it</h1>
            <h2>Welcome</h2>
            <div className="container">
                <form id="postRegister" action="Login">
                    <h3>Register</h3>
                    <br />
                    <label>Mail Adress</label>
                    <br />
                    <input type="text" name="mail" id="mail" placeholder="Mail adress" />
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
                    <button type="submit" name="register" id="register" onClick={routeChange}>Register</button>
                </form>
            </div>
        </div>
    );
}