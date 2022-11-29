import { useState, useEffect } from 'react';
import axios from 'axios';

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

    const getAnswer = async () => {
        const res = await axios.get("http://localhost/shareit/publication.php");
        setAnwser(res.data);
    };

    useEffect(() => {
        getAnswer();
    }, []);

    const toutes_les_publis = [];

    function moreContent(contenu, id) {
        document.getElementById('content' + id).textContent = contenu;
    }

    function lessContent(contenu, id) {
        document.getElementById('content' + id).textContent = contenu.slice(0, 100);
    }

    for (let publicc of answer) {
        toutes_les_publis.push(
            <article>
                <h1>{publicc.contenu}</h1>
                <br></br>
                <p className="contenu" id={"content" + publicc.id}>{publicc.contenu.slice(0, 100)}</p>
                <p className="link">
                    <button onClick={() => moreContent(publicc.contenu, publicc.id)} className="link">[See more]</button>
                    <button onClick={() => lessContent(publicc.contenu, publicc.id)} className="link">[See less]</button>
                </p>
                <textarea type="text" className="comment" placeholder='Write a comment'></textarea>
            </article >
        );
    }

    return (
        <div className="timeline">
            <div className="blurup">
                <h2>Publications</h2>
            </div>
            {toutes_les_publis}
            <div className="blurdown"></div>
        </div >
    );
}

export default Timeline;