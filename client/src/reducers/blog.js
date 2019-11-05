import { FETCH_BLOGS, FETCH_BLOGS_ERROR } from './../actions/types';

const INITIAL_STATE = {
    blogs: [],
    errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_BLOGS:
            return {...state, blogs: action.payload };
        case FETCH_BLOGS_ERROR:
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
}


