import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
//import Navigation from './Components/Navigation';

// todos json es una simulación de respuesta de un servicio desde la bd
import { todos } from './todos.json';

// componente de lista de objetos
function ListaDePeliculas(){
  // todos es un array que la función map recorreo como un foreach
  const lista = todos.map((todo, i) => {
    return(
      <div className="col-md-4">
        <div className="card mt-4">
          <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge badge-pill badge-danger">
              {todo.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <p><b>{todo.responsi  ble}</b></p>
          </div>
        </div>
      </div>
    )
  })
  return lista;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }
  render (){
    return(
      <div className="App">
        { /* barra de navegacion */ }
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        { /* seccion donde viene el formulario */ }
        <div className="container">
          <div className="row mt-4">
            <TodoForm/>
          </div>
        </div>
        { /* contenedor de tarjetas */ }
        <div className="container">
          <div className="row mt-4">
            <ListaDePeliculas/>
          </div>
        </div>
        { /* logo de react por defecto */ }
        <img src={ logo } className="App-logo" alt="logo" />
      </div>
    )
  }
}
export default App;




// function App() {
//   constructor() {
//     super();
//     this.state = {
//       todos: todos
//     }
//   }
//   return (
//       <div className="App" >
//         <nav className = "nvbar nvbar-dark bg-dark" >
//           <a href = "" className = "text-white" >
//             //{ this.state.titulo } - {this.state.ntareas}
//             Tasks
//           </a>
//         </nav >
//
//         <Navigation titulo="Mi primera navegacion "/>
//         <Navigation titulo="Mi segunda navegación"/>
//         <header className="App-header">TITULO CON BOOTSTRAP
//           <img src = { logo }className = "App-logo"alt = "logo" / >
//             <p>Navegación</p>
//             <p>Editar <code>src / App.js </code> y guardar para compartir. </p>
//             <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Learn React </a>
//           </header>
//         </div>
//     );
// }

// class App extends Component {
//     render() {
//         return {<
//             div className = "App" >
//             Navegación <
//             /div>
//         };
//     }
// }
