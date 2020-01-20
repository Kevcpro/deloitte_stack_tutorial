import React, { Component } from 'react'
import Todoitem from './Todoitem';
import propTypes from 'prop-types';

export class Todos extends Component {
    
    render() {
        return this.props.todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete}/>
        ));
    }
}

Todos.propTypes = {
    todos: propTypes.array.isRequired
}

export default Todos
