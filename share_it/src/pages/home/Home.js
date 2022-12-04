import Navbar from '../../components/navbar/Navbar';
import Timeline from '../../components/timeline/Timeline';
import Tendances from '../../components/tendances/Tendances';
import Profilepage from '../../components/profile/Profile';
import EditProfile from '../../components/editProfile/editProfile';
import Register from '../register/Register';
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
      case '/Register':
        content = <Register></Register>;
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
    var msg = document.getElementById('message').value;
    var titre = document.getElementById('titre').value;
    if (titre.length > 49) {
      alert("Character limit exceeded : You are not authorized to insert more than 50 words in your title");
      return false;
    } else if (msg.length > 399) {
      alert("Character limit exceeded : You are not authorized to insert more than 400 words in your message.");
      return false;
    }
    else {
      var pad = function (num) { return ('00' + num).slice(-2) };
      var date;
      date = new Date();
      date = date.getUTCFullYear() + '-' +
        pad(date.getUTCMonth() + 1) + '-' +
        pad(date.getUTCDate());
      var id_user = 0; // CHANGER EN FONCTION DU USER ACTUEL
      $.ajax({
        url: "http://localhost/shareit/add_publication.php",
        method: "POST",
        data: { "message": msg, "id_user": id_user, "titre": titre, "date": date }
      });
      document.getElementById('writeDiv').style.display = "none";
      window.location.reload(true);
    }
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
        <input placeholder='Titre de la publication' className='titre_pub' id="titre"></input>
        <textarea className="publicationInput noanimation" id="message" placeholder="Enter your message here"></textarea>
        <button className="send" onClick={() => sendPublication()}>Send message</button>
      </div>
    </div>
  );
}