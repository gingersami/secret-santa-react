import axios from 'axios'
import { error } from 'util'

export const addEventToDB = (event) => {
    return (dispatch) => {
        let url = '/events'
        axios.post(url,{event})
        .then(res=>{
            console.log(`db${res}`)
            dispatch({type:'ADD_EVENT_TO_DB',payload:res.data})
        })
        .catch(err =>{
            console.log(`Error on ${err.resonse.status}`)
        })
    }
}

export const getAllEvents=()=>{
    return(dispatch)=>{
        let url='/events'
        axios.get(url)
        .then(res=>{
            dispatch({type:'GET_ALL_EVENTS', payload:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

}

export const deleteEvent =(id)=>{
    return (dispatch)=>{
        let url = `/events/${id}`
        axios.delete(url)
        .then(res=>{
            dispatch({type:'DELETE_EVENT', payload:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const addPrefs =(id, prefs)=>{
    return(dispatch)=>{
        let url =`/event/${id}`
        axios.post(url,prefs)
        .then(res=>{
            console.log(res.data)
            dispatch({type:'ADD_PREFS', payload:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
}