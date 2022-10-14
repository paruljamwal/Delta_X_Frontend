import axios from "axios"
import { SONGFAIL, SONGLOADING, SONGSUCCESS } from "./actionType"


export const songLoading=()=>{
    return{
        type: SONGLOADING ,    
    }
}


 export const songSucces=(payload)=>{
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



export const GetSingleSong=()=>(dispatch)=>{
    // console.log(payload,"p")
    dispatch(songLoading());
    axios(`https://deltaxmusic-api.herokuapp.com/song/6344549600cfa5189a59a9c4`)
    .then((res)=>dispatch(songSucces(res.data)))
    .then((err)=>dispatch(songFail(err)))
}




export const GetSong=()=>(dispatch)=>{
    dispatch(songLoading());
    axios("https://deltaxmusic-api.herokuapp.com/song")
    .then((res)=>dispatch(songSucces(res.data)))
    .then((err)=>dispatch(songFail(err)))
}




export const AddSongs=(payload)=>(dispatch)=>{
    dispatch(songLoading());
    axios.post("https://deltaxmusic-api.herokuapp.com/song",payload)
    .then((res)=>dispatch(songSucces(res.data)))
    .then((err)=>dispatch(songFail(err)))
}