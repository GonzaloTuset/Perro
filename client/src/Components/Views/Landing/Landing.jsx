import  Style  from './Landing.module.css'
import {Link} from 'react-router-dom'
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