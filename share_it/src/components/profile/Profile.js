function Profilepage() {

    const stats = { "username": "JohnDoe", "followers": 61, "following": 784 };
    const history = {
        "shares": [
            { "id": "12", "title": "First share", "content": "Content of my fist share" },
            { "id": "15", "title": "Share number 2", "content": "Here is my second share content" },
        ],
        "reshares": [
            { "id": "9", "title": "The reshare 1", "content": "This is the fist reshare" },
            { "id": "19", "title": "Rehare 2", "content": "Here comes the second reshare I made" }
        ],
        "liked": [
            { "id": "14", "title": "Like 1", "content": "Look at my first like" },
            { "id": "21", "title": "Second Like", "content": "My second like" }
        ],
    }

    const allshares = [];
    const allreshares = [];
    const allliked = [];

    for (let share of history.shares) {
        remplir(share, allshares);
    }

    for (let reshare of history.reshares) {
        remplir(reshare, allreshares);
    }

    for (let like of history.liked) {
        remplir(like, allliked);
    }

    function remplir(input, output) {
        output.push(
            <article>
                <h1>{input.title}</h1>
                <br></br>
                <p className="contenu" id={"content" + input.id}>{input.content}</p>
                <textarea type="text" className="comment" placeholder='Write a comment'></textarea>
            </article>
        )
    }

    const shares =
        <div className="historyProfileDiv">
            {allshares}
        </div>
        ;

    const reshares =
        <div className="historyProfileDiv">
            {allreshares}
        </div>
        ;

    const liked =
        <div className="historyProfileDiv">
            {allliked}
        </div>
        ;

    function setPage(page) {
        localStorage.setItem('page', page);
    }

    const goToPage = () => {
        switch (localStorage.getItem('page')) {
            case 'reshares':
                return reshares;
            case 'liked':
                return liked;
            case 'shares':
                return shares;
            default:
                return shares;
        }
    }

    return (
        <div className="profilepage">
            <div className="flex bluebg">
                <div className="profile">
                    <img src="http://sunilgoulamhous.esilv.olfsoftware.fr/td9/default_user.png" alt="logo user" />
                </div>

                <div className="profile">
                    <button className="editprofile shadow"><a href="/editProfile">Edit my profile</a></button>
                </div>
            </div>

            <div className="statsProfile">
                <p className="username">{stats.username}</p>
                <p>
                    <a className="followers" href="/Home">{stats.followers} followers</a>
                    <a className="following" href="/Home">{stats.following} following</a>
                </p>
            </div>

            <div className="profilebox">
                <div className="flex navProfile">
                    <div><a onClick={() => setPage('shares')} href="/Profile">My shares</a></div>
                    <div><a onClick={() => setPage('reshares')} href="/Profile">ReShares</a></div>
                    <div><a onClick={() => setPage('liked')} href="/Profile">Shares liked</a></div>
                </div>

                <div className="profileContent">
                    {goToPage()}
                </div>
            </div>
        </div>
    )
}

export default Profilepage;