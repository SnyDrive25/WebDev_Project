function Profilepage() {

    const stats = { "username": "JohnDoe", "followers": 61, "following": 784 };

    return (
        <div class="profilepage">
            <div class="flex bluebg">
                <div class="profile">
                    <img src="http://sunilgoulamhous.esilv.olfsoftware.fr/td9/default_user.png" alt="logo user" />
                </div>

                <div class="profile">
                    <button class="editprofile shadow"><a href="/editProfile">Edit my profile</a></button>
                </div>
            </div>

            <div class="statsProfile">
                <p class="username">{stats.username}</p>
                <p>
                    <a class="followers" href="/">{stats.followers} followers</a>
                    <a class="following" href="/">{stats.following} following</a>
                </p>
            </div>

            <div class="flex navProfile">
                <div class="myshares"><a href="/">My shares</a></div>
                <div class="reshares"><a href="/">ReShares</a></div>
                <div class="liked"><a href="/">Shares liked</a></div>
            </div>
        </div>
    )
}

export default Profilepage;