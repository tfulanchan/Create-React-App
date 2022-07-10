import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Do you know me</code>? 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to learn about me
        </a>
        <a href="https://www.runoob.com">这是一个链接</a>
      </header>
    </div>    
  );
}
export default App;
