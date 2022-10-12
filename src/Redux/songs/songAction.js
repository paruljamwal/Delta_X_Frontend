import axios from "axios"
import { SONGFAIL, SONGLOADING, SONGSUCCESS } from "./actionType"


export const songLoading=()=>{
    return{
        type: SONGLOADING ,    
    }
}


const songSucces=(payload)=>{
    return {
        type:SONGSUCCESS ,
        payload
    }
}


const songFail=(payload)=>{
    return{
        type: SONGFAIL,
        payload
    }
}


export const GetSong=(payload)=>(dispatch)=>{
    dispatch(songLoading());
    axios("https://deltaxmusic-api.herokuapp.com/song")
    .then((res)=>dispatch(songSucces(res.data)))
    .then((err)=>dispatch(songFail(err)))
}




export const AddSong=(payload)=>(dispatch)=>{
    dispatch(songLoading());
    axios.post("https://deltaxmusic-api.herokuapp.com/song",payload)
    .then((res)=>dispatch(songSucces(payload)))
    .then((err)=>dispatch(songFail(err)))
}