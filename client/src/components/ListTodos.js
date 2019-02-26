import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, checkTodo } from "../actions";
class ListTodos extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }
    renderTodos() {
        return this.props.todos.map(todo => {
            return (
                <div className="card darken-3" key={todo._id}>
                    <div className="card-content">
                        <span className="card-title">{todo.title}</span>
                        <p>{todo.description}</p>

                        <div className='card-action'>
                            <p className="left">Create At : {new Date(todo.completedAt).toLocaleDateString()}</p>
                            <button  className="btn-floating btn-small green right" onClick={() => this.props.checkTodo(todo._id)}>
                                <i className="material-icons"> done_all</i>
                            </button>
                            <button style={{marginRight : '10px'}} className="btn-floating btn-small red right " onClick={() => this.props.checkTodo(todo._id)}>
                                <i className="material-icons">delete</i>
                            </button>
                        </div>

                    </div>
                </div>
            )
        });
    }
    render() {
        return (
            <div className="container center">
                {this.renderTodos()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { todos: state.todos };
}
export default connect(mapStateToProps, { fetchTodos, checkTodo })(ListTodos)