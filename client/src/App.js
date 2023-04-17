import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Views/Landing/Landing';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path ='/' element={<Landing/>}/>
        <Route pth='/Home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
