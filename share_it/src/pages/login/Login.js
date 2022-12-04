import React from 'react';

export default function Login() {

    function verifyLogin() {
        setTimeout(
            function () {
                window.location.href = "/Home";
            }, 10
        );
    }

    function goToRegister() {
        setTimeout(
            function () {
                window.location.href = "/Register";
            }, 10
        );
    }

    return (
        <div className="loginPage">
            <img src="http://sunilgoulamhous.esilv.olfsoftware.fr/td9/shareit.png" alt="ShareIt" id="logo" className='logogin'></img>
            <div className="container">
                <form action="return: false">
                    <h3>Login</h3>
                    <br />
                    <input className='regin' type="text" name="username" id="username" placeholder="Pseudo" />
                    <br />
                    <input className='regin' type="password" name="mdp" id="mdp" placeholder="Password" />
                    <br />
                    <br />
                    <button name="login" id="login" onClick={() => verifyLogin()}>Login</button>
                    <button id="register" onClick={() => goToRegister()}>Register</button>
                </form>
            </div>
        </div>
    );
}