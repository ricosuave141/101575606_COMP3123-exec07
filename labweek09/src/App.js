import logo from './logo.svg';
import './App.css';

function Info(props) {
  return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <h3>{props.studentId}</h3>
        <h4>{props.name}</h4>
        <h5>{props.college}</h5>
      </div>
  );
}
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Info
              title="welcome to fullstrack dev"
              subtitle="react js programming week09 lab exercise"
              studentId="101575606"
              name="Aaron Balayo"
              college="George Brown College"
          />
        </header>
      </div>
  );
}
export default App;