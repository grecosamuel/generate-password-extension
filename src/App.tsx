import './App.css';
import Checkbox from './components/Checkbox';
import GenerateButton from './components/GenerateButton';
import PasswordLength from './components/PasswordLength';
import PasswordOutput from './components/PasswordOutput';
import { includeNumbers, includeSymbols, includeLowercase, includeUppercase } from './reducers';
function App() {
  return (
    <div className="App">
      <h3>
        Generate Password Extension
      </h3>

      <div className="boxes">
        <Checkbox boxname='includenumbers' boxlabel='Include numbers' stateName='includeNumbers' action={includeNumbers}/>
        <Checkbox boxname='includesymbols' boxlabel='Include symbols' stateName='includeSymbols' action={includeSymbols}/>

        <Checkbox boxname='includelowercase' boxlabel='Lowercase' stateName='includeLowercase' action={includeLowercase}/>
        <Checkbox boxname='includeuppercase' boxlabel='Uppercase' stateName='includeUppercase' action={includeUppercase}/>
      </div>


      <PasswordLength />

      <PasswordOutput />

      <GenerateButton />

    </div>
  );
}

export default App;
