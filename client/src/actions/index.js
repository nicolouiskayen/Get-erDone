import * as types from './types';
import axios from 'axios';


export const increment = () => {
    return { type: types.INCREMENT_COUNTER };
};

export const decrement = () => {        
    return { type: types.DECREMENT_COUNTER };
};



export const signup = (formprops, callback) => async dispatch => {
    try {        
        const response = await axios.post('/api/auth/signup', formprops);
        dispatch({ type: types.AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({ type: types.AUTH_ERROR, payload: 'Email is in use' });
    }
}

export const signIn = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('/api/auth/signin', formProps);
        dispatch({ type: types.AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch(e) {
        dispatch({ type: types.AUTH_ERROR, payload: 'Invalid login credentials' });
    }
}

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: types.AUTH_USER,
        payload: ''
    };
}

export const fetchBlogs = () => async dispatch => {
    try {
        const response = await axios.get('/api/blogs');
        dispatch({ type: types.FETCH_BLOGS, payload: response.data });
    } catch(e) {
        dispatch({ type: types.BLOGS_ERROR, payload: 'Something went wrong'});
    }
}


export const createBlog = (blog, callback) => async dispatch => {
    try {
        const response = await axios.post('/api/blog', blog, {
            headers: { authorization: localStorage.getItem('token')}
        });
        
        dispatch({ type: types.CREATE_BLOG });
        callback();
    } catch(e) {
        dispatch({ type: types.BLOGS_ERROR, payload: 'Something went wrong when creating a blog'});
    }
}


