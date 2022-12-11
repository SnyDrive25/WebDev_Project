
function Navbar() {

    function openWrite() {
        document.getElementById('writeDiv').style.display = "block";
    }

    function disconnect() {
        localStorage.setItem("user", false);
        window.open("./Login", "_self");
    }

    return (
        <div className="navbar">
            <img src="http://sunilgoulamhous.esilv.olfsoftware.fr/td9/shareit.png" alt="ShareIt" id="logo"></img>
            <p><a href="/Home" className="underline">Home</a></p>
            <p><a href="/Messages" className="underline">Messages</a></p>
            <p><a href="/Profile" className="underline">Profile</a></p>
            <button className="big-btn share" onClick={openWrite}>Write</button>
            <button className="big-btn logout" onClick={disconnect}><span>Logout 🔒</span></button>
        </div >
    );
}

export default Navbar;