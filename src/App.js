import logo from './logo.svg';
import './App.css';
import Photo from './component/Profile/profilePhoto';
import fullName from './component/Profile/fullName';
import Adresse from './component/Profile/Adresse';

function App() {
  return (
    <div className="App">
      <Photo/>
      <fullName />
      <Adresse />
    </div>
  );
}

export default App;
