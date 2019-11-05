import * as types from './../actions/types';

const INITIAL_STATE = {
    blogs: [],
    errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.FETCH_BLOGS:
            return {...state, blogs: action.payload };
        case types.BLOGS_ERROR:
            return {...state, errorMessage: action.payload };
        case types.CREATE_BLOG:
            return {...state};
        default:
            return state;
    }
}


