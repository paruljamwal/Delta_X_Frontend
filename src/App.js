
import { Navbar } from 'react-bootstrap';
import './App.css';
import NavBar from './Components/NavBar';
import Songs from './Pages/Songs';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Songs/>
    </div>
  );
}

export default App;
