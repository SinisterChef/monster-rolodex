import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    name: 'Kyle',
    company: 'Magnetic Mobile'
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}, I work at {this.state.company}.
          </p>
     <button onClick={() => {

      this.setState(
      //Update Function
      (state, props) => {
        return {
          name: 'Poopface',
          company: 'Toliet Town'
        }
      },
      //Callback Function
      //Once i'm finished run this callback
      () => {
        console.log(this.state);
      }
    )
     }}>Change name</button>
        </header>
      </div>
    );
  }

}

export default App;
