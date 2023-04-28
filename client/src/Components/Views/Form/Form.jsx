import CreateDogForm from '../../Form/DogForm'
import NavBar from '../../NavBar/NavBar'
import Style from './Form.module.css'
const Form = () => {
  return (
    <div>
      <header className={Style.header}>
        <NavBar />
      </header>
      <h1> Create your own dog </h1>
      <CreateDogForm />
    </div>

  )
}
export default Form