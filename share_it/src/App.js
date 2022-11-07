import './App.css';
import Navbar from './Navbar';
import Tendances from './Tendances';
import FilActus from './FilActus';

function App() {

  var rang = false;

  if (document.cookie == "dark") {
    changeColor();
  }

  function changeColor() {
    rang = !rang;
    if (rang) {
      document.documentElement.style.setProperty('--bleu-light', 'rgb(10, 10, 50)');
      document.documentElement.style.setProperty('--main-light', 'rgb(5, 5, 25)');
      document.documentElement.style.setProperty('--bleu-dark', 'rgb(245, 245, 255)');
      document.documentElement.style.setProperty('--main-dark', 'rgb(254, 254, 255)');
    }
    else {
      document.documentElement.style.setProperty('--bleu-dark', 'rgb(10, 10, 50)');
      document.documentElement.style.setProperty('--main-dark', 'rgb(5, 5, 25)');
      document.documentElement.style.setProperty('--bleu-light', 'rgb(245, 245, 255)');
      document.documentElement.style.setProperty('--main-light', 'rgb(254, 254, 255)');
    }
  }

  return (
    <div className="App">
      <div className="part20 bRight">
        <Navbar></Navbar>
        <button className="mode" onClick={changeColor}>◑</button>
      </div>
      <div className="part60">
        <h1 className="title">ShareIt</h1>
        <FilActus></FilActus>
      </div>
      <div className="part20 bLeft">
        <Tendances></Tendances>
      </div>


    </div>
  );
}

export default App;
