import { useState, useEffect } from 'react';
import $ from 'jquery';

function Profilepage() {

    const stats = { "username": localStorage.getItem("email") };

    const [publis, setPublis] = useState([]);

    const getPublis = async () => {
        $.ajax({
            url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/get_publis_of_email.php",
            method: "POST",
            data: { "email": localStorage.getItem("email") },
            success: function (res) {
                setPublis(res);
            }
        });
    };

    useEffect(() => {
        getPublis();
    }, []);

    const toutes_les_publis = [];

    for (let publicc of publis) {
        toutes_les_publis.push(
            <article>
                <h1>{publicc.titre}</h1>
                <a className='pubinfo pubuser' href={"mailto:" + publicc.email}>{publicc.email}</a>
                <span className='pubinfo pubdate'>{publicc.date_m}</span>
                <br></br>
                <p className="contenu" id={"content" + publicc.id}>{publicc.contenu}</p>
                <textarea type="text" className="comment" placeholder='Write a comment'></textarea>
            </article >
        );
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
            </div>
            <div className="profileContent">
                {toutes_les_publis}
            </div>
            {(localStorage.getItem("user") === "false" || localStorage.getItem("user") === null) &&
                <p className='noaccess' onLoad={window.location.href = "./Login"}></p>
            }
        </div>
    )
}

export default Profilepage;