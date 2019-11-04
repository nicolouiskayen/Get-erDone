const INITIAL_STATE = {
    counter: 0
};

export default function(state = INITIAL_STATE, action){
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        default: 
            return state;
    }
};
