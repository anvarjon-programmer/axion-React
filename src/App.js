import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Contries } from './components/Contries';
import { Navbar } from './components/Navbar';
import Users from './components/Users';
import { Home } from './components/Home';
import { Card } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/contries' element={ <Contries/>}/>
        <Route path='/card' element={ <Card/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
