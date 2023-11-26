import './App.css';
import Checkbox from './components/Checkbox';
import GenerateButton from './components/GenerateButton';
import PasswordLength from './components/PasswordLength';
import PasswordOutput from './components/PasswordOutput';

function App() {
  return (
    <div className="App">
      <h3>
        Generate Password Extension
      </h3>

      <div className="boxes">
        <Checkbox boxname='includenumbers' boxlabel='Include numbers'/>
        <Checkbox boxname='includesymbols' boxlabel='Include symbols'/>

        <Checkbox boxname='includelowercase' boxlabel='Lowercase'/>
        <Checkbox boxname='includeuppercase' boxlabel='Uppercase'/>
      </div>


      <PasswordLength />

      <PasswordOutput />

      <GenerateButton />

    </div>
  );
}

export default App;
