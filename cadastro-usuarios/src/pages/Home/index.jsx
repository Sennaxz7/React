import './style.css'
import Trash from '../../assets/trash.svg'
import { use } from 'react'

function Home() {
  const users = [{
    id: '23232jjjjjj',
    name: 'Mateus',
    age: 19,
    email: 'mateus@gmail.com'
  },
  {
    id: '232323dsdsdsdsa',
    name: 'Senna',
    age: 28,
    email: 'senna@gmail.com'
  }]
  return (

    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuários</h1>

        <input placeholder='Nome' name='nome' type="text" />
        <input placeholder='Idade' name='idade' type="number" />
        <input placeholder='Email' name='email' type="email" />

        <button type='button'>Cadastrar</button>

      </form>
      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash}/>
          </button>
        </div>
      ))}
    </div>


  )
}

export default Home
