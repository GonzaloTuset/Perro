import CreateDogForm from "../../Form/DogForm"
import NavBar from "../../NavBar/NavBar"
const Form = () => {
  return (
    <div>
    <header>
    <NavBar/>
   </header>
   <h1>Crea tu propio perro </h1>
   <CreateDogForm/>
   </div>
    
  )
}
export default Form