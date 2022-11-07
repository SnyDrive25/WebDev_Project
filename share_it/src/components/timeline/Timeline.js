import './timeline.css';


function Timeline() {

    const publi = [
        { "title": "Publication 1", "content": "Voici la publication n° 1 qui parle de ..." },
        { "title": "Publication 2", "content": "Ceci est la deuxième publication" },
        { "title": "Publication 3", "content": "La troisème publication, la voici" }
    ];
    const toutes_les_publis = [];

    for (let publicc of publi) {
        toutes_les_publis.push(<article><h1>{publicc.title}</h1>{publi.content}</article>);
    }

    return (
        <div class="timeline">
            {toutes_les_publis}
        </div >
    );
}

export default Timeline;