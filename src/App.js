import React, {Component} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
//import TodoForm from './components/TodoForm'
//import { jsonpeliculas } from './jsonpeliculas.json';


/*class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo(this);
  }

handleAddTodo(todo) {
  this.setState({
    todos: [...this.state.todos, todo]
  })
}

removeTodos(index){
   if (window.confirm('Are you sure you want to delete it?')){
   this.setState({
     todos: this.state.todos.filter((e, i) => {
       return i !== index
     })
   })
 }
}
  render() {
    const todos = this.state.todos.map((todo, i) => {
    return (
      <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><b>{todo.responsible}</b></p>

</div>
</div>




      </div>



      <div className="App"><
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-9"></div>
            <div className="row">
              {todos}
            </div>
          </div>
        </div>

      </div>
    )
  })}*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    var config = {
      method: 'get',
      url: 'http://localhost:2000/api/movies',
      headers: { }
    };

    axios(config)
    .then((response)=>{
      this.setState({
        isLoaded: true,
        items: JSON.parse(JSON.stringify(response.data))
      });
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  }

// s = samll screen
// m = medium screen
// l = large screen
// xl = x2 largue screen



removeTodo(index){

  console.log(index);
   if (window.confirm('Are you sure you want to delete it?')){

     var axios = require('axios');
     var data = '';

   var config = {
     method: 'delete',
     url: 'http://localhost:2000/api/movies/' +  index,
     headers: { },
     data : data
   };

   axios(config)
   .then(function (response) {
     console.log(JSON.stringify(response.data));
   })
   .catch(function (error) {
     console.log(error);
   });

   this.setState({
     todos: this.state.todos.filter((e, i) => {
       return i !== index

     })
   }
 }



  render() {
    const { items } = this.state;
    if (!this.state.isLoaded) {
      return <div>Loading ... </div>;
    } else {
      return(
        <div className="row">
          <div><h1>Peliculas</h1></div>
          {
            items.map((item,i) => {
              return (
                <div className="col s6 m4 l2">
                  <div key={item.id} className="card">
                  <div className="card-image max-img-height">
                    <img src={item.img}  />
                    <span className="card-title">Card Title</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light pink"><i class="material-icons">edit</i>
                        </a>
                        <button
                          className="btn btn danger"
                          onClick={this.removeTodo(item.id)}
                          >
                          Delete
                        </button>

                  </div>
                    <div className="card-content">
                      <span className="card-title">{item.title}</span>
                      <p>Director: {item.director}</p>
                      <span className="chip pink">Año: {item.year}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}



//listOfMovies()
//<listOfMovies limit="2"/>
function Apps() {
  return (
   <div className="App" >
     <header className="App-header">
       <img src={ logo } className="App-logo" alt="logo" / >
         <p>Editar <code>src / App.js </code> y guardar para compartir. </p>
         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Learn React </a>
       </header>

     </div>
   );
 }


export default App;
