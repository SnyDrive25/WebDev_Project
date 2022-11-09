function EditProfile() {

    const profile_infos = { "pseudo": "JohnDoe", "email": "john.doe@yahoo.fr" };

    return (
        <div class="profilepage">
            <div class="flex">
                <div class="profile">
                    <img src="http://sunilgoulamhous.esilv.olfsoftware.fr/td9/default_user.png" alt="logo user" />
                </div>

                <div class="profile">
                    <p>Pseudo</p>
                    <input value={profile_infos.pseudo}></input>
                    <p>Mail adress</p>
                    <input value={profile_infos.email}></input>
                    <div class="saveProfile"><a href="/Profile">Save my profile</a></div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;