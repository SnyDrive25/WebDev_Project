import $ from 'jquery';

export default function Register() {

    function validateEmail(email) {
        const res = /^(([^<>(),;:\s@"]+(\.[^<>(),;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(email).toLowerCase());
    }

    function setUser() {
        var email = document.getElementById("email").value;
        var username = document.getElementById('username').value;
        var mdp = document.getElementById('mdp').value;
        var statut = "";
        if (validateEmail(email) === false) {
            alert("Wrong email : Your email is not written correctly, please check it again");
            return false;
        } else if (username.length === 0) {
            alert("No username : Please enter a username");
            return false;
        } else if (mdp.length < 8) {
            alert("Password failed : Your password needs to have at least 8 characters");
            return false;
        }
        else {
            console.log(email);
            console.log(username);
            console.log(mdp);
            $.ajax({
                url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/add_user.php",
                method: "POST",
                data: { "email": email, "username": username, "mdp": mdp, "statut": statut }
            });
            setTimeout(
                function () {
                    window.location.href = "/Login";
                }, 100000
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
            <img src="https://sunilgoulamhous.esilv.olfsoftware.fr/td9/shareit.png" alt="ShareIt" id="logo" className='logogin'></img>
            <h2>Welcome</h2>
            <div className="container">
                <h3>Register</h3>
                <br />
                <input className='regin' type="text" id="email" placeholder="Mail address" />
                <br />
                <input className='regin' type="text" id="username" placeholder="Pseudo" />
                <br />
                <input className='regin' type="password" id="mdp" placeholder="Password" />
                <br />
                <br />
                <button name="login" id="login" onClick={() => goToLogin()}>Login</button>
                <button name="register" id="register" onClick={() => setUser()}>Register</button>
            </div>
        </div>
    );
}