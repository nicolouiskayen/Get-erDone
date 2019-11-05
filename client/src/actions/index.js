import { INCREMENT_COUNTER, DECREMENT_COUNTER, AUTH_USER, AUTH_ERROR, FETCH_BLOGS, FETCH_BLOGS_ERROR } from './types';
import axios from 'axios';


export const increment = () => {
    return { type: INCREMENT_COUNTER };
};

export const decrement = () => {        
    return { type: DECREMENT_COUNTER };
};



export const signup = (formprops, callback) => async dispatch => {
    try {        
        const response = await axios.post('/api/auth/signup', formprops);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email is in use' });
    }
}

export const signIn = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('/api/auth/signin', formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
    }
}

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
}

export const fetchBlogs = () => async dispatch => {
    try {
        const response = await axios.get('/api/blogs');
        dispatch({ type: FETCH_BLOGS, payload: response.data });
    } catch(e) {
        dispatch({ type: FETCH_BLOGS_ERROR, payload: 'Something went wrong'});
    }
}



