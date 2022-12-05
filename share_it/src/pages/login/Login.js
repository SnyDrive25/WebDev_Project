import React from 'react';
import $ from 'jquery';

export default function Login() {

    const VerifyLogin = async () => {

        var user = document.getElementById("username");
        var mdp = document.getElementById("mdp");
        if (user === '' || mdp === '') {
            alert("Please fill out all fields");
        }
        $.ajax({
            url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/login.php",
            method: "POST",
            data: { "user": user, "mdp": mdp }
        });

        await fetch("https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/login.php")
            .then(function (data) {
                console.log(data);
            });

        setTimeout(
            function () {
                window.location.href = "/Home";
            }, 100000
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
            <img src="https://sunilgoulamhous.esilv.olfsoftware.fr/td9/shareit.png" alt="ShareIt" id="logo" className='logogin'></img>
            <div className="container">
                <h3>Login</h3>
                <br />
                <input className='regin' type="text" id="username" placeholder="Pseudo" />
                <br />
                <input className='regin' type="password" id="mdp" placeholder="Password" />
                <br />
                <br />
                <button name="login" id="login" onClick={() => VerifyLogin()}>Login</button>
                <button id="register" onClick={() => goToRegister()}>Register</button>
            </div>
        </div>
    );
}