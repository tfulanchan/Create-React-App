import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do you know <code>me</code>? 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to learn about me
        </a>

        let arrys = ['a','b'];
        arrys[2] = 1;
        console.log(arrys);
        let person.age = '27' ;
        let person.name = 'henry';
        let selection = 'name';
        person[selection] = 'henry';
        console.log(person.name);

        function greet(ne) {
          console.log('hi' + personalbar.age)
        }
        
        console.log(square(2));
        greet('chan');


      </header>
    </div>
    
  );
}

export default App;
