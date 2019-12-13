import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard'
import Display from './Display'
import styled from 'styled-components'

function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  const Container = styled.div`
    border: 3px solid black
  `

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0)
      setBalls(0)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const ball = () => {
    if (balls === 3) {
      setBalls(0)
      setStrikes(0)
    } else {
      setBalls(balls + 1)
    }
  }
  const foul = () => {
    if (strikes === 2) {
      setStrikes(2)
    } else {
      setStrikes(strikes + 1)
    }
  }
  const hit = () => {
    setStrikes(0)
    setBalls(0)
  }
  return (
    <Container className='container'>
      <Display strikes={strikes} balls={balls}/>
      <Dashboard  ball={ball} strike={strike} foul={foul} hit={hit}/>
    </Container>
  );
}
export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
