import Navbar from '../../components/navbar/Navbar';
import Timeline from '../../components/timeline/Timeline';
import Tendances from '../../components/tendances/Tendances';
import Profilepage from '../../components/profile/Profile';
import EditProfile from '../../components/editProfile/editProfile';
import Messages from '../../components/messages/Messages';
import $ from 'jquery';

export default function Home() {

  const showAccordion = () => {
    var content = <Timeline></Timeline>;
    switch (window.location.pathname) {
      case '/Profile':
        content = <Profilepage></Profilepage>;
        break;
      case '/editProfile':
        content = <EditProfile></EditProfile>;
        break;
      case '/Messages':
        content = <Messages></Messages>;
        break;
      default:
        content = <Timeline></Timeline>;
        break;
    }
    return content;
  }

  function closeWrite() {
    document.getElementById('writeDiv').style.display = "none";
  }

  function sendPublication() {
    document.getElementById('writeDiv').style.display = "none";
    var msg = document.getElementById('message').value;
    console.log(msg);
    var user = 1; // CHANGER EN FONCTION DU USER ACTUEL
    $.ajax({
      url: "http://localhost/shareit/add_publication.php",
      method: "POST",
      data: { "message": msg, "id_user": user }
    });
    window.location.reload(true);
  }

  return (
    <div className="App" onLoad={() => showAccordion()}>
      <div className="part20 bRight">
        <Navbar></Navbar>
      </div>
      <div className="part60">
        {showAccordion()}
      </div>
      <div className="part20 bLeft block">
        <input placeholder='Search...'></input>
        <Tendances></Tendances>
        <a href="/Home">Copyright ShareIt App © - 2022</a>
      </div>
      <div id="writeDiv">
        <button className="close" onClick={closeWrite}>X</button>
        <textarea className="publicationInput noanimation" id="message" placeholder="Enter your message here"></textarea>
        <button className="send" onClick={sendPublication}>Send message</button>
      </div>
    </div>
  );
}