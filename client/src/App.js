import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Views/Landing/Landing';
import Home from './Components/Home/Home'
import Detail from './Components/Views/Details/Detail';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path ='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Detail' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
