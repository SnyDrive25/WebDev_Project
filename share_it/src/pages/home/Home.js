import Navbar from '../../components/navbar/Navbar';
import Timeline from '../../components/timeline/Timeline';
import Tendances from '../../components/tendances/Tendances';
import './home.css'

export default function Home() {
  return (
    <div className="App">
      <div className="part20 bRight">
        <Navbar></Navbar>
      </div>
      <div className="part60">
        <h1 className="title">ShareIt</h1>
        <Timeline></Timeline>
      </div>
      <div className="part20 bLeft">
        <input placeholder='Search...'></input>
        <Tendances></Tendances>
      </div>

    </div>
  );
}