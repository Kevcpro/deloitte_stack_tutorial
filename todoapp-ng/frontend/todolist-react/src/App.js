import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import axios from 'axios'

export class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/todolist').then(res => {
      this.setState({ todos: res.data })
    })
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id
    )]})
  }

  addTodo = (title) => {
    var date = new Date().toISOString().slice(0,10);
    axios.post('http://localhost:8000/api/todolist', {
      title,
      completed: false,
      content: "s",
      created: date,
      due_date: date,
      category: 7
    }).then(res => this.setState({ todos: [...this.state.todos, res.data]}))
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>   
          </React.Fragment>
        )}>
        </Route>
        <Route path="/about" component={About}></Route>
        </div>
      </div>
      </Router>
    )
  }
}

export default App
