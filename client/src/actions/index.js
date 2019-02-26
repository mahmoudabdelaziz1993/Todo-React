import axios from 'axios';
import {FETCH_USER ,FETCH_TODOS } from './types';
export const fetchUser = ()=>async dispatch =>{
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER,payload:res.data});
};
export const submitTodo = (values,history)=>async dispatch=>{
    const todo = await axios.post('/api/todo',values);
    const res = await axios.get('/api/current_user');
    history.push('/home');
    dispatch({type:FETCH_USER,payload:res.data});
}
export const fetchTodos = ()=>async dispatch=>{
    const res = await axios.get('/api/todo');
    dispatch({type:FETCH_TODOS , payload:res.data});
}
export const checkTodo = (id)=>async dispatch =>{
    await axios.put(`/api/todo/${id}`);
    const res = await axios.get('/api/todo');
    dispatch({type:FETCH_TODOS , payload:res.data});
}