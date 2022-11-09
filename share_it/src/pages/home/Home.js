import Navbar from '../../components/navbar/Navbar';
import Timeline from '../../components/timeline/Timeline';
import Tendances from '../../components/tendances/Tendances';
import Profilepage from '../../components/profile/Profile';
import Messages from '../../components/messages/Messages';

export default function Home() {

  const showAccordion = () => {
    var content = <Timeline></Timeline>;
    if (window.location.pathname === '/Profile') {
      content = <Profilepage></Profilepage>;
    }
    if (window.location.pathname === '/Messages') {
      content = <Messages></Messages>;
    }
    return content;
  }

  return (
    <div className="App" onLoad={showAccordion()}>
      <div className="part20 bRight">
        <Navbar></Navbar>
      </div>
      <div className="part60">
        {showAccordion()}
      </div>
      <div className="part20 bLeft block">
        <input placeholder='Search...'></input>
        <Tendances></Tendances>
      </div>
    </div>
  );
}