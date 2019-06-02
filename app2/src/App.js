import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoHeader from './components/Todo/TodoHeader'
import TodoList from './components/Todo/TodoList'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
      todo: '',
      todos:[]
		}
	}

	onChangeTodo = (e) => {
		this.setState({
			todo: e.target.value
		});
  }
  
  onAddToDo =(e) => {
    this.setState({
      todos: [...this.state.todos,this.state.todo]
    });
  }

  onTodoDone = (todo) => {
		this.setState({
			todos: this.state.todos.filter(oldTodo => oldTodo !== todo)
		})
	}

	render() {
		return (
      <div>
        <TodoHeader todo={this.state.todo} onChangeTodo={this.onChangeTodo}
					onAddToDo={this.onAddToDo}/>
        <TodoList todos={this.state.todos} onTodoDone={this.  onTodoDone} />
      </div>
		)
	}
}

export default App