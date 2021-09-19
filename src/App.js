import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Joshim', 'Arifen-shuvo', 'Misha', 'Saymon', 'arif'];

  const cinemas = [
    { nayok: 'koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Mousumi' },
    { nayok: 'Jashim', nayika: 'Sucorita' }
  ]
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {
        cinemas.map(cinema => <cinema nayok="J Bond" nayika="cat w"></cinema>)
      }
      <Arif name={nayoks[0]} nayika="Sabana"></Arif>
      <Arif name={nayoks[1]}></Arif>
      <cinema nayok="J Bond" nayika="cat w"></cinema>
      <Arif name={nayoks[2]}></Arif>
    </div>
  );
}


function Cinema(props) {
  return (
    <div className="person">
      <h2>Name: {props.nayok}</h2>
      <h4>Name: {props.nayika}</h4>
    </div>
  )
}
function Arif(props) {
  return (
    <div className="person">
      <h1>Name:{props.name}</h1>
      <h4>Heroin: {props.nayika}</h4>
    </div>
  )
}

export default App;
