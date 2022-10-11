import { SONGFAIL, SONGLOADING, SONGSUCCESS } from "./actionType"


const songLoading=()=>{
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
    axios("")
    .then((res)=>dispatch(songSucces(payload)))
    .then((err)=>dispatch(songFail(err)))
}




export const AddSong=(payload)=>(dispatch)=>{
    dispatch(songLoading());
    axios.post("",payload)
    .then((res)=>dispatch(songSucces(payload)))
    .then((err)=>dispatch(songFail(err)))
}