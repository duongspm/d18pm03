import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
// import HomeUploadImages from './comps/HomeUploadImages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HomeUploadImages></HomeUploadImages> */}
      </header>
      <Portfolio/>
    </div>
  );
}

export default App;
