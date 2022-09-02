import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Table  from './Component/Table/Table';
import Contact from './Component/Contact/Contact';
import Social from './Component/Social/Social'
import Mission from './Component/Mission/Mission';
import Courses from './Component/Courses/Courses';
import About from './Component/About/About';
import Position from './Component/Position/Position';
import Ambassadors from './Component/Ambassadors/Ambassadors';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
<Navbar/>
<Home/>
<Table/>
<Social/>
<Mission/>
<Courses/>
<About/>
<Position/>
<Ambassadors/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
