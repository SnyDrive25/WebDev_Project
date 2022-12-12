import { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';

function Timeline() {

    // const publi = [
    //     { "id": 1, "title": "Publication 1", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam. Mattis pellentesque id nibh tortor id aliquet. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Purus in massa tempor nec feugiat. Tellus orci ac auctor augue. Morbi non arcu risus quis varius. Dui vivamus arcu felis bibendum. Ut sem nulla pharetra diam sit amet nisl suscipit. Viverra ipsum nunc aliquet bibendum. Facilisi morbi tempus iaculis urna id volutpat. Viverra tellus in hac habitasse platea. Blandit aliquam etiam erat velit scelerisque. Arcu bibendum at varius vel pharetra vel. Tempus urna et pharetra pharetra massa massa ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. In dictum non consectetur a erat nam at. Ultrices mi tempus imperdiet nulla. Ipsum consequat nisl vel pretium lectus quam.\n\nNibh tellus molestie nunc non blandit massa enim. Habitant morbi tristique senectus et netus et malesuada fames ac. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Euismod lacinia at quis risus sed vulputate odio ut enim. Accumsan lacus vel facilisis volutpat. Lacus sed viverra tellus in. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Pharetra vel turpis nunc eget lorem dolor. Nulla facilisi etiam dignissim diam quis enim lobortis. Ullamcorper velit sed ullamcorper morbi tincidunt." },
    //     { "id": 2, "title": "Publication 2", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam. Mattis pellentesque id nibh tortor id aliquet. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Purus in massa tempor nec feugiat. Tellus orci ac auctor augue. Morbi non arcu risus quis varius. Dui vivamus arcu felis bibendum. Ut sem nulla pharetra diam sit amet nisl suscipit. Viverra ipsum nunc aliquet bibendum. Facilisi morbi tempus iaculis urna id volutpat. Viverra tellus in hac habitasse platea. Blandit aliquam etiam erat velit scelerisque. Arcu bibendum at varius vel pharetra vel. Tempus urna et pharetra pharetra massa massa ultricies. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. In dictum non consectetur a erat nam at. Ultrices mi tempus imperdiet nulla. Ipsum consequat nisl vel pretium lectus quam.\n\nNibh tellus molestie nunc non blandit massa enim. Habitant morbi tristique senectus et netus et malesuada fames ac. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Euismod lacinia at quis risus sed vulputate odio ut enim. Accumsan lacus vel facilisis volutpat. Lacus sed viverra tellus in. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Pharetra vel turpis nunc eget lorem dolor. Nulla facilisi etiam dignissim diam quis enim lobortis. Ullamcorper velit sed ullamcorper morbi tincidunt." },
    //     { "id": 3, "title": "Publication 3", "content": "La troisème publication, la voici" },
    //     { "id": 4, "title": "Publication 4", "content": "Encore une publication" },
    //     { "id": 5, "title": "Publication 5", "content": "Toujours une publication" },
    //     { "id": 6, "title": "Publication 6", "content": "La sixième" },
    //     { "id": 7, "title": "Publication 7", "content": "La septième merveilleurse publication" },
    // ];

    const [answer, setAnwser] = useState([]);
    const [all_comments, setAll_comments] = useState({});

    const getAnswer = async () => {
        $.ajax({
            url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/publication.php",
            method: "POST",
            data: { "userid": localStorage.getItem("id_user") },
            success: async function () {
                const res = await axios.get("https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/publication.php");
                setAnwser(res.data);
            }
        });
    };

    useEffect(() => {
        getAnswer();
    }, []);

    function moreContent(contenu, id) {
        document.getElementById('content' + id).textContent = contenu;
    }

    function lessContent(contenu, id) {
        document.getElementById('content' + id).textContent = contenu.slice(0, 100);
    }

    function sendComment(id) {
        var commentaire = document.getElementById("commentaire" + id).value;
        if (commentaire.length > 395) {
            alert("Character limit exceeded : There are no pseudo with more than 400 letters.");
            return false;
        } else if (commentaire.length === 0) {
            return false;
        }
        else {
            var pad = function (num) { return ('00' + num).slice(-2) };
            var date;
            date = new Date();
            date = date.getUTCFullYear() + '-' +
                pad(date.getUTCMonth() + 1) + '-' +
                pad(date.getUTCDate()) + " " +
                pad(date.getUTCHours()) + ":" +
                pad(date.getUTCMinutes()) + ":" +
                pad(date.getUTCSeconds());
            var my_email = localStorage.getItem("email");
            $.ajax({
                url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/add_commentaire.php",
                method: "POST",
                data: { "email": my_email, "content": commentaire, "date": date, "id_pub": id, "id_user": localStorage.getItem("id_user") },
                success: function () {
                    window.location.reload(true);
                }
            });
        }
    }

    const toutes_les_publis = [];

    for (let publicc of answer) {
        $.ajax({
            url: "https://sunilgoulamhous.esilv.olfsoftware.fr/td9/server/commentaires.php",
            method: "POST",
            data: { "id_pub": publicc.id },
            success: function (res) {
                if (all_comments[publicc.id] === undefined && res.length > 0) {
                    setAll_comments({ ...all_comments, [publicc.id]: res[0].content });
                }
            }
        });
        toutes_les_publis.push(
            <article>
                <h1>{publicc.titre}</h1>
                <a className='pubinfo pubuser' href={"mailto:" + publicc.email}>{publicc.email}</a>
                <span className='pubinfo pubdate'>{publicc.date_m}</span>
                <br></br>
                <p className="contenu" id={"content" + publicc.id}>{publicc.contenu.slice(0, 100)}</p>
                <p className="block-link">
                    <button onClick={() => moreContent(publicc.contenu, publicc.id)} className="link">See more</button>
                    <button onClick={() => lessContent(publicc.contenu, publicc.id)} className="link">See less</button>
                </p>
                <p className='sep'></p>
                Comments
                <p className="contenu">
                    {all_comments[publicc.id]}
                </p>
                <div className='commentzone'>
                    <textarea type="text" className="comment noanimation" placeholder='Write a comment' id={"commentaire" + publicc.id}></textarea>
                    <button onClick={() => sendComment(publicc.id)} className="sendcommentaire">Send Comment</button>
                </div>
            </article>
        );
    }

    return (
        <div className="timeline">
            {toutes_les_publis}
            {(localStorage.getItem("user") === "false" || localStorage.getItem("user") === null) &&
                <p className='noaccess' onLoad={window.location.href = "./Login"}></p>
            }
        </div>
    );
}

export default Timeline;