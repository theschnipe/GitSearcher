import Redux from 'redux';

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));


let initialState  = {
    username: "",
    usergit: {},
    repo: [],
};

const reducer = (state = intitialState, action) => {
    switch(action.type) {
        case 'UPDATE_USERNAME':
        return {
            ...state,
            username: action.username
        }
        break;
        case 'UPDATE_USERPROFILE' :
        return {
            ...state,
            usergit: action.usergit
        }
        break;
        case 'UPDATE_REPO':
        return {
            ...state,
            repo: action.repo
        }
        default:
            return state;
    }
}

export default reducer;