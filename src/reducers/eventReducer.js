const eventReducer = (state=[], action) =>{
    switch(action.type){
        case 'ADD_EVENT':{
            console.log("Event Added")
            return [...state, action.payload]
        }
        case 'GOT_DATA':{
            return[...state, action.payload]
        }
        case 'ADD_EVENT_TO_DB':{
            return[...state, action.payload.event]
        }
        case 'GET_ALL_EVENTS':{
            return action.payload;
        }
        case 'DELETE_EVENT':{
            return state.filter(({_id})=>_id !== action.payload)
        }
        case 'ADD_PREFS':{
        let found = state.find(({_id})=>_id == action.payload._id)
        found.prefs.push(action.payload.prefs);
        console.log(found)
        return[...state]
        }
        default:
        return state;
    }
}

export default eventReducer