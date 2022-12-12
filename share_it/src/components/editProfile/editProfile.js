import $ from 'jquery';

function EditProfile() {

    function changeProfile() {
        var pseudo = document.getElementById("pseudo").value;
        var mdp = document.getElementById("mdp").value;
        var statut = document.getElementById("statut").value;
        $.ajax({
            url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/edit_profile.php",
            method: "POST",
            data: { "email": localStorage.getItem("email"), "username": pseudo, "mdp": mdp, "statut": statut },
            success: function () {
                window.location.href = "./Login";
            }
        });

    }

    return (
        <div className="profilepage">
            <div className="flex bluebg">
                <div className="profile">
                    <img src="http://sunilgoulamhous.esilv.olfsoftware.fr/td9/default_user.png" alt="logo user" />
                </div>
                <div className="profile"></div>
            </div>
            <div className="statsProfile">
                <div className="profile blue">
                    <p>Pseudo</p>
                    <input placeholder="Enter your username" id="pseudo"></input>
                    <p>Password</p>
                    <input placeholder="Type your password" type="password" id="mdp"></input>
                    <p>Status</p>
                    <input placeholder="Write your status here" id="statut"></input>
                    <div className="saveProfile" onClick={changeProfile}>Save my profile</div>
                </div>
            </div>
            {(localStorage.getItem("user") === "false" || localStorage.getItem("user") === null) &&
                <p className='noaccess' onLoad={window.location.href = "./Login"}></p>
            }
        </div>
    )
}

export default EditProfile;