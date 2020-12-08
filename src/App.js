import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
// import FuncComp from './components/FuncComp';

function App() {
  return (
    <div className="App">
      <ClassComp/>
      {
        //<FuncComp/>
      }
    </div>
  );
}

export default App;
