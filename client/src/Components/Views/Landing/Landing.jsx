import Style from './Landing.module.css'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className={Style.img}>
      <div className={Style.container}>
        <Link to='/Home'>
          <button className={Style.button}> <h3 className={Style.h3}>BIENVENIDO</h3></button>
        </Link>

      </div>
    </div>
  )
}
export default Landing