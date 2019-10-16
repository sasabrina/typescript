import React from 'react';
import logo from './logo.svg';
import './App.css';

// const Hello = ({name}: {name: string}) =>{
//   return <div>Hello {name}</div>
// }

// const Hello = (props: {name: string}) => {
//   return <div>Holi {props.name}</div>
// }

interface Ihello{
  text?: string; 
}
const Hello = ({text}: Ihello) =>{
  return <div>Hello {text}</div>
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Hello text="World from react and typescript 🎉"/>
        
      </header>
    </div>
  );
}

export default App;
