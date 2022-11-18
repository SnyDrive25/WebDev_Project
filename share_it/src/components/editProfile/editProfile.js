function EditProfile() {

    const profile_infos = { "pseudo": "JohnDoe", "email": "john.doe@yahoo.fr" };

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
                    <input value={profile_infos.pseudo}></input>
                    <p>Mail adress</p>
                    <input value={profile_infos.email}></input>
                    <div className="saveProfile"><a href="/Profile">Save my profile</a></div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;