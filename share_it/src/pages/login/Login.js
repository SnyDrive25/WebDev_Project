import React from 'react';
import $ from 'jquery';

export default function Login() {

    const getUserEmail = async (user) => {
        $.ajax({
            url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/get_email_from_user.php",
            method: "POST",
            data: { "user": user },
            success: function (user) {
                console.log(user[0]);
                localStorage.setItem("email", user[0].email);
                localStorage.setItem("id_user", user[0].id);
            }
        });
    }

    function VerifyLogin() {

        var user = document.getElementById("username").value;
        var mdp = document.getElementById("mdp").value;

        if (user === '' || mdp === '') {
            alert("Please fill out all fields");
        }
        $.ajax({
            url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/login.php",
            method: "POST",
            data: { "user": user, "mdp": mdp },
            success: async function (result) {
                if (result) {
                    getUserEmail(user);
                    localStorage.setItem("user", true);
                }
                else {
                    alert("Wrong user or password");
                }
            }
        });
        setTimeout(function () {
            window.location.href = "./Home";
        }, 2000);
    }

    function goToRegister() {
        setTimeout(
            function () {
                window.location.href = "./Register";
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