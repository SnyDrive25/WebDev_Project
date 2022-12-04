
function Navbar() {

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
        </div >
    );
}

export default Navbar;