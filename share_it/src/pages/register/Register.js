import $ from 'jquery';
import swal from '@sweetalert/with-react'

export default function Register() {

    function validateEmail(email) {
        const res = /^(([^<>(),;:\s@"]+(\.[^<>(),;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
    }

    function setUser() {
        var email = document.getElementById('email').value;
        var username = document.getElementById('username').value;
        var mdp = document.getElementById('mdp').value;
        var statut = "";
        if (validateEmail(email) === false) {
            swal({
                title: "Wrong email",
                text: "Your email is not written correctly, please check it again",
                icon: "error"
            });
            return false;
        } else if (username.length === 0) {
            swal({
                title: "No username",
                text: "Please enter a username",
                icon: "error"
            });
            return false;
        } else if (mdp.length < 8) {
            swal({
                title: "Password failed",
                text: "Your password needs to have at least 8 characters",
                icon: "error"
            });
            return false;
        }
        else {
            console.log(email);
            console.log(username);
            console.log(mdp);
            $.ajax({
                url: "http://localhost/shareit/add_user.php",
                method: "POST",
                data: { "email": email, "username": username, "mdp": mdp, "statut": statut }
            });
            swal({
                title: "Registration succeeded",
                text: "You can now connect yourself",
                icon: "success"
            });
            setTimeout(
                function () {
                    window.location.href = "/Login";
                }, 2000
            );
        }
    }

    function goToLogin() {
        setTimeout(
            function () {
                window.location.href = "/Login";
            }, 10
        );
    }

    return (
        <div className="registerPage">
            <img src="http://sunilgoulamhous.esilv.olfsoftware.fr/td9/shareit.png" alt="ShareIt" id="logo" className='logogin'></img>
            <h2>Welcome</h2>
            <div className="container">
                <form action='return: false'>
                    <h3>Register</h3>
                    <br />
                    <input className='regin' type="text" name="mail" id="email" placeholder="Mail adress" />
                    <br />
                    <input className='regin' type="text" name="name" id="username" placeholder="Pseudo" />
                    <br />
                    <input className='regin' type="password" name="mdp" id="mdp" placeholder="Password" />
                    <br />
                    <br />
                    <button name="login" id="login" onClick={() => goToLogin()}>Login</button>
                    <button name="register" id="register" onClick={() => setUser()}>Register</button>
                </form>
            </div>
        </div>
    );
}