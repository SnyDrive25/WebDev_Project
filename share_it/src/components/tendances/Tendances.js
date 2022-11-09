import "./tendances.css"

function Tendances() {

    const tendances = [
        { "title": "#bitcoin", "content": "The coin you can't play with physically" },
        { "title": "#ethereum", "content": "Les terres et heuum" },
        { "title": "#astonmartin", "content": "La première merveille du monde" }
    ];
    const toutes_les_tendances = [];

    for (let tendance of tendances) {
        toutes_les_tendances.push(<div><h1>{tendance.title}</h1><a href="///">{tendance.content}</a></div>);
    }

    return (
        <div class="tendances">
            <span>Tendances</span>
            {toutes_les_tendances}
        </div >
    );
}

export default Tendances;