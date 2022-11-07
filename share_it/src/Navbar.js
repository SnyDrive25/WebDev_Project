import './navbar.css';

function Navbar() {
    return (
        <div class="navbar">
            <p><a href="/" class="underline">Home</a></p>
            <p><a href="/messages" class="underline">Messages</a></p>
            <p><a href="/me" class="underline">Profile</a></p>
            <button class="share">Write</button>
        </div >
    );
}

export default Navbar;