import { useEffect } from 'react'
import  Style  from './Landing.module.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Landing = () =>{ 
  return (
 <div className={Style.img}>
  <div>
    <Link to='/Home'>
    <button >HOME</button>
    </Link>
    
  </div>
  </div>
)
}
export default Landing