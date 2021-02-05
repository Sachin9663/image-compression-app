import './App.css';
import LandingPage from './components/LandingPage';
import Hiddenpana from './static/images/Hidden-pana.svg'


function App() {
  return (
    <div className="App" style={{backgroundImage: `linear-gradient(rgb(255,255,255), rgba(255,255,255,.68)), url(${Hiddenpana})`}}>
      <h1 className="page-heading">Smart JPEG and PNG compression</h1>
      <h3 className="page-subheading">More than <b>1</b> million images optimized and still counting!</h3>
      <LandingPage />
    </div>
  );
}

export default App;
