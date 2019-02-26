import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {Link,withRouter} from 'react-router-dom'
import todoFields from './Fields'
import {connect} from 'react-redux'
import * as actions from '../actions'


class CreateTodo extends Component{
    renderFeilds(){
        return(
            <div>
            <div className="row">
                    <Field type="text" name="title" component={todoFields} label="Title"/>
                </div>
                <div className="row">
                    <Field type="text" name="description" component={todoFields} label="Description"/>
                </div>
            </div>
        )
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.props.handleSubmit((values)=>this.props.submitTodo(values,this.props.history))}>
                    {this.renderFeilds()}
                <Link to="/home" className='black btn-flat white-text'>Cancel</Link>
                <button type='submit' className="btn-flat black-text right yellow darken-3"> save
                <i className='material-icons right'>save</i>
                </button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form:"todoForm"
})(connect(null, actions)(withRouter(CreateTodo)))