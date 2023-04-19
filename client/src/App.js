import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Views/Landing/Landing';
import Home from './Components/Views/Home/Home'
import Detail from './Components/Views/Details/Detail';
import Form from './Components/Views/Form/Form';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Detail/:id' element={<Detail/>}/>
        <Route path='/Form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
