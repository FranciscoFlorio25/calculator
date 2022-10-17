import './App.css';
import Button from './Components/Button';
import CalculatorLogo from './Image/Calculator logo.png';

function App() {

  function buttonMaker(numberIni,numberEnd){
  }
  return (
    <div className='App'>
      <div className='calculator-logo-container'>
        <h1>Calculadora!</h1>
        <img src={CalculatorLogo} className='calculator-logo' alt='Calculator logo' />
      </div>
      <div className='main-container'>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
