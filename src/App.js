import Card from "./Card";
import CardContainer from "./CardContainer";
import "./App.css";


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

const App = ()=>{
  const nombre = "brenda"

  return (

    <div className="contenedor">

      <h1>Hola {nombre} </h1>
      <CardContainer></CardContainer>
      <CardContainer></CardContainer>

    </div>
  )

}

export default App;
