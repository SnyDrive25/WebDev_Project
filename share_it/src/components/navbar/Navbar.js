
function Navbar() {

    var rang = false;

    function changeColor() {
        rang = !rang;
        if (rang) {
            document.documentElement.style.setProperty('--bleu-light', 'rgb(10, 10, 50)');
            document.documentElement.style.setProperty('--main-light', 'rgb(5, 5, 25)');
            document.documentElement.style.setProperty('--bleu-dark', 'rgb(245, 245, 255)');
            document.documentElement.style.setProperty('--main-dark', 'rgb(254, 254, 255)');
            document.getElementById('logo').style.filter = "invert(0)";
            rang = true;
        }
        else {
            document.documentElement.style.setProperty('--bleu-dark', 'rgb(10, 10, 50)');
            document.documentElement.style.setProperty('--main-dark', 'rgb(5, 5, 25)');
            document.documentElement.style.setProperty('--bleu-light', 'rgb(245, 245, 255)');
            document.documentElement.style.setProperty('--main-light', 'rgb(254, 254, 255)');
            document.getElementById('logo').style.filter = "invert(1)";
            rang = false;
        }
    }

    function openWrite() {
        document.getElementById('writeDiv').style.display = "block";
    }

    return (
        <div className="navbar">
            <img src="http://sunilgoulamhous.esilv.olfsoftware.fr/td9/shareit.png" alt="ShareIt" id="logo"></img>
            <p><a href="/Home" className="underline">Home</a></p>
            <p><a href="/Messages" className="underline">Messages</a></p>
            <p><a href="/Profile" className="underline">Profile</a></p>
            <button className="big-btn share" onClick={openWrite}>Write</button>
            <button className="big-btn logout"><a href="/Login">Logout 🔒</a></button>
            <button className="mode" onClick={changeColor}>◑</button>
        </div >
    );
}

export default Navbar;