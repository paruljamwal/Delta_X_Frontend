
import { Navbar } from 'react-bootstrap';
import './App.css';
import NavBar from './Components/NavBar';
import AddSong from './Pages/AddSong';
import Songs from './Pages/Songs';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Songs/>
     <AddSong/>
    </div>
  );
}

export default App;
