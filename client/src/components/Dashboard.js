import React from 'react'
import {Link} from 'react-router-dom'
import ListTodos from "./ListTodos"
const Dashboard = () => {
    return (
        <div className="container">
            <h2 className="center ">Todos</h2>
            <ListTodos/>
            <div className='fixed-action-btn'>
                <Link to='/Todo/new' className='btn-floating btn-large black '>
                    <i className='large material-icons'> add </i>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard