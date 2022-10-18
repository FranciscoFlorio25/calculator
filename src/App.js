import './App.css';
import Screen from './Components/Screen'
import Button from './Components/Button';
import ClearButton from './Components/ClearButton';
import CalculatorLogo from './Image/Calculator logo.png';

function App() {

  return (
    <div className='App'>
      <div className='calculator-logo-container'>
        <h1>Calculadora!</h1>
        <img src={CalculatorLogo} className='calculator-logo' alt='Calculator logo' />
      </div>

      <div className='main-container'>
      <Screen/>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <ClearButton>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
