import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Practice from './components/Practice';
import { UserProvider } from './components/useContext';
import Practice2 from './components/Practice2';
import SpreadOperator from './components/SpreadOperator';
import MouseMove from './components/MouseMove';

function App() {
  return (
    <div className="App">
      {/* <Header title="Task Tracker"/> */}
      {/* <UserProvider value="xyz">
        <Practice/>
      </UserProvider> */}
      {/* <Practice2/> */}
      {/* <SpreadOperator/> */}
      <MouseMove/>
      
    </div>
  );
}

export default App;
